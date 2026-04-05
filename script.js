/**
 * Configuración: 
 * Cuando tengas tu Web App de Google Apps Script publicada, 
 * pega el enlace aquí.
 */
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbzzACLbJLiNwKh9PBkUMi_WZsoXL_WGjsG-5q7KzBpOupXjuXMn3nrDxNs_hAJdJ8jn/exec'; // Ej: 'https://script.google.com/macros/s/AKfycb.../exec'

// ==========================================
// MOCK DATA (Para probar sin Google Sheets)
// ==========================================
let mockDatabase = [
    {
        "id": "334",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCTH",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-20 00:00:00",
        "fecha_calibracion": "2026-03-20 00:00:00",
        "certificado": "202603-TH-15955",
        "cliente": "Cl\u00ednica de Flebolog\u00eda",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"15.7\", \"inst\": \"15.8\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.1\", \"inst\": \"20.1\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.3\", \"inst\": \"25.5\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"41\", \"inst\": \"43.2\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"52\", \"inst\": \"51\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"64.8\", \"inst\": \"62\"}]"
    },
    {
        "id": "53",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "WT100A",
        "serie": "H24237687",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-19 00:00:00",
        "fecha_calibracion": "2026-03-19 00:00:00",
        "certificado": "202603-MU-15943",
        "cliente": "Segproc Servicios",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Dimensional\", \"unidad\": \"mm\", \"ref\": \"6\", \"inst\": \"6.05\"}, {\"pt\": \"PT2\", \"variable\": \"Dimensional\", \"unidad\": \"mm\", \"ref\": \"10\", \"inst\": \"10.05\"}, {\"pt\": \"PT3\", \"variable\": \"Dimensional\", \"unidad\": \"mm\", \"ref\": \"40\", \"inst\": \"40.05\"}, {\"pt\": \"PT4\", \"variable\": \"Dimensional\", \"unidad\": \"mm\", \"ref\": \"60\", \"inst\": \"60.08\"}, {\"pt\": \"PT5\", \"variable\": \"Dimensional\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100.4\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "No aplica",
        "serie": "9654300",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-02-02 00:00:00",
        "fecha_calibracion": "2026-02-02 00:00:00",
        "certificado": "202603-TH-15508",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"10\", \"inst\": \"11\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"25\", \"inst\": \"25\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"30\", \"inst\": \"30\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"41.2\", \"inst\": \"41.3\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"56.6\", \"inst\": \"57.1\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"72.1\", \"inst\": \"72.4\"}]"
    },
    {
        "id": "306",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCT2-A",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-10-27 00:00:00",
        "fecha_calibracion": "2025-10-27 00:00:00",
        "certificado": "202603-TE-15875",
        "cliente": "Centro Privado de Cardiolog\u00eda",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"10\", \"inst\": \"10.7\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.5\", \"inst\": \"20.5\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"30.1\", \"inst\": \"30.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"10\", \"inst\": \"10.7\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.5\", \"inst\": \"20.5\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"30.1\", \"inst\": \"30.1\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-06 00:00:00",
        "fecha_calibracion": "2026-03-06 00:00:00",
        "certificado": "202603-LX-15825",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"51\", \"inst\": \"50\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"98\", \"inst\": \"97\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"122\", \"inst\": \"116\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"249\", \"inst\": \"231\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1000\", \"inst\": \"899\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1980\", \"inst\": \"1901\"}]"
    },
    {
        "id": "307",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCT2-A",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-10-27 00:00:00",
        "fecha_calibracion": "2025-10-27 00:00:00",
        "certificado": "202603-TE-15874",
        "cliente": "",
        "puntos": "[]"
    },
    {
        "id": "180",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "8758",
        "serie": "9654296",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-01-26 00:00:00",
        "fecha_calibracion": "2026-01-26 00:00:00",
        "certificado": "202603-TH-15428",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"11.4\", \"inst\": \"11.1\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"19.9\", \"inst\": \"19.9\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"28.7\", \"inst\": \"2026-07-28 00:00:00\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"41.2\", \"inst\": \"38.8\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"56.4\", \"inst\": \"56.3\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"70.5\", \"inst\": \"69.6\"}]"
    },
    {
        "id": "401",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127605",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-07 00:00:00",
        "fecha_calibracion": "2026-03-07 00:00:00",
        "certificado": "202603-DB-15836",
        "cliente": "DC Higiene y Seguridad Laboral",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.5\"}]"
    },
    {
        "id": "407",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-07 00:00:00",
        "fecha_calibracion": "2026-03-07 00:00:00",
        "certificado": "202603-LX-15835",
        "cliente": "DC Higiene y Seguridad Laboral",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Luz\", \"unidad\": \"Lux\", \"ref\": \"53\", \"inst\": \"52\"}, {\"pt\": \"PT2\", \"variable\": \"Luz\", \"unidad\": \"Lux\", \"ref\": \"100\", \"inst\": \"98\"}, {\"pt\": \"PT3\", \"variable\": \"Luz\", \"unidad\": \"Lux\", \"ref\": \"198\", \"inst\": \"189\"}, {\"pt\": \"PT4\", \"variable\": \"Luz\", \"unidad\": \"Lux\", \"ref\": \"254\", \"inst\": \"239\"}, {\"pt\": \"PT5\", \"variable\": \"Luz\", \"unidad\": \"Lux\", \"ref\": \"1002\", \"inst\": \"962\"}, {\"pt\": \"PT6\", \"variable\": \"Luz\", \"unidad\": \"Lux\", \"ref\": \"1825\", \"inst\": \"1801\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127566",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-06 00:00:00",
        "fecha_calibracion": "2026-03-06 00:00:00",
        "certificado": "202603-DE-15827",
        "cliente": "Nicol\u00e1s Mercado",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.5\"}, {\"pt\": \"PT2\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"114.8\", \"inst\": \"114.9\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "62MAX",
        "serie": "67840184MW",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-04 00:00:00",
        "fecha_calibracion": "2026-03-04 00:00:00",
        "certificado": "202603-PI-15809",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"100.1\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"250\", \"inst\": \"248.6\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"500\", \"inst\": \"496.3\"}]"
    },
    {
        "id": "359",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127593",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-02-18 00:00:00",
        "fecha_calibracion": "2026-02-18 00:00:00",
        "certificado": "202603-DE-15652",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.3\"}, {\"pt\": \"PT2\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"114.8\", \"inst\": \"114.6\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-02-27 00:00:00",
        "fecha_calibracion": "2026-02-27 00:00:00",
        "certificado": "202603-LX-15722",
        "cliente": "Braian Davidenko",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Luz\", \"unidad\": \"dB\", \"ref\": \"55\", \"inst\": \"49.5\"}, {\"pt\": \"PT2\", \"variable\": \"Luz\", \"unidad\": \"dB\", \"ref\": \"101\", \"inst\": \"108.5\"}, {\"pt\": \"PT3\", \"variable\": \"Luz\", \"unidad\": \"dB\", \"ref\": \"258\", \"inst\": \"249\"}, {\"pt\": \"PT4\", \"variable\": \"Luz\", \"unidad\": \"dB\", \"ref\": \"192\", \"inst\": \"191.2\"}, {\"pt\": \"PT5\", \"variable\": \"Luz\", \"unidad\": \"dB\", \"ref\": \"946\", \"inst\": \"895\"}, {\"pt\": \"PT6\", \"variable\": \"Luz\", \"unidad\": \"dB\", \"ref\": \"1892\", \"inst\": \"1694\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127570",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-02-18 00:00:00",
        "fecha_calibracion": "2026-02-18 00:00:00",
        "certificado": "202602-DE-15644",
        "cliente": "Sergio",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"114.6\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127563",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-02-18 00:00:00",
        "fecha_calibracion": "2026-02-18 00:00:00",
        "certificado": "202602-DE-15637",
        "cliente": "Consultora DCV",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.3\"}, {\"pt\": \"PT2\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"114.8\", \"inst\": \"114.5\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127567",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-02-18 00:00:00",
        "fecha_calibracion": "2026-02-18 00:00:00",
        "certificado": "202602-DE-15636",
        "cliente": "Ana Luz",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"114.4\", \"inst\": \"114.6\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127690",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-02-14 00:00:00",
        "fecha_calibracion": "2026-02-14 00:00:00",
        "certificado": "202602-DE-15636",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.3\"}, {\"pt\": \"PT2\", \"variable\": \"Ruido\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.6\"}]"
    },
    {
        "id": "422",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-150B",
        "serie": "4090109",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-06 00:00:00",
        "fecha_calibracion": "2026-03-06 00:00:00",
        "certificado": "202602-CA-15902",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"10\", \"inst\": \"10\"}, {\"pt\": \"PT4\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"120\", \"inst\": \"120\"}, {\"pt\": \"PT8\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT9\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Dimesional\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "283",
        "instrumento": "",
        "marca": "No aplica",
        "modelo": "DT-6236B",
        "serie": "S5187848",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-18 00:00:00",
        "fecha_calibracion": "2026-03-18 00:00:00",
        "certificado": "202603-TC-15933",
        "cliente": "Manuel Andino",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"120\", \"inst\": \"120.2\"}, {\"pt\": \"PT2\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"1200\", \"inst\": \"1199\"}, {\"pt\": \"PT4\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"3000\", \"inst\": \"3000\"}, {\"pt\": \"PT5\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"6000\", \"inst\": \"6000\"}, {\"pt\": \"PT6\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"12000\", \"inst\": \"12000\"}, {\"pt\": \"PT7\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"23999\", \"inst\": \"23999\"}, {\"pt\": \"PT8\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"35999\", \"inst\": \"36000\"}, {\"pt\": \"PT9\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"60000\", \"inst\": \"59997\"}, {\"pt\": \"PT10\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"89998\", \"inst\": \"89995\"}, {\"pt\": \"PT11\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"3003\", \"inst\": \"3001\"}, {\"pt\": \"PT12\", \"variable\": \"Velocidad angular\", \"unidad\": \"RPM\", \"ref\": \"6004\", \"inst\": \"6001\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "No aplica",
        "modelo": "P1017-150B",
        "serie": "4090113",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-06 00:00:00",
        "fecha_calibracion": "2026-03-06 00:00:00",
        "certificado": "202603-CA-15823",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"10\", \"inst\": \"10\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"120\", \"inst\": \"120\"}, {\"pt\": \"PT8\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT9\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "315",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-10-31 00:00:00",
        "fecha_calibracion": "2025-10-31 00:00:00",
        "certificado": "202610-TE-15446",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"15.5\", \"inst\": \"15.6\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.2\", \"inst\": \"20.4\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.5\", \"inst\": \"25.4\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"%\", \"unidad\": \"%\", \"ref\": \"59\", \"inst\": \"58\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"%\", \"unidad\": \"%\", \"ref\": \"38.2\", \"inst\": \"36\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"%\", \"unidad\": \"%\", \"ref\": \"70\", \"inst\": \"70\"}]"
    },
    {
        "id": "314",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-01-27 00:00:00",
        "fecha_calibracion": "2026-01-27 00:00:00",
        "certificado": "202610-TE-15445",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"15.5\", \"inst\": \"15.6\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.1\", \"inst\": \"20.2\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.4\", \"inst\": \"25.5\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"59\", \"inst\": \"58\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"38.2\", \"inst\": \"36\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"71\", \"inst\": \"71\"}]"
    },
    {
        "id": "313",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-01-27 00:00:00",
        "fecha_calibracion": "2026-01-27 00:00:00",
        "certificado": "202601-TH-15441",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"15.5\", \"inst\": \"15.4\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.1\", \"inst\": \"20.2\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.4\", \"inst\": \"25.5\"}]"
    },
    {
        "id": "245",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-01-27 00:00:00",
        "fecha_calibracion": "2026-01-27 00:00:00",
        "certificado": "202601-TH-15444",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"15.5\", \"inst\": \"15.4\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.1\", \"inst\": \"20.2\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.4\", \"inst\": \"25.5\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"59\", \"inst\": \"58\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"38.2\", \"inst\": \"36\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"71\", \"inst\": \"71\"}]"
    },
    {
        "id": "338",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127587",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-01-26 00:00:00",
        "fecha_calibracion": "2026-01-26 00:00:00",
        "certificado": "202601-DE-15427",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.5\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"114.5\", \"inst\": \"114.7\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-12-26 00:00:00",
        "fecha_calibracion": "2025-12-26 00:00:00",
        "certificado": "202512-LX-15197",
        "cliente": "Anah\u00ed Harmann",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"51\", \"inst\": \"50\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"101\", \"inst\": \"100\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"192\", \"inst\": \"181\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"250\", \"inst\": \"235\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1002\", \"inst\": \"983\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1860\", \"inst\": \"1796\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SC300",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-01-05 00:00:00",
        "fecha_calibracion": "2026-01-05 00:00:00",
        "certificado": "202601-CR-15236",
        "cliente": "Pablo Alejandro Rasmussen",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"60.03\", \"inst\": \"60.02\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"600.09\", \"inst\": \"600.12\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1200\", \"inst\": \"1200.1\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1800\", \"inst\": \"1800.2\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"3600\", \"inst\": \"3600\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"7200\", \"inst\": \"7200\"}]"
    },
    {
        "id": "327",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "87784",
        "serie": "11011806",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-12-04 00:00:00",
        "fecha_calibracion": "2025-12-04 00:00:00",
        "certificado": "202612-TH-15440",
        "cliente": "Solar Turbines Services of Argentina SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"15.5\", \"inst\": \"15.5\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.1\", \"inst\": \"19.9\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.1\", \"inst\": \"25\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"42.3\", \"inst\": \"42.9\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"56.6\", \"inst\": \"57.7\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"67\", \"inst\": \"69.3\"}]"
    },
    {
        "id": "311",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-01-08 00:00:00",
        "fecha_calibracion": "2026-01-08 00:00:00",
        "certificado": "202601-TH-15293",
        "cliente": "Soporte Hospitalario SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"15.5\", \"inst\": \"15.6\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.1\", \"inst\": \"20.2\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"24.6\", \"inst\": \"24.5\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"59\", \"inst\": \"58\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"38.2\", \"inst\": \"36\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"71\", \"inst\": \"70.6\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCTAC-200",
        "serie": "251021548",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-01-09 00:00:00",
        "fecha_calibracion": "2026-01-09 00:00:00",
        "certificado": "202601-TC-15315",
        "cliente": "HMC Soluciones",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"120\", \"inst\": \"120\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"1200\", \"inst\": \"1200\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"3000\", \"inst\": \"3000\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"6000\", \"inst\": \"6000\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"12000\", \"inst\": \"12000\"}, {\"pt\": \"PT7\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"24000\", \"inst\": \"24000\"}, {\"pt\": \"PT8\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"36000\", \"inst\": \"36000\"}, {\"pt\": \"PT9\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"60000\", \"inst\": \"60000\"}, {\"pt\": \"PT10\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"90000\", \"inst\": \"90000\"}]"
    },
    {
        "id": "404",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127684",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-23 00:00:00",
        "fecha_calibracion": "2026-03-23 00:00:00",
        "certificado": "202503-DE-15990",
        "cliente": "Milton Lefiu",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.5\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"114.8\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Hold Peak",
        "modelo": "5000A",
        "serie": "202400047163",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-23 00:00:00",
        "fecha_calibracion": "2026-03-23 00:00:00",
        "certificado": "202503-LX-15989",
        "cliente": "Milton Lefiu",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"51\", \"inst\": \"50.2\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"102\", \"inst\": \"101.1\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"196\", \"inst\": \"191.3\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"255\", \"inst\": \"248.4\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1040\", \"inst\": \"1017\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1924\", \"inst\": \"1853\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-01-03 00:00:00",
        "fecha_calibracion": "2026-01-03 00:00:00",
        "certificado": "202501-LX-15234",
        "cliente": "Maximiliano Morales",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"54\", \"inst\": \"51\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"101\", \"inst\": \"99\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"185\", \"inst\": \"172\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"250\", \"inst\": \"240\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1010\", \"inst\": \"990\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1900\", \"inst\": \"1820\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "No aplica",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-01-07 00:00:00",
        "fecha_calibracion": "2026-01-07 00:00:00",
        "certificado": "202501-LX-15275",
        "cliente": "Thorbell SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"54\", \"inst\": \"52\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"102\", \"inst\": \"98\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"192\", \"inst\": \"184\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"245\", \"inst\": \"230\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1020\", \"inst\": \"989\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1720\", \"inst\": \"1892\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "",
        "serie": "4704293",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-12-29 00:00:00",
        "fecha_calibracion": "2026-12-29 00:00:00",
        "certificado": "202512-CA-15222",
        "cliente": "Rotoe SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"\"}]"
    },
    {
        "id": "207",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "87884",
        "serie": "10900863",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-12-03 00:00:00",
        "fecha_calibracion": "2025-12-03 00:00:00",
        "certificado": "202512-TH-14987",
        "cliente": "Estudio Rabino",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"16.6\", \"inst\": \"16.8\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.2\", \"inst\": \"20.4\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.6\", \"inst\": \"25.7\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"47.6\", \"inst\": \"47.8\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"55.4\", \"inst\": \"55.6\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"72.3\", \"inst\": \"72.5\"}]"
    },
    {
        "id": "208",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "87784",
        "serie": "10900906",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-17 00:00:00",
        "fecha_calibracion": "2025-11-17 00:00:00",
        "certificado": "202511-TH-14795",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"15.5\", \"inst\": \"15.6\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.1\", \"inst\": \"20\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.5\", \"inst\": \"25.6\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"47.6\", \"inst\": \"47.8\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"55.4\", \"inst\": \"55.6\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"72.3\", \"inst\": \"72.5\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-12-15 00:00:00",
        "fecha_calibracion": "2025-12-15 00:00:00",
        "certificado": "202512-LX-15095",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"52\", \"inst\": \"51\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"98\", \"inst\": \"93.1\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"195\", \"inst\": \"174.5\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"255\", \"inst\": \"244\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1023\", \"inst\": \"962\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1910\", \"inst\": \"1856\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-500",
        "serie": "430402055X",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-02-17 00:00:00",
        "fecha_calibracion": "2025-02-17 00:00:00",
        "certificado": "202512-DN-15114",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"20.02\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"kg\", \"ref\": \"30\", \"inst\": \"30.02\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"kg\", \"ref\": \"50\", \"inst\": \"50.02\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"20.02\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"\", \"unidad\": \"kg\", \"ref\": \"30\", \"inst\": \"30.02\"}]"
    },
    {
        "id": "278",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SC212-3",
        "serie": "20180302981",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-12-01 00:00:00",
        "fecha_calibracion": "2025-12-01 00:00:00",
        "certificado": "202512-DE-14981",
        "cliente": "Consultora Ambiental",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.7\"}]"
    },
    {
        "id": "31",
        "instrumento": "",
        "marca": "BT Meter",
        "modelo": "BT-1500-APP",
        "serie": "202300113502",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-12-04 00:00:00",
        "fecha_calibracion": "2025-12-04 00:00:00",
        "certificado": "202512-PI-14998",
        "cliente": "FSC",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"100.1\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"250\", \"inst\": \"251.7\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"500\", \"inst\": \"506\"}]"
    },
    {
        "id": "2",
        "instrumento": "",
        "marca": "Reed",
        "modelo": "R6200",
        "serie": "231850",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-13 00:00:00",
        "fecha_calibracion": "2025-11-13 00:00:00",
        "certificado": "202511-TH-14940",
        "cliente": "Romero Federico",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"8\", \"inst\": \"8.1\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.2\", \"inst\": \"20.1\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"30.8\", \"inst\": \"30.6\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"41.4\", \"inst\": \"40.8\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"54.3\", \"inst\": \"53.8\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"72.9\", \"inst\": \"73.5\"}]"
    },
    {
        "id": "134",
        "instrumento": "",
        "marca": "Elitech",
        "modelo": "GSP-6",
        "serie": "EFG232102362",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-26 00:00:00",
        "fecha_calibracion": "2025-11-26 00:00:00",
        "certificado": "202511-TH-1429",
        "cliente": "Electromec\u00e1nica y Montajes Patagonia SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"8\", \"inst\": \"7.8\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20\", \"inst\": \"19.8\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"35\", \"inst\": \"34.7\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"37.2\", \"inst\": \"40.5\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"45.5\", \"inst\": \"47.5\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"69.9\", \"inst\": \"67.4\"}]"
    },
    {
        "id": "342",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-03-26 00:00:00",
        "fecha_calibracion": "2026-03-26 00:00:00",
        "certificado": "202603-TH-16032",
        "cliente": "Giubon SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"10.5\", \"inst\": \"10.5\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"16.5\", \"inst\": \"16.5\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.2\", \"inst\": \"20.2\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"37.7\", \"inst\": \"36\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"51.8\", \"inst\": \"50\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"71.2\", \"inst\": \"72\"}]"
    },
    {
        "id": "302",
        "instrumento": "",
        "marca": "Aneng",
        "modelo": "MH13",
        "serie": "1949762",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-26 00:00:00",
        "fecha_calibracion": "2025-11-26 00:00:00",
        "certificado": "202611-MG-14891",
        "cliente": "9 de Julio SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u03a9\", \"ref\": \"10\", \"inst\": \"9.94\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u03a9\", \"ref\": \"20\", \"inst\": \"20.1\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u03a9\", \"ref\": \"40\", \"inst\": \"39.7\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\\u03a9\", \"ref\": \"60\", \"inst\": \"59.6\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\\u03a9\", \"ref\": \"200\", \"inst\": \"202\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-50",
        "serie": "431121100X",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-26 00:00:00",
        "fecha_calibracion": "2025-11-26 00:00:00",
        "certificado": "202611-DN-14932",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"Kgf\", \"ref\": \"0.1\", \"inst\": \"0.098\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"Kgf\", \"ref\": \"1\", \"inst\": \"0.99\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"Kgf\", \"ref\": \"2\", \"inst\": \"1.996\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"Kgf\", \"ref\": \"3\", \"inst\": \"2.995\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"Kgf\", \"ref\": \"5\", \"inst\": \"4.992\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"kgf\", \"ref\": \"0.1\", \"inst\": \"0.097\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"kgf\", \"ref\": \"1\", \"inst\": \"0.996\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"kgf\", \"ref\": \"2\", \"inst\": \"1.996\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"\", \"unidad\": \"kgf\", \"ref\": \"3\", \"inst\": \"2.994\"}]"
    },
    {
        "id": "262",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-150B",
        "serie": "4704297",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-09-09 00:00:00",
        "fecha_calibracion": "2025-09-09 00:00:00",
        "certificado": "202509-CA-14541",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"120\", \"inst\": \"120\"}, {\"pt\": \"PT8\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT9\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "291",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-13 00:00:00",
        "fecha_calibracion": "2025-11-13 00:00:00",
        "certificado": "202511-LX-14972",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"55\", \"inst\": \"52\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"103\", \"inst\": \"96.8\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"194\", \"inst\": \"188.7\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"254\", \"inst\": \"239\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1066\", \"inst\": \"988\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1705\", \"inst\": \"1645\"}]"
    },
    {
        "id": "318",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127661",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-19 00:00:00",
        "fecha_calibracion": "2025-11-19 00:00:00",
        "certificado": "202511-DE-14815",
        "cliente": "Ivana Acevedo",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.5\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127701",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-10-01 00:00:00",
        "fecha_calibracion": "2025-10-01 00:00:00",
        "certificado": "202510-DE-14478",
        "cliente": "Municipalidad de Bella Vista",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "282",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236B",
        "serie": "S 5187846",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-06 00:00:00",
        "fecha_calibracion": "2025-11-06 00:00:00",
        "certificado": "202511-TC-14786",
        "cliente": "Jonatan Garc\u00eda",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"120\", \"inst\": \"119.9\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"1200\", \"inst\": \"1199\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"3000\", \"inst\": \"3000\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"6000\", \"inst\": \"6000\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"12000\", \"inst\": \"12000\"}, {\"pt\": \"PT7\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"23999\", \"inst\": \"23998\"}, {\"pt\": \"PT8\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"35998\", \"inst\": \"35998\"}, {\"pt\": \"PT9\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"60000\", \"inst\": \"59997\"}, {\"pt\": \"PT10\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"600000\", \"inst\": \"60000\"}, {\"pt\": \"PT11\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"89998\", \"inst\": \"89996\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"3003\", \"inst\": \"3001\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"6005\", \"inst\": \"6001\"}]"
    },
    {
        "id": "288",
        "instrumento": "",
        "marca": "Habotest",
        "modelo": "HT607",
        "serie": "H12E-K000562",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-10 00:00:00",
        "fecha_calibracion": "2025-11-10 00:00:00",
        "certificado": "202511-TH-14740",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.2\", \"inst\": \"20.1\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"15.2\", \"inst\": \"15.1\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.2\", \"inst\": \"25.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"41.8\", \"inst\": \"42\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"56.8\", \"inst\": \"57.1\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"72.1\", \"inst\": \"71.7\"}]"
    },
    {
        "id": "289",
        "instrumento": "",
        "marca": "Habotest",
        "modelo": "HT607",
        "serie": "H12E-K000572",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-13 00:00:00",
        "fecha_calibracion": "2025-11-13 00:00:00",
        "certificado": "202511-TH-14772",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"15.1\", \"inst\": \"15.1\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.1\", \"inst\": \"20.1\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.1\", \"inst\": \"25.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"41.6\", \"inst\": \"42.8\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"56.9\", \"inst\": \"57.1\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"72.1\", \"inst\": \"71.7\"}]"
    },
    {
        "id": "261",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-150B",
        "serie": "P2206M1511",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-09-09 00:00:00",
        "fecha_calibracion": "2025-09-09 00:00:00",
        "certificado": "202509-CA-14387",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"120\", \"inst\": \"120\"}, {\"pt\": \"PT8\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT9\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "293",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-10 00:00:00",
        "fecha_calibracion": "2025-11-10 00:00:00",
        "certificado": "202511-LX-14734",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"51\", \"inst\": \"49.8\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"108\", \"inst\": \"104.2\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"198\", \"inst\": \"194.7\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"258\", \"inst\": \"249.5\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1150\", \"inst\": \"1098\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"Lux\", \"ref\": \"1686\", \"inst\": \"1600\"}]"
    },
    {
        "id": "310",
        "instrumento": "",
        "marca": "WT85",
        "modelo": "H24127659",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-10 00:00:00",
        "fecha_calibracion": "2025-11-10 00:00:00",
        "certificado": "202511-DE-14735",
        "cliente": "Prevind - Fuegotecnic",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.7\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Anpuds",
        "modelo": "240100811",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-03 00:00:00",
        "fecha_calibracion": "2025-11-03 00:00:00",
        "certificado": "202511-TQ-14693",
        "cliente": "Cristian Estergaard",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"Nm\", \"ref\": \"101\", \"inst\": \"302\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"Nm\", \"ref\": \"301\", \"inst\": \"504\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"Nm\", \"ref\": \"502\", \"inst\": \"602\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"Nm\", \"ref\": \"602\", \"inst\": \"901\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"Nm\", \"ref\": \"901\", \"inst\": \"\"}]"
    },
    {
        "id": "270",
        "instrumento": "",
        "marca": "Hold Peak",
        "modelo": "HP-5000 APP",
        "serie": "202400047124",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-11-03 00:00:00",
        "fecha_calibracion": "2025-11-03 00:00:00",
        "certificado": "202511-LX-14666",
        "cliente": "Elba Moure",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"52\", \"inst\": \"48.9\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"101\", \"inst\": \"97\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"192\", \"inst\": \"188.5\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"255\", \"inst\": \"247.7\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"1050\", \"inst\": \"999\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"1940\", \"inst\": \"1919\"}]"
    },
    {
        "id": "309",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85",
        "serie": "H24127654",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-10-29 00:00:00",
        "fecha_calibracion": "2025-10-29 00:00:00",
        "certificado": "202511-DE-14699",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.7\"}]"
    },
    {
        "id": "271",
        "instrumento": "",
        "marca": "Hold Peak",
        "modelo": "HP-5000 APP",
        "serie": "202400047123",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-10-23 00:00:00",
        "fecha_calibracion": "2025-10-23 00:00:00",
        "certificado": "202510-LX-14700",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"50\", \"inst\": \"48.7\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"101\", \"inst\": \"98.9\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"189\", \"inst\": \"186.2\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"254\", \"inst\": \"251.2\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"990\", \"inst\": \"931\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"1853\", \"inst\": \"1827\"}]"
    },
    {
        "id": "308",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85",
        "serie": "H24127637",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-10-29 00:00:00",
        "fecha_calibracion": "2025-10-29 00:00:00",
        "certificado": "202510-DE-14676",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.7\"}]"
    },
    {
        "id": "70",
        "instrumento": "",
        "marca": "Danoplus",
        "modelo": "THE-343",
        "serie": "240415301",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-09-05 00:00:00",
        "fecha_calibracion": "2025-09-05 00:00:00",
        "certificado": "202509-DE-14574",
        "cliente": "Ruben Gervasoni",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"99.8\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"125\", \"inst\": \"124.8\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"150\", \"inst\": \"149.8\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"99.7\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"125\", \"inst\": \"124.8\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"150\", \"inst\": \"149.8\"}]"
    },
    {
        "id": "170",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCT2",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-09-12 00:00:00",
        "fecha_calibracion": "2025-09-12 00:00:00",
        "certificado": "202509-TE-14575",
        "cliente": "Laboratorio Veterinario Dr. Barragan",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"0\", \"inst\": \"0.5\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"10\", \"inst\": \"10.2\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"30\", \"inst\": \"30.1\"}]"
    },
    {
        "id": "277",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85",
        "serie": "H24127631",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-10-01 00:00:00",
        "fecha_calibracion": "2025-10-01 00:00:00",
        "certificado": "202510-DE-14456",
        "cliente": "System Solutions",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.6\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "No aplica",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-10-13 00:00:00",
        "fecha_calibracion": "2025-10-13 00:00:00",
        "certificado": "202510-LX-14454",
        "cliente": "System Solutions",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"53\", \"inst\": \"51.9\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"109\", \"inst\": \"108.9\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"255\", \"inst\": \"252\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"191\", \"inst\": \"188.6\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"1020\", \"inst\": \"964\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"1904\", \"inst\": \"1852\"}]"
    },
    {
        "id": "280",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-10-01 00:00:00",
        "fecha_calibracion": "2025-10-01 00:00:00",
        "certificado": "202510-LX-14398",
        "cliente": "Grupo Tresnal",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"57\", \"inst\": \"53.1\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"109\", \"inst\": \"102.2\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"195\", \"inst\": \"190.1\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"250\", \"inst\": \"235\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"1090\", \"inst\": \"989\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"lux\", \"ref\": \"1765\", \"inst\": \"1720\"}]"
    },
    {
        "id": "1",
        "instrumento": "",
        "marca": "Reed",
        "modelo": "R6200",
        "serie": "240041",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-01-26 00:00:00",
        "fecha_calibracion": "2025-01-26 00:00:00",
        "certificado": "202601-TH-240041",
        "cliente": "Sigea SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"8\", \"inst\": \"8.1\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.2\", \"inst\": \"20.2\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"30.5\", \"inst\": \"30.4\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"41.4\", \"inst\": \"42.1\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"54.3\", \"inst\": \"52.9\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"72.9\", \"inst\": \"72\"}]"
    },
    {
        "id": "360",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85",
        "serie": "H24127671",
        "estado": "ENTREGADO",
        "fecha_creacion": "2026-02-27 00:00:00",
        "fecha_calibracion": "2026-02-27 00:00:00",
        "certificado": "202604-DE-15681",
        "cliente": "Sebsti\u00e1n Mayo",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"dB\", \"ref\": \"114.8\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "259",
        "instrumento": "",
        "marca": "WINTACT",
        "modelo": "WT 85 B",
        "serie": "H24127564",
        "estado": "ENTREGADO",
        "fecha_creacion": "8 / 9 / 25",
        "fecha_calibracion": "8 / 9 / 25",
        "certificado": "14312",
        "cliente": "Control SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Decibelios\", \"unidad\": \"[?]\", \"ref\": \"94\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"Decibelios\", \"unidad\": \"[?]\", \"ref\": \"114\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "258",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT 85 B",
        "serie": "H24127601",
        "estado": "ENTREGADO",
        "fecha_creacion": "8 / 9 / 25",
        "fecha_calibracion": "8 / 9 / 25",
        "certificado": "14311",
        "cliente": "Control SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Decibelios\", \"unidad\": \"[?]\", \"ref\": \"94\", \"inst\": \"94.3\"}, {\"pt\": \"PT2\", \"variable\": \"Decibelios\", \"unidad\": \"[?]\", \"ref\": \"114\", \"inst\": \"114.6\"}]"
    },
    {
        "id": "257",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT 85 B",
        "serie": "H24127667",
        "estado": "ENTREGADO",
        "fecha_creacion": "8 / 9 / 25",
        "fecha_calibracion": "8 / 9 / 25",
        "certificado": "14221",
        "cliente": "Mariano Pablo DeFelippe",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Decibelios\", \"unidad\": \"[?]\", \"ref\": \"94\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"Decibelios\", \"unidad\": \"[?]\", \"ref\": \"114\", \"inst\": \"114.6\"}]"
    },
    {
        "id": "253",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "[?]",
        "estado": "ENTREGADO",
        "fecha_creacion": "8 / 9 / 25",
        "fecha_calibracion": "8 / 9 / 25",
        "certificado": "14220",
        "cliente": "Mariano Pablo DeFelippe",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"58\", \"inst\": \"49.1\"}, {\"pt\": \"PT2\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"104\", \"inst\": \"103.2\"}, {\"pt\": \"PT3\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"192\", \"inst\": \"178.2\"}, {\"pt\": \"PT4\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"255\", \"inst\": \"239\"}, {\"pt\": \"PT5\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"1020\", \"inst\": \"984\"}]"
    },
    {
        "id": "10",
        "instrumento": "",
        "marca": "WINTACT",
        "modelo": "WT 85 B",
        "serie": "H24127619",
        "estado": "ENTREGADO",
        "fecha_creacion": "24 / 8 / 25",
        "fecha_calibracion": "24 / 8 / 25",
        "certificado": "202509-DE-14192",
        "cliente": "Porur SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Decibelios\", \"unidad\": \"[?]\", \"ref\": \"94\", \"inst\": \"94.5\"}, {\"pt\": \"PT2\", \"variable\": \"Decibelios\", \"unidad\": \"[?]\", \"ref\": \"114\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "196",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "[?]",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-06-30 00:00:00",
        "fecha_calibracion": "2025-06-30 00:00:00",
        "certificado": "202509 - LX - 14039",
        "cliente": "Bimbo Argentina SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Lux\", \"unidad\": \"[?]\", \"ref\": \"55\", \"inst\": \"52.2\"}, {\"pt\": \"PT2\", \"variable\": \"Lux\", \"unidad\": \"[?]\", \"ref\": \"97\", \"inst\": \"95.4\"}, {\"pt\": \"PT3\", \"variable\": \"Lux\", \"unidad\": \"[?]\", \"ref\": \"190\", \"inst\": \"186.2\"}, {\"pt\": \"PT4\", \"variable\": \"Lux\", \"unidad\": \"[?]\", \"ref\": \"260\", \"inst\": \"242\"}, {\"pt\": \"PT5\", \"variable\": \"Lux\", \"unidad\": \"[?]\", \"ref\": \"1034\", \"inst\": \"965\"}, {\"pt\": \"PT6\", \"variable\": \"Lux\", \"unidad\": \"[?]\", \"ref\": \"1860\", \"inst\": \"1799\"}]"
    },
    {
        "id": "115",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCTH",
        "serie": "-",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-09-13 00:00:00",
        "fecha_calibracion": "2025-09-13 00:00:00",
        "certificado": "202509-TH-11333",
        "cliente": "Metal\u00fargica Linear",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"5.8\", \"inst\": \"5.7\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"22.4\", \"inst\": \"22.6\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"33.9\", \"inst\": \"34.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"44\", \"inst\": \"42\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"55.4\", \"inst\": \"49\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"67.3\", \"inst\": \"63\"}]"
    },
    {
        "id": "209",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "87784",
        "serie": "10900898",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-09-17 00:00:00",
        "fecha_calibracion": "2025-09-17 00:00:00",
        "certificado": "202509-TH-14348",
        "cliente": "Servipet",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"43.6\", \"inst\": \"42.9\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"55.4\", \"inst\": \"55.6\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"72.3\", \"inst\": \"72.5\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"10.1\", \"inst\": \"10.2\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"16.2\", \"inst\": \"16.7\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"21.3\", \"inst\": \"21.4\"}]"
    },
    {
        "id": "266",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-500",
        "serie": "23040251X",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-09-11 00:00:00",
        "fecha_calibracion": "2025-09-11 00:00:00",
        "certificado": "202510-DN-14335",
        "cliente": "Us. ML David D. Mainero",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"20.02\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"30\", \"inst\": \"30.01\"}, {\"pt\": \"PT5\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"50\", \"inst\": \"50.02\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"20.02\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"30\", \"inst\": \"30.02\"}]"
    },
    {
        "id": "147",
        "instrumento": "",
        "marca": "Anpuds",
        "modelo": "[?]",
        "serie": "24081586",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-08-26 00:00:00",
        "fecha_calibracion": "2025-08-26 00:00:00",
        "certificado": "202509-TQ-14067",
        "cliente": "Leonardo Bianchi Servicios",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"100\", \"inst\": \"100.2\"}, {\"pt\": \"PT2\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"251\", \"inst\": \"250.7\"}, {\"pt\": \"PT3\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"501\", \"inst\": \"500.2\"}, {\"pt\": \"PT4\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"701\", \"inst\": \"700.4\"}, {\"pt\": \"PT5\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"901\", \"inst\": \"900.4\"}]"
    },
    {
        "id": "146",
        "instrumento": "",
        "marca": "Anpuds",
        "modelo": "-",
        "serie": "24081602",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-08-26 00:00:00",
        "fecha_calibracion": "2025-08-26 00:00:00",
        "certificado": "202509-TQ-13938",
        "cliente": "Traverso Ernesto",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"100\", \"inst\": \"100.2\"}, {\"pt\": \"PT2\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"251\", \"inst\": \"250.2\"}, {\"pt\": \"PT3\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"500\", \"inst\": \"500.2\"}, {\"pt\": \"PT4\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"701\", \"inst\": \"700.2\"}, {\"pt\": \"PT5\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"901\", \"inst\": \"900.2\"}]"
    },
    {
        "id": "29",
        "instrumento": "",
        "marca": "Etekcity",
        "modelo": "LASERGRIP 774",
        "serie": "243214072936",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-08-22 00:00:00",
        "fecha_calibracion": "2025-08-22 00:00:00",
        "certificado": "13319",
        "cliente": "Alma Sociedad An\u00f3nima",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"250\", \"inst\": \"248.5\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"450\", \"inst\": \"433.2\"}]"
    },
    {
        "id": "214",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-07-28 00:00:00",
        "fecha_calibracion": "2025-07-28 00:00:00",
        "certificado": "13907",
        "cliente": "New Air",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"42.1\", \"inst\": \"41\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"54.2\", \"inst\": \"54\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"72.4\", \"inst\": \"72\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"10.1\", \"inst\": \"10.2\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"16.2\", \"inst\": \"16.3\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"30.1\", \"inst\": \"30.2\"}]"
    },
    {
        "id": "215",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-07-28 00:00:00",
        "fecha_calibracion": "2025-07-28 00:00:00",
        "certificado": "13908",
        "cliente": "New Air",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"42.1\", \"inst\": \"41\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"54.2\", \"inst\": \"54\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"72.4\", \"inst\": \"72\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"10.1\", \"inst\": \"10.2\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"16.2\", \"inst\": \"16.3\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"30.1\", \"inst\": \"30.2\"}]"
    },
    {
        "id": "241",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-08-21 00:00:00",
        "fecha_calibracion": "2025-08-21 00:00:00",
        "certificado": "13851",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"35.4\", \"inst\": \"36\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"42.1\", \"inst\": \"41\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"73.2\", \"inst\": \"71\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"9.8\", \"inst\": \"10.5\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"14.7\", \"inst\": \"15.5\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"33.9\", \"inst\": \"34.5\"}]"
    },
    {
        "id": "206",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "82228",
        "serie": "10900902 / 10900363",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-07-17 00:00:00",
        "fecha_calibracion": "2025-07-17 00:00:00",
        "certificado": "13861",
        "cliente": "Lizazzu e Hijos",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"27.6\", \"inst\": \"27.9\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"52.4\", \"inst\": \"55.6\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"72.3\", \"inst\": \"72.6\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"16.6\", \"inst\": \"16.8\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"20.2\", \"inst\": \"20.4\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"29.6\", \"inst\": \"29.7\"}]"
    },
    {
        "id": "106",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "5322-200mm",
        "serie": "20241110611",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-07-18 00:00:00",
        "fecha_calibracion": "2025-07-18 00:00:00",
        "certificado": "13815",
        "cliente": "De Avila Wooding",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\\u00c1ngulo\", \"unidad\": \"\\u00b0\", \"ref\": \"15.02\", \"inst\": \"15.2\"}, {\"pt\": \"PT2\", \"variable\": \"\\u00c1ngulo\", \"unidad\": \"\\u00b0\", \"ref\": \"32\", \"inst\": \"32\"}, {\"pt\": \"PT3\", \"variable\": \"\\u00c1ngulo\", \"unidad\": \"\\u00b0\", \"ref\": \"44\", \"inst\": \"44\"}, {\"pt\": \"PT4\", \"variable\": \"\\u00c1ngulo\", \"unidad\": \"\\u00b0\", \"ref\": \"59\", \"inst\": \"59\"}, {\"pt\": \"PT5\", \"variable\": \"\\u00c1ngulo\", \"unidad\": \"\\u00b0\", \"ref\": \"74.02\", \"inst\": \"74.02\"}]"
    },
    {
        "id": "52",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-200B",
        "serie": "P2206M1656",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-08-11 00:00:00",
        "fecha_calibracion": "2025-08-11 00:00:00",
        "certificado": "13816",
        "cliente": "De Avila Wooding",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT8\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT9\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "205",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-500",
        "serie": "4284020608",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-07-31 00:00:00",
        "fecha_calibracion": "2025-07-31 00:00:00",
        "certificado": "13779",
        "cliente": "Sigez SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"20.02\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"30\", \"inst\": \"30.01\"}, {\"pt\": \"PT5\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"50\", \"inst\": \"50.02\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"20.02\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"30\", \"inst\": \"30.01\"}]"
    },
    {
        "id": "66",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "ASQ-70",
        "serie": "43119913",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-07-21 00:00:00",
        "fecha_calibracion": "2025-07-21 00:00:00",
        "certificado": "13697",
        "cliente": "Sendero Custom Shop",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"10\", \"inst\": \"10.1\"}, {\"pt\": \"PT2\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT3\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"50\", \"inst\": \"50.1\"}, {\"pt\": \"PT4\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"60\", \"inst\": \"60\"}, {\"pt\": \"PT5\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"70\", \"inst\": \"70\"}]"
    },
    {
        "id": "137",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-150B",
        "serie": "P2206M1559",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-07-23 00:00:00",
        "fecha_calibracion": "2025-07-23 00:00:00",
        "certificado": "13668",
        "cliente": "S3 SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"120\", \"inst\": \"120\"}, {\"pt\": \"PT8\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT9\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "164",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "69",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-06-23 00:00:00",
        "fecha_calibracion": "2025-06-23 00:00:00",
        "certificado": "13273",
        "cliente": "Celeste Maria Mamani...",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"51\", \"inst\": \"49.6\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"99\", \"inst\": \"97.2\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"190\", \"inst\": \"183.4\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"247\", \"inst\": \"243.2\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1002\", \"inst\": \"961\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1828\", \"inst\": \"1800\"}]"
    },
    {
        "id": "194",
        "instrumento": "",
        "marca": "Soft dB",
        "modelo": "PICCOLO II",
        "serie": "P02202006",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-07-31 00:00:00",
        "fecha_calibracion": "2025-07-31 00:00:00",
        "certificado": "13645",
        "cliente": "Agust\u00edn Arias",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Decibeles\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"Decibeles\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "220",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-07-28 00:00:00",
        "fecha_calibracion": "2025-07-28 00:00:00",
        "certificado": "13611",
        "cliente": "Droguer\u00eda Nexus Medica",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"42.1\", \"inst\": \"41\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"54.2\", \"inst\": \"54\"}, {\"pt\": \"PT3\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"72.4\", \"inst\": \"72\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2026-01-10 00:00:00\", \"inst\": \"2026-02-10 00:00:00\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2026-02-16 00:00:00\", \"inst\": \"2026-03-16 00:00:00\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2026-01-30 00:00:00\", \"inst\": \"30.2\"}]"
    },
    {
        "id": "165",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-07-16 00:00:00",
        "fecha_calibracion": "2025-07-16 00:00:00",
        "certificado": "13563",
        "cliente": "Eduardo Adrian Cano",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"51\", \"inst\": \"50.4\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"100\", \"inst\": \"97.2\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"180\", \"inst\": \"168.9\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"254\", \"inst\": \"239.8\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1020\", \"inst\": \"992\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1803\", \"inst\": \"1762\"}]"
    },
    {
        "id": "5",
        "instrumento": "",
        "marca": "Protmex",
        "modelo": "HT607",
        "serie": "H12E-F094931",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-04-03 00:00:00",
        "fecha_calibracion": "2025-04-03 00:00:00",
        "certificado": "12730",
        "cliente": "ER Medicina Andr\u00e9s Hugo Cristiano",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"53.9\", \"inst\": \"54.4\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"41.2\", \"inst\": \"41.6\"}, {\"pt\": \"PT3\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"72.6\", \"inst\": \"72.5\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2026-03-08 00:00:00\", \"inst\": \"2026-04-08 00:00:00\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2026-06-26 00:00:00\", \"inst\": \"2026-07-26 00:00:00\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"30.2\", \"inst\": \"2026-03-30 00:00:00\"}]"
    },
    {
        "id": "76",
        "instrumento": "",
        "marca": "DT-6236B",
        "modelo": "",
        "serie": "55186809",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "12779",
        "cliente": "Metal\u00fargica Lincar SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"Rpm\", \"ref\": \"120\", \"inst\": \"120.1\"}, {\"pt\": \"PT2\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"Rpm\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"Rpm\", \"ref\": \"1200\", \"inst\": \"1200\"}, {\"pt\": \"PT4\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"Rpm\", \"ref\": \"3000\", \"inst\": \"3002\"}, {\"pt\": \"PT5\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"Rpm\", \"ref\": \"6000\", \"inst\": \"6000\"}, {\"pt\": \"PT6\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"Rpm\", \"ref\": \"9000\", \"inst\": \"9000\"}]"
    },
    {
        "id": "110",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCT-2-A",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-06-11 00:00:00",
        "fecha_calibracion": "2025-06-11 00:00:00",
        "certificado": "13408",
        "cliente": "Omar Ulises Marcho Repetto",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2026-01-02 00:00:00\", \"inst\": \"2\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2026-01-05 00:00:00\", \"inst\": \"5\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2026-01-08 00:00:00\", \"inst\": \"8\"}]"
    },
    {
        "id": "47",
        "instrumento": "",
        "marca": "Etekcity",
        "modelo": "LASERGRIP 1260",
        "serie": "232616032327",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-06-11 00:00:00",
        "fecha_calibracion": "2025-06-11 00:00:00",
        "certificado": "13436",
        "cliente": "Nahir Noara Saucedo",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"101.9\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"250\", \"inst\": \"252.6\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"450\", \"inst\": \"448.2\"}]"
    },
    {
        "id": "41",
        "instrumento": "",
        "marca": "",
        "modelo": "WT2110B",
        "serie": "H2213818",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-01-30 00:00:00",
        "fecha_calibracion": "2025-01-30 00:00:00",
        "certificado": "12370",
        "cliente": "Fabrimac SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Espesor\", \"unidad\": \"\\u00b5m\", \"ref\": \"49\", \"inst\": \"48.5\"}, {\"pt\": \"PT2\", \"variable\": \"Espesor\", \"unidad\": \"\\u00b5m\", \"ref\": \"99.5\", \"inst\": \"99.2\"}, {\"pt\": \"PT3\", \"variable\": \"Espesor\", \"unidad\": \"\\u00b5m\", \"ref\": \"247\", \"inst\": \"245\"}, {\"pt\": \"PT4\", \"variable\": \"Espesor\", \"unidad\": \"\\u00b5m\", \"ref\": \"502\", \"inst\": \"501\"}, {\"pt\": \"PT5\", \"variable\": \"Espesor\", \"unidad\": \"\\u00b5m\", \"ref\": \"998\", \"inst\": \"997\"}]"
    },
    {
        "id": "56",
        "instrumento": "",
        "marca": "",
        "modelo": "Pro 17-300 B",
        "serie": "P2206 M1705",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-15 00:00:00",
        "fecha_calibracion": "2025-05-15 00:00:00",
        "certificado": "13256",
        "cliente": "Bonin Hnos. de Bonin Guillermo Victor",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"10\", \"inst\": \"10\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT8\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"300\", \"inst\": \"300\"}, {\"pt\": \"PT9\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "193",
        "instrumento": "",
        "marca": "Soft dB",
        "modelo": "PICCOLO II",
        "serie": "B0225052007",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-27 00:00:00",
        "fecha_calibracion": "2025-05-27 00:00:00",
        "certificado": "271 / 25",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Sonido\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.5\"}, {\"pt\": \"PT2\", \"variable\": \"Sonido\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "11",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "AZ 87784",
        "serie": "10900885",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-06-03 00:00:00",
        "fecha_calibracion": "2025-06-03 00:00:00",
        "certificado": "13368",
        "cliente": "Fernando Jose Da Carmo",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura 1\", \"unidad\": \"\\u00b0C\", \"ref\": \"37.6\", \"inst\": \"36.2\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura 1\", \"unidad\": \"\\u00b0C\", \"ref\": \"54.4\", \"inst\": \"51.9\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura 1\", \"unidad\": \"\\u00b0C\", \"ref\": \"76.4\", \"inst\": \"73.3\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura 2\", \"unidad\": \"\\u00b0C\", \"ref\": \"9.2\", \"inst\": \"9.1\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura 2\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.4\", \"inst\": \"23.4\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura 2\", \"unidad\": \"\\u00b0C\", \"ref\": \"29.3\", \"inst\": \"29.3\"}]"
    },
    {
        "id": "30",
        "instrumento": "",
        "marca": "Etekcity",
        "modelo": "LASERGRIP 1260",
        "serie": "232616032327",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-03-22 00:00:00",
        "fecha_calibracion": "2025-03-22 00:00:00",
        "certificado": "12662",
        "cliente": "Elisa Greco",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"101.5\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"250\", \"inst\": \"252.6\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"450\", \"inst\": \"450.8\"}]"
    },
    {
        "id": "24",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP 35+",
        "serie": "8",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-02-25 00:00:00",
        "fecha_calibracion": "2025-02-25 00:00:00",
        "certificado": "12556",
        "cliente": "Jose Salvador Nicastro",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"52.2\", \"inst\": \"51\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"44.9\", \"inst\": \"44\"}, {\"pt\": \"PT3\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"74.7\", \"inst\": \"72\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"7.2\", \"inst\": \"7.3\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.9\", \"inst\": \"26.1\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"32.2\", \"inst\": \"31.8\"}]"
    },
    {
        "id": "14",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "4",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-02-28 00:00:00",
        "fecha_calibracion": "2025-02-28 00:00:00",
        "certificado": "12537",
        "cliente": "Alexandra Lizza ML",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminaci\\u00f3n\", \"unidad\": \"Lux\", \"ref\": \"52\", \"inst\": \"49.8\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminaci\\u00f3n\", \"unidad\": \"Lux\", \"ref\": \"108\", \"inst\": \"107.2\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminaci\\u00f3n\", \"unidad\": \"Lux\", \"ref\": \"196\", \"inst\": \"186.7\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminaci\\u00f3n\", \"unidad\": \"Lux\", \"ref\": \"251\", \"inst\": \"243\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminaci\\u00f3n\", \"unidad\": \"Lux\", \"ref\": \"989\", \"inst\": \"979\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminaci\\u00f3n\", \"unidad\": \"Lux\", \"ref\": \"1921\", \"inst\": \"1795\"}]"
    },
    {
        "id": "32",
        "instrumento": "",
        "marca": "Elitech",
        "modelo": "GSP-6",
        "serie": "E46232102364",
        "estado": "ENTREGADO",
        "fecha_creacion": "31 / 3 / 25",
        "fecha_calibracion": "31 / 3 / 25",
        "certificado": "12532",
        "cliente": "FRAGVA SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"8\", \"inst\": \"8\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"25\", \"inst\": \"24.9\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"35\", \"inst\": \"35\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"41.8\", \"inst\": \"43.9\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"55.1\", \"inst\": \"55\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"70\", \"inst\": \"72.3\"}]"
    },
    {
        "id": "28",
        "instrumento": "",
        "marca": "Etekcity",
        "modelo": "LASERGRIP 774",
        "serie": "243217012736",
        "estado": "ENTREGADO",
        "fecha_creacion": "27 / 3 / 25",
        "fecha_calibracion": "27 / 3 / 25",
        "certificado": "12462",
        "cliente": "Alma Sociedad An\u00f3nima",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"101\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"250\", \"inst\": \"248.5\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"450\", \"inst\": \"438.7\"}]"
    },
    {
        "id": "12",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "[?]",
        "estado": "ENTREGADO",
        "fecha_creacion": "12 / 2 / 25",
        "fecha_calibracion": "12 / 2 / 25",
        "certificado": "12381",
        "cliente": "Gerardo Martin Gauna",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"52\", \"inst\": \"52.2\"}, {\"pt\": \"PT2\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"108\", \"inst\": \"106.3\"}, {\"pt\": \"PT3\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"251\", \"inst\": \"250\"}, {\"pt\": \"PT4\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"1006\", \"inst\": \"969\"}, {\"pt\": \"PT5\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"1962\", \"inst\": \"1902\"}]"
    },
    {
        "id": "53",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-500",
        "serie": "430102041X",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-04-14 00:00:00",
        "fecha_calibracion": "2025-04-14 00:00:00",
        "certificado": "12506",
        "cliente": "Algabo SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"2026-05-05 00:00:00\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"2026-05-10 00:00:00\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"15\", \"inst\": \"2026-08-15 00:00:00\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"2026-09-20 00:00:00\"}, {\"pt\": \"PT5\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"50\", \"inst\": \"50.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"2026-05-05 00:00:00\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"2026-05-10 00:00:00\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"15\", \"inst\": \"2026-08-15 00:00:00\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"2026-09-20 00:00:00\"}]"
    },
    {
        "id": "76",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236B",
        "serie": "55186811",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "12782",
        "cliente": "Victor Angel Tomadin",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"120.3\", \"inst\": \"120.3\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"601.2\", \"inst\": \"601.2\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1201\", \"inst\": \"1201\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"3003\", \"inst\": \"3003\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"6001\", \"inst\": \"6001\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"9001\", \"inst\": \"9001\"}]"
    },
    {
        "id": "48",
        "instrumento": "",
        "marca": "Etekcity",
        "modelo": "LASERGRIP 1260",
        "serie": "232616032327",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-01 00:00:00",
        "fecha_calibracion": "2025-05-01 00:00:00",
        "certificado": "12783",
        "cliente": "Ivan Nahuel Barrio",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"101.8\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"250\", \"inst\": \"253.1\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\\u00b0C\", \"ref\": \"450\", \"inst\": \"441.5\"}]"
    },
    {
        "id": "15",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-04-25 00:00:00",
        "fecha_calibracion": "2025-04-25 00:00:00",
        "certificado": "12781",
        "cliente": "Cooperativa de Trabajo Apicola Pampero Limitada ML",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"54\", \"inst\": \"51.7\"}, {\"pt\": \"PT2\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"104\", \"inst\": \"99.8\"}, {\"pt\": \"PT3\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"194\", \"inst\": \"187.3\"}, {\"pt\": \"PT4\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"247\", \"inst\": \"240\"}, {\"pt\": \"PT5\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"969\", \"inst\": \"941\"}, {\"pt\": \"PT6\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"1953\", \"inst\": \"1802\"}]"
    },
    {
        "id": "30",
        "instrumento": "",
        "marca": "BT METER",
        "modelo": "BT-1500-APP",
        "serie": "202300292791",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-04-28 00:00:00",
        "fecha_calibracion": "2025-04-28 00:00:00",
        "certificado": "12791",
        "cliente": "ETASA Argentina SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"102.2\", \"inst\": \"100\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"252.9\", \"inst\": \"250\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"504.4\", \"inst\": \"500\"}]"
    },
    {
        "id": "46",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-500",
        "serie": "430402057X",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-04-24 00:00:00",
        "fecha_calibracion": "2025-04-24 00:00:00",
        "certificado": "12680",
        "cliente": "Vidrio Paso",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"\", \"ref\": \"5\", \"inst\": \"2026-02-05 00:00:00\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"\", \"ref\": \"10\", \"inst\": \"2026-02-10 00:00:00\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"\", \"ref\": \"15\", \"inst\": \"2026-01-15 00:00:00\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"\", \"ref\": \"30\", \"inst\": \"2026-03-30 00:00:00\"}, {\"pt\": \"PT5\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50.04\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"\", \"ref\": \"5\", \"inst\": \"2026-01-05 00:00:00\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"\", \"ref\": \"10\", \"inst\": \"2026-02-10 00:00:00\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"\", \"ref\": \"20\", \"inst\": \"2026-03-20 00:00:00\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"\", \"ref\": \"30\", \"inst\": \"2026-05-30 00:00:00\"}]"
    },
    {
        "id": "77",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236B",
        "serie": "55186805",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "12780",
        "cliente": "Famyca SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"120.3\", \"inst\": \"120.3\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"601.2\", \"inst\": \"601.2\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1201\", \"inst\": \"1201\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"3003\", \"inst\": \"3003\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"6001\", \"inst\": \"6001\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"9001\", \"inst\": \"9001\"}]"
    },
    {
        "id": "141",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236B",
        "serie": "S 5182847",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-26 00:00:00",
        "fecha_calibracion": "2025-05-26 00:00:00",
        "certificado": "13066",
        "cliente": "Neum\u00e1ticos Don Gummi SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"120\", \"inst\": \"119.9\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1200\", \"inst\": \"1200\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"3000\", \"inst\": \"2999\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"6000\", \"inst\": \"5999\"}]"
    },
    {
        "id": "107",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCT 2-A",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-12 00:00:00",
        "fecha_calibracion": "2025-05-12 00:00:00",
        "certificado": "13065",
        "cliente": "Expertia SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2\", \"inst\": \"2.1\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"5\", \"inst\": \"5.1\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"8\", \"inst\": \"8.1\"}]"
    },
    {
        "id": "128",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-27 00:00:00",
        "fecha_calibracion": "2025-05-27 00:00:00",
        "certificado": "13119",
        "cliente": "Javier Gast\u00f3n Saucedo",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"49.2\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"101\", \"inst\": \"95.1\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"193\", \"inst\": \"188.2\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"248\", \"inst\": \"241.1\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1100\", \"inst\": \"998\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1630\", \"inst\": \"1536\"}]"
    },
    {
        "id": "108",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCT 2-A",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-22 00:00:00",
        "fecha_calibracion": "2025-05-22 00:00:00",
        "certificado": "13122",
        "cliente": "Leonardo Andr\u00e9s Fern\u00e1ndez",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2\", \"inst\": \"2.1\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"5\", \"inst\": \"5.1\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"8\", \"inst\": \"8.1\"}]"
    },
    {
        "id": "109",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCT 2-A",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-22 00:00:00",
        "fecha_calibracion": "2025-05-22 00:00:00",
        "certificado": "13123",
        "cliente": "Leonardo Andr\u00e9s Fern\u00e1ndez",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2\", \"inst\": \"2.1\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"5\", \"inst\": \"5.1\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"8\", \"inst\": \"8.1\"}]"
    },
    {
        "id": "16",
        "instrumento": "",
        "marca": "SHAHE",
        "modelo": "AMF-50",
        "serie": "431121110X",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-25 00:00:00",
        "fecha_calibracion": "2025-05-25 00:00:00",
        "certificado": "12504",
        "cliente": "Miguel Angel Santal",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"Kgf\", \"ref\": \"0.5\", \"inst\": \"0.499\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"Kgf\", \"ref\": \"1\", \"inst\": \"0.998\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"Kgf\", \"ref\": \"1.5\", \"inst\": \"1.498\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"Kgf\", \"ref\": \"2\", \"inst\": \"1.998\"}, {\"pt\": \"PT5\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"Kgf\", \"ref\": \"5\", \"inst\": \"4.998\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"Kgf\", \"ref\": \"0.5\", \"inst\": \"0.499\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"Kgf\", \"ref\": \"1\", \"inst\": \"0.998\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"Kgf\", \"ref\": \"1.5\", \"inst\": \"1.498\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"Kgf\", \"ref\": \"2\", \"inst\": \"1.998\"}]"
    },
    {
        "id": "55",
        "instrumento": "",
        "marca": "",
        "modelo": "16017-300B",
        "serie": "P2206M 1698",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-15 00:00:00",
        "fecha_calibracion": "2025-05-15 00:00:00",
        "certificado": "13138",
        "cliente": "Futuro Trading Argentina SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"10\", \"inst\": \"10\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT8\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"300\", \"inst\": \"300.01\"}, {\"pt\": \"PT9\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "116",
        "instrumento": "",
        "marca": "",
        "modelo": "9654706B",
        "serie": "8758",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-13 00:00:00",
        "fecha_calibracion": "2025-05-13 00:00:00",
        "certificado": "13164",
        "cliente": "Claricor Argentinas SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"5.8\", \"inst\": \"5.9\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"22.4\", \"inst\": \"22.6\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"33.2\", \"inst\": \"34.2\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"43.4\", \"inst\": \"41.9\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"68.1\", \"inst\": \"68\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"55.9\", \"inst\": \"54.2\"}]"
    },
    {
        "id": "20",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-25 00:00:00",
        "fecha_calibracion": "2025-05-25 00:00:00",
        "certificado": "13175",
        "cliente": "Juan Carlos Medina",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"32.5\", \"inst\": \"31\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"44.9\", \"inst\": \"42\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"73.8\", \"inst\": \"72\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"7.2\", \"inst\": \"7.2\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"25.9\", \"inst\": \"25.9\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"31.8\", \"inst\": \"31.8\"}]"
    },
    {
        "id": "161",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-06-13 00:00:00",
        "fecha_calibracion": "2025-06-13 00:00:00",
        "certificado": "13176",
        "cliente": "Maria Eugenia Ferra",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"52\", \"inst\": \"49.2\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"100\", \"inst\": \"98.3\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"192\", \"inst\": \"197.5\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"247\", \"inst\": \"242.2\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1000\", \"inst\": \"966\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1730\", \"inst\": \"1686\"}]"
    },
    {
        "id": "69",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-500",
        "serie": "43040247x/48/52x",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-06-03 00:00:00",
        "fecha_calibracion": "2025-06-03 00:00:00",
        "certificado": "13161",
        "cliente": "Revolibra SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"15\", \"inst\": \"15\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"19.99\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"15\", \"inst\": \"15\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"19.99\"}]"
    },
    {
        "id": "69",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-500",
        "serie": "43040247x/48/52",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-06-03 00:00:00",
        "fecha_calibracion": "2025-06-03 00:00:00",
        "certificado": "13158",
        "cliente": "Agimed SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"N.m\", \"ref\": \"5\", \"inst\": \"5.05\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"N.m\", \"ref\": \"10\", \"inst\": \"10.05\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"N.m\", \"ref\": \"15\", \"inst\": \"15.05\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"N.m\", \"ref\": \"20\", \"inst\": \"20.09\"}, {\"pt\": \"PT5\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"N.m\", \"ref\": \"50\", \"inst\": \"50.09\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"N.m\", \"ref\": \"5\", \"inst\": \"5.04\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"N.m\", \"ref\": \"10\", \"inst\": \"10.07\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"N.m\", \"ref\": \"15\", \"inst\": \"15.07\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"N.m\", \"ref\": \"20\", \"inst\": \"20.07\"}]"
    },
    {
        "id": "50",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-200B",
        "serie": "P2206M1592",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-15 00:00:00",
        "fecha_calibracion": "2025-05-15 00:00:00",
        "certificado": "13243",
        "cliente": "Castle SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20.01\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50.01\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80.01\"}, {\"pt\": \"PT6\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT8\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT9\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50.01\"}, {\"pt\": \"PT10\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100.01\"}]"
    },
    {
        "id": "22",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "20460",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-25 00:00:00",
        "fecha_calibracion": "2025-05-25 00:00:00",
        "certificado": "13221",
        "cliente": "Fernando Alberto Laborda",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"32.9\", \"inst\": \"31\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"45\", \"inst\": \"44\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"74.9\", \"inst\": \"72\"}, {\"pt\": \"PT12\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"\", \"inst\": \"Humedad\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"%Hr\", \"unidad\": \"12\", \"ref\": \"7.2\", \"inst\": \"25.9\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"%Hr\", \"unidad\": \"12\", \"ref\": \"25.9\", \"inst\": \"32.11\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"%Hr\", \"unidad\": \"12\", \"ref\": \"32\", \"inst\": \"\"}]"
    },
    {
        "id": "23",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-25 00:00:00",
        "fecha_calibracion": "2025-05-25 00:00:00",
        "certificado": "13227",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"32.9\", \"inst\": \"31\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"44.9\", \"inst\": \"43\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"74.8\", \"inst\": \"72\"}, {\"pt\": \"PT12\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"\", \"inst\": \"Humedad\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"%Hr\", \"unidad\": \"7.2\", \"ref\": \"7.4\", \"inst\": \"25.9\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"%Hr\", \"unidad\": \"7.2\", \"ref\": \"26.1\", \"inst\": \"32.2\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"%Hr\", \"unidad\": \"7.2\", \"ref\": \"31.5\", \"inst\": \"\"}]"
    },
    {
        "id": "162",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-23 00:00:00",
        "fecha_calibracion": "2025-05-23 00:00:00",
        "certificado": "13228",
        "cliente": "Pascual Mois\u00e9s Barrador",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"50\", \"inst\": \"49.2\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"99\", \"inst\": \"95.7\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"191\", \"inst\": \"186.2\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"246\", \"inst\": \"242.3\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1010\", \"inst\": \"972\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1820\", \"inst\": \"173.5\"}]"
    },
    {
        "id": "142",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236B",
        "serie": "55186816",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-06-26 00:00:00",
        "fecha_calibracion": "2025-06-26 00:00:00",
        "certificado": "13509",
        "cliente": "Toxade SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"rpm\", \"ref\": \"120\", \"inst\": \"119.9\"}, {\"pt\": \"PT2\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"rpm\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"rpm\", \"ref\": \"1200\", \"inst\": \"1200\"}, {\"pt\": \"PT4\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"rpm\", \"ref\": \"3000\", \"inst\": \"2999\"}, {\"pt\": \"PT5\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"rpm\", \"ref\": \"6000\", \"inst\": \"5999\"}]"
    },
    {
        "id": "84",
        "instrumento": "",
        "marca": "FLUKE",
        "modelo": "107",
        "serie": "64821633WS",
        "estado": "ENTREGADO",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "13174",
        "cliente": "Marcelo Alejandro Valverde",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tensi\\u00f3n Continua\", \"unidad\": \"V\", \"ref\": \"0.5395\", \"inst\": \"0.5395\"}, {\"pt\": \"PT2\", \"variable\": \"Tensi\\u00f3n Continua\", \"unidad\": \"V\", \"ref\": \"5.388\", \"inst\": \"5.388\"}, {\"pt\": \"PT3\", \"variable\": \"Tensi\\u00f3n Continua\", \"unidad\": \"V\", \"ref\": \"53.94\", \"inst\": \"53.94\"}, {\"pt\": \"PT4\", \"variable\": \"Tensi\\u00f3n Continua\", \"unidad\": \"V\", \"ref\": \"539.5\", \"inst\": \"539.7\"}, {\"pt\": \"PT5\", \"variable\": \"Tensi\\u00f3n Continua\", \"unidad\": \"V\", \"ref\": \"900\", \"inst\": \"900\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Tensi\\u00f3n Alterna\", \"unidad\": \"V\", \"ref\": \"5.388\", \"inst\": \"5.387\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Tensi\\u00f3n Alterna\", \"unidad\": \"V\", \"ref\": \"53.93\", \"inst\": \"53.97\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Tensi\\u00f3n Alterna\", \"unidad\": \"V\", \"ref\": \"539.3\", \"inst\": \"539.8\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Tensi\\u00f3n Alterna\", \"unidad\": \"V\", \"ref\": \"539.1\", \"inst\": \"539.8\"}]"
    },
    {
        "id": "no asignado",
        "instrumento": "",
        "marca": "Soft db",
        "modelo": "PICCOLO II",
        "serie": "P0225600785",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-03-31 00:00:00",
        "fecha_calibracion": "2026-03-31 00:00:00",
        "certificado": "16076",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Nivel Sonoro\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"Nivel Sonoro\", \"unidad\": \"dB\", \"ref\": \"114.8\", \"inst\": \"114.6\"}]"
    },
    {
        "id": "358",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "87784",
        "serie": "11011807",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-03-22 00:00:00",
        "fecha_calibracion": "2026-03-22 00:00:00",
        "certificado": "16037",
        "cliente": "NEA Servicios para empresas",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"11.1\", \"inst\": \"11.2\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.2\", \"inst\": \"20.2\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.6\", \"inst\": \"25.5\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"37.1\", \"inst\": \"38\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"46.9\", \"inst\": \"46.8\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"67.5\", \"inst\": \"68.7\"}]"
    },
    {
        "id": "401",
        "instrumento": "",
        "marca": "Anpuds",
        "modelo": "",
        "serie": "24081456",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-03-30 00:00:00",
        "fecha_calibracion": "2026-03-30 00:00:00",
        "certificado": "16052",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"100.2\", \"inst\": \"100\"}, {\"pt\": \"PT2\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"202.4\", \"inst\": \"200\"}, {\"pt\": \"PT3\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"301.4\", \"inst\": \"300\"}, {\"pt\": \"PT4\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"502.4\", \"inst\": \"500\"}, {\"pt\": \"PT5\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"602.6\", \"inst\": \"600\"}]"
    },
    {
        "id": "284",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236B",
        "serie": "[?]",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-03-26 00:00:00",
        "fecha_calibracion": "2026-03-26 00:00:00",
        "certificado": "16031",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"120\", \"inst\": \"120\"}, {\"pt\": \"PT2\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"600\", \"inst\": \"599.9\"}, {\"pt\": \"PT3\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"1200\", \"inst\": \"1200\"}, {\"pt\": \"PT4\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"3000\", \"inst\": \"2999\"}, {\"pt\": \"PT5\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"6000\", \"inst\": \"5999\"}, {\"pt\": \"PT6\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"12000\", \"inst\": \"11999\"}, {\"pt\": \"PT7\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"23999\", \"inst\": \"23999\"}, {\"pt\": \"PT8\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"35999\", \"inst\": \"35998\"}, {\"pt\": \"PT9\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"60000\", \"inst\": \"59997\"}, {\"pt\": \"PT10\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"89998\", \"inst\": \"89996\"}, {\"pt\": \"PT11\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"3004\", \"inst\": \"3001\"}, {\"pt\": \"PT12\", \"variable\": \"Rotaci\\u00f3n\", \"unidad\": \"RPM\", \"ref\": \"6003\", \"inst\": \"6000\"}]"
    },
    {
        "id": "408",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-03-25 00:00:00",
        "fecha_calibracion": "2026-03-25 00:00:00",
        "certificado": "16015",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"53.1\", \"inst\": \"52\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"100\", \"inst\": \"98\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"196\", \"inst\": \"189\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"252\", \"inst\": \"239\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1002\", \"inst\": \"982\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1923\", \"inst\": \"1801\"}]"
    },
    {
        "id": "402",
        "instrumento": "",
        "marca": "Winset",
        "modelo": "WT85B",
        "serie": "H24127678",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-03-20 00:00:00",
        "fecha_calibracion": "2026-03-20 00:00:00",
        "certificado": "15956",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Nivel Sonoro\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"Nivel Sonoro\", \"unidad\": \"dB\", \"ref\": \"114.8\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "105",
        "instrumento": "",
        "marca": "Etekcity",
        "modelo": "Lasergrip 774",
        "serie": "243217072436",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-03-29 00:00:00",
        "fecha_calibracion": "2025-03-29 00:00:00",
        "certificado": "15954",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"101.2\", \"inst\": \"100\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"248.1\", \"inst\": \"250\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"432.1\", \"inst\": \"450\"}]"
    },
    {
        "id": "344",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "6 / 3 / 2026",
        "fecha_calibracion": "6 / 3 / 2026",
        "certificado": "2026 - TH - 15832",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"37\", \"inst\": \"37\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"51\", \"inst\": \"51\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"72\", \"inst\": \"72\"}]"
    },
    {
        "id": "328",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "87284",
        "serie": "11011329",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-12-04 00:00:00",
        "fecha_calibracion": "2025-12-04 00:00:00",
        "certificado": "15509",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"[?]\", \"ref\": \"42.4\", \"inst\": \"42.9\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"[?]\", \"ref\": \"56.6\", \"inst\": \"57.5\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"[?]\", \"ref\": \"67.0\", \"inst\": \"66.7\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"[?]\", \"ref\": \"2026-05-15 00:00:00\", \"inst\": \"2026-04-15 00:00:00\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"[?]\", \"ref\": \"2026-01-20 00:00:00\", \"inst\": \"2026-09-19 00:00:00\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"[?]\", \"ref\": \"2026-01-25 00:00:00\", \"inst\": \"25.0\"}]"
    },
    {
        "id": "15341",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-500",
        "serie": "430402043X",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-01-14 00:00:00",
        "fecha_calibracion": "2026-01-14 00:00:00",
        "certificado": "2026 - DN - 15341",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"2026-01-05 00:00:00\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"2026-01-10 00:00:00\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"2026-02-20 00:00:00\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"30\", \"inst\": \"30.02\"}, {\"pt\": \"PT5\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"50\", \"inst\": \"50.02\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"2026-01-05 00:00:00\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"2026-01-10 00:00:00\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"2026-02-20 00:00:00\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"30\", \"inst\": \"2026-01-30 00:00:00\"}]"
    },
    {
        "id": "104",
        "instrumento": "",
        "marca": "Etekcity",
        "modelo": "Lasergrip 1260",
        "serie": "232731802334",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-01-09 00:00:00",
        "fecha_calibracion": "2026-01-09 00:00:00",
        "certificado": "15332",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"100.6\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"250\", \"inst\": \"251.0\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"450\", \"inst\": \"444.6\"}]"
    },
    {
        "id": "7",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "Sin identificar",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-01-08 00:00:00",
        "fecha_calibracion": "2026-01-08 00:00:00",
        "certificado": "15296",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Lux\", \"unidad\": \"lx\", \"ref\": \"52\", \"inst\": \"51\"}, {\"pt\": \"PT2\", \"variable\": \"Lux\", \"unidad\": \"lx\", \"ref\": \"101\", \"inst\": \"99\"}, {\"pt\": \"PT3\", \"variable\": \"Lux\", \"unidad\": \"lx\", \"ref\": \"125\", \"inst\": \"124\"}, {\"pt\": \"PT4\", \"variable\": \"Lux\", \"unidad\": \"lx\", \"ref\": \"252\", \"inst\": \"282\"}, {\"pt\": \"PT5\", \"variable\": \"Lux\", \"unidad\": \"lx\", \"ref\": \"999\", \"inst\": \"995\"}, {\"pt\": \"PT6\", \"variable\": \"Lux\", \"unidad\": \"lx\", \"ref\": \"1862\", \"inst\": \"1840\"}]"
    },
    {
        "id": "7",
        "instrumento": "",
        "marca": "BAOSHISHAN",
        "modelo": "",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-02-13 00:00:00",
        "fecha_calibracion": "2025-02-13 00:00:00",
        "certificado": "202512 - DP - 15224",
        "cliente": "CR",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"\\u03bcm\", \"ref\": \"10\", \"inst\": \"10\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"\\u03bcm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"\\u03bcm\", \"ref\": \"30\", \"inst\": \"30\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"\\u03bcm\", \"ref\": \"41\", \"inst\": \"40\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"\\u03bcm\", \"ref\": \"51\", \"inst\": \"50\"}]"
    },
    {
        "id": "179",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "8758",
        "serie": "9654247",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-12-22 00:00:00",
        "fecha_calibracion": "2025-12-22 00:00:00",
        "certificado": "15173",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"41.2\", \"inst\": \"38.9\"}, {\"pt\": \"PT2\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"56.4\", \"inst\": \"56.3\"}, {\"pt\": \"PT3\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"70.9\", \"inst\": \"69.3\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"2026-04-11 00:00:00\", \"inst\": \"2026-01-11 00:00:00\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"2026-01-19 00:00:00\", \"inst\": \"2026-01-19 00:00:00\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"2026-03-28 00:00:00\", \"inst\": \"2026-06-28 00:00:00\"}]"
    },
    {
        "id": "350",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SC117-3",
        "serie": "2308EC485765",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-01-31 00:00:00",
        "fecha_calibracion": "2026-01-31 00:00:00",
        "certificado": "202602 - MR - 15422",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Espesor\", \"unidad\": \"\\u00b5m\", \"ref\": \"50\", \"inst\": \"49.5\"}, {\"pt\": \"PT2\", \"variable\": \"Espesor\", \"unidad\": \"\\u00b5m\", \"ref\": \"124\", \"inst\": \"124\"}, {\"pt\": \"PT3\", \"variable\": \"Espesor\", \"unidad\": \"\\u00b5m\", \"ref\": \"294\", \"inst\": \"292\"}, {\"pt\": \"PT4\", \"variable\": \"Espesor\", \"unidad\": \"\\u00b5m\", \"ref\": \"402\", \"inst\": \"398\"}, {\"pt\": \"PT5\", \"variable\": \"Espesor\", \"unidad\": \"\\u00b5m\", \"ref\": \"753\", \"inst\": \"754\"}]"
    },
    {
        "id": "no asignado",
        "instrumento": "",
        "marca": "Soft db",
        "modelo": "PICCOLO II",
        "serie": "P0225100712",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-12-22 00:00:00",
        "fecha_calibracion": "2025-12-22 00:00:00",
        "certificado": "15151",
        "cliente": "Beltzer",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Ac\\u00fastica\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.0\"}, {\"pt\": \"PT2\", \"variable\": \"Ac\\u00fastica\", \"unidad\": \"dB\", \"ref\": \"114.7\", \"inst\": \"114.3\"}]"
    },
    {
        "id": "324",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127571",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-12-09 00:00:00",
        "fecha_calibracion": "2025-12-09 00:00:00",
        "certificado": "15010",
        "cliente": "[?]",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Ac\\u00fastica\", \"unidad\": \"dB\", \"ref\": \"\", \"inst\": \"94.5\"}, {\"pt\": \"PT2\", \"variable\": \"Ac\\u00fastica\", \"unidad\": \"dB\", \"ref\": \"\", \"inst\": \"114.6\"}]"
    },
    {
        "id": "38",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "62 MAX",
        "serie": "60851713 MV",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-11-04 00:00:00",
        "fecha_calibracion": "2025-11-04 00:00:00",
        "certificado": "15004",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"99.5\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"250\", \"inst\": \"251.2\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"500\", \"inst\": \"500.2\"}]"
    },
    {
        "id": "292",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "[?]",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-12-10 00:00:00",
        "fecha_calibracion": "2025-12-10 00:00:00",
        "certificado": "14983",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"52\", \"inst\": \"50.1\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"105\", \"inst\": \"100.8\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"196\", \"inst\": \"193.4\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"260\", \"inst\": \"253\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1018\", \"inst\": \"981\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1881\", \"inst\": \"1817\"}]"
    },
    {
        "id": "323",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24122599",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-12-03 00:00:00",
        "fecha_calibracion": "2025-12-03 00:00:00",
        "certificado": "14986",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Ac\\u00fastica\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"Ac\\u00fastica\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "319",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT85B",
        "serie": "H24127569",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-11-26 00:00:00",
        "fecha_calibracion": "2025-11-26 00:00:00",
        "certificado": "14979",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Ac\\u00fastica\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.5\"}, {\"pt\": \"PT2\", \"variable\": \"Ac\\u00fastica\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.7\"}]"
    },
    {
        "id": "290",
        "instrumento": "",
        "marca": "Hold Peak",
        "modelo": "HT-607",
        "serie": "H120-100687",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-11-26 00:00:00",
        "fecha_calibracion": "2025-11-26 00:00:00",
        "certificado": "14929",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2026-01-15 00:00:00\", \"inst\": \"2026-01-15 00:00:00\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2026-01-20 00:00:00\", \"inst\": \"2026-01-20 00:00:00\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"2026-02-25 00:00:00\", \"inst\": \"2026-02-25 00:00:00\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%HR\", \"ref\": \"41.5\", \"inst\": \"42.8\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%HR\", \"ref\": \"56.9\", \"inst\": \"57.1\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%HR\", \"ref\": \"71.1\", \"inst\": \"71.7\"}]"
    },
    {
        "id": "263",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-150B",
        "serie": "4704286",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-11-18 00:00:00",
        "fecha_calibracion": "2025-11-18 00:00:00",
        "certificado": "14880",
        "cliente": "Patricio Ezequiel Manin Luchetti",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"2026-01-01 00:00:00\", \"inst\": \"2026-01-01 00:00:00\"}, {\"pt\": \"PT3\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"25\", \"inst\": \"25.0\"}, {\"pt\": \"PT4\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50.0\"}, {\"pt\": \"PT5\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"120\", \"inst\": \"120\"}, {\"pt\": \"PT8\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT9\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Dimensi\\u00f3n\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100.0\"}]"
    },
    {
        "id": "317",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT 85B",
        "serie": "H24127611",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-11-11 00:00:00",
        "fecha_calibracion": "2025-11-11 00:00:00",
        "certificado": "202511-DE-14749",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"94\", \"inst\": \"94.3\"}, {\"pt\": \"PT2\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"114\", \"inst\": \"114.7\"}]"
    },
    {
        "id": "26",
        "instrumento": "",
        "marca": "Elitech",
        "modelo": "RCW-800W",
        "serie": "9048456179 / 4889792699",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-11-25 00:00:00",
        "fecha_calibracion": "2025-11-25 00:00:00",
        "certificado": "202511-TH-14729",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"8.1\", \"inst\": \"8\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.1\", \"inst\": \"25.1\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"35.1\", \"inst\": \"34.6\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"41.7\", \"inst\": \"42.1\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"54.6\", \"inst\": \"54.4\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"72.5\", \"inst\": \"70.4\"}]"
    },
    {
        "id": "181",
        "instrumento": "",
        "marca": "LATNEX",
        "modelo": "LM-50KL",
        "serie": "230700046",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-10-23 00:00:00",
        "fecha_calibracion": "2025-10-23 00:00:00",
        "certificado": "202511-LX-14712",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"50\", \"inst\": \"51\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"107\", \"inst\": \"110\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"199\", \"inst\": \"195\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"254\", \"inst\": \"241\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"981\", \"inst\": \"935\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1623\", \"inst\": \"1582\"}]"
    },
    {
        "id": "296",
        "instrumento": "",
        "marca": "Soft db",
        "modelo": "PICCOLO II",
        "serie": "P0222090907",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-10-22 00:00:00",
        "fecha_calibracion": "2025-10-22 00:00:00",
        "certificado": "202511-DE-14714",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"[?]\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.5\"}, {\"pt\": \"PT2\", \"variable\": \"[?]\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.9\"}]"
    },
    {
        "id": "58",
        "instrumento": "",
        "marca": "Rock Seed",
        "modelo": "S2",
        "serie": "2024033006621",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-10-30 00:00:00",
        "fecha_calibracion": "2025-10-30 00:00:00",
        "certificado": "14705",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Distancia\", \"unidad\": \"M\", \"ref\": \"1000.4\", \"inst\": \"1000.4\"}, {\"pt\": \"PT2\", \"variable\": \"Distancia\", \"unidad\": \"M\", \"ref\": \"3000.2\", \"inst\": \"3000.2\"}, {\"pt\": \"PT3\", \"variable\": \"Distancia\", \"unidad\": \"M\", \"ref\": \"5000.1\", \"inst\": \"5000.1\"}, {\"pt\": \"PT4\", \"variable\": \"Distancia\", \"unidad\": \"M\", \"ref\": \"8000.2\", \"inst\": \"8000.2\"}, {\"pt\": \"PT5\", \"variable\": \"Distancia\", \"unidad\": \"M\", \"ref\": \"10001\", \"inst\": \"10001\"}]"
    },
    {
        "id": "57",
        "instrumento": "",
        "marca": "Rock Seed",
        "modelo": "S2",
        "serie": "2024033006610",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-10-31 00:00:00",
        "fecha_calibracion": "2025-10-31 00:00:00",
        "certificado": "202511-MD-14694",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Distancia\", \"unidad\": \"M\", \"ref\": \"1000.4\", \"inst\": \"1000.4\"}, {\"pt\": \"PT2\", \"variable\": \"Distancia\", \"unidad\": \"M\", \"ref\": \"3000.2\", \"inst\": \"3000.2\"}, {\"pt\": \"PT3\", \"variable\": \"Distancia\", \"unidad\": \"M\", \"ref\": \"5000.1\", \"inst\": \"5000.1\"}, {\"pt\": \"PT4\", \"variable\": \"Distancia\", \"unidad\": \"M\", \"ref\": \"8000.2\", \"inst\": \"8000.2\"}, {\"pt\": \"PT5\", \"variable\": \"Distancia\", \"unidad\": \"M\", \"ref\": \"10001\", \"inst\": \"10001\"}]"
    },
    {
        "id": "250",
        "instrumento": "",
        "marca": "Protmex",
        "modelo": "HT-607",
        "serie": "H12-K000680",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-10-03 00:00:00",
        "fecha_calibracion": "2025-10-03 00:00:00",
        "certificado": "14675",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"56.3\", \"inst\": \"55.9\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"45.2\", \"inst\": \"44\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"33.9\", \"inst\": \"33.2\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"16.7\", \"inst\": \"16.2\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"20.4\", \"inst\": \"20.2\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"25.6\", \"inst\": \"25.4\"}]"
    },
    {
        "id": "39",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "62 MAX",
        "serie": "66851214 MV",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-10-30 00:00:00",
        "fecha_calibracion": "2025-10-30 00:00:00",
        "certificado": "14626",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"100\", \"inst\": \"99.4\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"250\", \"inst\": \"250.4\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"500\", \"inst\": \"499.8\"}]"
    },
    {
        "id": "295",
        "instrumento": "",
        "marca": "Soft db",
        "modelo": "PICCOLO II",
        "serie": "P0222090907",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-10-28 00:00:00",
        "fecha_calibracion": "2025-10-28 00:00:00",
        "certificado": "14601",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"[?]\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.5\"}, {\"pt\": \"PT2\", \"variable\": \"[?]\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.6\"}]"
    },
    {
        "id": "281",
        "instrumento": "",
        "marca": "[?]",
        "modelo": "DT-6236B",
        "serie": "S5186814",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-10-06 00:00:00",
        "fecha_calibracion": "2025-10-06 00:00:00",
        "certificado": "14540",
        "cliente": "Mercado Libre",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"120\", \"inst\": \"120.1\"}, {\"pt\": \"PT2\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"1200\", \"inst\": \"1200\"}, {\"pt\": \"PT4\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"3000\", \"inst\": \"3000\"}, {\"pt\": \"PT5\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"6000\", \"inst\": \"6000\"}, {\"pt\": \"PT6\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"12000\", \"inst\": \"11999\"}, {\"pt\": \"PT7\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"23999\", \"inst\": \"23998\"}, {\"pt\": \"PT8\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"35999\", \"inst\": \"35999\"}, {\"pt\": \"PT9\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"60000\", \"inst\": \"59997\"}, {\"pt\": \"PT10\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"89998\", \"inst\": \"89996\"}, {\"pt\": \"PT11\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"3003\", \"inst\": \"3001\"}, {\"pt\": \"PT12\", \"variable\": \"[?]\", \"unidad\": \"RPM\", \"ref\": \"6005\", \"inst\": \"6002\"}]"
    },
    {
        "id": "260",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT 85 B",
        "serie": "H24127673",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-09-09 00:00:00",
        "fecha_calibracion": "2025-09-09 00:00:00",
        "certificado": "14326",
        "cliente": "Nicole Bringas",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Sonoridad\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"Sonoridad\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.8\"}]"
    },
    {
        "id": "168",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCT2-A",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-10-12 00:00:00",
        "fecha_calibracion": "2025-10-12 00:00:00",
        "certificado": "14520",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"0\", \"inst\": \"0.5\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"10\", \"inst\": \"10.2\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"30\", \"inst\": \"30.1\"}]"
    },
    {
        "id": "276",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT 85 B",
        "serie": "H24127647",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-10-01 00:00:00",
        "fecha_calibracion": "2025-10-01 00:00:00",
        "certificado": "14455",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"\", \"inst\": \"94.6\"}, {\"pt\": \"PT2\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"\", \"inst\": \"114.9\"}]"
    },
    {
        "id": "79",
        "instrumento": "",
        "marca": "FLUKE",
        "modelo": "302 +",
        "serie": "64991594 WS",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-09-06 00:00:00",
        "fecha_calibracion": "2025-09-06 00:00:00",
        "certificado": "202510-PD-14738",
        "cliente": "Ernesto Reales",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"0.1\", \"inst\": \"59.9\"}, {\"pt\": \"PT2\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"0.5\", \"inst\": \"300\"}, {\"pt\": \"PT3\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"0.9\", \"inst\": \"539.8\"}, {\"pt\": \"PT4\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"-0.5\", \"inst\": \"-299.9\"}, {\"pt\": \"PT5\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"-0.9\", \"inst\": \"-540.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.1\", \"inst\": \"59.9\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.5\", \"inst\": \"299.9\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.9\", \"inst\": \"540.1\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.9\", \"inst\": \"538.9\"}]"
    },
    {
        "id": "169",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCTZ A",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-09-12 00:00:00",
        "fecha_calibracion": "2025-09-12 00:00:00",
        "certificado": "202509-TE-14382",
        "cliente": "Clinica de Flebolog\u00eda SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"0\", \"inst\": \"0.5\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"10\", \"inst\": \"10.2\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"30\", \"inst\": \"30.1\"}]"
    },
    {
        "id": "275",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT 85 B",
        "serie": "H24127625",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-10-01 00:00:00",
        "fecha_calibracion": "2025-10-01 00:00:00",
        "certificado": "14330",
        "cliente": "Virginia Negro",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Sonoridad\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.6\"}, {\"pt\": \"PT2\", \"variable\": \"Sonoridad\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.7\"}]"
    },
    {
        "id": "252",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-08-29 00:00:00",
        "fecha_calibracion": "2025-08-29 00:00:00",
        "certificado": "202509-LX-14042",
        "cliente": "Sebasti\u00e1n Rover",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"54\", \"inst\": \"52\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"100\", \"inst\": \"98\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"190\", \"inst\": \"182\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"250\", \"inst\": \"241\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1002\", \"inst\": \"987\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1812\", \"inst\": \"1785\"}]"
    },
    {
        "id": "167",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCTZ A",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-12 00:00:00",
        "fecha_calibracion": "2025-06-12 00:00:00",
        "certificado": "14429",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"0\", \"inst\": \"0.5\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"10\", \"inst\": \"10.2\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"30\", \"inst\": \"30.1\"}]"
    },
    {
        "id": "251",
        "instrumento": "",
        "marca": "",
        "modelo": "",
        "serie": "H12E-K000779",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-09-02 00:00:00",
        "fecha_calibracion": "2025-09-02 00:00:00",
        "certificado": "202509-PH-14383",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"56.3\", \"inst\": \"55.8\"}, {\"pt\": \"PT2\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"45.2\", \"inst\": \"44.1\"}, {\"pt\": \"PT3\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"73.9\", \"inst\": \"72.2\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"16.4\", \"inst\": \"16.2\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"20.4\", \"inst\": \"20.2\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"[?]\", \"unidad\": \"[?]\", \"ref\": \"25.7\", \"inst\": \"25.5\"}]"
    },
    {
        "id": "264",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-300B",
        "serie": "PZ206M1722",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-09-09 00:00:00",
        "fecha_calibracion": "2025-09-09 00:00:00",
        "certificado": "202510-D-14370",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20.04\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT8\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"300\", \"inst\": \"300.01\"}]"
    },
    {
        "id": "224",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236B",
        "serie": "S 5187842",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-07-29 00:00:00",
        "fecha_calibracion": "2025-07-29 00:00:00",
        "certificado": "202509-TC-14155",
        "cliente": "CR Medicin[?]",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"119.9\", \"inst\": \"120\"}, {\"pt\": \"PT2\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"1200\", \"inst\": \"1199\"}, {\"pt\": \"PT4\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"3000\", \"inst\": \"2999\"}, {\"pt\": \"PT5\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"6000\", \"inst\": \"5999\"}, {\"pt\": \"PT6\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"12000\", \"inst\": \"12000\"}, {\"pt\": \"PT7\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"23999\", \"inst\": \"23982\"}, {\"pt\": \"PT8\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"35999\", \"inst\": \"35988\"}, {\"pt\": \"PT9\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"60000\", \"inst\": \"59887\"}, {\"pt\": \"PT10\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"89998\", \"inst\": \"89997\"}, {\"pt\": \"PT11\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"3002\", \"inst\": \"3002\"}, {\"pt\": \"PT12\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"6002\", \"inst\": \"6005\"}]"
    },
    {
        "id": "254",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-09-08 00:00:00",
        "fecha_calibracion": "2025-09-08 00:00:00",
        "certificado": "14319",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"54\", \"inst\": \"49.8\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"100\", \"inst\": \"99.3\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"192\", \"inst\": \"188.2\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"251\", \"inst\": \"242\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1114\", \"inst\": \"1083\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1821\", \"inst\": \"1746\"}]"
    },
    {
        "id": "255",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-09-08 00:00:00",
        "fecha_calibracion": "2025-09-08 00:00:00",
        "certificado": "14320",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"54\", \"inst\": \"51.1\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"107\", \"inst\": \"103.9\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"199\", \"inst\": \"191.5\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"269\", \"inst\": \"260\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1124\", \"inst\": \"1079\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1959\", \"inst\": \"1872\"}]"
    },
    {
        "id": "256",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-09-08 00:00:00",
        "fecha_calibracion": "2025-09-08 00:00:00",
        "certificado": "14321",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"54\", \"inst\": \"49.8\"}, {\"pt\": \"PT2\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"101\", \"inst\": \"99.5\"}, {\"pt\": \"PT3\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"192\", \"inst\": \"189.2\"}, {\"pt\": \"PT4\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"1120\", \"inst\": \"1092\"}, {\"pt\": \"PT5\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"1820\", \"inst\": \"1756\"}]"
    },
    {
        "id": "151",
        "instrumento": "",
        "marca": "",
        "modelo": "HT 607",
        "serie": "MIZE-K000660",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-09-17 00:00:00",
        "fecha_calibracion": "2025-09-17 00:00:00",
        "certificado": "202509-TH-14231",
        "cliente": "Laboratorio Petrona",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"36.5\", \"inst\": \"34.7\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"44.4\", \"inst\": \"43.8\"}, {\"pt\": \"PT3\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"70.2\", \"inst\": \"70.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"6.3\", \"inst\": \"6.3\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.4\", \"inst\": \"25\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"52.5\", \"inst\": \"52.1\"}]"
    },
    {
        "id": "51",
        "instrumento": "",
        "marca": "Solmax",
        "modelo": "P1017-200B",
        "serie": "P220GM1621",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-16 00:00:00",
        "fecha_calibracion": "2025-06-16 00:00:00",
        "certificado": "202507-CA-13471",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT8\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT9\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "221",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236B",
        "serie": "S 5187843",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-07-29 00:00:00",
        "fecha_calibracion": "2025-07-29 00:00:00",
        "certificado": "202509-TC-14155",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"120\", \"inst\": \"120.1\"}, {\"pt\": \"PT2\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"1200\", \"inst\": \"1200\"}, {\"pt\": \"PT4\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"3000\", \"inst\": \"2999\"}, {\"pt\": \"PT5\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"6000\", \"inst\": \"5999\"}, {\"pt\": \"PT6\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"12000\", \"inst\": \"12000\"}, {\"pt\": \"PT7\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"23999\", \"inst\": \"23999\"}, {\"pt\": \"PT8\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"35999\", \"inst\": \"35998\"}, {\"pt\": \"PT9\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"60000\", \"inst\": \"59997\"}, {\"pt\": \"PT10\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"89998\", \"inst\": \"89986\"}, {\"pt\": \"PT11\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"3002\", \"inst\": \"3006\"}, {\"pt\": \"PT12\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"6001\", \"inst\": \"6004\"}]"
    },
    {
        "id": "225",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236B",
        "serie": "S 5186810",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-07-29 00:00:00",
        "fecha_calibracion": "2025-07-29 00:00:00",
        "certificado": "202509-TC-14118",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"120\", \"inst\": \"119.9\"}, {\"pt\": \"PT2\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"1200\", \"inst\": \"1199\"}, {\"pt\": \"PT4\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"3000\", \"inst\": \"2999\"}, {\"pt\": \"PT5\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"6000\", \"inst\": \"5999\"}, {\"pt\": \"PT6\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"12000\", \"inst\": \"11999\"}, {\"pt\": \"PT7\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"23999\", \"inst\": \"23999\"}, {\"pt\": \"PT8\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"35999\", \"inst\": \"35998\"}, {\"pt\": \"PT9\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"60000\", \"inst\": \"59997\"}, {\"pt\": \"PT10\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"89998\", \"inst\": \"89996\"}, {\"pt\": \"PT11\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"3002\", \"inst\": \"3004\"}, {\"pt\": \"PT12\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"6002\", \"inst\": \"6003\"}]"
    },
    {
        "id": "71",
        "instrumento": "",
        "marca": "",
        "modelo": "THE-343",
        "serie": "25035425",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-08-15 00:00:00",
        "fecha_calibracion": "2025-08-15 00:00:00",
        "certificado": "202509-TE-14094",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT2\", \"variable\": \"Temperatura (T1)\", \"unidad\": \"\\u00b0C\", \"ref\": \"99.8\", \"inst\": \"100\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura (T1)\", \"unidad\": \"\\u00b0C\", \"ref\": \"124.1\", \"inst\": \"125\"}, {\"pt\": \"PT4\", \"variable\": \"Temperatura (T1)\", \"unidad\": \"\\u00b0C\", \"ref\": \"149.8\", \"inst\": \"150\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura (T2)\", \"unidad\": \"\\u00b0C\", \"ref\": \"99.7\", \"inst\": \"100\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura (T2)\", \"unidad\": \"\\u00b0C\", \"ref\": \"124.7\", \"inst\": \"125\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Temperatura (T2)\", \"unidad\": \"\\u00b0C\", \"ref\": \"149.7\", \"inst\": \"150\"}]"
    },
    {
        "id": "9",
        "instrumento": "",
        "marca": "Wintact",
        "modelo": "WT 85B",
        "serie": "H24127672",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-08-24 00:00:00",
        "fecha_calibracion": "2025-08-24 00:00:00",
        "certificado": "202509-DB-14061",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Decibeles\", \"unidad\": \"dB\", \"ref\": \"94\", \"inst\": \"94.5\"}, {\"pt\": \"PT2\", \"variable\": \"Decibeles\", \"unidad\": \"dB\", \"ref\": \"114\", \"inst\": \"114.9\"}]"
    },
    {
        "id": "249",
        "instrumento": "",
        "marca": "",
        "modelo": "HT 607",
        "serie": "MIZE-K000685",
        "estado": "RESERVADO",
        "fecha_creacion": "",
        "fecha_calibracion": "",
        "certificado": "202509-TH-14051",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"36.7\", \"inst\": \"36.1\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"45.2\", \"inst\": \"44.3\"}, {\"pt\": \"PT3\", \"variable\": \"Humedad Relativa\", \"unidad\": \"%Hr\", \"ref\": \"72.9\", \"inst\": \"72.5\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"16\", \"inst\": \"16.2\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.4\", \"inst\": \"20.2\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"29.7\", \"inst\": \"29.4\"}]"
    },
    {
        "id": "195",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-08-29 00:00:00",
        "fecha_calibracion": "2025-08-29 00:00:00",
        "certificado": "262509-LX-14017",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"55\", \"inst\": \"53.2\"}, {\"pt\": \"PT2\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"105\", \"inst\": \"101.3\"}, {\"pt\": \"PT3\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"185\", \"inst\": \"177.9\"}, {\"pt\": \"PT4\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"756\", \"inst\": \"749\"}, {\"pt\": \"PT5\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"1007\", \"inst\": \"958\"}, {\"pt\": \"PT6\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"1835\", \"inst\": \"1803\"}]"
    },
    {
        "id": "204",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-500",
        "serie": "430402039X",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-08-03 00:00:00",
        "fecha_calibracion": "2025-08-03 00:00:00",
        "certificado": "13835",
        "cliente": "Direcci\u00f3n de Criminal\u00edstica y Estudios Forenses Gendarmer\u00eda Nacional",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"20.01\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"30\", \"inst\": \"30.02\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"40\", \"inst\": \"40.01\"}, {\"pt\": \"PT5\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"50\", \"inst\": \"50.02\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"20.02\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"30\", \"inst\": \"30.02\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"40\", \"inst\": \"40.01\"}]"
    },
    {
        "id": "175",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-300 B",
        "serie": "P2206M1694",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-17 00:00:00",
        "fecha_calibracion": "2025-06-17 00:00:00",
        "certificado": "262507-CA-13459",
        "cliente": "Aires del Sur SA.",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT8\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"300\", \"inst\": \"300\"}, {\"pt\": \"PT9\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "197",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-30 00:00:00",
        "fecha_calibracion": "2025-06-30 00:00:00",
        "certificado": "13820",
        "cliente": "Stroyanski Javier",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"54\", \"inst\": \"53.2\"}, {\"pt\": \"PT2\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"103\", \"inst\": \"98.7\"}, {\"pt\": \"PT3\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"198\", \"inst\": \"189.6\"}, {\"pt\": \"PT4\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"251\", \"inst\": \"245.3\"}, {\"pt\": \"PT5\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"1093\", \"inst\": \"1054\"}, {\"pt\": \"PT6\", \"variable\": \"Lux\", \"unidad\": \"Lux\", \"ref\": \"1862\", \"inst\": \"1829\"}]"
    },
    {
        "id": "174",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-300 B",
        "serie": "P2208M1826",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-17 00:00:00",
        "fecha_calibracion": "2025-06-17 00:00:00",
        "certificado": "13369",
        "cliente": "Aires del Sur SA.",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT8\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"300\", \"inst\": \"300\"}, {\"pt\": \"PT9\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "223",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236B",
        "serie": "55182808",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-07-29 00:00:00",
        "fecha_calibracion": "2025-07-29 00:00:00",
        "certificado": "13819",
        "cliente": "CP Medicina",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"119.9\", \"inst\": \"120\"}, {\"pt\": \"PT2\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"1200\", \"inst\": \"1200\"}, {\"pt\": \"PT4\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"3000\", \"inst\": \"2999\"}, {\"pt\": \"PT5\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"6000\", \"inst\": \"5998\"}, {\"pt\": \"PT6\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"12000\", \"inst\": \"12000\"}, {\"pt\": \"PT7\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"23999\", \"inst\": \"23998\"}, {\"pt\": \"PT8\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"35999\", \"inst\": \"35998\"}, {\"pt\": \"PT9\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"60000\", \"inst\": \"59987\"}, {\"pt\": \"PT10\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"89998\", \"inst\": \"89996\"}, {\"pt\": \"PT11\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"3002\", \"inst\": \"3005\"}, {\"pt\": \"PT12\", \"variable\": \"RPM\", \"unidad\": \"RPM\", \"ref\": \"6005\", \"inst\": \"6008\"}]"
    },
    {
        "id": "182",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-200 B",
        "serie": "P2208M1863",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-07-24 00:00:00",
        "fecha_calibracion": "2025-07-24 00:00:00",
        "certificado": "13817",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT8\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT9\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100.05\"}]"
    },
    {
        "id": "182",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-200B",
        "serie": "P2208M1863",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-07-24 00:00:00",
        "fecha_calibracion": "2025-07-24 00:00:00",
        "certificado": "13817",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"0\", \"inst\": \"\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT8\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT9\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"100\", \"inst\": \"100.05\"}]"
    },
    {
        "id": "183",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-200B",
        "serie": "P2206M1483",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-07-24 00:00:00",
        "fecha_calibracion": "2025-07-24 00:00:00",
        "certificado": "13818",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"0\", \"inst\": \"\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT8\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT9\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "64",
        "instrumento": "",
        "marca": "DANOPLUS",
        "modelo": "TH-343",
        "serie": "240415353",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-08-11 00:00:00",
        "fecha_calibracion": "2025-08-11 00:00:00",
        "certificado": "13777",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"T1\", \"unidad\": \"[?]\", \"ref\": \"100\", \"inst\": \"99.7\"}, {\"pt\": \"PT3\", \"variable\": \"T1\", \"unidad\": \"[?]\", \"ref\": \"125\", \"inst\": \"125.2\"}, {\"pt\": \"PT4\", \"variable\": \"T1\", \"unidad\": \"[?]\", \"ref\": \"150\", \"inst\": \"150.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"T2\", \"unidad\": \"[?]\", \"ref\": \"\", \"inst\": \"98.2\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"T2\", \"unidad\": \"[?]\", \"ref\": \"\", \"inst\": \"125.2\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"T2\", \"unidad\": \"[?]\", \"ref\": \"\", \"inst\": \"150.2\"}]"
    },
    {
        "id": "150",
        "instrumento": "",
        "marca": "Protmex",
        "modelo": "HT607",
        "serie": "H12C-K000644",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-08-06 00:00:00",
        "fecha_calibracion": "2025-08-06 00:00:00",
        "certificado": "13219",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Hum\", \"unidad\": \"\", \"ref\": \"56.5\", \"inst\": \"54.2\"}, {\"pt\": \"PT2\", \"variable\": \"Hum\", \"unidad\": \"\", \"ref\": \"44.4\", \"inst\": \"44.1\"}, {\"pt\": \"PT3\", \"variable\": \"Hum\", \"unidad\": \"\", \"ref\": \"71.2\", \"inst\": \"71.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temp\", \"unidad\": \"\", \"ref\": \"10.3\", \"inst\": \"10.4\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temp\", \"unidad\": \"\", \"ref\": \"25.4\", \"inst\": \"25\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temp\", \"unidad\": \"\", \"ref\": \"31.2\", \"inst\": \"31.1\"}]"
    },
    {
        "id": "65",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "X5Q-70",
        "serie": "43110027",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-08-07 00:00:00",
        "fecha_calibracion": "2025-08-07 00:00:00",
        "certificado": "13647",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"10\", \"inst\": \"10.1\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50.1\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"60\", \"inst\": \"60\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"70\", \"inst\": \"70\"}]"
    },
    {
        "id": "222",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236 B",
        "serie": "5 5186812",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-07-29 00:00:00",
        "fecha_calibracion": "2025-07-29 00:00:00",
        "certificado": "13605",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"119.9\", \"inst\": \"120\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"1200\", \"inst\": \"1200\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"3000\", \"inst\": \"2999\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"6000\", \"inst\": \"5999\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"12000\", \"inst\": \"11999\"}, {\"pt\": \"PT7\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"23999\", \"inst\": \"23999\"}, {\"pt\": \"PT8\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"35999\", \"inst\": \"35998\"}, {\"pt\": \"PT9\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"60000\", \"inst\": \"59997\"}, {\"pt\": \"PT10\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"89998\", \"inst\": \"89996\"}, {\"pt\": \"PT11\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"3000\", \"inst\": \"3002\"}, {\"pt\": \"PT12\", \"variable\": \"\", \"unidad\": \"RPM\", \"ref\": \"6002\", \"inst\": \"6003\"}]"
    },
    {
        "id": "139",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-150B",
        "serie": "P2206M1578",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-23 00:00:00",
        "fecha_calibracion": "2025-06-23 00:00:00",
        "certificado": "13568",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"120\", \"inst\": \"120\"}, {\"pt\": \"PT8\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"150\", \"inst\": \"150\"}, {\"pt\": \"PT9\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT10\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "143",
        "instrumento": "",
        "marca": "",
        "modelo": "DT-6236 B",
        "serie": "5 5187841",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-07-18 00:00:00",
        "fecha_calibracion": "2025-07-18 00:00:00",
        "certificado": "202507-TC-13549",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"120\", \"inst\": \"119.9\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1200\", \"inst\": \"1200\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"3000\", \"inst\": \"2999\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"6000\", \"inst\": \"5999\"}]"
    },
    {
        "id": "154",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "ZSQ-3",
        "serie": "43098071",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-08-27 00:00:00",
        "fecha_calibracion": "2025-08-27 00:00:00",
        "certificado": "202507-TQ-13537",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1.02\", \"inst\": \"1\"}, {\"pt\": \"PT2\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1.45\", \"inst\": \"1.5\"}, {\"pt\": \"PT3\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"1.96\", \"inst\": \"2\"}, {\"pt\": \"PT4\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"2.43\", \"inst\": \"2.5\"}, {\"pt\": \"PT5\", \"variable\": \"\", \"unidad\": \"\", \"ref\": \"2.96\", \"inst\": \"3\"}]"
    },
    {
        "id": "85",
        "instrumento": "",
        "marca": "FLUKE",
        "modelo": "107",
        "serie": "64991225WS",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-07-07 00:00:00",
        "fecha_calibracion": "2025-07-07 00:00:00",
        "certificado": "202507-ML-13500",
        "cliente": "Cinthia Adela Palacios Benitez",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"\", \"inst\": \"0.602\"}, {\"pt\": \"PT2\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"\", \"inst\": \"3.014\"}, {\"pt\": \"PT3\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"\", \"inst\": \"5.428\"}, {\"pt\": \"PT4\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"\", \"inst\": \"-3.014\"}, {\"pt\": \"PT5\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"\", \"inst\": \"-5.426\"}, {\"pt\": \"PT6\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"\", \"inst\": \"6.03\"}, {\"pt\": \"PT7\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"\", \"inst\": \"54.34\"}, {\"pt\": \"PT8\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"\", \"inst\": \"-54.3\"}, {\"pt\": \"PT9\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"\", \"inst\": \"60.3\"}, {\"pt\": \"PT10\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"\", \"inst\": \"543.5\"}, {\"pt\": \"PT11\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"\", \"inst\": \"-543.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"\", \"ref\": \"\", \"inst\": \"60.5\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"\", \"ref\": \"\", \"inst\": \"60.2\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"\", \"ref\": \"\", \"inst\": \"539\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"\", \"ref\": \"\", \"inst\": \"540.7\"}]"
    },
    {
        "id": "149",
        "instrumento": "",
        "marca": "",
        "modelo": "",
        "serie": "HIZE-K00012 [?]",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-11 00:00:00",
        "fecha_calibracion": "2025-06-11 00:00:00",
        "certificado": "13400",
        "cliente": "Sc+I SRL",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"56.3\", \"inst\": \"54.2\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"44.4\", \"inst\": \"43.4\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"10.3\", \"inst\": \"10.4\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.4\", \"inst\": \"25\"}]"
    },
    {
        "id": "186",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-23 00:00:00",
        "fecha_calibracion": "2025-06-23 00:00:00",
        "certificado": "13401",
        "cliente": "Marcelo Sebasti\u00e1n Guastavino",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"10.6\", \"inst\": \"10.9\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"19.3\", \"inst\": \"18.7\"}, {\"pt\": \"PT3\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"34.6\", \"inst\": \"34.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"36.2\", \"inst\": \"36.7\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"54.1\", \"inst\": \"52.5\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"70.6\", \"inst\": \"69\"}]"
    },
    {
        "id": "172",
        "instrumento": "",
        "marca": "",
        "modelo": "P1017-300B",
        "serie": "P2206M1681",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-17 00:00:00",
        "fecha_calibracion": "2025-06-17 00:00:00",
        "certificado": "13348",
        "cliente": "Oscar Ariel Herrera",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT8\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"300\", \"inst\": \"300\"}, {\"pt\": \"PT9\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"20\"}, {\"pt\": \"PT10\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "173",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "P1017-300B",
        "serie": "P2206M1707",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-17 00:00:00",
        "fecha_calibracion": "2025-06-17 00:00:00",
        "certificado": "13349",
        "cliente": "Oscar Ariel Herrera",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"1.01\", \"inst\": \"1.01\"}, {\"pt\": \"PT3\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT4\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT5\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"80\", \"inst\": \"80\"}, {\"pt\": \"PT6\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT7\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"200\", \"inst\": \"200\"}, {\"pt\": \"PT8\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"300\", \"inst\": \"300\"}, {\"pt\": \"PT9\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"51\"}, {\"pt\": \"PT10\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}, {\"pt\": \"PT11\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"50\", \"inst\": \"50\"}, {\"pt\": \"PT12\", \"variable\": \"Longitud\", \"unidad\": \"mm\", \"ref\": \"100\", \"inst\": \"100\"}]"
    },
    {
        "id": "no asignado",
        "instrumento": "",
        "marca": "Soft db",
        "modelo": "PICCOLO II",
        "serie": "P0225600785",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-03-31 00:00:00",
        "fecha_calibracion": "2026-03-31 00:00:00",
        "certificado": "16076",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Nivel Sonoro\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"Nivel Sonoro\", \"unidad\": \"dB\", \"ref\": \"114.8\", \"inst\": \"114.6\"}]"
    },
    {
        "id": "358",
        "instrumento": "",
        "marca": "AZ",
        "modelo": "87784",
        "serie": "11011807",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-03-22 00:00:00",
        "fecha_calibracion": "2026-03-22 00:00:00",
        "certificado": "16037",
        "cliente": "NEA Servicios para empresas",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"11.1\", \"inst\": \"11.2\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"20.2\", \"inst\": \"20.2\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.6\", \"inst\": \"25.5\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"37.1\", \"inst\": \"38\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"46.9\", \"inst\": \"46.8\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"67.5\", \"inst\": \"68.7\"}]"
    },
    {
        "id": "401",
        "instrumento": "",
        "marca": "Anpuds",
        "modelo": "",
        "serie": "24081456",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-03-30 00:00:00",
        "fecha_calibracion": "2026-03-30 00:00:00",
        "certificado": "16052",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"100.2\", \"inst\": \"100\"}, {\"pt\": \"PT2\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"202.4\", \"inst\": \"200\"}, {\"pt\": \"PT3\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"301.4\", \"inst\": \"300\"}, {\"pt\": \"PT4\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"502.4\", \"inst\": \"500\"}, {\"pt\": \"PT5\", \"variable\": \"Torque\", \"unidad\": \"Nm\", \"ref\": \"602.6\", \"inst\": \"600\"}]"
    },
    {
        "id": "184",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-25 00:00:00",
        "fecha_calibracion": "2025-06-25 00:00:00",
        "certificado": "13318",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"10.6\", \"inst\": \"10.5\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"19.7\", \"inst\": \"18.7\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"34.6\", \"inst\": \"34.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"35.7\", \"inst\": \"36\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"54.1\", \"inst\": \"52\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%Hr\", \"ref\": \"70.7\", \"inst\": \"69\"}]"
    },
    {
        "id": "21",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-25 00:00:00",
        "fecha_calibracion": "2025-06-25 00:00:00",
        "certificado": "13316",
        "cliente": "Panella, Juana Nelida Trogu, Rita del Carmen Silvana Mabel Trogu",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"52.5\", \"inst\": \"51\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"44.9\", \"inst\": \"42\"}, {\"pt\": \"PT3\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"73.9\", \"inst\": \"72\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"7.1\", \"inst\": \"7.2\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.9\", \"inst\": \"26.2\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"31.8\", \"inst\": \"31.9\"}]"
    },
    {
        "id": "25",
        "instrumento": "",
        "marca": "Thermopro",
        "modelo": "TP357",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-25 00:00:00",
        "fecha_calibracion": "2025-06-25 00:00:00",
        "certificado": "13317",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"52.7\", \"inst\": \"51\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"45.9\", \"inst\": \"44\"}, {\"pt\": \"PT3\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"74.7\", \"inst\": \"73\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"7.2\", \"inst\": \"7.4\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"25.9\", \"inst\": \"26\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"32.2\", \"inst\": \"31.7\"}]"
    },
    {
        "id": "171",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-500",
        "serie": "4310060287",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-18 00:00:00",
        "fecha_calibracion": "2025-06-18 00:00:00",
        "certificado": "13321",
        "cliente": "Carlos Iv\u00e1n Zurita",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"\", \"ref\": \"10\", \"inst\": \"10.02\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"\", \"ref\": \"20\", \"inst\": \"20.08\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"\", \"ref\": \"30\", \"inst\": \"30.01\"}, {\"pt\": \"PT5\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"\", \"ref\": \"50\", \"inst\": \"50.01\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"\", \"ref\": \"10\", \"inst\": \"10.02\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"\", \"ref\": \"20\", \"inst\": \"20.01\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"\", \"ref\": \"30\", \"inst\": \"30.01\"}]"
    },
    {
        "id": "148",
        "instrumento": "",
        "marca": "Protmex",
        "modelo": "HT-607",
        "serie": "HIZE-K001293",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-25 00:00:00",
        "fecha_calibracion": "2025-06-25 00:00:00",
        "certificado": "13320",
        "cliente": "Escuela Modelo Deven SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad\", \"unidad\": \"\", \"ref\": \"56.5\", \"inst\": \"54.4\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad\", \"unidad\": \"\", \"ref\": \"43.5\", \"inst\": \"43.8\"}, {\"pt\": \"PT3\", \"variable\": \"Humedad\", \"unidad\": \"\", \"ref\": \"71.2\", \"inst\": \"70.1\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\", \"ref\": \"10.3\", \"inst\": \"10.4\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\", \"ref\": \"25.4\", \"inst\": \"25\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\", \"ref\": \"29.2\", \"inst\": \"29.2\"}]"
    },
    {
        "id": "163",
        "instrumento": "",
        "marca": "Bside",
        "modelo": "L1",
        "serie": "",
        "estado": "RESERVADO",
        "fecha_creacion": "2025-06-23 00:00:00",
        "fecha_calibracion": "2025-06-23 00:00:00",
        "certificado": "13270",
        "cliente": "Grupo Saenz JMR SA",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"50\", \"inst\": \"49.2\"}, {\"pt\": \"PT2\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"98\", \"inst\": \"96.1\"}, {\"pt\": \"PT3\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"124\", \"inst\": \"122.3\"}, {\"pt\": \"PT4\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"250\", \"inst\": \"220.4\"}, {\"pt\": \"PT5\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1050\", \"inst\": \"1001\"}, {\"pt\": \"PT6\", \"variable\": \"Iluminancia\", \"unidad\": \"Lux\", \"ref\": \"1502\", \"inst\": \"1262\"}]"
    },
    {
        "id": "INST-5660",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCTH",
        "serie": "No",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-04-04 00:00:00",
        "fecha_calibracion": "2026-04-04 00:00:00",
        "certificado": "202604-TH-16135",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"10\", \"unidad\": \"\\u00b0C\", \"ref\": \"10\", \"inst\": \"10\"}, {\"pt\": \"PT2\", \"variable\": \"10\", \"unidad\": \"\\u00b0C\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT3\", \"variable\": \"10\", \"unidad\": \"\\u00b0C\", \"ref\": \"30\", \"inst\": \"30\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"20\", \"unidad\": \"%\", \"ref\": \"34\", \"inst\": \"34\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"20\", \"unidad\": \"%\", \"ref\": \"55\", \"inst\": \"55\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"20\", \"unidad\": \"%\", \"ref\": \"71\", \"inst\": \"71\"}]"
    },
    {
        "id": "INST-2376",
        "instrumento": "",
        "marca": "Schwyz",
        "modelo": "SCTH",
        "serie": "No",
        "estado": "RESERVADO",
        "fecha_creacion": "2026-04-04 00:00:00",
        "fecha_calibracion": "2026-04-04 00:00:00",
        "certificado": "202604-TH-16134",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temp\", \"unidad\": \"\\u00b0C\", \"ref\": \"10\", \"inst\": \"10\"}, {\"pt\": \"PT2\", \"variable\": \"Temp\", \"unidad\": \"\\u00b0C\", \"ref\": \"20\", \"inst\": \"20\"}, {\"pt\": \"PT3\", \"variable\": \"Temp\", \"unidad\": \"\\u00b0C\", \"ref\": \"30\", \"inst\": \"30\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"34\", \"inst\": \"34\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"55\", \"inst\": \"55\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"\", \"unidad\": \"%\", \"ref\": \"71\", \"inst\": \"71\"}]"
    },
    {
        "id": "3",
        "instrumento": "",
        "marca": "Pench",
        "modelo": "R-G250 SD",
        "serie": "27347",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2023-12-03 00:00:00",
        "fecha_calibracion": "2023-12-03 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"41.1\", \"inst\": \"41.7\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"54.3\", \"inst\": \"54.3\"}, {\"pt\": \"PT3\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"73.9\", \"inst\": \"73.7\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"24\", \"inst\": \"24.1\"}]"
    },
    {
        "id": "17",
        "instrumento": "",
        "marca": "SHAHE",
        "modelo": "AMF-5",
        "serie": "430524003 X",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-02-25 00:00:00",
        "fecha_calibracion": "2025-02-25 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"Kgf.m\", \"ref\": \"0.1\", \"inst\": \"0.098\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"Kgf.m\", \"ref\": \"0.2\", \"inst\": \"0.199\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"Kgf.m\", \"ref\": \"0.3\", \"inst\": \"0.299\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"Kgf.m\", \"ref\": \"0.4\", \"inst\": \"0.399\"}, {\"pt\": \"PT5\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"Kgf.m\", \"ref\": \"0.5\", \"inst\": \"0.499\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"Kgf.m\", \"ref\": \"0.1\", \"inst\": \"0.099\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"Kgf.m\", \"ref\": \"0.2\", \"inst\": \"0.199\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"Kgf.m\", \"ref\": \"0.3\", \"inst\": \"0.299\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"Kgf.m\", \"ref\": \"0.4\", \"inst\": \"0.398\"}]"
    },
    {
        "id": "27",
        "instrumento": "",
        "marca": "Elitech",
        "modelo": "RCW-800W",
        "serie": "80588 86439 / 09532 83431",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-03-25 00:00:00",
        "fecha_calibracion": "2025-03-25 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"41.7\", \"inst\": \"41.8\"}, {\"pt\": \"PT2\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"54.6\", \"inst\": \"54.5\"}, {\"pt\": \"PT3\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"72.5\", \"inst\": \"70.7\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"8.1\", \"inst\": \"8\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"24.1\", \"inst\": \"24.9\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"35.1\", \"inst\": \"34.6\"}]"
    },
    {
        "id": "42",
        "instrumento": "",
        "marca": "",
        "modelo": "WT 2110 B",
        "serie": "H22613787",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-04-30 00:00:00",
        "fecha_calibracion": "2025-04-30 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Recubrimiento\", \"unidad\": \"um\", \"ref\": \"49\", \"inst\": \"48.5\"}, {\"pt\": \"PT2\", \"variable\": \"Recubrimiento\", \"unidad\": \"um\", \"ref\": \"99.5\", \"inst\": \"99\"}, {\"pt\": \"PT3\", \"variable\": \"Recubrimiento\", \"unidad\": \"um\", \"ref\": \"247\", \"inst\": \"245\"}, {\"pt\": \"PT4\", \"variable\": \"Recubrimiento\", \"unidad\": \"um\", \"ref\": \"502\", \"inst\": \"501\"}, {\"pt\": \"PT5\", \"variable\": \"Recubrimiento\", \"unidad\": \"um\", \"ref\": \"998\", \"inst\": \"997\"}]"
    },
    {
        "id": "43",
        "instrumento": "",
        "marca": "Digi-roller",
        "modelo": "Plus III 6525",
        "serie": "R3A0405280",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-01 00:00:00",
        "fecha_calibracion": "2025-05-01 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Distancia\", \"unidad\": \"m\", \"ref\": \"316\", \"inst\": \"318\"}]"
    },
    {
        "id": "49",
        "instrumento": "",
        "marca": "Etekcity",
        "modelo": "LASERGRIP 771",
        "serie": "E43217072436",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-01 00:00:00",
        "fecha_calibracion": "2025-05-01 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"102\", \"inst\": \"100.8\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"250\", \"inst\": \"248.7\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"450\", \"inst\": \"436.7\"}]"
    },
    {
        "id": "59",
        "instrumento": "",
        "marca": "TES",
        "modelo": "1260",
        "serie": "241004127",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-02 00:00:00",
        "fecha_calibracion": "2025-05-02 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"22.8\", \"inst\": \"23\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"16.6\", \"inst\": \"16.6\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"27.2\", \"inst\": \"27.2\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"42.8\", \"inst\": \"41.3\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"54.7\", \"inst\": \"55.1\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"66.3\", \"inst\": \"68.4\"}]"
    },
    {
        "id": "60",
        "instrumento": "",
        "marca": "TES",
        "modelo": "1260",
        "serie": "241004224",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-02 00:00:00",
        "fecha_calibracion": "2025-05-02 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"16.8\", \"inst\": \"16.8\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"22.8\", \"inst\": \"22.8\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"26.2\", \"inst\": \"26.7\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"42.8\", \"inst\": \"41.4\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"54.7\", \"inst\": \"55.1\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Humedad\", \"unidad\": \"%\", \"ref\": \"66.7\", \"inst\": \"67.3\"}]"
    },
    {
        "id": "67",
        "instrumento": "",
        "marca": "Shahe",
        "modelo": "AMF-200",
        "serie": "430403279 X",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-02 00:00:00",
        "fecha_calibracion": "2025-05-02 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT3\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT4\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"15\", \"inst\": \"15.01\"}, {\"pt\": \"PT5\", \"variable\": \"Tracci\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"20\", \"inst\": \"20.41\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"0\", \"inst\": \"0\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"5\", \"inst\": \"5.01\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"10\", \"inst\": \"10.01\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Compresi\\u00f3n\", \"unidad\": \"kg\", \"ref\": \"15\", \"inst\": \"15.01\"}]"
    },
    {
        "id": "72",
        "instrumento": "",
        "marca": "Thorstone",
        "modelo": "CTR14150M",
        "serie": "",
        "estado": "DISPONIBLE",
        "fecha_creacion": "5 / 5 / 25",
        "fecha_calibracion": "5 / 5 / 25",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"2026-05-10 00:00:00\", \"inst\": \"10\"}, {\"pt\": \"PT2\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"49.5\", \"inst\": \"50\"}, {\"pt\": \"PT3\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"89.1\", \"inst\": \"90\"}, {\"pt\": \"PT4\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"129.4\", \"inst\": \"130\"}, {\"pt\": \"PT5\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"149.5\", \"inst\": \"150\"}]"
    },
    {
        "id": "73",
        "instrumento": "",
        "marca": "Thorstone",
        "modelo": "CTR14150M",
        "serie": "",
        "estado": "DISPONIBLE",
        "fecha_creacion": "5 / 5 / 25",
        "fecha_calibracion": "5 / 5 / 25",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"2026-01-11 00:00:00\", \"inst\": \"10\"}, {\"pt\": \"PT2\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"50.0\", \"inst\": \"50\"}, {\"pt\": \"PT3\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"90.0\", \"inst\": \"90\"}, {\"pt\": \"PT4\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"130.1\", \"inst\": \"130\"}, {\"pt\": \"PT5\", \"variable\": \"Torque\", \"unidad\": \"lb.in\", \"ref\": \"150.1\", \"inst\": \"150\"}]"
    },
    {
        "id": "74",
        "instrumento": "",
        "marca": "Tekton",
        "modelo": "24320",
        "serie": "24320",
        "estado": "DISPONIBLE",
        "fecha_creacion": "5 / 5 / 25",
        "fecha_calibracion": "5 / 5 / 25",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Torque\", \"unidad\": \"lb.ft\", \"ref\": \"2026-02-20 00:00:00\", \"inst\": \"20\"}, {\"pt\": \"PT2\", \"variable\": \"Torque\", \"unidad\": \"lb.ft\", \"ref\": \"80.4\", \"inst\": \"80\"}, {\"pt\": \"PT3\", \"variable\": \"Torque\", \"unidad\": \"lb.ft\", \"ref\": \"110.6\", \"inst\": \"110\"}, {\"pt\": \"PT4\", \"variable\": \"Torque\", \"unidad\": \"lb.ft\", \"ref\": \"140.7\", \"inst\": \"140\"}, {\"pt\": \"PT5\", \"variable\": \"Torque\", \"unidad\": \"lb.ft\", \"ref\": \"202.1\", \"inst\": \"200\"}]"
    },
    {
        "id": "75",
        "instrumento": "",
        "marca": "Tekton",
        "modelo": "24320",
        "serie": "",
        "estado": "DISPONIBLE",
        "fecha_creacion": "5 / 5 / 25",
        "fecha_calibracion": "5 / 5 / 25",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Torque\", \"unidad\": \"lb.ft\", \"ref\": \"2026-02-20 00:00:00\", \"inst\": \"20\"}, {\"pt\": \"PT2\", \"variable\": \"Torque\", \"unidad\": \"lb.ft\", \"ref\": \"80.5\", \"inst\": \"80\"}, {\"pt\": \"PT3\", \"variable\": \"Torque\", \"unidad\": \"lb.ft\", \"ref\": \"110.6\", \"inst\": \"110\"}, {\"pt\": \"PT4\", \"variable\": \"Torque\", \"unidad\": \"lb.ft\", \"ref\": \"140.2\", \"inst\": \"140\"}, {\"pt\": \"PT5\", \"variable\": \"Torque\", \"unidad\": \"lb.ft\", \"ref\": \"199.6\", \"inst\": \"200\"}]"
    },
    {
        "id": "80",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "51 II",
        "serie": "64760075 MV",
        "estado": "DISPONIBLE",
        "fecha_creacion": "06 / 05 / 2025",
        "fecha_calibracion": "06 / 05 / 2025",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"-189.5\", \"inst\": \"-190\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"-99.8\", \"inst\": \"-100\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"0.0\", \"inst\": \"0\"}, {\"pt\": \"PT4\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"100.1\", \"inst\": \"100\"}, {\"pt\": \"PT5\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"300.1\", \"inst\": \"300\"}, {\"pt\": \"PT6\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"500\", \"inst\": \"500\"}, {\"pt\": \"PT7\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"699.9\", \"inst\": \"700\"}, {\"pt\": \"PT8\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"899.8\", \"inst\": \"900\"}, {\"pt\": \"PT9\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"1100\", \"inst\": \"1100\"}, {\"pt\": \"PT10\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"1300\", \"inst\": \"1300\"}]"
    },
    {
        "id": "81",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "51 II",
        "serie": "64752248 MV",
        "estado": "DISPONIBLE",
        "fecha_creacion": "06 / 05 / 2025",
        "fecha_calibracion": "06 / 05 / 2025",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"-190.4\", \"inst\": \"-190\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"-100.2\", \"inst\": \"-100\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"-0.2\", \"inst\": \"0\"}, {\"pt\": \"PT4\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"99.8\", \"inst\": \"100\"}, {\"pt\": \"PT5\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"299.8\", \"inst\": \"300\"}, {\"pt\": \"PT6\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"499.8\", \"inst\": \"500\"}, {\"pt\": \"PT7\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"699.8\", \"inst\": \"700\"}, {\"pt\": \"PT8\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"899.8\", \"inst\": \"900\"}, {\"pt\": \"PT9\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"1100\", \"inst\": \"1100\"}, {\"pt\": \"PT10\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"1300\", \"inst\": \"1300\"}]"
    },
    {
        "id": "82",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "106",
        "serie": "66040425 WS",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.1\", \"inst\": \"60.4\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.1\", \"inst\": \"60.0\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.9\", \"inst\": \"539.5\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.9\", \"inst\": \"538.6\"}]"
    },
    {
        "id": "83",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "106",
        "serie": "66461362 WS",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.1\", \"inst\": \"60.5\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.1\", \"inst\": \"59.8\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.9\", \"inst\": \"539.1\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"0.9\", \"inst\": \"538.7\"}]"
    },
    {
        "id": "86",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "87 V",
        "serie": "65580054",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "1",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"60.0\", \"inst\": \"60.0\"}, {\"pt\": \"PT2\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"540.0\", \"inst\": \"540.0\"}, {\"pt\": \"PT3\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"-539.9\", \"inst\": \"-540.0\"}, {\"pt\": \"PT4\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT5\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"3000\", \"inst\": \"3000\"}, {\"pt\": \"PT6\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"5400\", \"inst\": \"5400\"}, {\"pt\": \"PT7\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"-3000\", \"inst\": \"-3000\"}, {\"pt\": \"PT8\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"-5400\", \"inst\": \"-5400\"}, {\"pt\": \"PT9\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"6\", \"inst\": \"6\"}, {\"pt\": \"PT10\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"54\", \"inst\": \"54\"}, {\"pt\": \"PT11\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"-54\", \"inst\": \"-54\"}, {\"pt\": \"PT12\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"60\", \"inst\": \"60.0\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"60.0\", \"inst\": \"60.0\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"60.1\", \"inst\": \"60.1\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"540.2\", \"inst\": \"540.2\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"541.2\", \"inst\": \"541.2\"}]"
    },
    {
        "id": "88",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "87 V",
        "serie": "66650057",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "2",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"60.0\", \"inst\": \"60.0\"}, {\"pt\": \"PT2\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"540.0\", \"inst\": \"540.0\"}, {\"pt\": \"PT3\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"-539.9\", \"inst\": \"-540.0\"}, {\"pt\": \"PT4\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"600\", \"inst\": \"600\"}, {\"pt\": \"PT5\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"3000\", \"inst\": \"3000\"}, {\"pt\": \"PT6\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"5400\", \"inst\": \"5400\"}, {\"pt\": \"PT7\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"-3000\", \"inst\": \"-3000\"}, {\"pt\": \"PT8\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"-5400\", \"inst\": \"-5400\"}, {\"pt\": \"PT9\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"6\", \"inst\": \"6\"}, {\"pt\": \"PT10\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"54\", \"inst\": \"54\"}, {\"pt\": \"PT11\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"-54\", \"inst\": \"-54\"}, {\"pt\": \"PT12\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V\", \"ref\": \"60\", \"inst\": \"60.0\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"60.0\", \"inst\": \"60.0\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"60.2\", \"inst\": \"60.2\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"540.2\", \"inst\": \"540.2\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V\", \"ref\": \"542.5\", \"inst\": \"542.5\"}]"
    },
    {
        "id": "89",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "15B+",
        "serie": "65480704 WS",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"40\", \"inst\": \"40\"}, {\"pt\": \"PT2\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"360\", \"inst\": \"361\"}, {\"pt\": \"PT3\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-360\", \"inst\": \"-360.9\"}, {\"pt\": \"PT4\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"0.4\", \"inst\": \"0.399\"}, {\"pt\": \"PT5\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"2\", \"inst\": \"1.997\"}, {\"pt\": \"PT6\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"3.6\", \"inst\": \"3.595\"}, {\"pt\": \"PT7\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-2\", \"inst\": \"-1.997\"}, {\"pt\": \"PT8\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-3.6\", \"inst\": \"-3.594\"}, {\"pt\": \"PT9\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"4\", \"inst\": \"3.99\"}, {\"pt\": \"PT10\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"36\", \"inst\": \"35.99\"}, {\"pt\": \"PT11\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-36\", \"inst\": \"-35.88\"}, {\"pt\": \"PT12\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"40\", \"inst\": \"39.9\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"40\", \"inst\": \"39.9\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"40\", \"inst\": \"40.1\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"360\", \"inst\": \"360.9\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"360\", \"inst\": \"360.8\"}]"
    },
    {
        "id": "90",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "15B+",
        "serie": "65480725 WS",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"40\", \"inst\": \"40\"}, {\"pt\": \"PT2\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"360\", \"inst\": \"360.6\"}, {\"pt\": \"PT3\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-360\", \"inst\": \"-360.6\"}, {\"pt\": \"PT4\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"0.4\", \"inst\": \"0.399\"}, {\"pt\": \"PT5\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"2\", \"inst\": \"1.997\"}, {\"pt\": \"PT6\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"3.6\", \"inst\": \"3.596\"}, {\"pt\": \"PT7\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-2\", \"inst\": \"-1.997\"}, {\"pt\": \"PT8\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-3.6\", \"inst\": \"-3.595\"}, {\"pt\": \"PT9\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"4\", \"inst\": \"3.99\"}, {\"pt\": \"PT10\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"36\", \"inst\": \"35.98\"}, {\"pt\": \"PT11\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-36\", \"inst\": \"-35.96\"}, {\"pt\": \"PT12\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"40\", \"inst\": \"39.9\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"40\", \"inst\": \"40\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"40\", \"inst\": \"40.1\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"360\", \"inst\": \"360.6\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"360\", \"inst\": \"360.4\"}]"
    },
    {
        "id": "91",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "115",
        "serie": "64710224 WS",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"60\", \"inst\": \"60\"}, {\"pt\": \"PT2\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"540\", \"inst\": \"539.8\"}, {\"pt\": \"PT3\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-540\", \"inst\": \"-539.8\"}, {\"pt\": \"PT4\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"0.6\", \"inst\": \"0.6\"}, {\"pt\": \"PT5\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"3\", \"inst\": \"2.999\"}, {\"pt\": \"PT6\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"5.4\", \"inst\": \"5.399\"}, {\"pt\": \"PT7\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-3\", \"inst\": \"-2.999\"}, {\"pt\": \"PT8\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-5.4\", \"inst\": \"-5.398\"}, {\"pt\": \"PT9\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"6\", \"inst\": \"6\"}, {\"pt\": \"PT10\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"54\", \"inst\": \"53.99\"}, {\"pt\": \"PT11\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-54\", \"inst\": \"-53.99\"}, {\"pt\": \"PT12\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"60\", \"inst\": \"60\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"60\", \"inst\": \"59.9\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"60\", \"inst\": \"59.8\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"540\", \"inst\": \"540.1\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"540\", \"inst\": \"540.4\"}]"
    },
    {
        "id": "92",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "115",
        "serie": "64710203 WS",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"60\", \"inst\": \"60\"}, {\"pt\": \"PT2\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"540\", \"inst\": \"539.9\"}, {\"pt\": \"PT3\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-540\", \"inst\": \"-540\"}, {\"pt\": \"PT4\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"0.6\", \"inst\": \"0.6\"}, {\"pt\": \"PT5\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"3\", \"inst\": \"2.999\"}, {\"pt\": \"PT6\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"5.4\", \"inst\": \"5.399\"}, {\"pt\": \"PT7\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-3\", \"inst\": \"-2.999\"}, {\"pt\": \"PT8\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-5.4\", \"inst\": \"-5.399\"}, {\"pt\": \"PT9\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"6\", \"inst\": \"6\"}, {\"pt\": \"PT10\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"54\", \"inst\": \"54\"}, {\"pt\": \"PT11\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"-54\", \"inst\": \"-54\"}, {\"pt\": \"PT12\", \"variable\": \"Tensi\\u00f3n continua\", \"unidad\": \"V/mV\", \"ref\": \"60\", \"inst\": \"60\"}, {\"pt\": \"PT1 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"60\", \"inst\": \"59.7\"}, {\"pt\": \"PT2 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"60\", \"inst\": \"59.7\"}, {\"pt\": \"PT3 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"540\", \"inst\": \"540\"}, {\"pt\": \"PT4 (M2)\", \"variable\": \"Tensi\\u00f3n alterna\", \"unidad\": \"V/mV\", \"ref\": \"540\", \"inst\": \"540.4\"}]"
    },
    {
        "id": "94",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "80PK-22",
        "serie": "",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"48.81\", \"inst\": \"50\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"98.92\", \"inst\": \"100\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"200.33\", \"inst\": \"200\"}, {\"pt\": \"PT4\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"299.14\", \"inst\": \"300\"}, {\"pt\": \"PT5\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"398.41\", \"inst\": \"400\"}]"
    },
    {
        "id": "95",
        "instrumento": "",
        "marca": "Fluke",
        "modelo": "80PK-22",
        "serie": "",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-06 00:00:00",
        "fecha_calibracion": "2025-05-06 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"48.83\", \"inst\": \"50\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"98.87\", \"inst\": \"100\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"200.04\", \"inst\": \"200\"}, {\"pt\": \"PT4\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"298.72\", \"inst\": \"300\"}, {\"pt\": \"PT5\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"397.39\", \"inst\": \"400\"}]"
    },
    {
        "id": "96",
        "instrumento": "",
        "marca": "FOXWELL",
        "modelo": "BT-705",
        "serie": "08232481 A1",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-07 00:00:00",
        "fecha_calibracion": "2025-05-07 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Tensi\\u00f3n\", \"unidad\": \"V\", \"ref\": \"8\", \"inst\": \"8.2\"}, {\"pt\": \"PT3\", \"variable\": \"Tensi\\u00f3n\", \"unidad\": \"V\", \"ref\": \"20.03\", \"inst\": \"20.09\"}, {\"pt\": \"PT5\", \"variable\": \"Tensi\\u00f3n\", \"unidad\": \"V\", \"ref\": \"30.02\", \"inst\": \"30.13\"}]"
    },
    {
        "id": "98",
        "instrumento": "",
        "marca": "TES",
        "modelo": "1353 S",
        "serie": "231004874",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-07 00:00:00",
        "fecha_calibracion": "2025-05-07 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Sonido\", \"unidad\": \"dB\", \"ref\": \"94.4\", \"inst\": \"94.4\"}, {\"pt\": \"PT2\", \"variable\": \"Sonido\", \"unidad\": \"dB\", \"ref\": \"114.6\", \"inst\": \"114.6\"}]"
    },
    {
        "id": "100",
        "instrumento": "",
        "marca": "BTMETER",
        "modelo": "BT-1500-APP",
        "serie": "20230029270 L",
        "estado": "DISPONIBLE",
        "fecha_creacion": "2025-05-09 00:00:00",
        "fecha_calibracion": "2025-05-09 00:00:00",
        "certificado": "",
        "cliente": "",
        "puntos": "[{\"pt\": \"PT1\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"101.4\", \"inst\": \"100\"}, {\"pt\": \"PT2\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"251.2\", \"inst\": \"250\"}, {\"pt\": \"PT3\", \"variable\": \"Temperatura\", \"unidad\": \"\\u00b0C\", \"ref\": \"502.6\", \"inst\": \"500\"}]"
    }
];

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let appState = {
    data: [],
    loading: false,
    filter: 'ALL',
    search: '',
    charts: {
        states: null,
        instruments: null
    }
};

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Iconos Lucide
    lucide.createIcons();

    // Cargar datos
    fetchData();

    // Ver Estadísticas
    document.getElementById('btn-show-stats').addEventListener('click', openModalStats);

    // Event Listeners Básicos
    document.getElementById('btn-new-equipo').addEventListener('click', openModalNuevo);
    
    // Configurar Modales (Cerrar)
    document.querySelectorAll('.btn-close, .btn-close-action').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Búsqueda y Filtros
    document.getElementById('search-input').addEventListener('input', (e) => {
        appState.search = e.target.value.toLowerCase();
        renderTable();
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            appState.filter = e.target.getAttribute('data-filter');
            renderTable();
        });
    });

    // Formularios
    document.getElementById('form-nuevo').addEventListener('submit', handleFormNuevo);
    document.getElementById('form-edit').addEventListener('submit', handleFormEdit);
    document.getElementById('form-estado').addEventListener('submit', handleFormEstado);
    document.getElementById('btn-add-punto').addEventListener('click', () => addPuntoRow('tbody-puntos'));
    document.getElementById('edit-btn-add-punto').addEventListener('click', () => addPuntoRow('edit-tbody-puntos'));
    
    // Tabla de botones dinámicos (Delegación de eventos)
    document.getElementById('table-body').addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-change-state');
        if(btn) {
            const id = btn.getAttribute('data-id');
            const targetState = btn.getAttribute('data-target-state');
            openModalEstado(id, targetState);
        }
        
        const btnFicha = e.target.closest('.btn-view-ficha');
        if(btnFicha) {
            const id = btnFicha.getAttribute('data-id');
            openModalFicha(id);
        }

        const btnEdit = e.target.closest('.btn-edit-equipo');
        if(btnEdit) {
            const id = btnEdit.getAttribute('data-id');
            openModalEdit(id);
        }
    });
    // Mobile Menu Toggle
    const btnMenu = document.getElementById('btn-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (btnMenu && sidebar && overlay) {
        btnMenu.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Close sidebar when clicking a nav item on mobile
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
        });
    }
});

// ==========================================
// OPERACIONES DE DATOS (Simulando API)
// ==========================================
async function fetchData() {
    appState.loading = true;
    updateUIState();

    try {
        if(GOOGLE_SHEETS_API_URL !== '') {
            // Real fetch a Google Sheets
            const response = await fetch(GOOGLE_SHEETS_API_URL + '?action=get');
            const data = await response.json();
            appState.data = data.items || [];
        } else {
            // Usar Mock Data con retraso simulado (1s)
            await new Promise(r => setTimeout(r, 1000));
            appState.data = [...mockDatabase];
        }
    } catch (err) {
        console.error("Error al cargar datos:", err);
        alert("Hubo un error cargando los datos. Verifica la URL de Google Sheets.");
    } finally {
        appState.loading = false;
        updateUIState();
        renderTable();
        updateKPIs();
    }
}

async function saveNewRecord(record) {
    if(GOOGLE_SHEETS_API_URL !== '') {
        const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            body: JSON.stringify({ action: 'create', data: record })
            // Nota de seguridad: Google Apps Script POST requiere 'text/plain' body si hay CORS,
            // y mode: 'no-cors' pero dificulta leer la respuesta. 
            // Para simplificar, asumimos configuración abierta.
        });
        return await response.json();
    } else {
        // Guardar en Mock Local
        await new Promise(r => setTimeout(r, 800)); // Simulando red
        mockDatabase.unshift(record);
        appState.data = [...mockDatabase];
        return { success: true };
    }
}

async function updateStateRecord(id, newState, extraData) {
    if(GOOGLE_SHEETS_API_URL !== '') {
        const requestData = { action: 'update_state', id: id, state: newState, ...extraData };
        const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            body: JSON.stringify(requestData)
        });
        return await response.json();
    } else {
        // En Mock Local
        await new Promise(r => setTimeout(r, 800));
        const index = mockDatabase.findIndex(x => x.id === id);
        if(index > -1) {
            mockDatabase[index].estado = newState;
            if(extraData.certificado) mockDatabase[index].certificado = extraData.certificado;
            if(extraData.fecha) mockDatabase[index].fecha_calibracion = extraData.fecha;
            if(extraData.cliente) mockDatabase[index].cliente = extraData.cliente;
        }
        appState.data = [...mockDatabase];
        return { success: true };
    }
}

async function updateFullRecord(record) {
    if(GOOGLE_SHEETS_API_URL !== '') {
        const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            body: JSON.stringify({ action: 'update_full', data: record })
        });
        return await response.json();
    } else {
        // En Mock Local
        await new Promise(r => setTimeout(r, 800));
        const index = mockDatabase.findIndex(x => x.id === record.id);
        if(index > -1) {
            mockDatabase[index] = {...record};
        }
        appState.data = [...mockDatabase];
        return { success: true };
    }
}

// ==========================================
// RENDERIZADO UI
// ==========================================
function updateUIState() {
    const tableBody = document.getElementById('table-body');
    const loadingState = document.getElementById('loading-state');
    
    if (appState.loading) {
        tableBody.innerHTML = '';
        loadingState.style.display = 'flex';
        document.getElementById('empty-state').style.display = 'none';
    } else {
        loadingState.style.display = 'none';
    }
}

function updateKPIs() {
    const dis = appState.data.filter(i => i.estado === 'DISPONIBLE').length;
    const res = appState.data.filter(i => i.estado === 'RESERVADO').length;
    const ent = appState.data.filter(i => i.estado === 'ENTREGADO').length;

    const elDis = document.getElementById('count-disponible');
    const elRes = document.getElementById('count-reservado');
    const elEnt = document.getElementById('count-entregado');

    if(elDis) elDis.textContent = dis;
    if(elRes) elRes.textContent = res;
    if(elEnt) elEnt.textContent = ent;

    const lowAlert = document.getElementById('low-stock-alert');
    if(lowAlert) {
        if(dis < 2 && dis > 0) lowAlert.style.display = 'flex';
        else lowAlert.style.display = 'none';
    }
}

function renderTable() {
    const tbody = document.getElementById('table-body');
    const emptyState = document.getElementById('empty-state');
    tbody.innerHTML = '';

    // Filtrar
    let filtered = appState.data.filter(item => {
        // Filtro por Tab
        if(appState.filter !== 'ALL' && item.estado !== appState.filter) return false;
        
        // Filtro por Buscador
        if(appState.search) {
            const searchStr = `${item.id} ${item.modelo} ${item.marca} ${item.serie} ${item.cliente} ${item.certificado}`.toLowerCase();
            if(!searchStr.includes(appState.search)) return false;
        }
        return true;
    });

    if (filtered.length === 0 && !appState.loading) {
        emptyState.style.display = 'flex';
    } else {
        emptyState.style.display = 'none';
        
        filtered.forEach(item => {
            const tr = document.createElement('tr');
            
            // Textos vacíos
            const certText = item.certificado ? item.certificado : '<span class="null-text">N/A</span>';
            const clienteText = item.cliente ? item.cliente : '<span class="null-text">Sin Asignar</span>';
            
            // Acciones según estado
            let actionsHTML = `<div style="display: flex; gap: 0.25rem;">
                <button class="btn btn-outline btn-icon-only btn-view-ficha" data-id="${item.id}" title="Ver Ficha y Mediciones" style="padding: 0.35rem;"><i data-lucide="eye"></i></button>
                <button class="btn btn-outline btn-icon-only btn-edit-equipo" data-id="${item.id}" title="Editar Información" style="padding: 0.35rem; color: var(--primary);"><i data-lucide="edit-3"></i></button>
            `;
            if(item.estado === 'DISPONIBLE') {
                actionsHTML += `<button class="btn btn-outline btn-change-state" data-id="${item.id}" data-target-state="RESERVADO" title="Marcar como Reservado y Asignar Certificado">Vender <i data-lucide="arrow-right"></i></button>`;
            } else if (item.estado === 'RESERVADO') {
                actionsHTML += `<button class="btn btn-primary btn-change-state" data-id="${item.id}" data-target-state="ENTREGADO" title="Entregar al Cliente">Entregar <i data-lucide="truck"></i></button>`;
            } else {
                actionsHTML += `<span class="null-text" style="display:flex; align-items:center;">Finalizado</span>`;
            }
            actionsHTML += `</div>`;

            tr.innerHTML = `
                <td><strong>${item.id}</strong></td>
                <td>${item.marca} ${item.modelo}</td>
                <td>${item.serie}</td>
                <td><span class="badge ${item.estado.toLowerCase()}">${item.estado}</span></td>
                <td>${item.fecha_calibracion}</td>
                <td><strong>${certText}</strong></td>
                <td>${clienteText}</td>
                <td>${actionsHTML}</td>
            `;
            tbody.appendChild(tr);
        });
        // Reinicializar iconos para los nuevos botones inyectados
        lucide.createIcons();
    }
}

// ==========================================
// LOGICA DE MODALES
// ==========================================
function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    document.getElementById('form-nuevo').reset();
    document.getElementById('form-edit').reset();
    document.getElementById('form-estado').reset();
}

function openModalNuevo() {
    const modal = document.getElementById('modal-nuevo');
    
    // Generar ID
    const newId = 'INST-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    document.getElementById('nuevo-id').value = newId;

    // Generar Tabla Puntos (Ej: 1 punto inicial por defecto)
    const tbody = document.getElementById('tbody-puntos');
    tbody.innerHTML = '';
    window.puntoCount = 0;
    addPuntoRow('tbody-puntos'); // Agregar el primero automáticamente
    
    // Fecha actual por defecto
    document.getElementById('nuevo-fecha').valueAsDate = new Date();
    
    modal.classList.add('active');
}

function addPuntoRow(tbodyId, data = null) {
    if(!window.puntoCount) window.puntoCount = 0;
    window.puntoCount++;
    const tbody = document.getElementById(tbodyId);
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><input type="text" class="input-tiny" name="pt-name" value="${data ? data.pt : 'PT'+window.puntoCount}" required></td>
        <td><input type="text" class="input-med" name="pt-var" value="${data ? data.variable : ''}" placeholder="Ej. Temp" required></td>
        <td><input type="text" class="input-tiny" name="pt-unit" value="${data ? data.unidad || '' : ''}" placeholder="Ej. °C" required></td>
        <td><input type="number" step="any" name="pt-ref" value="${data ? data.ref : ''}" required></td>
        <td><input type="number" step="any" name="pt-inst" value="${data ? data.inst : ''}" required></td>
        <td><button type="button" class="btn-icon text-danger" onclick="this.closest('tr').remove()" title="Eliminar"><i data-lucide="trash-2"></i></button></td>
    `;
    tbody.appendChild(tr);
    // REMOVIDO: lucide.createIcons() de aquí (estaba en medio de un bucle y colgaba la app)
}

function openModalEdit(id) {
    const modal = document.getElementById('modal-edit');
    const item = appState.data.find(x => x.id === id);
    if(!item) return;

    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-instrumento').value = item.instrumento || '';
    document.getElementById('edit-marca').value = item.marca || '';
    document.getElementById('edit-modelo').value = item.modelo || '';
    document.getElementById('edit-serie').value = item.serie || '';
    document.getElementById('edit-estado').value = item.estado;
    document.getElementById('edit-fecha').value = item.fecha_calibracion || '';
    document.getElementById('edit-certificado').value = item.certificado || '';
    document.getElementById('edit-cliente').value = item.cliente || '';

    // Cargar puntos
    const tbody = document.getElementById('edit-tbody-puntos');
    tbody.innerHTML = '';
    let puntosArray = [];
    try { if(item.puntos) puntosArray = JSON.parse(item.puntos); } catch(e){}
    
    puntosArray.forEach(p => addPuntoRow('edit-tbody-puntos', p));
    if(puntosArray.length === 0) addPuntoRow('edit-tbody-puntos');

    // Cargar iconos una sola vez al final
    lucide.createIcons();

    modal.classList.add('active');
}

function openModalEstado(id, targetState) {
    const modal = document.getElementById('modal-estado');
    const item = appState.data.find(x => x.id === id);
    
    if(!item) return;

    document.getElementById('estado-id').value = id;
    document.getElementById('estado-target').value = targetState;
    document.getElementById('modal-estado-title').innerText = `Pasar equipo a ${targetState}`;

    // Context Info
    document.getElementById('estado-context').innerHTML = `
        <p>Equipo: <strong>${item.marca} ${item.modelo}</strong> (ID: ${item.id})</p>
        <p>Nº de Serie: <strong>${item.serie}</strong></p>
    `;

    // Campos condicionales
    const fReservado = document.getElementById('fields-reservado');
    const fEntregado = document.getElementById('fields-entregado');
    
    fReservado.style.display = 'none';
    fEntregado.style.display = 'none';

    // Deshacer requerimientos previos
    document.getElementById('estado-certificado').required = false;
    document.getElementById('estado-fecha').required = false;
    document.getElementById('estado-cliente').required = false;

    if (targetState === 'RESERVADO') {
        fReservado.style.display = 'block';
        document.getElementById('estado-certificado').required = true;
        document.getElementById('estado-fecha').required = true;
        document.getElementById('estado-fecha').valueAsDate = new Date();
    } 
    else if (targetState === 'ENTREGADO') {
        fEntregado.style.display = 'block';
        document.getElementById('estado-cliente').required = true;
    }

    modal.classList.add('active');
}

// ==========================================
// GESTIÓN DE FORMULARIOS (Submits)
// ==========================================
async function handleFormNuevo(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-save-nuevo');
    btn.disabled = true;
    btn.innerText = 'Guardando...';

    const record = {
        id: document.getElementById('nuevo-id').value,
        instrumento: document.getElementById('nuevo-nombre').value,
        marca: document.getElementById('nuevo-marca').value,
        modelo: document.getElementById('nuevo-modelo').value,
        serie: document.getElementById('nuevo-serie').value,
        fecha_calibracion: document.getElementById('nuevo-fecha').value,
        estado: 'DISPONIBLE',
        certificado: '',
        cliente: ''
    };

    // Recoger puntos 
    const puntos = [];
    const trs = document.querySelectorAll('#tbody-puntos tr');
    trs.forEach((tr) => {
        puntos.push({
            pt: tr.querySelector('input[name="pt-name"]').value,
            variable: tr.querySelector('input[name="pt-var"]').value,
            unidad: tr.querySelector('input[name="pt-unit"]').value,
            ref: tr.querySelector('input[name="pt-ref"]').value,
            inst: tr.querySelector('input[name="pt-inst"]').value
        });
    });
    record.puntos = JSON.stringify(puntos); // JSON de puntos con magnitudes

    await saveNewRecord(record);
    
    closeAllModals();
    renderTable();
    updateKPIs();
    
    btn.disabled = false;
    btn.innerText = 'Generar Entrada';
}

async function handleFormEstado(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-save-estado');
    btn.disabled = true;
    btn.innerText = 'Procesando...';

    const id = document.getElementById('estado-id').value;
    const targetState = document.getElementById('estado-target').value;
    
    let extraData = {};
    if(targetState === 'RESERVADO') {
        extraData.certificado = document.getElementById('estado-certificado').value;
        extraData.fecha = document.getElementById('estado-fecha').value;
    } else if (targetState === 'ENTREGADO') {
        extraData.cliente = document.getElementById('estado-cliente').value;
    }

    await updateStateRecord(id, targetState, extraData);

    closeAllModals();
    renderTable();
    updateKPIs();

    btn.disabled = false;
    btn.innerText = 'Confirmar';
}

function openModalFicha(id) {
    const modal = document.getElementById('modal-ficha');
    const item = appState.data.find(x => x.id === id);
    if(!item) return;

    // Llenar Cabecera
    document.getElementById('ficha-id').innerText = `ID: ${item.id}`;
    document.getElementById('ficha-instrumento').innerText = item.instrumento || '---';
    document.getElementById('ficha-marca').innerText = item.marca || '---';
    document.getElementById('ficha-modelo').innerText = item.modelo || '---';
    document.getElementById('ficha-serie').innerText = item.serie || '---';

    // Llenar Trazabilidad
    document.getElementById('ficha-estado').innerText = item.estado;
    document.getElementById('ficha-fecha').innerText = item.fecha_calibracion || '---';
    document.getElementById('ficha-certificado').innerText = item.certificado || '---';
    document.getElementById('ficha-cliente').innerText = item.cliente || '---';

    // Llenar Puntos (Tabla)
    const tbody = document.getElementById('ficha-tbody-puntos');
    tbody.innerHTML = '';
    
    let puntosArray = [];
    try {
        if(item.puntos) puntosArray = JSON.parse(item.puntos);
    } catch(e) { console.error("Error leyendo puntos Json", e); }

    if(puntosArray.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color: #9ca3af;">Sin puntos de medición registrados.</td></tr>';
    } else {
        puntosArray.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${p.pt}</strong></td>
                <td>${p.variable || '---'}</td>
                <td>${p.unidad || '-'}</td>
                <td>${p.ref || '-'}</td>
                <td>${p.inst || '-'}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Inicializar iconos una vez terminada la tabla
    lucide.createIcons();

    modal.classList.add('active');
}

async function handleFormEdit(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-save-edit');
    const originalText = btn.innerText;
    btn.disabled = true;
    btn.innerText = 'Actualizando...';

    const record = {
        id: document.getElementById('edit-id').value,
        instrumento: document.getElementById('edit-instrumento').value,
        marca: document.getElementById('edit-marca').value,
        modelo: document.getElementById('edit-modelo').value,
        serie: document.getElementById('edit-serie').value,
        estado: document.getElementById('edit-estado').value,
        fecha_calibracion: document.getElementById('edit-fecha').value,
        certificado: document.getElementById('edit-certificado').value,
        cliente: document.getElementById('edit-cliente').value
    };

    const puntos = [];
    document.querySelectorAll('#edit-tbody-puntos tr').forEach(tr => {
        puntos.push({
            pt: tr.querySelector('input[name="pt-name"]').value,
            variable: tr.querySelector('input[name="pt-var"]').value,
            unidad: tr.querySelector('input[name="pt-unit"]').value,
            ref: tr.querySelector('input[name="pt-ref"]').value,
            inst: tr.querySelector('input[name="pt-inst"]').value
        });
    });
    record.puntos = JSON.stringify(puntos);

    const res = await updateFullRecord(record);
    if(res.success) {
        closeAllModals();
        fetchData(); // Recargar para ver cambios
    } else {
        alert("Error: " + res.error);
    }
    
    btn.disabled = false;
    btn.innerText = originalText;
}

function openModalStats() {
    const modal = document.getElementById('modal-stats');
    modal.classList.add('active');
    
    // Pequeño delay para que el modal se anime y Chart.js detecte el tamaño
    setTimeout(renderCharts, 100);
}

function renderCharts() {
    const statesData = {
        'DISPONIBLE': 0,
        'RESERVADO': 0,
        'ENTREGADO': 0
    };
    const instrumentsMap = {};

    appState.data.forEach(item => {
        statesData[item.estado]++;
        const key = item.instrumento || 'Sin Nombre';
        instrumentsMap[key] = (instrumentsMap[key] || 0) + 1;
    });

    // Chart 1: Estados
    const canvasStates = document.getElementById('chart-states');
    if(!canvasStates) return;
    const ctxStates = canvasStates.getContext('2d');
    if(appState.charts.states) appState.charts.states.destroy();
    appState.charts.states = new Chart(ctxStates, {
        type: 'doughnut',
        data: {
            labels: Object.keys(statesData),
            datasets: [{
                data: Object.values(statesData),
                backgroundColor: ['#10b981', '#f59e0b', '#3b82f6'],
                borderWidth: 0
            }]
        },
        options: {
            plugins: { legend: { position: 'bottom' } },
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Chart 2: Top Instrumentos
    const canvasInst = document.getElementById('chart-instruments');
    if(!canvasInst) return;
    const ctxInst = canvasInst.getContext('2d');
    if(appState.charts.instruments) appState.charts.instruments.destroy();
    
    const sortedInstruments = Object.entries(instrumentsMap)
        .sort((a,b) => b[1] - a[1])
        .slice(0, 7);

    appState.charts.instruments = new Chart(ctxInst, {
        type: 'bar',
        data: {
            labels: sortedInstruments.map(x => x[0]),
            datasets: [{
                label: 'Cantidad',
                data: sortedInstruments.map(x => x[1]),
                backgroundColor: '#6366f1',
                borderRadius: 4
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
        }
    });

    // Resumen numérico
    const summaryEl = document.getElementById('stats-summary');
    if(summaryEl) {
        summaryEl.innerHTML = `
            <div class="stat-card-mini"><h4>Total Equipos</h4><p>${appState.data.length}</p></div>
            <div class="stat-card-mini"><h4>Disponibles</h4><p>${statesData['DISPONIBLE']}</p></div>
            <div class="stat-card-mini"><h4>En Proceso</h4><p>${statesData['RESERVADO']}</p></div>
        `;
    }
}
