// ==========================================
// METROCRM PRO - GEMINI AI ENGINE (FREE TIER)
// ==========================================

const GeminiAI = {
    STORAGE_KEY: 'metrocrm_gemini_api_key',

    getApiKey() {
        return localStorage.getItem(this.STORAGE_KEY) || '';
    },

    setApiKey(key) {
        if (!key) {
            localStorage.removeItem(this.STORAGE_KEY);
        } else {
            localStorage.setItem(this.STORAGE_KEY, key.trim());
        }
        this.updateStatusBadge();
    },

    hasApiKey() {
        return Boolean(this.getApiKey());
    },

    updateStatusBadge() {
        const badge = document.getElementById('gemini-status-badge');
        if (!badge) return;

        if (this.hasApiKey()) {
            badge.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span><span class="text-emerald-800 font-bold">Gemini IA Activo</span>`;
            badge.className = "flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs cursor-pointer hover:bg-emerald-100 transition shadow-2xs";
        } else {
            badge.innerHTML = `<i data-lucide="sparkles" class="w-3.5 h-3.5 text-blue-600"></i><span class="text-blue-800 font-bold">Activar Gemini IA (Gratis)</span>`;
            badge.className = "flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-xs cursor-pointer hover:bg-blue-100 transition shadow-2xs";
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    async callModel(prompt, systemInstruction = '', enableSearch = false) {
        const apiKey = this.getApiKey();
        if (!apiKey) {
            window.openSettingsModal();
            throw new Error("Por favor configura tu API Key gratuita de Google AI Studio.");
        }

        const candidates = [];
        
        // 1. Consultar ModelService.ListModels para autodetectar los modelos soportados por esta API Key
        try {
            const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;
            const resp = await fetch(listUrl);
            if (resp.ok) {
                const data = await resp.json();
                const available = (data.models || []).filter(m => 
                    m.supportedGenerationMethods && m.supportedGenerationMethods.includes('generateContent')
                );
                
                // Priorizar modelos flash
                available.forEach(m => {
                    const clean = m.name.replace(/^models\//, '');
                    if (clean.includes('flash')) {
                        candidates.push({ version: 'v1beta', model: clean });
                    }
                });
                // Otros modelos compatibles (gemini-pro, etc.)
                available.forEach(m => {
                    const clean = m.name.replace(/^models\//, '');
                    if (!clean.includes('flash') && clean.includes('gemini')) {
                        candidates.push({ version: 'v1beta', model: clean });
                    }
                });
            }
        } catch (e) {
            console.warn("No se pudo consultar ListModels, usando lista de candidatos:", e);
        }

        // 2. Candidatos de respaldo comprobados en orden de preferencia
        const defaultCandidates = [
            { version: 'v1beta', model: 'gemini-1.5-flash-latest' },
            { version: 'v1', model: 'gemini-1.5-flash' },
            { version: 'v1beta', model: 'gemini-2.0-flash' },
            { version: 'v1beta', model: 'gemini-1.5-flash-001' },
            { version: 'v1beta', model: 'gemini-1.5-flash-002' },
            { version: 'v1beta', model: 'gemini-1.5-flash' },
            { version: 'v1beta', model: 'gemini-pro' }
        ];

        defaultCandidates.forEach(dc => {
            if (!candidates.some(c => c.model === dc.model && c.version === dc.version)) {
                candidates.push(dc);
            }
        });

        const basePayload = {
            contents: [
                {
                    parts: [{ text: prompt }]
                }
            ],
            generationConfig: {
                temperature: 0.2,
                maxOutputTokens: 800
            }
        };

        if (systemInstruction) {
            basePayload.systemInstruction = {
                parts: [{ text: systemInstruction }]
            };
        }

        let lastError = null;

        for (const cand of candidates) {
            // Intento 1: Con Google Search Grounding si se habilitó y es v1beta
            if (enableSearch && cand.version === 'v1beta') {
                try {
                    const searchPayload = {
                        ...basePayload,
                        tools: [{ google_search: {} }]
                    };
                    const url = `https://generativelanguage.googleapis.com/${cand.version}/models/${cand.model}:generateContent?key=${apiKey}`;
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(searchPayload)
                    });

                    if (response.ok) {
                        const data = await response.json();
                        const candidate = data.candidates?.[0];
                        const text = candidate?.content?.parts?.map(p => p.text || '').join('\n').trim();
                        if (text) {
                            console.log(`MetroCRM: Conexión con búsqueda Google exitosa en ${cand.model}`);
                            return text;
                        }
                    } else {
                        console.warn(`Búsqueda web no soportada en ${cand.model} (${response.status}), pasando a modo estándar...`);
                    }
                } catch (errSearch) {
                    console.warn(`Fallo search grounding en ${cand.model}:`, errSearch);
                }
            }

            // Intento 2: Llamada estándar
            try {
                const url = `https://generativelanguage.googleapis.com/${cand.version}/models/${cand.model}:generateContent?key=${apiKey}`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(basePayload)
                });

                if (response.ok) {
                    const data = await response.json();
                    const candidate = data.candidates?.[0];
                    const text = candidate?.content?.parts?.map(p => p.text || '').join('\n').trim();
                    if (text) {
                        console.log(`MetroCRM: Conexión exitosa con modelo ${cand.model} (${cand.version})`);
                        return text;
                    }
                } else {
                    const errData = await response.json().catch(() => ({}));
                    const msg = errData.error?.message || `HTTP ${response.status}`;
                    lastError = new Error(msg);
                    console.warn(`Intento con ${cand.model} (${cand.version}) falló: ${msg}. Probando siguiente modelo...`);
                }
            } catch (err) {
                lastError = err;
                console.warn(`Error de red con ${cand.model}:`, err);
            }
        }

        throw lastError || new Error("No se pudo obtener respuesta de ningún modelo de Gemini disponible.");
    },

    // 1. INVESTIGAR Y PERFILAR EMPRESA (CON BÚSQUEDA WEB Y CONOCIMIENTO NORMATIVO)
    async investigateClient(client) {
        const system = `Eres un consultor experto en inteligencia comercial B2B y metrología industrial para el Laboratorio CR MEDICION / SchwyzLab en Argentina.
Investiga en la web e identifica con precisión la actividad económica y rubro de esta empresa que compró instrumental en Mercado Libre.

CRITERIOS ESTRICTOS DE CLASIFICACIÓN:
1. "farma" (Farmacéutica, Alimentos y Laboratorios):
   - OBLIGATORIO si la empresa es Droguería, Distribuidora de Medicamentos, Productos Médicos, Insumos Sanitarios, Laboratorio Medicinal, Cosmética o Alimentos.
   - REGLA CRÍTICA: Si una droguería o distribuidora médica compra termohigrómetros, dataloggers o termómetros, su nicho es OBLIGATORIAMENTE "farma" (NUNCA "hs"). Para droguerías, los termohigrómetros son exigidos por Disposición ANMAT 2069/18 y Buenas Prácticas de Distribución (BPD) para mapeo térmico y control de depósitos (15°C a 25°C) y cadena de frío (2°C a 8°C). Su scoring debe ser "A".
2. "hs" (Higiene, Seguridad y Medio Ambiente):
   - Solo consultoras o profesionales de Higiene y Seguridad Laboral que miden ruido laboral (Res. SRT 85/12), iluminación (Res. SRT 84/12) o ergonomía con luxómetros, sonómetros o dosímetros.
3. "metal" (Metalmecánica, Automotriz y Mecanizado):
   - Mecanizados, autopartistas, matricerías, tornerías, metalúrgicas (calibres, micrómetros, torquímetros, ISO 9001).
4. "end" (Construcción, END y Minería):
   - Ensayos no destructivos, control de hormigón, ultrasonido, obras civiles.
5. "gas" (Gas, Petróleo y Plantas de Proceso):
   - Gas, petróleo, petroquímica, líneas de presión.
6. "gral" (Servicios Generales y Mantenimiento):
   - Mantenimiento general o usuario final.

Devuelve ÚNICAMENTE un objeto JSON válido, sin bloques de código markdown, con la siguiente estructura:
{
  "rubro_detalle": "breve resumen de la actividad real de la empresa (ej: Droguería y distribución de medicamentos y productos médicos)",
  "tipo_cliente": "Droguería / Distribuidora de Salud | Laboratorio Farma | Consultora HyS | Metalúrgica | Industria/Planta | Usuario Final",
  "nicho_id": "farma | hs | metal | end | gas | gral",
  "scoring": "A | B | C",
  "pitch_personalizado": "argumento comercial persuasivo y técnico de 2 líneas mencionando normativas aplicables (ej: ANMAT BPD, SRT, ISO)",
  "oportunidades": ["oportunidad 1 de calibración o venta cruzada", "oportunidad 2"]
}`;

        const prompt = `Investiga en la web esta empresa de Argentina y perfila su rubro comercial:
- Razón Social / Empresa: ${client.empresa || client.nombre}
- Sitio Web / URL: ${client.web || 'No especificada (buscar en Google por el nombre)'}
- Contacto: ${(client.contactos || []).join(', ')}
- Email: ${(client.emails || []).join(', ')}
- CUIT actual: ${client.cuit || 'Desconocido'}
- Equipos comprados en Mercado Libre: ${(client.categorias || []).join(', ')}
- Marcas: ${(client.marcas || []).join(', ')}
${client.notas && client.notas.length > 0 ? `- Antecedentes o notas: ${client.notas.map(n => n.texto).join('; ')}` : ''}`;

        const raw = await this.callModel(prompt, system, true);
        try {
            // Clean markdown fences if any
            const cleaned = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
            return JSON.parse(cleaned);
        } catch (e) {
            console.error("Fallo al parsear JSON de Gemini:", raw);
            throw new Error("No se pudo interpretar el resultado estructurado de la IA.");
        }
    },

    // 2. REDACTAR EMAIL HIPERPERSONALIZADO (100% INFORMATIVO Y ANTI-SPAM)
    async generateCustomEmail(client, tone = 'informativo y servicial') {
        const system = `Eres Darío Del Real, responsable del Laboratorio de Metrología y Calibraciones CR MEDICION / SchwyzLab en Buenos Aires, Argentina.
Redacta un correo comercial de contacto institucional, 100% informativo, técnico y de alto valor para un cliente que compró un instrumento a través de Mercado Libre.

POLÍTICA ESTRICTA ANTI-SPAM Y CERO CUESTIONARIOS:
1. PROHIBIDO HACER PREGUNTAS INQUISITIVAS O CUESTIONARIOS NUMERADOS:
   - NUNCA pongas preguntas como: "¿Cuál es el plan de uso...?", "¿Cuentan con un inventario en planta...?", "¿Podemos agendar una llamada de 15 min?". Nadie responde eso y genera rechazo inmediato por parecer spam invasivo o darles trabajo.
2. ENFOQUE DIRECTO, CLARO Y SERVICIAL:
   - Saludo cordial y agradecimiento sincero por la compra del equipo en Mercado Libre.
   - Confirmación de que el instrumento cuenta con Certificado de Calibración con trazabilidad oficial emitida por nuestro laboratorio.
   - Presentación explícita y concisa (en viñetas claras) de QUÉ SOLUCIONES Y CALIBRACIONES EXACTAS OFRECEMOS para su rubro específico:
     * Si es Higiene y Seguridad: Calibración y certificación periódica de sonómetros, dosímetros (Res. SRT 85/12), luxómetros (Res. SRT 84/12), detectores de gases y calibradores acústicos para auditorías de ART. Provisión de gas patrón para Bump Test.
     * Si es Farma/Alimentos/Salud: Trazabilidad térmica y calibración de termohigrómetros, dataloggers de temperatura y humedad, termómetros de inmersión y penetración conforme a normativas ANMAT y BPM / GMP.
     * Si es Metalmecánica/Automotriz: Calibración dimensional con cálculo de incertidumbre de calibres, micrómetros, comparadores, torquímetros y llaves dinamométricas para auditorías ISO 9001.
     * Si es Construcción/END: Calibración de medidores de espesor por ultrasonido, inclinómetros, pirómetros y medidores de recubrimiento.
     * Si es Gas/Procesos: Calibración de manómetros patrón y de proceso, transmisores de presión y verificación de torquímetros de bridas.
   - Ventajas prácticas de trabajar directo con el laboratorio: entrega rápida (48 a 72 hs) para no frenar la actividad, aviso preventivo automático antes de que venza el certificado, y descuentos por lote si calibran varios equipos.
3. CIERRE AMABLE Y SIN PRESIÓN:
   - Indicar que guarden este contacto para cuando necesiten calibrar instrumental, verificar equipos o solicitar presupuestos formales.
   - Incluir datos de contacto directo: WhatsApp +54 11 2863-4493, Teléfono (011) 4361-3499, Laboratorio en Perú 1297 (CABA), Web www.todomedicion.com.

Devuelve ÚNICAMENTE un JSON válido con esta estructura:
{
  "subject": "asunto formal y específico (ej: Respaldo Metrológico y Servicios de Calibración - [Empresa])",
  "body": "cuerpo del correo completo con saludo, viñetas de servicios, ventajas, cierre sin presión y firma formal"
}`;

        const prompt = `Cliente:
- Empresa: ${client.empresa || client.nombre}
- Contacto: ${(client.contactos && client.contactos[0]) ? client.contactos[0] : 'Estimado/a'}
- Equipos adquiridos: ${(client.categorias || []).join(', ') || 'Instrumental de medición'}
- Certificados: ${client.equipos ? client.equipos.map(e => e.certificado).filter(Boolean).join(', ') : ''}
- Nicho: ${client.nicho || 'Metrología Industrial'}
- Oportunidades del nicho: ${(client.oportunidades || []).join('; ')}

Redacta el correo siguiendo estrictamente el tono informativo y de valor, sin preguntas ni cuestionarios, orientado a dar soluciones concretas a su rubro y dejar el canal abierto.`;

        const raw = await this.callModel(prompt, system);
        try {
            const cleaned = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
            return JSON.parse(cleaned);
        } catch (e) {
            // Fallback: return raw text as body
            return {
                subject: `Servicios de Calibración y Respaldo Metrológico - ${client.empresa || ''}`,
                body: raw
            };
        }
    },

    // 3. PROCESAR NOTA EN BRUTO A TAREA Y ESTADO
    async processNoteToTask(rawText) {
        const system = `Eres un asistente de CRM comercial. Analiza una nota rápida tomada tras una llamada o WhatsApp con un cliente y extrae la información clave.
Devuelve ÚNICAMENTE un JSON con:
{
  "cleanNote": "resumen limpio y profesional de la interacción en 1 o 2 oraciones",
  "nextAction": "acción concreta a realizar (ej: Enviar cotización por 4 manómetros)",
  "suggestedStage": "investigado | contactado | en_conversacion | ganado | recalibracion"
}`;

        const prompt = `Nota en bruto: "${rawText}"`;
        const raw = await this.callModel(prompt, system);
        const cleaned = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
        return JSON.parse(cleaned);
    },

    // 4. ANALIZAR TOP OPORTUNIDADES DEL MES
    async analyzeTopOpportunities(clients) {
        const sample = clients.slice(0, 40).map(c => ({
            id: c.id,
            empresa: c.empresa || c.nombre,
            equipos: c.categorias,
            scoring: c.scoring,
            ultima_calibracion: c.ultima_calibracion,
            estado: c.estado
        }));

        const system = `Eres un estratega de ventas de un laboratorio de calibraciones. 
Analiza este lote de clientes de Mercado Libre y selecciona los 5 clientes con mayor potencial inmediato de venta o renovación anual.
Devuelve ÚNICAMENTE un JSON con una lista:
[
  {
    "id": "CRM-XXXX",
    "empresa": "nombre",
    "motivo": "por qué es prioritario contactarlo hoy (normativa, tamaño de empresa, vencimiento cercano)",
    "accion_recomendada": "qué ofrecerle exactamente"
  }
]`;

        const prompt = `Analiza estos clientes y elige el Top 5 más prometedores:\n${JSON.stringify(sample)}`;
        const raw = await this.callModel(prompt, system);
        const cleaned = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
        return JSON.parse(cleaned);
    }
};

window.GeminiAI = GeminiAI;

window.openSettingsModal = function() {
    const modal = document.getElementById('settings-modal');
    const input = document.getElementById('setting-gemini-key');
    if (input && window.GeminiAI) input.value = window.GeminiAI.getApiKey();
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        modal.style.display = 'flex';
    }
};

window.closeSettingsModal = function() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        modal.style.display = 'none';
    }
};

window.saveSettingsModal = function() {
    const input = document.getElementById('setting-gemini-key');
    if (input && window.GeminiAI) {
        window.GeminiAI.setApiKey(input.value.trim());
        if (typeof showToast === 'function') {
            showToast(window.GeminiAI.hasApiKey() ? "API Key de Gemini guardada." : "API Key eliminada.");
        } else {
            alert(window.GeminiAI.hasApiKey() ? "API Key de Gemini guardada." : "API Key eliminada.");
        }
    }
    window.closeSettingsModal();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => GeminiAI.updateStatusBadge());
} else {
    GeminiAI.updateStatusBadge();
}
