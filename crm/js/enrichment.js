// ==========================================
// METROCRM PRO - RESEARCH & ENRICHMENT ENGINE
// ==========================================

const NICHES = {
    "hs": {
        id: "hs",
        name: "Higiene, Seguridad y Medio Ambiente",
        short: "Higiene y Seguridad",
        badgeClass: "badge-nicho-hs",
        icon: "shield",
        color: "#f59e0b",
        pitch: "Cumplimiento de resoluciones SRT (85/12 de Ruido y 84/12 de Iluminación) e informes técnicos para auditorías laborales.",
        oportunidades: [
            "Calibración de Detectores de Gas y Calibradores Acústicos",
            "Venta de Luxómetros y Sonómetros integradores clase 2"
        ]
    },
    "farma": {
        id: "farma",
        name: "Farmacéutica, Alimentos y Laboratorios",
        short: "Farma y Alimentos",
        badgeClass: "badge-nicho-farma",
        icon: "flask",
        color: "#10b981",
        pitch: "Trazabilidad térmica, calibración de dataloggers y mapeo térmico conforme a normativas ANMAT y BPM / GMP.",
        oportunidades: [
            "Calibración de Termohigrómetros y Termómetros con patrones trazables",
            "Provisión de Dataloggers con software de trazabilidad y alarmas"
        ]
    },
    "metal": {
        id: "metal",
        name: "Metalmecánica, Automotriz y Mecanizado",
        short: "Metalmecánica",
        badgeClass: "badge-nicho-metal",
        icon: "wrench",
        color: "#3b82f6",
        pitch: "Aseguramiento de calidad en mecanizado, tolerancias dimensionales e informe de incertidumbre para auditorías ISO 9001.",
        oportunidades: [
            "Calibración de Calibres, Micrómetros y Relojes Comparadores",
            "Verificación y Calibración de Torquímetros y Llaves Dinamométricas"
        ]
    },
    "end": {
        id: "end",
        name: "Construcción, END y Minería",
        short: "Construcción y END",
        badgeClass: "badge-nicho-end",
        icon: "hard-hat",
        color: "#a855f7",
        pitch: "Certificación metrológica para ensayos no destructivos, control de espesores y obras civiles.",
        oportunidades: [
            "Calibración de Medidores de Espesor por Ultrasonido",
            "Calibración de Inclinómetros y Pirómetros de alta temperatura"
        ]
    },
    "gas": {
        id: "gas",
        name: "Gas, Petróleo y Plantas de Proceso",
        short: "Gas y Petróleo",
        badgeClass: "badge-nicho-gas",
        icon: "flame",
        color: "#ef4444",
        pitch: "Seguridad operativa en líneas presurizadas, verificación de gases patrón y calibración de detectores.",
        oportunidades: [
            "Calibración de Detectores de Gases y provisión de gas patrón",
            "Calibración de Manómetros y verificación de torquímetros de bridas"
        ]
    },
    "gral": {
        id: "gral",
        name: "Servicios Generales y Mantenimiento",
        short: "Servicios Generales",
        badgeClass: "badge-nicho-gral",
        icon: "building",
        color: "#94a3b8",
        pitch: "Mantenimiento preventivo anual de instrumental de medición para asegurar exactitud y confiabilidad de lecturas.",
        oportunidades: [
            "Re-calibración Anual Preventiva del parque de instrumentos",
            "Asesoramiento para renovación de herramientas de medición"
        ]
    }
};

const ResearchEngine = {
    getGoogleSearchUrl(empresa) {
        const query = (empresa || '') + ' Argentina empresa';
        return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    },

    getCuitOnlineUrl(cuitOrEmpresa) {
        const clean = (cuitOrEmpresa || '').replace(/\D/g, '');
        if (clean.length >= 10) {
            return `https://www.cuitonline.com/detalle/${clean}`;
        }
        return `https://www.cuitonline.com/search.php?q=${encodeURIComponent(cuitOrEmpresa || '')}`;
    },

    getLinkedInCompanyUrl(empresa) {
        return `https://www.linkedin.com/search/results/companies/?keywords=${encodeURIComponent(empresa || '')}`;
    },

    getGoogleMapsUrl(empresa) {
        return `https://www.google.com/maps/search/${encodeURIComponent((empresa || '') + ' Argentina')}`;
    },

    formatCuit(raw) {
        if (!raw) return '';
        const digits = String(raw).replace(/\D/g, '');
        if (digits.length === 11) {
            return `${digits.slice(0, 2)}-${digits.slice(2, 10)}-${digits.slice(10)}`;
        }
        return raw;
    },

    detectNiche(empresa, categorias = [], marcas = []) {
        const text = `${empresa || ''} ${categorias.join(' ')} ${marcas.join(' ')}`.toLowerCase();
        if (/droguer|farm|medic|bio|salud|hospit|clinic|sanitari|alimento|lacteo|frigorifico|quimic|thermo|datalogger|humedad|termohigr/.test(text)) {
            return 'farma';
        }
        if (/lux|sonom|decibel|ruido|acustico|carga termica|wintact|dosimetr|gas/.test(text) && !/farm|laborat|droguer|medic/.test(text)) {
            return 'hs';
        }
        if (/gas|petrol|combust|ypf|oil|valvula|presion/.test(text)) {
            return 'gas';
        }
        if (/espes|ultrason|hormig|construc|vial|obra|inclinom|nivel/.test(text)) {
            return 'end';
        }
        if (/auto|ford|motor|mecanic|torno|calibre|microm|shahe|dinamom|torquim|metal|acero|industrial/.test(text)) {
            return 'metal';
        }
        return 'gral';
    }
};

window.NICHES = NICHES;
window.ResearchEngine = ResearchEngine;
