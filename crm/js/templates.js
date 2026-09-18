// ==========================================
// METROCRM PRO - EMAIL STUDIO & TEMPLATES
// ==========================================

const CRM_TEMPLATES = {
    "onboarding_ml": {
        id: "onboarding_ml",
        nombre: "Entrega de Certificado & Presentación de Laboratorio",
        nicho: "gral",
        asunto: "Certificado de Calibración & Respaldo Técnico - {{empresa}} | CR MEDICION",
        cuerpo: `Estimado/a {{contacto}},

Te contactamos desde el Laboratorio de Calibraciones (CR MEDICION | SchwyzLab) en Buenos Aires.

Queríamos agradecerte por tu reciente compra a través de Mercado Libre y confirmar la emisión y respaldo técnico de su Certificado de Calibración:
• Equipo adquirido: {{instrumento}}
• Certificado Nº: {{certificado}}
• Validez recomendada: Hasta {{vencimiento}}

Aprovechamos para ponernos a disposición de {{empresa}} como su laboratorio directo de confianza. Para que tengan presente lo que podemos resolverles cuando lo precisen, contamos con alcance metrológico para calibrar y certificar todo su parque de instrumentos:
{{oportunidades}}

Ventajas directas de trabajar con nuestro laboratorio:
• Tiempos rápidos de calibración (48 a 72 hs) para evitar que sus herramientas queden fuera de uso.
• Certificados con cálculo de incertidumbre y trazabilidad metrológica para auditorías (ISO 9001, SRT, ANMAT).
• Tarifas especiales por lote si deciden calibrar varios equipos juntos.
• Sistema de aviso preventivo automático antes de que venza el certificado, para que no tengan que estar pendientes de las fechas.

Les dejamos nuestro contacto directo para cualquier consulta técnica o solicitud de presupuesto formal:
• WhatsApp directo: +54 11 2863-4493
• Teléfono: (011) 4361-3499
• Laboratorio: Perú 1297, San Telmo, CABA

¡Muchos éxitos con el equipo y quedamos a su entera disposición!

Saludos cordiales,

Darío Del Real
Laboratorio de Metrología & Calibraciones
CR MEDICION | SchwyzLab
Perú 1297 - CABA - Argentina
WhatsApp: +54 11 2863-4493 | Web: www.todomedicion.com`
    },

    "hs_srt_preventiva": {
        id: "hs_srt_preventiva",
        nombre: "Servicios de Calibración para Higiene y Seguridad (SRT)",
        nicho: "hs",
        asunto: "Servicios de Calibración para Instrumental de Higiene y Seguridad - {{empresa}}",
        cuerpo: `Hola {{contacto}}, espero que estés muy bien.

Te escribo desde el Laboratorio de Calibraciones CR MEDICION / SchwyzLab en relación al instrumental de medición laboral ({{instrumento}}) que adquirieron con nosotros.

Como sabemos que las mediciones de higiene y seguridad laboral están sujetas a auditorías periódicas y exigencias de las ART bajo resoluciones de la Superintendencia de Riesgos del Trabajo (SRT), queríamos dejarles a mano los servicios específicos que brindamos para su sector:

• Calibración con emisión de informe técnico y certificados trazables para:
  - Luxómetros (conforme a Resolución SRT 84/12 de Iluminación Laboral).
  - Sonómetros y Dosímetros (conforme a Resolución SRT 85/12 de Ruido).
  - Calibradores acústicos de campo.
  - Detectores de gases monogas y multigas (con verificación de respuesta y sensores).
• Provisión de mezclas de gas patrón para Bump Test y verificación periódica de detectores.
• Aviso preventivo de vencimiento para asegurar que sus certificados estén siempre al día antes de una inspección.
• Turnos prioritarios en laboratorio (48 a 72 hs hábiles) para que los técnicos de campo no se queden sin instrumental.

Les dejamos este canal directo por si en algún momento precisan renovar certificados, verificar equipos antes de una medición o cotizar un lote de instrumental de su estudio o empresa. Nos pueden responder directamente a este correo o escribirnos por WhatsApp al +54 11 2863-4493.

¡Muchos éxitos y a total disposición!

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
        asunto: "Calibración y Trazabilidad Térmica para Farma y Alimentos - {{empresa}}",
        cuerpo: `Estimado/a {{contacto}},

Nos comunicamos desde el Laboratorio de Metrología CR MEDICION / SchwyzLab en referencia al instrumental de control térmico y ambiental ({{instrumento}}) que utilizan en {{empresa}}.

Para respaldar sus controles de calidad, cadena de frío y los requerimientos de auditorías bajo normativas ANMAT, BPM / GMP y SENASA, les dejamos a mano los servicios especializados que ofrecemos para su sector:

• Calibración en laboratorio con patrones trazables a organismos oficiales:
  - Termohigrómetros y termómetros digitales en múltiples puntos de control.
  - Dataloggers de temperatura y humedad para depósitos y transporte.
  - Termómetros de penetración, inmersión y control de cámaras frigoríficas.
• Emisión de Certificados de Calibración con cálculo de incertidumbre expandida y tablas de corrección para auditorías de calidad.
• Provisión de DataLoggers de última generación con alarmas y software de trazabilidad inalterable (PDF automático).
• Planificación de turnos ágiles para minimizar el tiempo del instrumental fuera de servicio.

Les dejamos este contacto directo para cuando requieran calibrar instrumental de planta, validar nuevos depósitos o solicitar presupuestos formales. Pueden escribirnos respondiendo este correo o por WhatsApp al +54 11 2863-4493.

Agradecemos su confianza de siempre.

Saludos cordiales,

Darío Del Real
Laboratorio de Metrología & Calidad
CR MEDICION | SchwyzLab
Perú 1297 - CABA | WhatsApp: +54 11 2863-4493 | www.todomedicion.com`
    },

    "metal_iso9001": {
        id: "metal_iso9001",
        nombre: "Calibración Instrumental y Trazabilidad ISO 9001",
        nicho: "metal",
        asunto: "Calibración Instrumental y Trazabilidad ISO 9001 - {{empresa}}",
        cuerpo: `Estimado/a {{contacto}},

Te escribimos desde el Laboratorio de Metrología CR MEDICION / SchwyzLab en relación al instrumental de precisión ({{instrumento}}) incorporado en {{empresa}}.

Para acompañar sus procesos de mecanizado, tolerancias dimensionales y auditorías bajo normas ISO 9001, les compartimos los servicios metrológicos que brindamos a la industria metalmecánica y automotriz:

• Calibración dimensional con patrones trazables:
  - Calibres pie de rey, micrómetros de exteriores e interiores y relojes comparadores.
  - Verificación y calibración de torquímetros y llaves dinamométricas (con tabla de desvío y repetibilidad).
  - Medidores de espesores por ultrasonido, rugosímetros y durómetros.
• Emisión de certificados con determinación de error e incertidumbre metrológica requerida por auditores de calidad.
• Tiempos rápidos de calibración para que las herramientas de taller o metrología no demoren las líneas de producción.
• Tarifas preferenciales por lote si calibran varios instrumentos en un mismo envío.

Quedamos a su entera disposición para cuando precisen calibrar patrones de taller, verificar torquímetros o solicitar presupuestos formales.

Pueden contactarnos directamente respondiendo este correo o por WhatsApp al +54 11 2863-4493.

Saludos cordiales,

Darío Del Real
Área Metrología Dimensional e Industrial
CR MEDICION | SchwyzLab
Perú 1297 - CABA | WhatsApp: +54 11 2863-4493 | www.todomedicion.com`
    },

    "end_ultrasonido": {
        id: "end_ultrasonido",
        nombre: "Calibración de Medidores de Espesores & END",
        nicho: "end",
        asunto: "Servicios de Calibración para Instrumental END - {{empresa}}",
        cuerpo: `Estimado/a {{contacto}},

Nos ponemos en contacto desde el Laboratorio de Metrología CR MEDICION / SchwyzLab con respecto a su instrumental de ensayos y control técnico ({{instrumento}}).

Para garantizar la exactitud de sus inspecciones de obra, ensayos no destructivos y peritajes técnicos, ponemos a su disposición nuestros servicios especializados de calibración:

• Calibración con patrones trazables y bloques escalonados certificados:
  - Medidores de espesor por ultrasonido (acero, fundición y plásticos).
  - Inclinómetros y niveles digitales de precisión.
  - Pirómetros infrarrojos de alta temperatura y medidores de recubrimiento.
• Emisión de certificado oficial con datos de repetibilidad, desvío e incertidumbre para presentar ante comitentes o auditorías de obra.
• Servicio ágil de laboratorio con recepción y despacho coordinado para no retrasar los plazos de obra.

Les dejamos nuestro contacto directo para cuando precisen calibrar este o cualquier otro instrumento de su parque técnico. Nos pueden escribir a este email o por WhatsApp al +54 11 2863-4493.

Saludos cordiales,

Darío Del Real
Laboratorio de Calibraciones Industriales
CR MEDICION | SchwyzLab
Perú 1297 - CABA | WhatsApp: +54 11 2863-4493 | www.todomedicion.com`
    },

    "gas_seguridad_presion": {
        id: "gas_seguridad_presion",
        nombre: "Verificación de Gases Patrón y Presión",
        nicho: "gas",
        asunto: "Servicios de Verificación y Calibración en Presión y Gases - {{empresa}}",
        cuerpo: `Estimado/a {{contacto}},

Esperamos que se encuentren muy bien. Nos comunicamos desde el Laboratorio CR MEDICION / SchwyzLab en relación al parque de medición y seguridad operativa de {{empresa}} ({{instrumento}}).

Para respaldar sus programas de mantenimiento preventivo, seguridad en líneas presurizadas y cumplimiento normativo, les compartimos nuestras soluciones directas de laboratorio:

• Calibración y control metrológico de:
  - Manómetros de proceso, manómetros patrón y transmisores de presión.
  - Detectores de gases monogas y multigas (con emisión de informe de respuesta y sensibilidad de sensores).
  - Verificación de torquímetros para apriete de bridas y conexiones críticas.
• Provisión de mezclas de gas patrón certificadas para verificación funcional (Bump Test) en planta.
• Emisión de certificados con trazabilidad oficial para auditorías de seguridad e higiene y entes reguladores.

Quedamos a su disposición para cuando precisen presupuestos formales, renovación de certificados o calibración por lote de sus manómetros e instrumental de planta.

Nos pueden responder este correo o escribirnos al WhatsApp +54 11 2863-4493.

Saludos cordiales,

Darío Del Real
Equipo Metrológico & Seguridad de Procesos
CR MEDICION | SchwyzLab
Perú 1297 - CABA | WhatsApp: +54 11 2863-4493 | www.todomedicion.com`
    },

    "recalibracion_anual": {
        id: "recalibracion_anual",
        nombre: "Aviso de Re-calibración Anual Preventiva",
        nicho: "gral",
        asunto: "Aviso Preventivo: Próximo Vencimiento de Calibración - {{empresa}}",
        cuerpo: `Hola {{contacto}}, ¡buen día!

Te contactamos desde el Laboratorio de Calibraciones CR MEDICION / SchwyzLab para brindarte un aviso de cortesía.

Revisando el historial de {{empresa}}, observamos que el certificado de su equipo {{instrumento}} (Certificado Nº: {{certificado}}) se encuentra próximo a cumplir su ciclo de validez anual el día {{vencimiento}}.

Para que no tengan que preocuparse por imprevistos ante una auditoría o control de calidad, les acercamos las facilidades que tenemos reservadas para clientes de nuestro laboratorio:
• Turno prioritario en laboratorio (entrega en 48 a 72 hs) para evitar que el equipo quede fuera de servicio.
• Descuento preferencial directo por renovación anual preventiva.
• Posibilidad de incluir otros instrumentos de la empresa en el mismo despacho para optimizar costos de logística.

Si desean que les preparemos la cotización formal o tienen dudas sobre el estado de este u otros equipos, nos pueden responder directamente a este correo o escribirnos por WhatsApp al +54 11 2863-4493.

¡Muchos éxitos y gracias por seguir confiando en nuestro laboratorio!

Saludos cordiales,

Darío Del Real
CR MEDICION | SchwyzLab Laboratorio de Metrología
Perú 1297 - CABA - Argentina | Tel: (011) 4361-3499 | WhatsApp: +54 11 2863-4493
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
            const sortedEq = [...client.equipos].sort((a, b) => {
                const va = a.fecha_vencimiento || '9999-12-31';
                const vb = b.fecha_vencimiento || '9999-12-31';
                return va.localeCompare(vb);
            });
            const eq = sortedEq[0];
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
