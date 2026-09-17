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

    async callModel(prompt, systemInstruction = '') {
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

        const payload = {
            contents: [
                {
                    parts: [{ text: prompt }]
                }
            ],
            generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 800
            }
        };

        if (systemInstruction) {
            payload.systemInstruction = {
                parts: [{ text: systemInstruction }]
            };
        }

        let lastError = null;

        for (const cand of candidates) {
            try {
                const url = `https://generativelanguage.googleapis.com/${cand.version}/models/${cand.model}:generateContent?key=${apiKey}`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) {
                    const data = await response.json();
                    const candidate = data.candidates?.[0];
                    if (candidate && candidate.content?.parts?.[0]?.text) {
                        console.log(`MetroCRM: Conexión exitosa con modelo ${cand.model} (${cand.version})`);
                        return candidate.content.parts[0].text;
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

    // 1. INVESTIGAR Y PERFILAR EMPRESA
    async investigateClient(client) {
        const system = `Eres un consultor experto en inteligencia comercial B2B para un laboratorio de metrología y calibración en Argentina (CR MEDICION | SchwyzLab).
Analiza los datos del cliente que compró instrumental por Mercado Libre y devuelve ÚNICAMENTE un objeto JSON válido, sin bloques de código markdown, con la siguiente estructura:
{
  "rubro_detalle": "breve resumen de la actividad industrial o comercial del cliente",
  "tipo_cliente": "Consultora de Higiene y Seguridad | Laboratorio/Farma | Metalúrgica | Industria/Planta | Usuario Final",
  "nicho_id": "hs | farma | metal | end | gas | gral",
  "scoring": "A | B | C",
  "pitch_personalizado": "argumento de venta persuasivo y técnico de 2 líneas mencionando resoluciones o normas aplicables",
  "oportunidades": ["oportunidad 1 de calibración o venta cruzada", "oportunidad 2"]
}`;

        const prompt = `Analiza este cliente:
- Razón Social / Empresa: ${client.empresa || client.nombre}
- Contacto: ${(client.contactos || []).join(', ')}
- Email: ${(client.emails || []).join(', ')}
- CUIT actual: ${client.cuit || 'Desconocido'}
- Equipos comprados / calibrados: ${(client.categorias || []).join(', ')}
- Marcas: ${(client.marcas || []).join(', ')}`;

        const raw = await this.callModel(prompt, system);
        try {
            // Clean markdown fences if any
            const cleaned = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
            return JSON.parse(cleaned);
        } catch (e) {
            console.error("Fallo al parsear JSON de Gemini:", raw);
            throw new Error("No se pudo interpretar el resultado estructurado de la IA.");
        }
    },

    // 2. REDACTAR EMAIL HIPERPERSONALIZADO
    async generateCustomEmail(client, tone = 'profesional') {
        const system = `Eres Darío Del Real, director del Laboratorio de Metrología y Calibraciones CR MEDICION / SchwyzLab en Buenos Aires, Argentina.
Redacta un correo comercial consultivo, profesional, empático y de alto valor para un cliente que compró un instrumento por Mercado Libre.
No uses tono genérico ni spam. Menciona el instrumento exacto, las normativas aplicables en Argentina (ej. SRT para higiene, ANMAT/BPM para farma, ISO 9001 para metalmecánica) y ofrece calibración de su parque instrumental de planta.
Devuelve ÚNICAMENTE un JSON válido con:
{
  "subject": "asunto atractivo y profesional",
  "body": "cuerpo del correo con saludo, cuerpo y firma formal"
}`;

        const prompt = `Cliente:
- Empresa: ${client.empresa || client.nombre}
- Contacto: ${(client.contactos && client.contactos[0]) ? client.contactos[0] : 'Estimado/a'}
- Equipos adquiridos: ${(client.categorias || []).join(', ')}
- Certificados: ${client.equipos ? client.equipos.map(e => e.certificado).filter(Boolean).join(', ') : ''}
- Nicho: ${client.nicho || 'Metrología Industrial'}
- Tono solicitado: ${tone} (profesional, técnico y orientado a generar una conversación o cotización)`;

        const raw = await this.callModel(prompt, system);
        try {
            const cleaned = raw.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
            return JSON.parse(cleaned);
        } catch (e) {
            // Fallback: return raw text as body
            return {
                subject: `Propuesta de Calibración y Mantenimiento - ${client.empresa || ''}`,
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
