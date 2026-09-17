// ==========================================
// METROCRM PRO - EMAIL STUDIO & TEMPLATES
// ==========================================

const CRM_TEMPLATES = {
    "onboarding_ml": {
        id: "onboarding_ml",
        nombre: "Entrega de Certificado & Presentación de Laboratorio",
        nicho: "gral",
        asunto: "Certificado de Calibración - {{empresa}} | CR MEDICION & SchwyzLab",
        cuerpo: `Estimado/a {{contacto}},

Te contactamos desde el Laboratorio de Calibraciones (CR MEDICION | SchwyzLab).

Queríamos agradecerte por tu compra a través de Mercado Libre y confirmar la emisión del Certificado de Calibración para su equipo:
• Equipo: {{instrumento}}
• Certificado Nº: {{certificado}}
• Validez recomendada: Hasta {{vencimiento}}

Aprovechamos para ponernos a disposición de {{empresa}} como su laboratorio de confianza. Contamos con alcance metrológico para calibrar y certificar todo su instrumental de planta:
{{oportunidades}}

¿Cuentan actualmente con otros instrumentos en uso que requieran calibración periódica o mantenimiento? Con gusto podemos prepararles una cotización formal y bonificada por lote.

Quedamos a su entera disposición.

Saludos cordiales,

Darío Del Real
Laboratorio de Metrología & Calibraciones
CR MEDICION | SchwyzLab
Perú 1297 - CABA - Argentina
Tel: +54 11 4361-3499 / WhatsApp: +54 11 2863-4493
Web: www.todomedicion.com`
    },

    "hs_srt_preventiva": {
        id: "hs_srt_preventiva",
        nombre: "Renovación Preventiva SRT (84/12 y 85/12) + Calibración",
        nicho: "hs",
        asunto: "Actualización de Calibración para Auditorías SRT - {{empresa}}",
        cuerpo: `Hola {{contacto}}, espero que estés muy bien.

Te escribo desde el Laboratorio de Calibraciones. Revisando nuestro registro de instrumental, vemos que cuentan con equipos de medición laboral ({{instrumento}}) utilizados para relevamientos de higiene y seguridad.

De cara a las próximas auditorías y verificaciones de cumplimiento de las resoluciones SRT 84/12 (Iluminación) y SRT 85/12 (Ruido Laboral), queríamos consultarles si precisan renovar los certificados de calibración o sumar nuevos equipos a la campaña.

Adicionalmente, incorporamos calibración y verificación de:
• Detectores de gases monogas y multigas (con emisión de informe técnico).
• Calibradores acústicos y dosímetros de ruido.

¿Tienen actualmente instrumental próximo a vencer o necesitan cotizar un lote de equipos? Quedo a su entera disposición para coordinar o enviarles presupuesto sin compromiso.

Saludos cordiales,

Darío Del Real
Área Técnica y Calibraciones
CR MEDICION | SchwyzLab
WhatsApp: +54 11 2863-4493 | www.todomedicion.com`
    },

    "farma_cadena_frio": {
        id: "farma_cadena_frio",
        nombre: "Trazabilidad Térmica & Normas GMP/BPM (Farma y Alimentos)",
        nicho: "farma",
        asunto: "Trazabilidad y Calibración Térmica / Humedad - {{empresa}}",
        cuerpo: `Estimado/a {{contacto}},

Nos comunicamos desde el Laboratorio de Calibración para saludarte y consultar sobre el estado de sus instrumentos de control térmico y ambiental ({{instrumento}}).

Para garantizar la cadena de frío, estabilidad de depósitos y cumplimiento estricto de normativas BPM / GMP / ANMAT, ponemos a su disposición nuestros servicios especializados:
• Calibración de Termohigrómetros y Termómetros con patrones trazables a organismos oficiales.
• Calibración de Dataloggers de temperatura y humedad en múltiples puntos de control.
• Provisión de DataLoggers de última generación con alarmas y software de trazabilidad.

¿Tienen previsto algún mantenimiento preventivo o calibración en las próximas semanas? Podemos coordinar turno prioritario en laboratorio para minimizar el tiempo de su instrumental fuera de servicio.

Agradecemos su confianza de siempre.

Saludos cordiales,

Laboratorio de Metrología & Calidad
CR MEDICION | SchwyzLab
WhatsApp: +54 11 2863-4493 | www.todomedicion.com`
    },

    "metal_iso9001": {
        id: "metal_iso9001",
        nombre: "Calibración Dimensional & Torquímetros (ISO 9001)",
        nicho: "metal",
        asunto: "Aseguramiento de Calidad y Calibración Instrumental - {{empresa}}",
        cuerpo: `Estimado/a {{contacto}},

Te escribimos desde el Laboratorio de Metrología. En vistas a sus procesos de mecanizado y control de calidad donde utilizan instrumental de precisión ({{instrumento}}), queremos ponernos a disposición para la calibración periódica de sus patrones e instrumentos de taller.

Nuestros alcances principales para el rubro metalmecánico incluyen:
• Calibración de Calibres, Micrómetros y Relojes Comparadores.
• Verificación y Calibración de Torquímetros y Llaves Dinamométricas.
• Control de Durómetros y Medidores de Rugosidad.

Emitimos certificados con cálculo de incertidumbre y trazabilidad metrológica conforme a los requerimientos de auditorías ISO 9001.

¿Tienen instrumentos en planta pendientes de calibración o necesitan cotizar la renovación de herramientas de medición?

Quedamos a su disposición.

Atentamente,

Área Metrología Dimensional e Industrial
CR MEDICION | SchwyzLab
WhatsApp: +54 11 2863-4493 | www.todomedicion.com`
    },

    "end_ultrasonido": {
        id: "end_ultrasonido",
        nombre: "Calibración de Medidores de Espesores & END",
        nicho: "end",
        asunto: "Certificación y Calibración de Instrumental END - {{empresa}}",
        cuerpo: `Estimado/a {{contacto}},

Nos ponemos en contacto desde el Laboratorio para consultar sobre el estado de su instrumental de ensayos no destructivos y control de obras ({{instrumento}}).

Contamos con servicio especializado de calibración con bloques escalonados y patrones certificados para:
• Medidores de espesor por ultrasonido.
• Inclinómetros y niveles digitales de precisión.
• Pirómetros infrarrojos de alta temperatura.

Si tienen proyectos en marcha o inspecciones programadas, podemos realizar la calibración ágil con retiro y entrega coordinada.

¿Desean que les preparemos una cotización actualizada?

Saludos cordiales,

Laboratorio de Calibraciones Industriales
CR MEDICION | SchwyzLab
WhatsApp: +54 11 2863-4493 | www.todomedicion.com`
    },

    "gas_seguridad_presion": {
        id: "gas_seguridad_presion",
        nombre: "Verificación de Gases Patrón y Presión",
        nicho: "gas",
        asunto: "Seguridad Operativa y Calibración de Instrumentos - {{empresa}}",
        cuerpo: `Estimado/a {{contacto}},

Esperamos que se encuentren muy bien. Nos contactamos en relación al parque de medición y seguridad operativa de {{empresa}} ({{instrumento}}).

Les recordamos nuestros servicios de verificación y calibración para líneas presurizadas y seguridad de planta:
• Calibración de Detectores de Gases y provisión de mezclas de gas patrón para Bump Test.
• Calibración de Manómetros patrón y transmisores de presión.
• Verificación de torquímetros para apriete de bridas y conexiones críticas.

Quedamos a su disposición para coordinar los ensayos técnicos o enviar presupuesto formal.

Saludos cordiales,

Equipo Metrológico & Seguridad de Procesos
CR MEDICION | SchwyzLab
WhatsApp: +54 11 2863-4493 | www.todomedicion.com`
    },

    "recalibracion_anual": {
        id: "recalibracion_anual",
        nombre: "Aviso de Re-calibración Anual Preventiva",
        nicho: "gral",
        asunto: "Aviso de Próximo Vencimiento de Calibración - {{empresa}}",
        cuerpo: `Hola {{contacto}}, ¡buen día!

Te contactamos desde el Laboratorio de Calibraciones. 

Revisando el historial de {{empresa}}, observamos que el certificado de su equipo {{instrumento}} (Certificado Nº: {{certificado}}) se encuentra próximo a cumplir el ciclo de validez anual el día {{vencimiento}}.

Para garantizar que sus mediciones continúen bajo estándares certificados y sin demoras operativas frente a auditorías o controles de calidad, ponemos a su disposición:
1. Turno prioritario de ingreso en laboratorio para entrega en 48/72 hs.
2. Descuento especial por renovación anual preventiva.
3. Posibilidad de incluir otros equipos de la planta en el mismo lote de retiro/entrega.

¿Te gustaría que te preparemos el presupuesto formal para coordinar el ingreso?

¡Muchas gracias y que tengas excelente semana!

Saludos cordiales,

Darío Del Real
CR MEDICION | SchwyzLab Laboratorio de Metrología
Perú 1297 - CABA - Argentina
Tel: +54 11 4361-3499 / WhatsApp: +54 11 2863-4493
Web: www.todomedicion.com`
    },

    "cotizacion_servicios": {
        id: "cotizacion_servicios",
        nombre: "Propuesta de Servicios de Laboratorio & Cotización",
        nicho: "gral",
        asunto: "Propuesta de Calibración y Mantenimiento de Instrumental - {{empresa}}",
        cuerpo: `Estimado/a {{contacto}},

Agradecemos su contacto e interés en nuestros servicios metrológicos.

Adjuntamos / presentamos la cotización correspondiente al servicio de calibración y certificación con trazabilidad metrológica para el parque instrumental de {{empresa}}.

Nuestros servicios incluyen:
• Ensayos bajo procedimientos normalizados y comparación contra patrones trazables.
• Emisión de Certificado de Calibración con cálculo de incertidumbre expandida.
• Etiqueta de calibración identificatoria autoadhesiva e informe técnico de recepción.
• Asesoramiento técnico personalizado pre y post calibración.

Quedamos a su entera disposición para cualquier aclaración o para coordinar la logística de los equipos.

Atentamente,

Darío Del Real
Director Técnico / Comercial
CR MEDICION | SchwyzLab
WhatsApp: +54 11 2863-4493 | www.todomedicion.com`
    }
};

const EmailStudio = {
    interpolate(templateStr, client) {
        if (!templateStr || !client) return '';
        
        const contacto = (client.contactos && client.contactos.length > 0) ? client.contactos[0] : (client.empresa || 'Estimado/a');
        const empresa = client.empresa || client.nombre || '';
        const categorias = (client.categorias && client.categorias.length > 0) ? client.categorias.join(', ') : 'instrumental de medición';
        
        let primerCert = 'N/A';
        let primerVenc = '12 meses';
        if (client.equipos && client.equipos.length > 0) {
            const eq = client.equipos[0];
            primerCert = eq.certificado || primerCert;
            primerVenc = eq.fecha_vencimiento || primerVenc;
        }

        const oportunidades = (client.oportunidades && client.oportunidades.length > 0) 
            ? client.oportunidades.map(o => '• ' + o).join('\n')
            : '• Calibración y mantenimiento integral de instrumental de planta.';

        return templateStr
            .replace(/\{\{contacto\}\}/g, contacto)
            .replace(/\{\{empresa\}\}/g, empresa)
            .replace(/\{\{instrumento\}\}/g, categorias)
            .replace(/\{\{certificado\}\}/g, primerCert)
            .replace(/\{\{vencimiento\}\}/g, primerVenc)
            .replace(/\{\{oportunidades\}\}/g, oportunidades);
    },

    openOutlookDesktop(to, subject, body) {
        const mailto = `mailto:${encodeURIComponent(to || '')}?subject=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(body || '')}`;
        window.location.href = mailto;
    },

    openGmailWeb(to, subject, body) {
        const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to || '')}&su=${encodeURIComponent(subject || '')}&body=${encodeURIComponent(body || '')}`;
        window.open(url, '_blank');
    },

    async copyToClipboard(subject, body) {
        const fullText = `Asunto: ${subject}\n\n${body}`;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(fullText);
            return true;
        }
        // Fallback textarea
        const ta = document.createElement('textarea');
        ta.value = fullText;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        return true;
    }
};

window.CRM_TEMPLATES = CRM_TEMPLATES;
window.EmailStudio = EmailStudio;
