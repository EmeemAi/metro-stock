/**
 * METROMLSTOCK - BACKEND (GOOGLE APPS SCRIPT)
 * Versión: Option A (Unified Vencimientos Sheet CRM)
 */

const SHEET_NAME = "Instrumentos"; 
const VENCIMIENTOS_SHEET_NAME = "Vencimientos";
const EXTERNAL_SHEET_ID = '19GcirGCoizgDamNVElvhDOfZzOOM3vm6frrL0Jdd2-I';
const EXTERNAL_SHEET_NAME = 'Hoja 1';

// Fase 8: Configuración de Certificados y Mail
const ROOT_FOLDER_ID = '1S_3V-SBHTydCq0r54CKSrkSPJJDjrrXS';
const EMAIL_SUBJECT = 'Envío de Certificado de Calibración - CR MEDICION';
const EMAIL_BODY_TEMPLATE = 'Estimado/a {{contacto}},\n\nAdjunto al presente correo encontrará el certificado de calibración solicitado, correspondiente al código {{certificado}} para su equipo ({{instrumento}}). Agradecemos confirmar la correcta recepción de este mensaje.\n\nLe informamos que somos proveedores de instrumentos de medición y certificamos. Puede consultarnos de manera directa si:\n* Tiene otros instrumentos para certificar: Realizamos la calibración y emisión de certificados para todo su equipamiento.\n* Quiere consultar por equipo nuevo: Lo asesoramos y proveemos en la adquisición de nuevo instrumental.\n\nPara cualquier consulta técnica o cotización, puede responder a este correo o escribirnos vía WhatsApp al +54 11 2863-4493.\n\nQuedamos a su entera disposición.\n\nSaludos cordiales,\n\nDarío Del Real\nCR MEDICION | SchwyzLab Laboratorio de Metrología\nPerú 1297 - CABA - Argentina\nTel.: +54 11 4361-3499 / 3680\nWeb: www.todomedicion.com';

const REMINDER_SUBJECT = 'Aviso de Próximo Vencimiento - CR MEDICION';
const REMINDER_BODY_TEMPLATE = 'Estimado/a {{contacto}},\n\nSegún nuestro sistema, el certificado de calibración de su equipo ({{instrumento}}, Certificado Nº: {{certificado}}) se encuentra próximo a vencer el día {{fecha_vencimiento}}.\n\nPara reprogramar su recalibración y mantener su equipo al día, por favor póngase en contacto con nosotros.\n\nPuede responder a este correo o escribirnos vía WhatsApp al +54 11 2863-4493.\n\nQuedamos a su entera disposición.\n\nSaludos cordiales,\n\nDarío Del Real\nCR MEDICION | SchwyzLab Laboratorio de Metrología\nPerú 1297 - CABA - Argentina\nTel.: +54 11 4361-3499 / 3680\nWeb: www.todomedicion.com';

function doGet(e) {
  var action = e.parameter.action;
  
  // 1. OBTENER DATOS (get)
  if (action == 'get') {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) return responseJSON({ error: "Hoja no encontrada." });
    
    var data = sheet.getDataRange().getValues();
    var result = [];
    
    for (var i = 1; i < data.length; i++) {
        var row = data[i];
        if (!row[0] || row[0] == '') continue;

        var puntos = [];
        try {
            if (row[9] && row[9] != "") puntos = JSON.parse(row[9]);
        } catch (err) { }

        var patrones = [];
        try {
            var patStr = row[10] ? String(row[10]).trim() : '';
            if (patStr !== '') {
                patrones = JSON.parse(patStr);
            }
        } catch (err) { 
            if (row[10]) {
                patrones = String(row[10]).split(',').map(function(s) { return s.trim(); });
            }
        }

        result.push({
            id: String(row[0]),
            instrumento: String(row[1]),
            marca: String(row[2]),
            modelo: String(row[3]),
            serie: String(row[4]),
            certificado: String(row[5]),
            estado: row[6] ? String(row[6]).toUpperCase() : 'DISPONIBLE',
            fecha_calibracion: formatDateIfDate(row[7]),
            cliente: String(row[8]),
            puntos: JSON.stringify(puntos),
            patrones: JSON.stringify(patrones),
            discontinuado: row[11] ? String(row[11]) : ''
        });
    }

    // Solicitudes Externas
    var solicitudes = [];
    try {
        var extSS = SpreadsheetApp.openById(EXTERNAL_SHEET_ID);
        var extSheet = extSS.getSheetByName(EXTERNAL_SHEET_NAME);
        if (extSheet) {
            var extData = extSheet.getDataRange().getValues();
            for (var j = 1; j < extData.length; j++) {
                var sRow = extData[j];
                if (!sRow[1] || sRow[1] == '') continue;
                solicitudes.push({
                    id: "sol_row_" + (j + 1),
                    row_index: (j + 1),
                    timestamp: formatDateIfDate(sRow[0]),
                    empresa: String(sRow[1]),
                    contacto: String(sRow[2]),
                    email: String(sRow[3]),
                    certificado: String(sRow[4]),
                    estado: String(sRow[5] || '').toLowerCase()
                });
            }
        }
    } catch(err) { }

    // Vencimientos Consolidados (Opción A)
    var vencimientos = [];
    try {
        var vencSheet = ss.getSheetByName(VENCIMIENTOS_SHEET_NAME);
        if (vencSheet) {
            var vencData = vencSheet.getDataRange().getValues();
            for (var k = 1; k < vencData.length; k++) {
                var vRow = vencData[k];
                if (!vRow[0] || vRow[0] == '') continue;
                vencimientos.push({
                    id: String(vRow[0]),
                    instrumento: String(vRow[1]),
                    certificado: String(vRow[2]),
                    fecha_calibracion: formatDateIfDate(vRow[3]),
                    fecha_vencimiento: formatDateIfDate(vRow[4]),
                    cliente: String(vRow[5]),
                    email: String(vRow[6]),
                    estado_recordatorio: String(vRow[7] || 'pendiente')
                });
            }
        }
    } catch(err) { }

    return responseJSON({ 
        items: result.reverse(),
        solicitudes: solicitudes.reverse(),
        vencimientos: vencimientos.reverse()
    });
  }

  // 2. VERIFICAR ARCHIVO (check_file)
  if (action == 'check_file') {
    var certCode = e.parameter.certificado;
    var fileName = certCode + ".pdf";
    try {
      var root = DriveApp.getFolderById(ROOT_FOLDER_ID);
      var file = findFileInFolderRecursive(root, fileName);
      if (file) {
        return responseJSON({ success: true, found: true, fileName: file.getName() });
      }
    } catch(err) { }
    return responseJSON({ success: false, found: false });
  }

  // 3. DIAGNÓSTICO DE ARCHIVOS EN DRIVE (list_files)
  if (action == 'list_files') {
    try {
      var root = DriveApp.getFolderById(ROOT_FOLDER_ID);
      var filesList = [];
      getAllFilesRecursive(root, filesList);
      return responseJSON({ success: true, files: filesList });
    } catch(err) {
      return responseJSON({ success: false, error: err.toString() });
    }
  }

  // 4. DIAGNÓSTICO DE HOJA DE CÁLCULO (diagnose)
  if (action == 'diagnose') {
    try {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName(SHEET_NAME);
      var sheets = ss.getSheets().map(function(s) { return s.getName(); });
      var lastRow = sheet ? sheet.getLastRow() : 0;
      var dataRangeLastRow = sheet ? sheet.getDataRange().getLastRow() : 0;
      
      var lastFive = [];
      if (sheet && lastRow > 0) {
        var startRow = Math.max(1, lastRow - 9);
        var numRows = Math.min(lastRow, 10);
        var rangeData = sheet.getRange(startRow, 1, numRows, 5).getValues();
        for (var r = 0; r < rangeData.length; r++) {
          lastFive.push({
            rowNum: startRow + r,
            id: rangeData[r][0],
            instrumento: rangeData[r][1],
            marca: rangeData[r][2],
            modelo: rangeData[r][3],
            serie: rangeData[r][4]
          });
        }
      }

      return responseJSON({
        success: true,
        spreadsheetId: ss ? ss.getId() : "null",
        spreadsheetName: ss ? ss.getName() : "null",
        sheets: sheets,
        lastRow: lastRow,
        dataRangeLastRow: dataRangeLastRow,
        lastFive: lastFive
      });
    } catch(err) {
      return responseJSON({ success: false, error: err.toString() });
    }
  }

  return responseJSON({ error: "Acción GET no válida." });
}

function doPost(e) {
  try {
    var content = JSON.parse(e.postData.contents);
    var action = content.action;
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return responseJSON({ success: false, error: "La hoja '" + SHEET_NAME + "' no fue encontrada en la planilla." });
    }

    // 1. ENVIAR EMAIL (send_email)
    if (action == 'send_email') {
      return sendCertificateEmail(content.data);
    }

    // ENVIAR RECORDATORIO (send_reminder_email)
    if (action == 'send_reminder_email') {
      return sendReminderEmail(content.data);
    }

    // 2. CREAR (create)
    if (action == 'create') {
      var d = content.data;
      var rowValues = [
        d.id, d.instrumento, d.marca, d.modelo, d.serie, 
        d.certificado, d.estado, d.fecha_calibracion, d.cliente, d.puntos, d.patrones || '[]', d.discontinuado || ''
      ];
      var lastRow = sheet.getLastRow();
      sheet.getRange(lastRow + 1, 1, 1, rowValues.length).setValues([rowValues]);
      SpreadsheetApp.flush();
      return responseJSON({ success: true });
    }

    // 3. ACTUALIZAR ESTADO (update_status)
    if (action == 'update_status') {
      var d = content.data;
      var rows = sheet.getDataRange().getValues();
      for (var i = 1; i < rows.length; i++) {
        if (rows[i][0] == d.id) {
          sheet.getRange(i + 1, 7).setValue(d.estado);
          if (d.cliente !== undefined) sheet.getRange(i + 1, 9).setValue(d.cliente);
          if (d.certificado !== undefined) sheet.getRange(i + 1, 6).setValue(d.certificado);
          if (d.fecha !== undefined) sheet.getRange(i + 1, 8).setValue(d.fecha);
          if (d.patrones !== undefined) sheet.getRange(i + 1, 11).setValue(d.patrones || '[]');
          if (d.discontinuado !== undefined) sheet.getRange(i + 1, 12).setValue(d.discontinuado || '');
          if (d.isExternalRequest) markExternalRequestAsSent(d.certificado);
          
          // Si el nuevo estado es ENTREGADO, upsert en Vencimientos
          if (d.estado === 'ENTREGADO') {
            var fullItem = {
              instrumento: String(rows[i][1]) + " " + String(rows[i][3]), // Marca + Modelo
              certificado: d.certificado !== undefined ? d.certificado : String(rows[i][5]),
              fecha_calibracion: d.fecha !== undefined ? d.fecha : formatDateIfDate(rows[i][7]),
              cliente: d.cliente !== undefined ? d.cliente : String(rows[i][8])
            };
            upsertVencimiento(d.id, fullItem);
          }
          return responseJSON({ success: true });
        }
      }
      return responseJSON({ success: false, error: "No se encontró el equipo con ID: " + d.id });
    }

    // 4. ACTUALIZACIÓN TOTAL (update_full)
    if (action == 'update_full' || action == 'full_update') {
      var d = content.data;
      var rows = sheet.getDataRange().getValues();
      for (var i = 1; i < rows.length; i++) {
          if (rows[i][0] == d.id) {
              sheet.getRange(i + 1, 1, 1, 12).setValues([[
                  d.id, d.instrumento, d.marca, d.modelo, d.serie,
                  d.certificado, d.estado, d.fecha_calibracion, d.cliente, d.puntos, d.patrones || '[]', d.discontinuado || ''
              ]]);
              
              // Si el estado es ENTREGADO, upsert en Vencimientos
              if (d.estado === 'ENTREGADO') {
                upsertVencimiento(d.id, d);
              }
              return responseJSON({ success: true });
          }
      }
      return responseJSON({ success: false, error: "No se encontró el equipo con ID: " + d.id });
    }

    // 5. ELIMINACIÓN EN BLOQUE (delete_bulk)
    if (action == 'delete_bulk') {
      var ids = content.ids; // Array de IDs a eliminar
      var rows = sheet.getDataRange().getValues();
      var count = 0;
      // Recorremos de atrás hacia adelante para no alterar los índices al eliminar filas
      for (var i = rows.length - 1; i >= 1; i--) {
          if (ids.indexOf(String(rows[i][0])) > -1) {
              sheet.deleteRow(i + 1);
              count++;
          }
      }
      return responseJSON({ success: true, deleted: count });
    }

    // MARCAR SOLICITUD COMO ENVIADA (mark_request_sent)
    if (action == 'mark_request_sent') {
      var d = content.data;
      var success = markRequestAsSentByDetails(d.timestamp, d.email, d.certificado, d.status);
      return responseJSON({ success: success });
    }

    return responseJSON({ success: false, error: "Acción POST no válida: " + action });
  } catch (err) {
    return responseJSON({ success: false, error: "Error en servidor Google Sheets: " + err.toString() });
  }
}

// ========== FUNCIONES AUXILIARES ==========

function findFileInFolderRecursive(folder, fileName) {
  var files = folder.getFilesByName(fileName);
  if (files.hasNext()) return files.next();
  
  var subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    var found = findFileInFolderRecursive(subfolders.next(), fileName);
    if (found) return found;
  }
  return null;
}

function sendCertificateEmail(payload) {
  try {
    var root = DriveApp.getFolderById(ROOT_FOLDER_ID);
    var fileName = payload.certificado + ".pdf";
    var file = findFileInFolderRecursive(root, fileName);
    
    if (!file) return responseJSON({ success: false, error: "Archivo de certificado no localizado: " + fileName });

    var finalBody = payload.body || EMAIL_BODY_TEMPLATE
      .replace('{{contacto}}', payload.contacto || payload.empresa)
      .replace('{{instrumento}}', payload.instrumento || 'equipo')
      .replace('{{certificado}}', payload.certificado);

    var attachments = [file.getAs(MimeType.PDF)];
    
    var attached = [];
    var missing = [];
    
    // Buscar y adjuntar certificados de los patrones seleccionados
    if (payload.patrones && payload.patrones.length > 0) {
      for (var p = 0; p < payload.patrones.length; p++) {
        var pat = payload.patrones[p];
        if (pat && pat.id) {
          var patFile = findPatternFile(root, pat.id, pat.cert);
          if (patFile) {
            attachments.push(patFile.getAs(MimeType.PDF));
            attached.push(pat.id);
          } else {
            missing.push(pat.id);
          }
        }
      }
    }

    GmailApp.sendEmail(payload.email, EMAIL_SUBJECT, finalBody, {
      attachments: attachments,
      name: 'CR MEDICION - SchwyzLab',
      cc: 'dario.delreal@todomedicion.com'
    });

    markExternalRequestAsSent(payload.certificado);
    return responseJSON({ success: true, attached: attached, missing: missing });
  } catch (err) {
    return responseJSON({ success: false, error: err.toString() });
  }
}

function sendReminderEmail(payload) {
  try {
    var finalBody = payload.body || REMINDER_BODY_TEMPLATE
      .replace('{{contacto}}', payload.contacto || payload.empresa)
      .replace('{{instrumento}}', payload.instrumento || 'equipo')
      .replace('{{certificado}}', payload.certificado)
      .replace('{{fecha_vencimiento}}', payload.fecha_vencimiento);

    GmailApp.sendEmail(payload.email, REMINDER_SUBJECT, finalBody, {
      name: 'CR MEDICION - SchwyzLab',
      cc: 'dario.delreal@todomedicion.com'
    });

    // Actualizar el estado del recordatorio en la hoja Vencimientos
    try {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName(VENCIMIENTOS_SHEET_NAME);
      if (sheet) {
        var data = sheet.getDataRange().getValues();
        for (var i = 1; i < data.length; i++) {
          if (String(data[i][0]).trim().toUpperCase() === String(payload.id).trim().toUpperCase()) {
            sheet.getRange(i + 1, 8).setValue("Enviado");
            break;
          }
        }
      }
    } catch(errSheet) {}

    return responseJSON({ success: true });
  } catch (err) {
    return responseJSON({ success: false, error: err.toString() });
  }
}

function markExternalRequestAsSent(certCode) {
  try {
    var extSS = SpreadsheetApp.openById(EXTERNAL_SHEET_ID);
    var extSheet = extSS.getSheetByName(EXTERNAL_SHEET_NAME);
    if (!extSheet) return;
    var data = extSheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][4]) == String(certCode)) {
        extSheet.getRange(i + 1, 6).setValue('enviado');
        break;
      }
    }
  } catch(err) {}
}

function markRequestAsSentByDetails(timestamp, email, certificado, status) {
  try {
    var extSS = SpreadsheetApp.openById(EXTERNAL_SHEET_ID);
    var extSheet = extSS.getSheetByName(EXTERNAL_SHEET_NAME);
    if (!extSheet) return false;
    var data = extSheet.getDataRange().getValues();
    
    var searchTime = String(timestamp || '').trim();
    var searchEmail = String(email || '').trim().toLowerCase();
    var searchCert = String(certificado || '').trim().toUpperCase();
    var targetStatus = status || 'enviado';
    
    // Buscar coincidencia exacta por timestamp, email y certificado
    for (var i = 1; i < data.length; i++) {
      var rowTime = formatDateIfDate(data[i][0]);
      var rowEmail = String(data[i][3]).trim().toLowerCase();
      var rowCert = String(data[i][4]).trim().toUpperCase();
      
      if (rowTime === searchTime && rowEmail === searchEmail && rowCert === searchCert) {
        extSheet.getRange(i + 1, 6).setValue(targetStatus);
        return true;
      }
    }
    
    // Fallback: buscar solo por certificado
    for (var i = 1; i < data.length; i++) {
      var rowCert = String(data[i][4]).trim().toUpperCase();
      if (rowCert === searchCert) {
        extSheet.getRange(i + 1, 6).setValue(targetStatus);
        return true;
      }
    }
    return false;
  } catch(err) {
    return false;
  }
}

/**
 * HELPER DE COINCIDENCIA DE CERTIFICADOS (Fuzzy Matching)
 * Permite cruzar certificados incluso si uno tiene prefijo de fecha/magnitud y el otro no.
 * Ejemplo: "202601-TH-15428" coincide con "15428" o "TH-15428".
 */
function certificadosCoinciden(certA, certB) {
  var cleanA = String(certA).trim().toUpperCase();
  var cleanB = String(certB).trim().toUpperCase();
  
  if (cleanA === '' || cleanB === '') return false;
  if (cleanA === cleanB) return true;
  
  // Quitar todos los caracteres no alfanuméricos
  var alphaA = cleanA.replace(/[^A-Z0-9]/g, '');
  var alphaB = cleanB.replace(/[^A-Z0-9]/g, '');
  if (alphaA === alphaB) return true;
  
  // Si uno contiene al otro completo
  if (cleanA.indexOf(cleanB) > -1 || cleanB.indexOf(cleanA) > -1) return true;
  
  // Extraer el identificador numérico final
  var numA = obtenerIdNumericoCertificado(cleanA);
  var numB = obtenerIdNumericoCertificado(cleanB);
  if (numA && numB) {
    var intA = parseInt(numA, 10);
    var intB = parseInt(numB, 10);
    if (!isNaN(intA) && !isNaN(intB) && intA === intB) return true;
  }
  
  return false;
}

function obtenerIdNumericoCertificado(cert) {
  var clean = String(cert).trim().toUpperCase();
  var match = clean.match(/\d+$/);
  return match ? match[0] : clean;
}

function upsertVencimiento(equipoId, itemData) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(VENCIMIENTOS_SHEET_NAME);
    if (!sheet) return;
    
    // Buscar si ya existe el equipo por ID Equipo (Columna A)
    var data = sheet.getDataRange().getValues();
    var foundRow = -1;
    for (var i = 1; i < data.length; i++) {
      if (String(data[i][0]).trim().toUpperCase() === String(equipoId).trim().toUpperCase()) {
        foundRow = i + 1;
        break;
      }
    }
    
    // Calcular Fecha Vencimiento (Fecha Calibración + 1 Año)
    var vencimientoDateStr = '';
    var calibDateStr = '';
    
    if (itemData.fecha_calibracion) {
      calibDateStr = itemData.fecha_calibracion;
      var parts = [];
      var year = 0;
      var monthStr = '';
      var dayStr = '';
      if (calibDateStr.indexOf('-') > -1) {
        parts = calibDateStr.split('-');
        if (parts.length === 3) {
          year = parseInt(parts[0]) + 1;
          monthStr = parts[1];
          dayStr = parts[2];
        }
      } else if (calibDateStr.indexOf('/') > -1) {
        parts = calibDateStr.split('/');
        if (parts.length === 3) {
          year = parseInt(parts[2]) + 1;
          monthStr = parts[1];
          dayStr = parts[0];
        }
      }
      if (year > 0) {
        vencimientoDateStr = year + '-' + monthStr + '-' + dayStr;
      }
    }
    
    // Buscar email en solicitudes si no está especificado
    var email = itemData.email || '';
    var contacto = itemData.cliente || '';
    if ((email == '' || email == '---') && itemData.certificado) {
      try {
        var extSS = SpreadsheetApp.openById(EXTERNAL_SHEET_ID);
        var extSheet = extSS.getSheetByName(EXTERNAL_SHEET_NAME);
        if (extSheet) {
          var extData = extSheet.getDataRange().getValues();
          for (var j = 1; j < extData.length; j++) {
            if (certificadosCoinciden(extData[j][4], itemData.certificado)) {
              email = String(extData[j][3]); // Columna D (Email)
              contacto = String(extData[j][2]) || contacto; // Columna C (Contacto)
              break;
            }
          }
        }
      } catch(e) {}
    }
    
    var rowValues = [
      equipoId,
      itemData.instrumento || '',
      itemData.certificado || '',
      calibDateStr,
      vencimientoDateStr,
      contacto || '',
      email || '',
      itemData.estado_recordatorio || 'pendiente'
    ];
    
    if (foundRow > -1) {
      // Actualizar fila existente (columnas A a H)
      sheet.getRange(foundRow, 1, 1, 8).setValues([rowValues]);
    } else {
      // Añadir nueva fila
      var lastRow = sheet.getLastRow();
      sheet.getRange(lastRow + 1, 1, 1, rowValues.length).setValues([rowValues]);
      SpreadsheetApp.flush();
    }
  } catch(err) {
    Logger.log("Error in upsertVencimiento: " + err.toString());
  }
}

function formatDateIfDate(val) {
  if (val instanceof Date) {
    return Utilities.formatDate(val, Session.getScriptTimeZone(), "yyyy-MM-dd");
  }
  return String(val);
}

function responseJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * MIGRACIÓN Y AUTOMATIZACIÓN DE VENCIMIENTOS HISTÓRICOS (Darío)
 * 
 * Esta función recorre la planilla externa de Solicitudes (donde están los emails),
 * busca el equipo correspondiente en "Instrumentos" por el Nº de Certificado,
 * calcula la fecha de vencimiento (1 año después) y llena la hoja física "Vencimientos".
 * 
 * Puedes ejecutar esta función UNA SOLA VEZ desde el Editor de Google Apps Script 
 * para rellenar de golpe todo el historial de clientes que pidieron certificados por email.
 */
function automatizarVencimientosHistoricos() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetInstrumentos = ss.getSheetByName(SHEET_NAME);
  var sheetVencimientos = ss.getSheetByName(VENCIMIENTOS_SHEET_NAME);
  
  if (!sheetInstrumentos) {
    return "Error: No se encontró la hoja '" + SHEET_NAME + "'";
  }
  if (!sheetVencimientos) {
    return "Error: No se encontró la hoja '" + VENCIMIENTOS_SHEET_NAME + "'. Creala primero en tu planilla.";
  }
  
  // 1. Leer todas las solicitudes externas (donde está el email de los clientes)
  var solicitudes = [];
  try {
    var extSS = SpreadsheetApp.openById(EXTERNAL_SHEET_ID);
    var extSheet = extSS.getSheetByName(EXTERNAL_SHEET_NAME);
    if (extSheet) {
      var extData = extSheet.getDataRange().getValues();
      for (var j = 1; j < extData.length; j++) {
        var sRow = extData[j];
        if (!sRow[3] || sRow[3] == '') continue; // Ignorar si no tiene Email
        solicitudes.push({
          empresa: String(sRow[1]).trim(),
          contacto: String(sRow[2]).trim(),
          email: String(sRow[3]).trim(),
          certificado: String(sRow[4]).trim().toUpperCase()
        });
      }
    }
  } catch(err) {
    return "Error al leer planilla de Solicitudes Externas: " + err.toString();
  }
  
  // 2. Mapear los instrumentos cargados en el inventario por Nº de Certificado (usando la parte numérica al final para máxima compatibilidad)
  var instData = sheetInstrumentos.getDataRange().getValues();
  var instrumentosMap = {};
  for (var i = 1; i < instData.length; i++) {
    var row = instData[i];
    var cert = String(row[5]).trim().toUpperCase();
    if (cert !== '') {
      var numCert = obtenerIdNumericoCertificado(cert);
      instrumentosMap[numCert] = {
        id: String(row[0]),
        instrumento: String(row[1]) + " " + String(row[3]), // Marca + Modelo
        certificado: cert,
        fecha_calibracion: formatDateIfDate(row[7]),
        cliente: String(row[8])
      };
    }
  }
  
  // 3. Cruzar datos y rellenar la planilla de Vencimientos
  var migradosCount = 0;
  for (var k = 0; k < solicitudes.length; k++) {
    var sol = solicitudes[k];
    
    // Buscar si tenemos el equipo con ese certificado en inventario usando el número final
    var numSol = obtenerIdNumericoCertificado(sol.certificado);
    var eq = instrumentosMap[numSol];
    
    var equipoId = eq ? eq.id : 'INST-' + numSol;
    var clienteFinal = sol.empresa || sol.contacto || (eq ? eq.cliente : '');
    
    var fechaCalib = '';
    if (eq && eq.fecha_calibracion && eq.fecha_calibracion !== '' && eq.fecha_calibracion !== '---') {
      fechaCalib = eq.fecha_calibracion;
    } else {
      fechaCalib = extraerFechaCalibracionDeCertificado(sol.certificado);
    }
    
    var nombreInst = '';
    if (eq && eq.instrumento && eq.instrumento !== '') {
      nombreInst = eq.instrumento;
    } else {
      // Extraer prefijo
      var prefijo = 'TH';
      var matchPrefijo = String(sol.certificado).match(/^\d+-([A-Za-z]+)-/);
      if (matchPrefijo) {
        prefijo = matchPrefijo[1];
      }
      nombreInst = obtenerNombreInstrumentoPorPrefijo(prefijo);
    }
    
    var itemData = {
      instrumento: nombreInst,
      certificado: sol.certificado,
      fecha_calibracion: fechaCalib,
      cliente: clienteFinal,
      email: sol.email,
      estado_recordatorio: 'pendiente'
    };
    
    upsertVencimiento(equipoId, itemData);
    migradosCount++;
  }
  
  return "¡Éxito! Se sincronizaron y completaron " + migradosCount + " vencimientos históricos basados en solicitudes por email.";
}

function obtenerNombreInstrumentoPorPrefijo(prefijo) {
  var p = String(prefijo).toUpperCase();
  var map = {
    'TH': 'Termohigrómetro',
    'TE': 'Termómetro',
    'TC': 'Termómetro',
    'IC': 'Termómetro Infrarrojo',
    'CA': 'Calibre',
    'DE': 'Decibelímetro',
    'LX': 'Luxómetro',
    'PI': 'Reloj Comparador',
    'MR': 'Micrómetro',
    'DB': 'Decibelímetro',
    'DC': 'Decibelímetro',
    'DU': 'Durómetro',
    'MG': 'Medidor de Espesor',
    'CR': 'Cronómetro',
    'MU': 'Multímetro',
    'TQ': 'Torquímetro',
    'TG': 'Torquímetro',
    'DN': 'Dinamómetro',
    'AN': 'Anemómetro'
  };
  return map[p] || 'Instrumento';
}

function extraerFechaCalibracionDeCertificado(certificado) {
  var clean = String(certificado).trim().toUpperCase();
  var match = clean.match(/^(\d{4})(\d{2})/); // Busca 4 dígitos de año y 2 de mes al inicio
  if (match) {
    var year = match[1];
    var month = match[2];
    return year + '-' + month + '-15'; // Ej: 2025-07-15
  }
  return '';
}

/**
 * CONFIGURACIÓN DE TRIGGER AUTOMÁTICO
 * Ejecuta esta función UNA VEZ desde el editor para que el sistema
 * se sincronice solo todos los días a la madrugada de forma automática.
 */
function crearTriggerAutomatico() {
  // Eliminar triggers existentes para esta función
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'automatizarVencimientosHistoricos') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  // Crear el nuevo trigger diario (entre las 4 y 5 AM)
  ScriptApp.newTrigger('automatizarVencimientosHistoricos')
    .timeBased()
    .everyDays(1)
    .atHour(4)
    .create();
}

function findPatternFile(root, patId, certNo) {
  if (certNo && certNo !== '' && certNo !== '---') {
    var fileCert = findFileInFolderRecursive(root, certNo + ".pdf");
    if (fileCert) return fileCert;
    
    var fileCertCont = findFileContainingNameRecursive(root, certNo);
    if (fileCertCont) return fileCertCont;
  }
  
  if (patId && patId !== '') {
    var fileId = findFileInFolderRecursive(root, patId + ".pdf");
    if (fileId) return fileId;
    
    var fileIdCont = findFileContainingNameRecursive(root, patId);
    if (fileIdCont) return fileIdCont;
  }
  
  return null;
}

function findFileContainingNameRecursive(folder, substring) {
  var files = folder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    if (file.getName().toUpperCase().indexOf(substring.toUpperCase()) > -1) {
      return file;
    }
  }
  
  var subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    var found = findFileContainingNameRecursive(subfolders.next(), substring);
    if (found) return found;
  }
  return null;
}

function getAllFilesRecursive(folder, filesList) {
  var files = folder.getFiles();
  while (files.hasNext()) {
    var file = files.next();
    filesList.push({
      name: file.getName(),
      id: file.getId(),
      folder: folder.getName(),
      size: file.getSize()
    });
  }
  var subfolders = folder.getFolders();
  while (subfolders.hasNext()) {
    getAllFilesRecursive(subfolders.next(), filesList);
  }
}
