const PATRONES_CATALOG = {
    "ATP-001": { desc: "Analizador de torque", brand: "NORBAR", model: "TRUCHECK PLUS", serial: "56527", cert: "A-14733", emisor: "CR MEDICION" },
    "ATP-002": { desc: "Analizador de torque", brand: "NORBAR", model: "TRUCHECKPLUS", serial: "57795", cert: "A-14734", emisor: "CR MEDICION" },
    "ATP-003": { desc: "Analizador de torque", brand: "NORBAR", model: "TRUCHECK PLUS", serial: "81207", cert: "A-05914", emisor: "CR MEDICION" },
    "BAL-001": { desc: "Balanza Electrónica", brand: "Prec", model: "HZT-B6000", serial: "-", cert: "", emisor: "CR MEDICION" },
    "CALP-002": { desc: "Calibre digital", brand: "SCHWYZ", model: "Sin identificar", serial: "17113143", cert: "202604-CA-16386", emisor: "CR MEDICION" },
    "CALP-003": { desc: "Calibre Digital", brand: "SCHWYZ", model: "SC111003", serial: "Sin Identificar", cert: "", emisor: "CR MEDICION" },
    "CDEC-001": { desc: "Calibrador Decibelimetro", brand: "SCHWYZ", model: "ND9", serial: "423623", cert: "", emisor: "CR MEDICION" },
    "CMP-001": { desc: "Calibrador multifunción", brand: "TRANSMILLE", model: "3050A", serial: "K1358I20", cert: "", emisor: "CR MEDICION" },
    "COM-001": { desc: "COMPARADOR", brand: "PRIDE", model: "-", serial: "19G0094", cert: "A-04015", emisor: "CR MEDICION" },
    "CRO-001": { desc: "Cronómetro digital", brand: "TRESSA", model: "-", serial: "22423520", cert: "", emisor: "CR MEDICION" },
    "CRO-002": { desc: "Cronómetro", brand: "TRACEABLE", model: "Sin identificar", serial: "230790221", cert: "", emisor: "CR MEDICION" },
    "CTM-001": { desc: "Cuenta metros", brand: "SCHWYZ", model: "-", serial: "JM316", cert: "", emisor: "CR MEDICION" },
    "CTP-001": { desc: "Calibrador de temperatura", brand: "Ametek", model: "ETC-125 A", serial: "681554-01624", cert: "", emisor: "CR MEDICION" },
    "CTP-002": { desc: "Calibrador de temperatura", brand: "Ametek", model: "ETC-400 A", serial: "680510-02188", cert: "", emisor: "CR MEDICION" },
    "DRP-001": { desc: "Caja de década de resistencia", brand: "EXTECH", model: "380400", serial: "H.468113", cert: "202605-DR-16900", emisor: "CR MEDICION" },
    "DUR-001": { desc: "Durómetro Digital", brand: "SCHWYZ", model: "DUDI-A", serial: "N830064", cert: "", emisor: "CR MEDICION" },
    "FRP-001": { desc: "Fuente radiante", brand: "CEM", model: "BX-500", serial: "11056658", cert: "", emisor: "CR MEDICION" },
    "GON-001": { desc: "Goniometro", brand: "SCHWYZ", model: "-", serial: "5-2.912153", cert: "", emisor: "CR MEDICION" },
    "JBA-001": { desc: "Juego de bloques angulares", brand: "Sin identificar", model: "Sin identificar", serial: "Sin identificar", cert: "A-10458", emisor: "CR MEDICION" },
    "JBP-001": { desc: "Juego de Bloques Patron", brand: "SCHWYZ", model: "-", serial: "10090020", cert: "A-02533", emisor: "CR MEDICION" },
    "JBP-002": { desc: "Juego de Bloques Patron", brand: "SCHWYZ", model: "-", serial: "26218", cert: "A-02534", emisor: "CR MEDICION" },
    "JBP-003": { desc: "Juego de Bloques Patrón", brand: "SCHWYZ", model: "-", serial: "13781 / 13275 / 13677", cert: "", emisor: "CR MEDICION" },
    "JMP-001": { desc: "Pesas hasta 1000 gr", brand: "Ohaus", model: "N° Serie: 190220", serial: "190220", cert: "", emisor: "CR MEDICION" },
    "JMP-002": { desc: "Juegos de pesas patrón", brand: "Dolz Hnos. SRL", model: "Paralelepipédica de control con manija", serial: "AB4879-01 AB4879-02 AB5115-01 AB5115-02 AA2454-07", cert: "", emisor: "CR MEDICION" },
    "JPP-001": { desc: "Plantillas de Espesor", brand: "-", model: "-", serial: "140710111 150610944", cert: "", emisor: "CR MEDICION" },
    "JPP-002": { desc: "Plantillas patrones de espesor", brand: "Sin Identificar", model: "Sin Identificar", serial: "Sin Identificar", cert: "", emisor: "CR MEDICION" },
    "JPP-003": { desc: "Juego de plantillas de espesor", brand: "-", model: "-", serial: "-", cert: "", emisor: "CR MEDICION" },
    "JPP-004": { desc: "Juego de plantillas de espesor", brand: "Sin identificar", model: "Sin identificar", serial: "18275", cert: "A-12990", emisor: "CR MEDICION" },
    "LUX-001": { desc: "Luxometro", brand: "SCHWYZ", model: "SC105", serial: "S1035541", cert: "NXZ-12-24-9182", emisor: "SERVICIO ARGENTINO DE CALIBRACIÓN Y MEDICIÓN" },
    "MDL-001": { desc: "Distanciómetro Láser", brand: "Leica", model: "DISTO D 110", serial: "1262419360", cert: "", emisor: "CR MEDICION" },
    "MDP-001": { desc: "Vacuómetro digital", brand: "Additel", model: "ADT680-05-V15-BAR-N", serial: "218182B0012", cert: "A-06272", emisor: "CR MEDICION" },
    "MDP-002": { desc: "Manómetro digital", brand: "Additel", model: "ADT680-05-GP3K-BAR-N", serial: "21819430006", cert: "A-06342", emisor: "CR MEDICION" },
    "MDP-003": { desc: "Manómetro digital", brand: "Additel", model: "ADT680-05-GP10K-BAR-N", serial: "21820150044", cert: "A-06270", emisor: "CR MEDICION" },
    "MDP-004": { desc: "Manómetro digital", brand: "Additel", model: "ADT680-05-GP300-BAR-N", serial: "21821100010", cert: "LABORATORIO", emisor: "CR MEDICION" },
    "MDP-005": { desc: "Manómetro diferencial", brand: "Testo", model: "510", serial: "51581039/1023", cert: "A-09086", emisor: "CR MEDICION" },
    "MIC-001": { desc: "Micrometro", brand: "SCHWYZ", model: "SC13001414", serial: "171147350", cert: "202604-ME-16387", emisor: "CR MEDICION" },
    "MIC-002": { desc: "Micrómetro", brand: "SCHWYZ", model: "SC13002410", serial: "70703766", cert: "", emisor: "CR MEDICION" },
    "MUL-001": { desc: "Multímetro", brand: "BRYMEN", model: "BM252", serial: "151052783", cert: "202202-ML-04100", emisor: "CR MEDICION" },
    "MUL-002": { desc: "Multímetro digital", brand: "BREMEN", model: "BM525S", serial: "202190584", cert: "", emisor: "CR MEDICION" },
    "MULP-001": { desc: "Multímetro digital", brand: "SIGLENT", model: "SDM3045X", serial: "SDM34HBQ7R2402", cert: "202604-ML-16385", emisor: "CR MEDICION" },
    "NDP-001": { desc: "Nivel digital", brand: "Schwyz", model: "SCN3000-M", serial: "Sin identificar", cert: "202503-ND-12796", emisor: "CR MEDICION" },
    "PIE-001": { desc: "Probador de instalaciones eléctricas", brand: "KEWTECH", model: "FC 2000", serial: "152552", cert: "", emisor: "CR MEDICION" },
    "PRG-001": { desc: "Patrón de rugosidad", brand: "SCHWYZ", model: "-", serial: "-", cert: "", emisor: "CR MEDICION" },
    "REF-001": { desc: "Cristal de interferencia", brand: "-", model: "-", serial: "-", cert: "", emisor: "CR MEDICION" },
    "REG-001": { desc: "Regla flexible", brand: "-", model: "-", serial: "-", cert: "", emisor: "CR MEDICION" },
    "STP-001": { desc: "Simulador de termocuplas", brand: "TRANSMILLE", model: "EA001A", serial: "113134J20", cert: "", emisor: "CR MEDICION" },
    "TAC-001": { desc: "Tacometro", brand: "SCHWYZ", model: "SC114115-B", serial: "S1014202", cert: "", emisor: "CR MEDICION" },
    "THGP-001": { desc: "Termohigrómetro electrónico", brand: "Testo", model: "Testo 625", serial: "61940467/907", cert: "", emisor: "Calibración realizada en el laboratorio de T esto Argentina" },
    "TRP-001": { desc: "Controlador digital", brand: "BEYCA", model: "CD48R", serial: "AKTP2759", cert: "", emisor: "Calibración realizada en el laboratorio de T esto Argentina" },
};

const INSTRUMENT_MAPPINGS = [
    { instrumento: "Calibre", patrones: ["JBP-002", "JBP-003", "THGP-001"], filename: "001 Calibre.xlsx" },
    { instrumento: "Micómetro de exteriores", patrones: ["JBP-001", "JBP-002", "JBP-003", "THGP-001"], filename: "002 Micómetro de exteriores.xlsx" },
    { instrumento: "Medidor de Espesor", patrones: ["JBP-002", "THGP-001"], filename: "004 Medidor de Espesor.xlsx" },
    { instrumento: "004-1 Medidor de Espesor", patrones: ["JPP-004", "THGP-001"], filename: "004-1 Medidor de Espesor.xlsx" },
    { instrumento: "Medidor de Recubrimiento", patrones: ["JPP-004", "THGP-001"], filename: "005 Medidor de Recubrimiento .xlsx" },
    { instrumento: "Medidor Ultrasonido", patrones: ["JBP-002", "THGP-001"], filename: "006 Medidor Ultrasonido.xlsx" },
    { instrumento: "Torquimetro", patrones: ["ATP-001", "ATP-002", "ATP-003", "THGP-001"], filename: "007 Torquimetro.xlsx" },
    { instrumento: "Manómetro-Vacuómetro", patrones: ["MDP-001", "MDP-002", "MDP-003", "MDP-004", "MDP-005", "THGP-001"], filename: "008 Manómetro-Vacuómetro.xlsx" },
    { instrumento: "008A Transmisor de presion", patrones: ["MDP-001", "MDP-002", "MDP-003", "MDP-004", "THGP-001"], filename: "008A Transmisor de presion.xlsx" },
    { instrumento: "Luxometro", patrones: ["LUX-001", "THGP-001"], filename: "009 Luxometro.xlsx" },
    { instrumento: "Decibelimetro", patrones: ["CDEC-001", "THGP-001"], filename: "010 Decibelimetro.xlsx" },
    { instrumento: "Termohigrometro", patrones: ["THGP-001", "THGP-002"], filename: "011 Termohigrometro.xlsx" },
    { instrumento: "Telurimetro", patrones: ["DRP-001", "THGP-001"], filename: "012 Telurimetro.xlsx" },
    { instrumento: "012-1 Megohmetro", patrones: ["MULP-001", "PIE-001", "THGP-001"], filename: "012-1 Megohmetro.xlsx" },
    { instrumento: "Regla - Cinta", patrones: ["MDL-001", "REG-001", "THGP-001"], filename: "013 Regla - Cinta .xlsx" },
    { instrumento: "Pirometro", patrones: ["FRP-001", "TRP-001", "THGP-001"], filename: "014 Pirometro.xlsx" },
    { instrumento: "Cronómetro", patrones: ["CRO-002", "THGP-001"], filename: "015 Cronómetro.xlsx" },
    { instrumento: "Tacómetro", patrones: ["TAC-001", "THGP-001"], filename: "016 Tacómetro.xlsx" },
    { instrumento: "Termometro", patrones: ["CTP-001", "CTP-002", "TRP-001", "THGP-001"], filename: "017 Termometro.xlsx" },
    { instrumento: "Rugosimetro", patrones: ["PRG-001", "THGP-001"], filename: "018 Rugosimetro.xlsx" },
    { instrumento: "Dinamometro", patrones: ["JMP-001", "JMP-002", "JMP-002-1", "JMP-002-2", "THGP-001"], filename: "019 Dinamometro.xlsx" },
    { instrumento: "Goniometro (No usar)", patrones: ["GON-001", "THGP-001"], filename: "020 Goniometro (No usar).xlsx" },
    { instrumento: "Inclinometro", patrones: ["JBA-001", "THGP-001"], filename: "020 Inclinometro.xlsx" },
    { instrumento: "Durometro", patrones: ["BAL-001", "CALP-002"], filename: "021 Durometro.xlsx" },
    { instrumento: "Multimetro", patrones: ["CMP-001", "THGP-001"], filename: "023 Multimetro.xlsx" },
    { instrumento: "Multímetro (NO USAR)", patrones: ["CMP-001"], filename: "023 Multímetro (NO USAR).xlsx" },
    { instrumento: "Dispositivos", patrones: ["MIC-001", "CALP-002", "COM-001", "MIC-002", "NDP-001"], filename: "024 Dispositivos.xlsx" },
    { instrumento: "Calibrador multifuncion", patrones: ["CMP-001", "STP-001", "MULP-001", "THGP-001"], filename: "025 Calibrador multifuncion .xlsx" },
    { instrumento: "Micrometro de interior", patrones: ["JBP-002", "THGP-001"], filename: "026 Micrometro de interior.xlsx" },
    { instrumento: "Balanza", patrones: ["JMP-001", "JMP-002", "JMP-002-1", "JMP-002-2", "THGP-001"], filename: "027 Balanza.xlsx" },
    { instrumento: "Indicador - Simulador  TC", patrones: ["STP-001", "THGP-001"], filename: "028 Indicador - Simulador  TC.xlsx" },
    { instrumento: "Medidor de Distancia", patrones: ["MDL-001", "THGP-001"], filename: "029 Medidor de Distancia.xlsx" },
    { instrumento: "Micrometro interno de 2 puntas", patrones: ["JBP-001", "JBP-002", "JBP-003", "THGP-001"], filename: "030 Micrometro interno de 2 puntas.xlsx" },
    { instrumento: "Fuente de tension y corriente", patrones: ["MULP-001", "THGP-001"], filename: "031 Fuente de tension y corriente.xlsx" },
    { instrumento: "Cuenta Metro", patrones: ["CALP-002", "CALP-003", "REG-001", "THGP-001"], filename: "032 Cuenta Metro.xlsx" },
    { instrumento: "Calibrador de lazo", patrones: [], filename: "033 Calibrador de lazo.xlsx" },
    { instrumento: "Probador de Disyuntor", patrones: ["PIE-001", "THGP-001"], filename: "034 Probador de Disyuntor.xlsx" },
    { instrumento: "Analizador de seguridad", patrones: ["PIE-001", "MULP-001", "THGP-001"], filename: "035 Analizador de seguridad .xlsx" },
    { instrumento: "Frecuencimetro", patrones: ["CMP-001", "THGP-001"], filename: "036 Frecuencimetro .xlsx" },
    { instrumento: "Medidores de tension", patrones: ["MULP-001", "PIE-001", "THGP-001"], filename: "037 Medidores de tension.xlsx" },
    { instrumento: "Decada de resistencia", patrones: ["MULP-001", "THGP-001"], filename: "038 Decada de resistencia.xlsx" },
    { instrumento: "Material volumetrico", patrones: ["BAL-001", "CALP-002"], filename: "039 Material volumetrico .xlsx" },
    { instrumento: "Cinta PI", patrones: ["REG-001", "THGP-001"], filename: "Cinta PI.xlsx" },
    { instrumento: "Galga de soldadura SOLD 11", patrones: ["MIC-001", "CALP-002", "COM-001", "MIC-002", "NDP-001"], filename: "Galga de soldadura SOLD 11.xlsx" },
    { instrumento: "Nivel de burbuja sin escala", patrones: ["GON-001", "THGP-001"], filename: "Nivel de burbuja sin escala.xlsx" },
    { instrumento: "Patron de rugosidad", patrones: ["PRG-001", "RUGP-001", "THGP-001"], filename: "Patron de rugosidad.xlsx" },
    { instrumento: "Patrones de dureza", patrones: ["DUR-001", "THGP-001"], filename: "Patrones de dureza.xlsx" },
    { instrumento: "Plantillas de espesor", patrones: ["MIC-001", "CAL-001", "COM-001", "MIC-002"], filename: "Plantillas de espesor.xlsx" },
];


// ==========================================
// CONTROLADOR DE PATRONES DE CALIBRACIÃ“N (DARIO)
// ==========================================

function getTemplateForInstrument(instrumentoName, certificadoCode) {
    const name = String(instrumentoName || '').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const cert = String(certificadoCode || '').toUpperCase().trim();
    
    // 1. Intentar buscar coincidencia directa por nombre en INSTRUMENT_MAPPINGS
    for (const mapping of INSTRUMENT_MAPPINGS) {
        const mapName = mapping.instrumento.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        if (name.includes(mapName) || mapName.includes(name)) {
            return mapping;
        }
    }
    
    // 2. Si no coincide, buscar por prefijo de certificado (ej: "202604-DE-15681" -> "DE")
    let prefix = '';
    const match = cert.match(/-([A-Z]{2})-/);
    if (match) {
        prefix = match[1];
    } else {
        const matchSpaces = cert.match(/\s+([A-Z]{2})\s+/);
        if (matchSpaces) {
            prefix = matchSpaces[1];
        }
    }
    
    if (prefix) {
        const prefixToTemplateIndex = {
            'CA': '001 Calibre',
            'MR': '002 MicÃ³metro de exteriores',
            'ME': '004 Medidor de Espesor',
            'RE': '005 Medidor de Recubrimiento',
            'MU': '006 Medidor Ultrasonido',
            'TQ': '007 Torquimetro',
            'MA': '008 ManÃ³metro-VacuÃ³metro',
            'PR': '008A Transmisor de presion',
            'LX': '009 Luxometro',
            'DE': '010 Decibelimetro', 'DB': '010 Decibelimetro', 'DC': '010 Decibelimetro',
            'TH': '011 Termohigrometro',
            'TL': '012 Telurimetro',
            'MG': '012-1 Megohmetro',
            'RC': '013 Regla - Cinta',
            'PI': '014 Pirometro',
            'CR': '015 CronÃ³metro',
            'TC': '016 TacÃ³metro', 'TA': '016 TacÃ³metro',
            'TE': '017 Termometro',
            'RU': '018 Rugosimetro',
            'DN': '019 Dinamometro',
            'IN': '020 Inclinometro',
            'DU': '021 Durometro',
            'MT': '023 Multimetro',
            'DI': '024 Dispositivos',
            'CF': '025 Calibrador multifuncion',
            'BA': '027 Balanza',
            'ST': '028 Indicador - Simulador  TC',
            'MD': '029 Medidor de Distancia',
            'FT': '031 Fuente de tension y corriente',
            'CM': '032 Cuenta Metro',
            'CL': '033 Calibrador de lazo',
            'PD': '034 Probador de Disyuntor',
            'AS': '035 Analizador de seguridad',
            'FR': '036 Frecuencimetro',
            'VT': '037 Medidores de tension',
            'DR': '038 Decada de resistencia',
            'VO': '039 Material volumetrico'
        };
        
        const templateName = prefixToTemplateIndex[prefix];
        if (templateName) {
            const found = INSTRUMENT_MAPPINGS.find(m => m.instrumento === templateName || m.instrumento.includes(templateName.replace(/^\d+\s+/, '')));
            if (found) return found;
        }
    }
    
    // 3. Fallbacks directos para nombres comunes
    if (name.includes('calibre')) return INSTRUMENT_MAPPINGS.find(m => m.filename.includes('001'));
    if (name.includes('termohigr')) return INSTRUMENT_MAPPINGS.find(m => m.filename.includes('011'));
    if (name.includes('lux')) return INSTRUMENT_MAPPINGS.find(m => m.filename.includes('009'));
    if (name.includes('decibel') || name.includes('sonom')) return INSTRUMENT_MAPPINGS.find(m => m.filename.includes('010'));
    if (name.includes('termom') || name.includes('termoc')) return INSTRUMENT_MAPPINGS.find(m => m.filename.includes('017'));
    if (name.includes('dinam')) return INSTRUMENT_MAPPINGS.find(m => m.filename.includes('019'));
    if (name.includes('pirom')) return INSTRUMENT_MAPPINGS.find(m => m.filename.includes('014'));
    if (name.includes('tacom')) return INSTRUMENT_MAPPINGS.find(m => m.filename.includes('016'));
    if (name.includes('torque') || name.includes('torquim')) return INSTRUMENT_MAPPINGS.find(m => m.filename.includes('007'));
    
    return null;
}

function updatePatronesChecklist(prefix, selectedPats) {
    const container = document.getElementById(prefix + "-patrones-checklist");
    if (!container) return;
    container.innerHTML = '';
    
    const nameInput = document.getElementById(prefix === 'nuevo' ? 'nuevo-nombre' : 'edit-instrumento');
    const certInput = document.getElementById(prefix === 'nuevo' ? 'nuevo-id' : 'edit-certificado');
    const matchingMapping = getTemplateForInstrument(nameInput ? nameInput.value : '', certInput ? certInput.value : '');
    
    let defaultPats = matchingMapping ? matchingMapping.patrones : [];
    
    // Normalizar a mayÃºsculas
    const selPatsUpper = (selectedPats || []).map(id => id.toUpperCase());
    
    // Unir patrones seleccionados y por defecto
    const allShowPats = Array.from(new Set([...defaultPats, ...selPatsUpper]));
    
    if (allShowPats.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; color: var(--text-secondary); font-size: 0.8rem;">No hay patrones asociados por defecto para este tipo de instrumento. Use "Agregar otro patrÃ³n" si desea incluir alguno.</div>';
        return;
    }
    
    allShowPats.forEach(id => {
        const isChecked = selPatsUpper.includes(id) || (selPatsUpper.length === 0 && defaultPats.includes(id));
        const pDet = PATRONES_CATALOG[id];
        const tooltipText = pDet ? `${id} - ${pDet.desc} (${pDet.brand} ${pDet.model})` : `${id} (No localizado en catálogo)`;
        
        const div = document.createElement('div');
        div.className = 'patron-chk-item';
        
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.id = 'chk-' + prefix + '-' + id;
        cb.value = id;
        cb.checked = isChecked;
        
        const lbl = document.createElement('label');
        lbl.htmlFor = 'chk-' + prefix + '-' + id;
        lbl.innerText = id;
        lbl.title = tooltipText;
        
        div.appendChild(cb);
        div.appendChild(lbl);
        container.appendChild(div);
    });
}

function setupPatronesChecklistHandlers(prefix) {
    const btn = document.getElementById("btn-" + prefix + "-add-patron");
    const select = document.getElementById(prefix + "-patrones-catalogo-select");
    if (!btn || !select) return;
    
    if (select.children.length <= 1) {
        Object.keys(PATRONES_CATALOG).sort().forEach(id => {
            const p = PATRONES_CATALOG[id];
            const opt = document.createElement('option');
            opt.value = id;
            opt.innerText = id + " - " + p.desc + " (" + p.brand + ")";
            select.appendChild(opt);
        });
    }
    
    btn.addEventListener('click', () => {
        if (select.style.display === 'none') {
            select.style.display = 'inline-block';
            btn.innerHTML = '<i data-lucide="minus" style="width:14px; height:14px; vertical-align: middle;"></i> Ocultar';
        } else {
            select.style.display = 'none';
            btn.innerHTML = '<i data-lucide="plus" style="width:14px; height:14px; vertical-align: middle;"></i> Agregar otro patrÃ³n';
        }
        lucide.createIcons();
    });
    
    select.addEventListener('change', () => {
        const id = select.value;
        if (!id) return;
        
        const container = document.getElementById(prefix + "-patrones-checklist");
        if (container) {
            const exists = document.getElementById("chk-" + prefix + "-" + id);
            if (!exists) {
                const pDet = PATRONES_CATALOG[id];
                const tooltipText = pDet ? (id + " - " + pDet.desc + " (" + pDet.brand + " " + pDet.model + ")") : id;
                
                const div = document.createElement('div');
                div.className = 'patron-chk-item';
                
                const cb = document.createElement('input');
                cb.type = 'checkbox';
                cb.id = 'chk-' + prefix + '-' + id;
                cb.value = id;
                cb.checked = true;
                
                const lbl = document.createElement('label');
                lbl.htmlFor = 'chk-' + prefix + '-' + id;
                lbl.innerText = id;
                lbl.title = tooltipText;
                
                div.appendChild(cb);
                div.appendChild(lbl);
                
                if (container.querySelector('div[style*="grid-column"]')) {
                    container.innerHTML = '';
                }
                
                container.appendChild(div);
            } else {
                exists.checked = true;
            }
        }
        
        select.value = '';
        select.style.display = 'none';
        btn.innerHTML = '<i data-lucide="plus" style="width:14px; height:14px; vertical-align: middle;"></i> Agregar otro patrÃ³n';
        lucide.createIcons();
    });
}

// ==========================================
// NOTIFICACIONES Y CARGADOR GLOBAL (TOASTS)
// ==========================================

function showToast(message, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'info';
    if (type === 'success') icon = 'check-circle-2';
    else if (type === 'error' || type === 'danger') icon = 'alert-circle';
    else if (type === 'warning') icon = 'alert-triangle';
    
    toast.innerHTML = `
        <i data-lucide="${icon}" class="toast-icon-svg"></i>
        <span class="toast-message">${message}</span>
        <button class="toast-close" title="Cerrar">&times;</button>
    `;
    
    container.appendChild(toast);
    
    // Configurar iconos de Lucide específicamente para el toast
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
    
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 300);
    });
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.classList.add('toast-exit');
            setTimeout(() => toast.remove(), 300);
        }
    }, 4000);
}

let globalLoaderTimer = null;

function showLoader(message = 'Sincronizando base de datos...', timeoutMs = 8000) {
    let loader = document.getElementById('global-loader');
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'global-loader';
        loader.className = 'global-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="spinner-premium"></div>
                <p id="global-loader-text">${message}</p>
            </div>
        `;
        document.body.appendChild(loader);
    } else {
        const textEl = document.getElementById('global-loader-text');
        if (textEl) textEl.innerText = message;
        loader.style.display = 'flex';
    }

    if (globalLoaderTimer) {
        clearTimeout(globalLoaderTimer);
    }
    if (timeoutMs > 0) {
        globalLoaderTimer = setTimeout(() => {
            hideLoader();
            console.warn("⏱️ Watchdog: Loader cerrado preventivamente por timeout de seguridad.");
        }, timeoutMs);
    }
}

function hideLoader() {
    if (globalLoaderTimer) {
        clearTimeout(globalLoaderTimer);
        globalLoaderTimer = null;
    }
    const loader = document.getElementById('global-loader');
    if (loader) {
        loader.style.display = 'none';
    }
}

// Función segura para obtener el próximo ID correlativo
function getNextInstrumentId() {
    let maxIdNum = 999;
    if (appState.data && appState.data.length > 0) {
        for (let i = 0; i < appState.data.length; i++) {
            const item = appState.data[i];
            const strId = String(item && item.id ? item.id : '');
            const match = strId.match(/\d+/);
            if (match) {
                const num = parseInt(match[0], 10);
                if (!isNaN(num) && num > maxIdNum) {
                    maxIdNum = num;
                }
            }
        }
    }
    return 'INST-' + (maxIdNum + 1);
}

// Función utilitaria para ejecutar lotes de Firestore en fragmentos de máx 300 operaciones
async function commitBatchInChunks(items, operationFn) {
    const CHUNK_SIZE = 300;
    for (let i = 0; i < items.length; i += CHUNK_SIZE) {
        const chunk = items.slice(i, i + CHUNK_SIZE);
        const batch = db.batch();
        chunk.forEach((item, index) => {
            operationFn(batch, item, i + index);
        });
        await batch.commit();
    }
}

/**
 * Configuración: 
 * Cuando tengas tu Web App de Google Apps Script publicada, 
 * pega el enlace aquí.
 */
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbwgmgHF3DHNpOjnmTGsVBwYPEd0tLiwZDXhRsZaTknXEkhBbpOZEqtDlXhH5pyhSWE/exec';

// Configuración de Firebase Firestore
const firebaseConfig = {
  apiKey: "AIzaSyAhNkR8-grFyC7QZ0Zpidu12-E3DZMXims",
  authDomain: "metromlstock.firebaseapp.com",
  projectId: "metromlstock",
  storageBucket: "metromlstock.firebasestorage.app",
  messagingSenderId: "350986843825",
  appId: "1:350986843825:web:8586b31a7c9df6b2f89490",
  measurementId: "G-VDB4314N2F"
};

// Inicializar Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// Habilitar persistencia local (IndexedDB) para carga ultrarrápida
db.enablePersistence({ synchronizeTabs: true }).catch(function(err) {
    if (err.code === 'failed-precondition') {
        console.warn("Persistencia Firestore: múltiples pestañas abiertas simultáneamente.");
    } else if (err.code === 'unimplemented') {
        console.warn("Persistencia Firestore: navegador no compatible con IndexedDB.");
    } else {
        console.warn("Persistencia Firestore info:", err.message);
    }
});

// ==========================================
// MOCK DATA (Para probar sin Google Sheets)
// ==========================================
let mockDatabase = [];

// ==========================================
// UTILIDADES DE RENDIMIENTO (Debounce e Indexación)
// ==========================================
function debounce(func, wait = 250) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function getItemSearchKey(item) {
    if (!item._searchKey) {
        item._searchKey = `${item.id || ''} ${item.instrumento || ''} ${item.modelo || ''} ${item.marca || ''} ${item.serie || ''} ${item.cliente || ''} ${item.certificado || ''}`.toLowerCase();
    }
    return item._searchKey;
}

function getModelKey(marca, modelo) {
    const m = String(marca || '').trim().replace(/\s+/g, ' ');
    const mod = String(modelo || '').trim().replace(/\s+/g, ' ');
    return `${m} ${mod}`.trim().toUpperCase();
}

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let appState = {
    data: [],
    solicitudes: [],
    vencimientos: [],
    loading: false,
    filter: 'ALL',
    search: '',
    radarItems: [],
    discontinuedModels: [],
    currentPage: 1,
    pageSize: 50,
    selectedIds: new Set(),
    // Parámetros de Inteligencia de Negocio (BI)
    biPeriod: 'all',          // '30', '90', '180', '365', 'all'
    biCategory: 'ALL',        // 'ALL' o categoría específica
    biRadarTab: 'all',        // 'all', 'critical', 'warning', 'deposito'
    biEvolRange: '1y',        // '6m', '1y', 'all'
    biHealthTab: 'envejecido' // 'envejecido', 'inmovilizado'
};

let syncIntervalId = null;

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Iconos Lucide
    lucide.createIcons();
    
    // Inicializar sistema de Login
    initLoginSystem();
    
    // Configurar controladores de selección de patrones
    setupPatronesChecklistHandlers('nuevo');
    setupPatronesChecklistHandlers('edit');
    
    // Detectar patrones al escribir en Nuevo Equipo
    const nuevoNombreInput = document.getElementById('nuevo-nombre');
    if (nuevoNombreInput) {
        nuevoNombreInput.addEventListener('input', () => {
            const val = nuevoNombreInput.value;
            const matchingMapping = getTemplateForInstrument(val, '');
            const defaultPats = matchingMapping ? matchingMapping.patrones : [];
            updatePatronesChecklist('nuevo', defaultPats);
        });
    }

    // Desregistrar Service Workers anteriores para evitar problemas de caché agresivos
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
            for (let registration of registrations) {
                registration.unregister().then(() => console.log('Service Worker desregistrado con éxito.'));
            }
        });
    }

    // Verificar sesión (cargar datos si está autenticado)
    checkSession();

    // Event Listeners Básicos
    const btnNewEquipo = document.getElementById('btn-new-equipo');
    if (btnNewEquipo) btnNewEquipo.addEventListener('click', openModalNuevo);
    
    const btnMasivoEquipo = document.getElementById('btn-masivo-equipo');
    if (btnMasivoEquipo) btnMasivoEquipo.addEventListener('click', openModalMasivo);

    const btnSyncSolicitudes = document.getElementById('btn-sync-solicitudes');
    if (btnSyncSolicitudes) btnSyncSolicitudes.addEventListener('click', () => syncGoogleSheetsInBackground(appState.solicitudes, appState.vencimientos, true));
    
    const chkMasivoNuevo = document.getElementById('masivo-nuevo-articulo-chk');
    if (chkMasivoNuevo) chkMasivoNuevo.addEventListener('change', toggleMasivoFields);
    
    // Configurar Modales (Cerrar)
    document.querySelectorAll('.btn-close, .btn-close-action').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Búsqueda fluida con Debounce de 200ms
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        const debouncedSearch = debounce((val) => {
            appState.search = val.trim().toLowerCase();
            appState.currentPage = 1;
            renderTable();
        }, 200);

        searchInput.addEventListener('input', (e) => {
            debouncedSearch(e.target.value);
        });
    }

    // Configurar Listeners de Paginación
    setupPaginationListeners();

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            appState.filter = e.target.getAttribute('data-filter');
            appState.currentPage = 1;
            renderTable();
        });
    });

    // Formularios
    const formNuevo = document.getElementById('form-nuevo');
    if (formNuevo) formNuevo.addEventListener('submit', handleFormNuevo);
    
    const formEstado = document.getElementById('form-estado');
    if (formEstado) formEstado.addEventListener('submit', handleFormEstado);
    
    const formEdit = document.getElementById('form-edit');
    if (formEdit) formEdit.addEventListener('submit', handleFormEdit);
    
    const formMasivo = document.getElementById('form-masivo');
    if (formMasivo) formMasivo.addEventListener('submit', handleFormMasivo);

    // Escuchar cambios de estado para alternar visibilidad de campos de calibración
    const nuevoEstado = document.getElementById('nuevo-estado');
    if (nuevoEstado) nuevoEstado.addEventListener('change', toggleNuevoStateFields);

    const editEstado = document.getElementById('edit-estado');
    if (editEstado) editEstado.addEventListener('change', toggleEditStateFields);
    
    const btnAddPunto = document.getElementById('btn-add-punto');
    if (btnAddPunto) btnAddPunto.addEventListener('click', addPuntoRow);
    
    const btnAddPuntoEdit = document.getElementById('btn-add-punto-edit');
    if (btnAddPuntoEdit) btnAddPuntoEdit.addEventListener('click', () => addPuntoRowEdit());
    
    // --- CONTROLADORES DE INTELIGENCIA DE NEGOCIO (BI) ---
    // Selector de Período
    const biPeriodSelect = document.getElementById('bi-period-select');
    if (biPeriodSelect) {
        biPeriodSelect.addEventListener('change', (e) => {
            appState.biPeriod = e.target.value;
            updateDashboard();
        });
    }

    // Selector de Categoría / Magnitud
    const biCategorySelect = document.getElementById('bi-category-select');
    if (biCategorySelect) {
        biCategorySelect.addEventListener('change', (e) => {
            appState.biCategory = e.target.value;
            updateDashboard();
        });
    }

    // Pestañas del Radar de Reposición
    const radarTabGroup = document.getElementById('radar-tab-group');
    if (radarTabGroup) {
        radarTabGroup.addEventListener('click', (e) => {
            const btn = e.target.closest('.radar-tab-btn');
            if (btn) {
                radarTabGroup.querySelectorAll('.radar-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                appState.biRadarTab = btn.getAttribute('data-tab') || 'all';
                renderRadarList(appState.radarItems, appState.discontinuedModels);
            }
        });
    }

    // Píldoras de rango del gráfico evolutivo
    const chartEvolPills = document.getElementById('chart-evol-pills');
    if (chartEvolPills) {
        chartEvolPills.addEventListener('click', (e) => {
            const btn = e.target.closest('.pill-btn');
            if (btn) {
                chartEvolPills.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                appState.biEvolRange = btn.getAttribute('data-range') || '1y';
                renderEvolutionChart();
            }
        });
    }

    // Pestañas del Radar de Stock Inmovilizado y Salud (Inmovilizados, Baja Rotación, Envejecidos)
    const healthTabGroup = document.getElementById('health-tab-group');
    if (healthTabGroup) {
        healthTabGroup.addEventListener('click', (e) => {
            const btn = e.target.closest('.radar-tab-btn');
            if (btn) {
                healthTabGroup.querySelectorAll('.radar-tab-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const tab = btn.getAttribute('data-tab') || 'inmovilizado';
                appState.biHealthTab = tab;
                const gridInm = document.getElementById('inmovilizado-grid');
                const gridBaja = document.getElementById('bajarot-grid');
                const gridAged = document.getElementById('aged-stock-grid');
                if (gridInm) gridInm.style.display = (tab === 'inmovilizado') ? 'grid' : 'none';
                if (gridBaja) gridBaja.style.display = (tab === 'bajarotacion') ? 'grid' : 'none';
                if (gridAged) gridAged.style.display = (tab === 'envejecido') ? 'grid' : 'none';
            }
        });
    }

    // Radares de Reposición (Delegación de eventos click)
    const replenishmentList = document.getElementById('replenishment-list');
    if (replenishmentList) {
        replenishmentList.addEventListener('click', async (e) => {
            const btnReponer = e.target.closest('.btn-reponer-radar');
            if (btnReponer) {
                const id = btnReponer.getAttribute('data-id');
                if (id) {
                    switchView('gestion');
                    openModalDuplicate(id);
                }
            }

            const btnCertificar = e.target.closest('.btn-certificar-radar');
            if (btnCertificar) {
                const id = btnCertificar.getAttribute('data-id');
                const modelName = btnCertificar.getAttribute('data-model');
                if (id) {
                    switchView('gestion');
                    const searchInput = document.getElementById('search-input');
                    if (searchInput && modelName) {
                        searchInput.value = modelName;
                        appState.search = modelName.toLowerCase();
                        appState.filter = 'EN DEPÓSITO';
                        document.querySelectorAll('.filter-btn').forEach(b => {
                            if (b.getAttribute('data-filter') === 'EN DEPÓSITO') b.classList.add('active');
                            else b.classList.remove('active');
                        });
                        appState.currentPage = 1;
                        renderTable();
                    }
                }
            }
            
            const btnDisc = e.target.closest('.btn-discontinuar-radar');
            if (btnDisc) {
                const modelName = btnDisc.getAttribute('data-model');
                if (modelName) {
                    if (confirm(`¿Estás seguro de que deseas marcar el modelo "${modelName}" como discontinuado? Ya no aparecerá en las sugerencias de reposición.`)) {
                        showLoader('Marcando modelo como discontinuado...');
                        try {
                            const targetKey = modelName.trim().toUpperCase();
                            const matchedItem = appState.data.find(x => getModelKey(x.marca, x.modelo) === targetKey);
                            if (matchedItem) {
                                const res = await updateStateRecord(matchedItem.id, matchedItem.estado, { discontinuado: 'SI' });
                                if (res && res.success) {
                                    appState.data.forEach(x => {
                                        if (getModelKey(x.marca, x.modelo) === targetKey) {
                                            x.discontinuado = 'SI';
                                        }
                                    });
                                    showToast(`Modelo "${modelName}" discontinuado con éxito.`, 'success');
                                } else {
                                    showToast('No se pudo discontinuar el modelo.', 'error');
                                }
                            } else {
                                showToast('No se encontraron registros para este modelo.', 'error');
                            }
                        } catch (err) {
                            console.error(err);
                            showToast('Error al procesar la solicitud.', 'error');
                        } finally {
                            hideLoader();
                            updateDashboard();
                        }
                    }
                }
            }
        });
    }

    const discontinuedList = document.getElementById('discontinued-list');
    if (discontinuedList) {
        discontinuedList.addEventListener('click', async (e) => {
            const btn = e.target.closest('.btn-reactivar-model');
            if (btn) {
                const modelName = btn.getAttribute('data-model');
                if (modelName) {
                    if (confirm(`¿Deseas reactivar el modelo "${modelName}"? Volverá a aparecer en el Radar de Reposición si tiene stock crítico.`)) {
                        showLoader('Reactivando modelo...');
                        try {
                            const targetKey = modelName.trim().toUpperCase();
                            const matchedItems = appState.data.filter(x => getModelKey(x.marca, x.modelo) === targetKey && (x.discontinuado === 'SI' || x.discontinuado === 'si' || x.discontinuado === true));
                            let success = true;
                            for (const item of matchedItems) {
                                const res = await updateStateRecord(item.id, item.estado, { discontinuado: '' });
                                if (!res || !res.success) {
                                    success = false;
                                }
                            }
                            if (success) {
                                appState.data.forEach(x => {
                                    if (getModelKey(x.marca, x.modelo) === targetKey) {
                                        x.discontinuado = '';
                                    }
                                });
                                showToast(`Modelo "${modelName}" reactivado con éxito.`, 'success');
                            } else {
                                showToast('Hubo un inconveniente al reactivar algunas unidades.', 'warning');
                                appState.data.forEach(x => {
                                    if (getModelKey(x.marca, x.modelo) === targetKey) {
                                        x.discontinuado = '';
                                    }
                                });
                            }
                        } catch (err) {
                            console.error(err);
                            showToast('Error al procesar la solicitud.', 'error');
                        } finally {
                            hideLoader();
                            updateDashboard();
                        }
                    }
                }
            }
        });
    }



    // Tabla de botones dinámicos (Delegación de eventos)
    const tableBody = document.getElementById('table-body');
    if (tableBody) {
        tableBody.addEventListener('click', (e) => {
            const btnState = e.target.closest('.btn-change-state');
            if(btnState) {
                const id = btnState.getAttribute('data-id');
                const targetState = btnState.getAttribute('data-target-state');
                openModalEstado(id, targetState);
            }
            
            const btnEdit = e.target.closest('.btn-edit-equipo');
            if(btnEdit) {
                const id = btnEdit.getAttribute('data-id');
                openModalEdit(id);
            }

            const btnFicha = e.target.closest('.btn-view-ficha');
            if(btnFicha) {
                const id = btnFicha.getAttribute('data-id');
                openModalFicha(id);
            }

            const btnDuplicate = e.target.closest('.btn-duplicate-equipo');
            if(btnDuplicate) {
                const id = btnDuplicate.getAttribute('data-id');
                const index = btnDuplicate.getAttribute('data-index');
                openModalDuplicate(id, index);
            }
        });
    }
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

    // Navegación del Sistema (Vistas)
    const navGestion = document.getElementById('nav-gestion');
    if (navGestion) {
        navGestion.addEventListener('click', (e) => {
            e.preventDefault();
            switchView('gestion');
        });
    }
    const navStats = document.getElementById('nav-stats');
    if (navStats) {
        navStats.addEventListener('click', (e) => {
            e.preventDefault();
            switchView('stats');
        });
    }
    const navSolicitudes = document.getElementById('nav-solicitudes');
    if (navSolicitudes) {
        navSolicitudes.addEventListener('click', (e) => {
            e.preventDefault();
            switchView('solicitudes');
        });
    }
    const navVencimientos = document.getElementById('nav-vencimientos');
    if (navVencimientos) {
        navVencimientos.addEventListener('click', (e) => {
            e.preventDefault();
            switchView('vencimientos');
        });
    };

    // Delegación para Tabla de Solicitudes (Protección contra null)
    const tableSolicitudes = document.getElementById('table-solicitudes');
    if (tableSolicitudes) {
        tableSolicitudes.addEventListener('click', (e) => {
            const btnAtender = e.target.closest('.btn-atender-solicitud');
            if (btnAtender) {
                const index = btnAtender.getAttribute('data-index');
                handleAtenderSolicitud(index);
            }
            
            const btnVerFicha = e.target.closest('.btn-ver-ficha-solicitud');
            if (btnVerFicha) {
                const index = btnVerFicha.getAttribute('data-index');
                handleVerFichaSolicitud(index);
            }
        });
    }

    // Botón Confirmar Envío Email (Protección contra null)
    const btnConfirmSend = document.getElementById('btn-confirm-send');
    if (btnConfirmSend) {
        btnConfirmSend.addEventListener('click', () => {
            confirmSendEmail();
        });
    }

    // Botón Confirmar Recordatorio Vencimiento
    const btnConfirmReminder = document.getElementById('btn-confirm-reminder');
    if (btnConfirmReminder) {
        btnConfirmReminder.addEventListener('click', () => {
            confirmSendReminder();
        });
    }



    // Gestión de Tema (Modo Mate)
    const btnTheme = document.getElementById('btn-toggle-theme');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'matte') {
        document.body.classList.add('theme-matte');
        updateThemeToggleUI(true);
    }

    btnTheme.addEventListener('click', () => {
        const isMatte = document.body.classList.toggle('theme-matte');
        localStorage.setItem('theme', isMatte ? 'matte' : 'light');
        updateThemeToggleUI(isMatte);
        if (typeof updateDashboard === 'function') {
            updateDashboard();
        }
    });

    // Inicializar eventos de selección masiva
    initBulkEvents();
});

function updateThemeToggleUI(isMatte) {
    const themeText = document.getElementById('theme-text');
    const btnTheme = document.getElementById('btn-toggle-theme');
    if (themeText && btnTheme) {
        const icon = btnTheme.querySelector('[data-lucide]');
        if (isMatte) {
            themeText.innerText = 'Modo Claro';
            if (icon) icon.setAttribute('data-lucide', 'sun');
        } else {
            themeText.innerText = 'Modo Mate';
            if (icon) icon.setAttribute('data-lucide', 'moon');
        }
        lucide.createIcons();
    }
}


async function fetchData(isManualSync = false) {
    if (typeof clearBulkSelection === 'function') {
        clearBulkSelection();
    }
    appState.loading = true;
    updateUIState();
    if (!appState.data || appState.data.length === 0) {
        showLoader('Cargando base de datos...', 6000);
    }

    // Usar timeout de 7s en las consultas de Firestore para evitar que una red lenta congele la UI
    const fetchWithTimeout = (promise, ms = 7000) => {
        return Promise.race([
            promise,
            new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout en consulta Firestore")), ms))
        ]);
    };

    try {
        // 1. Cargar desde Firebase Firestore en paralelo (Ultrarrápido)
        const [itemsSnapshot, solicitudesSnapshot, vencimientosSnapshot] = await fetchWithTimeout(
            Promise.all([
                db.collection("instrumentos").get(),
                db.collection("solicitudes").get(),
                db.collection("vencimientos").get()
            ]),
            7000
        );

        let items = itemsSnapshot.docs.map(doc => {
            const data = doc.data() || {};
            if (data.marca) data.marca = String(data.marca).trim().replace(/\s+/g, ' ');
            if (data.modelo) data.modelo = String(data.modelo).trim().replace(/\s+/g, ' ');
            if (data.instrumento) data.instrumento = String(data.instrumento).trim().replace(/\s+/g, ' ');
            if (data.estado) data.estado = String(data.estado).trim().toUpperCase();
            return data;
        });
        let solicitudes = solicitudesSnapshot.docs.map(doc => {
            const data = doc.data();
            data.firestoreId = doc.id;
            return data;
        });
        let vencimientos = vencimientosSnapshot.docs.map(doc => {
            const data = doc.data();
            data.firestoreId = doc.id;
            return data;
        });

        // Ordenar instrumentos por ID numérico descendente
        items.sort((a, b) => {
            const numA = parseInt(String(a.id || '').replace(/\D/g, '')) || 0;
            const numB = parseInt(String(b.id || '').replace(/\D/g, '')) || 0;
            return numB - numA;
        });

        // Ordenar solicitudes por timestamp
        solicitudes.sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp);
        });

        // ASIGNAR Y RENDERIZAR DE INMEDIATO (Menos de 0.5 segundos)
        appState.data = items;
        appState.solicitudes = solicitudes;
        appState.vencimientos = vencimientos;

        console.log(">>> DATOS RECIBIDOS DE FIREBASE FIRESTORE:", items.length, "equipos,", solicitudes.length, "solicitudes");
        renderTable();
        renderSolicitudes();
        renderVencimientos();
        updateBadge();
        updateDashboard();

        // Conectar listener en tiempo real para solicitudes
        initSolicitudesRealtimeListener();

        // 2. MIGRACIÓN O SINCRONIZACIÓN ASÍNCRONA EN SEGUNDO PLANO
        if (items.length === 0 && GOOGLE_SHEETS_API_URL !== '') {
            await migrateFromSheetsIfEmpty();
        } else if (GOOGLE_SHEETS_API_URL !== '') {
            // Sincronización en segundo plano no bloqueante
            syncGoogleSheetsInBackground(solicitudes, vencimientos, isManualSync);
        }
    } catch (err) {
        console.error("Error al cargar datos de Firebase:", err);
        if (!appState.data || appState.data.length === 0) {
            showToast("No se pudo conectar a la base de datos en línea. Verifica tu conexión.", "warning");
        }
    } finally {
        appState.loading = false;
        updateUIState();
        hideLoader();
    }
}

let solicitudesUnsubscribe = null;

function initSolicitudesRealtimeListener() {
    if (solicitudesUnsubscribe) return;
    try {
        solicitudesUnsubscribe = db.collection("solicitudes").onSnapshot((snapshot) => {
            if (!snapshot) return;
            const liveSolicitudes = snapshot.docs.map(doc => {
                const data = doc.data();
                data.firestoreId = doc.id;
                return data;
            });

            liveSolicitudes.sort((a, b) => {
                const dateA = new Date(a.timestamp || 0).getTime();
                const dateB = new Date(b.timestamp || 0).getTime();
                if (dateB !== dateA) return dateB - dateA;
                return String(b.firestoreId || '').localeCompare(String(a.firestoreId || ''));
            });

            appState.solicitudes = liveSolicitudes;
            renderSolicitudes();
            updateBadge();
        }, (err) => {
            console.warn("Realtime listener error:", err);
        });
    } catch (e) {
        console.warn("Could not attach realtime listener:", e);
    }
}

function getSolicitudStableKey(sol, occurrenceIndex = 1) {
    const clean = str => String(str || '').toLowerCase().trim().replace(/[^a-z0-9]/g, '_');
    const ts = clean(sol.timestamp);
    const cert = clean(sol.certificado);
    const email = clean(sol.email).substring(0, 30);
    const emp = clean(sol.empresa).substring(0, 20);
    const base = `sol_${ts}_${cert}_${email}_${emp}`;
    return occurrenceIndex > 1 ? `${base}_${occurrenceIndex}` : base;
}

let isSyncingSheets = false;

// Sincronización asíncrona no bloqueante con Google Sheets (Timeout generoso de 18 segundos)
async function syncGoogleSheetsInBackground(solicitudes, vencimientos, isManual = false) {
    if (!GOOGLE_SHEETS_API_URL) return;
    if (isSyncingSheets && !isManual) return;
    
    isSyncingSheets = true;
    if (isManual) {
        showLoader('Sincronizando con Google Sheets...', 18000);
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 18000); // Max 18s de espera para Apps Script

    try {
        const response = await fetch(GOOGLE_SHEETS_API_URL + '?action=get&_t=' + new Date().getTime(), {
            credentials: 'omit',
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        const contentType = response.headers.get("content-type");
        if (!response.ok || (contentType && contentType.indexOf("application/json") === -1)) {
            console.warn("⚠️ Google Apps Script no respondió JSON válido.");
            if (isManual) showToast("Google Apps Script no respondió correctamente.", "error");
            return;
        }
        const result = await response.json();
        
        const sheetsSolicitudes = result.solicitudes || [];
        const sheetsVencimientos = result.vencimientos || [];
        
        const matchedFirestoreIds = new Set();
        const updatedSolicitudes = [];
        const operations = [];

        const currentSolList = (appState.solicitudes && appState.solicitudes.length > 0) ? appState.solicitudes : (solicitudes || []);
        const currentVencList = (appState.vencimientos && appState.vencimientos.length > 0) ? appState.vencimientos : (vencimientos || []);

        const seenKeysCount = new Map();
        sheetsSolicitudes.forEach((sol) => {
            const rawKey = getSolicitudStableKey(sol, 1);
            const count = (seenKeysCount.get(rawKey) || 0) + 1;
            seenKeysCount.set(rawKey, count);
            const solKey = getSolicitudStableKey(sol, count);

            const solCert = String(sol.certificado || '').trim().toLowerCase();
            const solEmail = String(sol.email || '').trim().toLowerCase();
            const solTs = String(sol.timestamp || '').trim();
            const solEmp = String(sol.empresa || '').trim().toLowerCase();

            let existing = currentSolList.find(s => {
                if (matchedFirestoreIds.has(s.firestoreId)) return false;
                if (s.firestoreId === solKey || s.id === solKey) return true;
                
                const sCert = String(s.certificado || '').trim().toLowerCase();
                const sEmail = String(s.email || '').trim().toLowerCase();
                const sTs = String(s.timestamp || '').trim();
                const sEmp = String(s.empresa || '').trim().toLowerCase();

                // 1. Match prioritario: timestamp exacto/parcial + certificado compatible + email
                const timeMatches = (solTs === sTs) || (solTs !== '' && sTs !== '' && (solTs.startsWith(sTs.substring(0, 10)) || sTs.startsWith(solTs.substring(0, 10))));
                if (timeMatches && certificadosCoinciden(sol.certificado, s.certificado) && solEmail && sEmail && solEmail === sEmail) {
                    return true;
                }
                // 2. Match de timestamp + certificado compatible
                if (timeMatches && certificadosCoinciden(sol.certificado, s.certificado)) {
                    return true;
                }
                // 3. Match de timestamp + email + empresa
                if (timeMatches && solEmail && sEmail && solEmail === sEmail && solEmp && sEmp && solEmp === sEmp) {
                    return true;
                }
                // 4. Fallback: match exacto de certificado y email solo si no hay conflicto de timestamp
                if (solCert && sCert && solCert === sCert && solEmail && sEmail && solEmail === sEmail && (!solTs || !sTs || solTs === sTs)) {
                    return true;
                }
                return false;
            });

            if (!existing) {
                const docId = solKey;
                sol.id = docId;
                operations.push({
                    type: 'set',
                    collection: 'solicitudes',
                    docId: docId,
                    data: sol
                });
                
                const solWithId = Object.assign({}, sol, { firestoreId: docId });
                updatedSolicitudes.push(solWithId);
                matchedFirestoreIds.add(docId);
            } else {
                matchedFirestoreIds.add(existing.firestoreId);
                let needsUpdate = false;
                const updates = {};
                
                const fieldsToSync = ['empresa', 'contacto', 'email', 'certificado', 'estado', 'timestamp'];
                fieldsToSync.forEach(field => {
                    const valSheets = String(sol[field] || '').trim();
                    const valFirestore = String(existing[field] || '').trim();
                    
                    if (field === 'estado') {
                        const sState = valSheets.toLowerCase();
                        const fState = valFirestore.toLowerCase();
                        if (sState !== fState) {
                            // Si Sheets tiene estado no vacío, actualizamos. Si Sheets viene vacío pero Firestore ya está confirmado como enviado/duplicado, NO lo pisamos con vacío.
                            const isFirestoreConfirmed = (fState === 'enviado' || fState === 'enviado anteriormente' || fState === 'duplicada' || fState === 'duplicado');
                            if (sState !== '' || !isFirestoreConfirmed) {
                                updates[field] = sol[field] || '';
                                existing[field] = sol[field] || '';
                                needsUpdate = true;
                            }
                        }
                    } else {
                        if (valSheets !== valFirestore) {
                            updates[field] = sol[field] || '';
                            existing[field] = sol[field] || '';
                            needsUpdate = true;
                        }
                    }
                });

                if (!existing.id) {
                    updates.id = existing.firestoreId;
                    existing.id = existing.firestoreId;
                    needsUpdate = true;
                }

                if (needsUpdate) {
                    operations.push({
                        type: 'update',
                        collection: 'solicitudes',
                        docId: existing.firestoreId,
                        data: updates
                    });
                }
                
                updatedSolicitudes.push(existing);
            }
        });

        // Mantener también solicitudes existentes no modificadas
        currentSolList.forEach(s => {
            if (s.firestoreId && !matchedFirestoreIds.has(s.firestoreId)) {
                updatedSolicitudes.push(s);
            }
        });
        
        // 1. Persistir Solicitudes en Firestore
        if (operations.length > 0) {
            try {
                await commitBatchInChunks(operations, (batch, op) => {
                    const ref = db.collection(op.collection).doc(op.docId);
                    if (op.type === 'set') {
                        const cleanData = {
                            id: op.docId,
                            timestamp: String(op.data.timestamp || '').trim(),
                            empresa: String(op.data.empresa || '').trim(),
                            contacto: String(op.data.contacto || '').trim(),
                            email: String(op.data.email || '').trim(),
                            certificado: String(op.data.certificado || '').trim(),
                            estado: String(op.data.estado || '').trim()
                        };
                        batch.set(ref, cleanData, { merge: true });
                    } else if (op.type === 'update') {
                        batch.set(ref, op.data, { merge: true });
                    } else if (op.type === 'delete') {
                        batch.delete(ref);
                    }
                });
                console.log(`✅ Sincronización de Solicitudes completada (${operations.length} operaciones).`);
            } catch (opErr) {
                console.error("Error al persistir lote de solicitudes en Firestore:", opErr);
            }
        }

        // Ordenar solicitudes actualizadas por timestamp descendente
        updatedSolicitudes.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        appState.solicitudes = updatedSolicitudes;
        renderSolicitudes();
        updateBadge();

        // 2. Persistir Vencimientos en Firestore de forma independiente
        const vencOperations = [];
        const firestoreVencsMap = new Map();
        currentVencList.forEach(v => {
            if (v.id) firestoreVencsMap.set(String(v.id).trim().toLowerCase(), v);
        });
        
        const updatedVencimientos = [...currentVencList];
        sheetsVencimientos.forEach((venc) => {
            if (venc.id) {
                const key = String(venc.id).trim().toLowerCase();
                if (!firestoreVencsMap.has(key)) {
                    const cleanVenc = {
                        id: String(venc.id || '').trim(),
                        instrumento: String(venc.instrumento || '').trim(),
                        certificado: String(venc.certificado || '').trim(),
                        fecha_calibracion: String(venc.fecha_calibracion || '').trim(),
                        fecha_vencimiento: String(venc.fecha_vencimiento || '').trim(),
                        cliente: String(venc.cliente || '').trim(),
                        email: String(venc.email || '').trim(),
                        estado_recordatorio: String(venc.estado_recordatorio || 'pendiente').trim()
                    };
                    vencOperations.push({
                        type: 'set',
                        collection: 'vencimientos',
                        docId: cleanVenc.id,
                        data: cleanVenc
                    });
                    
                    const vencWithId = Object.assign({}, cleanVenc, { firestoreId: cleanVenc.id });
                    updatedVencimientos.push(vencWithId);
                } else {
                    const existing = firestoreVencsMap.get(key);
                    let needsUpdate = false;
                    const updates = {};
                    
                    const fieldsToSync = ['instrumento', 'certificado', 'fecha_calibracion', 'fecha_vencimiento', 'cliente', 'email', 'estado_recordatorio'];
                    fieldsToSync.forEach(field => {
                        const valSheets = String(venc[field] || '').trim();
                        const valFirestore = String(existing[field] || '').trim();
                        
                        if (valSheets !== valFirestore) {
                            updates[field] = valSheets;
                            existing[field] = valSheets;
                            needsUpdate = true;
                        }
                    });
                    
                    if (needsUpdate) {
                        vencOperations.push({
                            type: 'update',
                            collection: 'vencimientos',
                            docId: existing.firestoreId || key,
                            data: updates
                        });
                    }
                }
            }
        });

        if (vencOperations.length > 0) {
            try {
                await commitBatchInChunks(vencOperations, (batch, op) => {
                    const ref = db.collection(op.collection).doc(op.docId);
                    if (op.type === 'set') batch.set(ref, op.data, { merge: true });
                    else if (op.type === 'update') batch.set(ref, op.data, { merge: true });
                });
            } catch (vencErr) {
                console.warn("Advertencia en sincronización de vencimientos:", vencErr);
            }
        }

        appState.vencimientos = updatedVencimientos;
        renderVencimientos();

        if (isManual) {
            showToast(`Sincronización completada. ${operations.length > 0 ? operations.length + ' solicitudes actualizadas.' : 'Todo al día.'}`, 'success');
        }
    } catch (syncErr) {
        clearTimeout(timeoutId);
        if (syncErr.name === 'AbortError') {
            console.warn("⏱️ Sincronización con Google Sheets cancelada por timeout (excedió 18s).");
            if (isManual) showToast("La sincronización demoró más de 18s en responder.", "warning");
        } else {
            console.warn("⚠️ Error en sincronización de Google Sheets:", syncErr.message);
            if (isManual) showToast("Error al sincronizar con Google Sheets.", "error");
        }
    } finally {
        isSyncingSheets = false;
        if (isManual) {
            hideLoader();
        }
    }
}

// Sincronización periódica automática en segundo plano cada 45s
syncIntervalId = setInterval(() => {
    if (GOOGLE_SHEETS_API_URL !== '' && !document.hidden && !isSyncingSheets) {
        syncGoogleSheetsInBackground(appState.solicitudes, appState.vencimientos, false);
    }
}, 45000);

// Sincronización al regresar a la pestaña
window.addEventListener('focus', () => {
    if (GOOGLE_SHEETS_API_URL !== '' && !isSyncingSheets) {
        syncGoogleSheetsInBackground(appState.solicitudes, appState.vencimientos, false);
    }
});

async function migrateFromSheetsIfEmpty() {
    console.log("⚠️ Base de datos de Firebase vacía. Iniciando migración de respaldo...");
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    try {
        const response = await fetch(GOOGLE_SHEETS_API_URL + '?action=get&_t=' + new Date().getTime(), {
            credentials: 'omit',
            signal: controller.signal
        });
        clearTimeout(timeoutId);

        const contentType = response.headers.get("content-type");
        if (!response.ok || (contentType && contentType.indexOf("application/json") === -1)) {
            throw new Error("Respuesta no-JSON de Google Apps Script.");
        }
        const result = await response.json();
        
        const sheetsItems = result.items || [];
        const sheetsSolicitudes = result.solicitudes || [];
        const sheetsVencimientos = result.vencimientos || [];
        
        const allWrites = [];
        sheetsItems.forEach(item => {
            if (item.id) {
                allWrites.push({ collection: "instrumentos", docId: String(item.id).trim(), data: item });
            }
        });
        sheetsSolicitudes.forEach((sol, idx) => {
            const ts = sol.timestamp || '';
            const emp = sol.empresa || '';
            let docId = `sol_${idx}_${ts.replace(/\s+/g, '_').replace(/\//g, '-')}_${emp.replace(/\s+/g, '_')}`;
            docId = docId.replace(/[^a-zA-Z0-9_-]/g, '');
            if (!docId) docId = `sol_auto_${idx}`;
            allWrites.push({ collection: "solicitudes", docId: docId, data: sol });
        });
        sheetsVencimientos.forEach(venc => {
            if (venc.id) {
                allWrites.push({ collection: "vencimientos", docId: String(venc.id).trim(), data: venc });
            }
        });

        const batchSize = 400;
        for (let i = 0; i < allWrites.length; i += batchSize) {
            const chunk = allWrites.slice(i, i + batchSize);
            const batch = db.batch();
            chunk.forEach(w => {
                const ref = db.collection(w.collection).doc(w.docId);
                batch.set(ref, w.data);
            });
            await batch.commit();
        }
        
        appState.data = sheetsItems;
        appState.solicitudes = sheetsSolicitudes;
        appState.vencimientos = sheetsVencimientos;
        renderTable();
        renderSolicitudes();
        renderVencimientos();
        showToast("¡Datos migrados con éxito a Firebase!", "success");
    } catch (migErr) {
        clearTimeout(timeoutId);
        console.error("Error durante la migración automática:", migErr);
    }
}

async function saveFullUpdate(record) {
    // Normalizar estados para la base de datos
    if (record.estado === 'VENDIDO - DESPACHADO') record.estado = 'RESERVADO';
    if (record.estado === 'VENDIDO - ENTREGADO') record.estado = 'ENTREGADO';

    try {
        const docId = String(record.id).trim();
        await db.collection("instrumentos").doc(docId).set(record, { merge: true });
        console.log(`✅ Registro ${docId} actualizado por completo en Firebase.`);

        // Sincronización asíncrona en segundo plano con Google Sheets
        if (GOOGLE_SHEETS_API_URL !== '') {
            fetch(GOOGLE_SHEETS_API_URL, {
                method: 'POST',
                mode: 'no-cors',
                credentials: 'omit',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'update_full',
                    data: record
                })
            }).catch(err => console.error("Error al sincronizar actualización completa con Google Sheets:", err));
        }

        return { success: true };
    } catch (error) {
        console.error("❌ Error en saveFullUpdate en Firebase:", error);
        throw error;
    }
}

async function updateStateRecord(id, newState, extraData) {
    console.log(">>> Solicitando cambio de estado en Firebase:", { id, newState, extraData });
    
    let apiState = newState;
    if (apiState === 'VENDIDO - DESPACHADO') apiState = 'RESERVADO';
    if (apiState === 'VENDIDO - ENTREGADO') apiState = 'ENTREGADO';

    try {
        const docId = String(id).trim();
        const docRef = db.collection("instrumentos").doc(docId);
        const docSnap = await docRef.get();
        if (!docSnap.exists) {
            throw new Error(`No se encontró el equipo con ID: ${docId}`);
        }
        const currentData = docSnap.data();

        const updates = { estado: apiState };
        if (extraData.cliente !== undefined) updates.cliente = String(extraData.cliente || '');
        if (extraData.certificado !== undefined) updates.certificado = String(extraData.certificado || '');
        if (extraData.fecha !== undefined) updates.fecha_calibracion = String(extraData.fecha || '');
        if (extraData.patrones !== undefined) updates.patrones = String(extraData.patrones || '[]');
        if (extraData.discontinuado !== undefined) updates.discontinuado = String(extraData.discontinuado || '');

        await docRef.update(updates);
        console.log(`✅ Estado de ${docId} actualizado en Firebase.`);

        if (apiState === 'ENTREGADO') {
            const fullItem = {
                id: docId,
                instrumento: String(currentData.instrumento || '') + " " + String(currentData.modelo || ''),
                certificado: extraData.certificado !== undefined ? String(extraData.certificado) : String(currentData.certificado || ''),
                fecha_calibracion: extraData.fecha !== undefined ? String(extraData.fecha) : String(currentData.fecha_calibracion || ''),
                cliente: extraData.cliente !== undefined ? String(extraData.cliente) : String(currentData.cliente || ''),
                email: String(currentData.email || '---'),
                estado_recordatorio: 'pendiente'
            };
            
            if (fullItem.fecha_calibracion && fullItem.fecha_calibracion !== "") {
                try {
                    const d = parseToDateObject(fullItem.fecha_calibracion);
                    if (d && !isNaN(d.getTime())) {
                        const vencDate = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());
                        const dStr = String(vencDate.getDate()).padStart(2, '0');
                        const mStr = String(vencDate.getMonth() + 1).padStart(2, '0');
                        fullItem.fecha_vencimiento = `${dStr}/${mStr}/${vencDate.getFullYear()}`;
                    }
                } catch(e) {
                    console.error("Error calculando fecha de vencimiento:", e);
                }
            }
            if (!fullItem.fecha_vencimiento) {
                fullItem.fecha_vencimiento = "";
            }

            await db.collection("vencimientos").doc(docId).set(fullItem);
            console.log(`✅ Upsert de vencimiento realizado para ${docId} en Firebase.`);
        }

        return { success: true };
    } catch (error) {
        console.error("❌ Error en updateStateRecord en Firebase:", error);
        throw error;
    }
}

async function saveNewRecord(record) {
    if (record.estado === 'VENDIDO - DESPACHADO') record.estado = 'RESERVADO';
    if (record.estado === 'VENDIDO - ENTREGADO') record.estado = 'ENTREGADO';

    try {
        const docId = String(record.id).trim();
        await db.collection("instrumentos").doc(docId).set(record, { merge: true });
        console.log(`✅ Nuevo registro ${docId} creado en Firebase.`);

        // Sincronización asíncrona en segundo plano con Google Sheets
        if (GOOGLE_SHEETS_API_URL !== '') {
            fetch(GOOGLE_SHEETS_API_URL, {
                method: 'POST',
                mode: 'no-cors',
                credentials: 'omit',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'create',
                    data: record
                })
            }).catch(err => console.error("Error al sincronizar nuevo registro con Google Sheets:", err));
        }

        return { success: true };
    } catch (error) {
        console.error("❌ Error en saveNewRecord en Firebase:", error);
        throw error;
    }
}

// ==========================================
// VISTAS Y NAVEGACIÓN
// ==========================================
function switchView(view) {
    const viewGestion = document.getElementById('view-gestion');
    const viewStats = document.getElementById('bi-dashboard');
    const viewSolicitudes = document.getElementById('view-solicitudes');
    const viewVencimientos = document.getElementById('view-vencimientos');
    const navItems = document.querySelectorAll('.nav-item');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    const btnNew = document.getElementById('btn-new-equipo');
    
    if (navItems) {
        navItems.forEach(n => n.classList.remove('active'));
    }

    // Ocultar todas
    if(viewGestion) viewGestion.style.display = 'none';
    if(viewStats) viewStats.style.display = 'none';
    if(viewSolicitudes) viewSolicitudes.style.display = 'none';
    if(viewVencimientos) viewVencimientos.style.display = 'none';
    if(btnNew) btnNew.style.display = 'none';

    if(view === 'gestion') {
        const elNav = document.getElementById('nav-gestion');
        if (elNav) elNav.classList.add('active');
        if(viewGestion) viewGestion.style.display = 'flex';
        if(btnNew) btnNew.style.display = 'inline-flex';
        if(pageTitle) pageTitle.innerText = "Gestión de Inventario";
        if(pageSubtitle) pageSubtitle.innerText = "gestiona el stock de instrumentos con certificado para entrega inmediata";
    } else if (view === 'stats') {
        const elNav = document.getElementById('nav-stats');
        if (elNav) elNav.classList.add('active');
        if(viewStats) viewStats.style.display = 'flex';
        if(pageTitle) pageTitle.innerText = "Inteligencia de Negocio";
        if(pageSubtitle) pageSubtitle.innerText = "Análisis de demanda y necesidades de reposición";
        updateDashboard();
    } else if (view === 'solicitudes') {
        const elNav = document.getElementById('nav-solicitudes');
        if (elNav) elNav.classList.add('active');
        if(viewSolicitudes) viewSolicitudes.style.display = 'block';
        if(pageTitle) pageTitle.innerText = "Solicitudes Externas";
        if(pageSubtitle) pageSubtitle.innerText = "Pedidos de certificados recibidos vía Google Form";
        renderSolicitudes();
        // Sincronizar en segundo plano de forma no bloqueante para traer nuevas solicitudes de Google Forms
        if (GOOGLE_SHEETS_API_URL !== '') {
            syncGoogleSheetsInBackground(appState.solicitudes, appState.vencimientos, false);
        }
    } else if (view === 'vencimientos') {
        const elNav = document.getElementById('nav-vencimientos');
        if (elNav) elNav.classList.add('active');
        if(viewVencimientos) viewVencimientos.style.display = 'flex';
        if(pageTitle) pageTitle.innerText = "CRM Vencimientos";
        if(pageSubtitle) pageSubtitle.innerText = "Control automático de calibraciones próximas a vencer";
        renderVencimientos();
    }
    
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}

// ==========================================
// INTELIGENCIA DE NEGOCIO (BI) Y CONTROL DE STOCK
// ==========================================

let salesChart = null;
let evolutionChart = null;

function parseFullDate(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return null;
    dateStr = dateStr.trim();
    if (dateStr === '' || dateStr === '---' || dateStr === 'N/A') return null;

    // YYYY-MM-DD
    if (dateStr.includes('-')) {
        const parts = dateStr.split('-');
        if (parts.length >= 3) {
            let y = parseInt(parts[0], 10);
            let m = parseInt(parts[1], 10) - 1;
            let d = parseInt(parts[2], 10);
            if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
                if (y < 100) y += 2000;
                return new Date(y, m, d);
            }
        }
    }
    // DD/MM/YYYY
    if (dateStr.includes('/')) {
        const parts = dateStr.split('/');
        if (parts.length >= 3) {
            let d = parseInt(parts[0], 10);
            let m = parseInt(parts[1], 10) - 1;
            let y = parseInt(parts[2], 10);
            if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
                if (y < 100) y += 2000;
                return new Date(y, m, d);
            }
        }
    }
    return null;
}

function parseYearMonth(dateStr) {
    const d = parseFullDate(dateStr);
    if (!d) return null;
    return { year: d.getFullYear(), month: d.getMonth() + 1 };
}

function getNormalizedState(item) {
    if (!item) return 'DISPONIBLE';
    const est = String(item.estado || '').trim().toUpperCase();
    if (est === 'DESPACHADO' || est === 'RESERVADO' || est.includes('DESPACH') || est.includes('RESERV')) return 'VENDIDO - DESPACHADO';
    if (est === 'ENTREGADO' || est.includes('ENTREG')) return 'VENDIDO - ENTREGADO';
    if (est.includes('VENTA')) return 'VENTA INTERNA';
    if (est === 'CERTIFICANDO' || est.includes('CERTIF')) return 'CERTIFICANDO';
    if (est.includes('DEP') || est.includes('SIN CERTIFICAR')) return 'EN DEPÓSITO';
    if (est === 'DISPONIBLE') return 'DISPONIBLE';
    return est || 'DISPONIBLE';
}

function isItemSold(item) {
    const norm = getNormalizedState(item);
    return norm === 'VENDIDO - DESPACHADO' || norm === 'VENDIDO - ENTREGADO' || norm === 'VENTA INTERNA';
}

function getInstrumentCategory(instrumento) {
    const str = String(instrumento || '').trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (str.includes('decibel') || str.includes('deci') || str.includes('sono') || str.includes('acustic') || str.includes('ruido')) return 'Acústica (Decibelímetros)';
    if (str.includes('lux') || str.includes('luz') || str.includes('optic') || str.includes('iluminac')) return 'Óptica (Luxómetros)';
    if (str.includes('termohigro') || str.includes('higro') || str.includes('logger')) return 'Humedad y Temperatura';
    if (str.includes('piro') || str.includes('termom') || str.includes('termocupla') || str.includes('temperat')) return 'Temperatura';
    if (str.includes('crono') || str.includes('tiempo') || str.includes('frecuencia')) return 'Tiempo y Frecuencia';
    if (str.includes('calibre') || str.includes('micro') || str.includes('regla') || str.includes('cinta') || str.includes('espes') || str.includes('recubrimiento') || str.includes('galga') || str.includes('nivel') || str.includes('inclinom') || str.includes('goniom') || str.includes('cuenta metro') || str.includes('odomet') || str.includes('palpador') || str.includes('comparador')) return 'Dimensional';
    if (str.includes('manom') || str.includes('vacuo') || str.includes('presion')) return 'Presión';
    if (str.includes('durom') || str.includes('dureza') || str.includes('dinam') || str.includes('torque') || str.includes('torquim') || str.includes('balanza') || str.includes('pesa')) return 'Mecánica y Fuerza';
    if (str.includes('multi') || str.includes('mego') || str.includes('teluri') || str.includes('decade') || str.includes('resistencia') || str.includes('disyuntor') || str.includes('tension') || str.includes('lazo') || str.includes('pinza') || str.includes('amperimetr') || str.includes('seguridad')) return 'Electricidad';
    if (str.includes('ultrasonido') || str.includes('ultrasonico')) return 'Ultrasonido';
    if (str.includes('taco') || str.includes('rpm') || str.includes('velocidad')) return 'Velocidad (Tacómetros)';
    return 'Otros Instrumentos';
}

function populateBICategories() {
    const select = document.getElementById('bi-category-select');
    if (!select) return;

    const currentVal = appState.biCategory || 'ALL';
    const categories = new Set();
    (appState.data || []).forEach(item => {
        const cat = getInstrumentCategory(item.instrumento);
        if (cat) categories.add(cat);
    });

    const sortedCats = Array.from(categories).sort();
    let html = '<option value="ALL">Todas las familias</option>';
    sortedCats.forEach(cat => {
        const isSelected = cat === currentVal ? 'selected' : '';
        html += `<option value="${cat}" ${isSelected}>${cat}</option>`;
    });

    select.innerHTML = html;
}

function updateDashboard() {
    const biSection = document.getElementById('bi-dashboard');
    if (!biSection) return;
    if (!appState.data || appState.data.length === 0) return;

    populateBICategories();

    // 1. Configuración de Filtros de Período y Categoría
    const selectedPeriod = appState.biPeriod || 'all';
    const selectedCat = appState.biCategory || 'ALL';
    
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    let cutoffDate = null;
    let monthsInPeriod = 12.0;

    if (selectedPeriod === '30') {
        cutoffDate = new Date(today.getTime() - 30 * 86400000);
        monthsInPeriod = 1.0;
    } else if (selectedPeriod === '90') {
        cutoffDate = new Date(today.getTime() - 90 * 86400000);
        monthsInPeriod = 3.0;
    } else if (selectedPeriod === '180') {
        cutoffDate = new Date(today.getTime() - 180 * 86400000);
        monthsInPeriod = 6.0;
    } else if (selectedPeriod === '365') {
        cutoffDate = new Date(today.getTime() - 365 * 86400000);
        monthsInPeriod = 12.0;
    } else {
        // Histórico completo: estimar meses totales de actividad
        let earliestDate = today;
        appState.data.forEach(item => {
            const d = parseFullDate(item.fecha_calibracion);
            if (d && d < earliestDate && d.getFullYear() > 2020) {
                earliestDate = d;
            }
        });
        const totalDays = Math.max(90, Math.round((today - earliestDate) / 86400000));
        monthsInPeriod = Math.max(3.0, totalDays / 30.4);
    }

    // 2. Procesamiento de Modelos y Estados
    const stats = {};
    let totalAvailable = 0;
    let totalPeriodSales = 0;
    let totalCertificando = 0;
    let totalDeposito = 0;
    const agedStockItems = [];

    appState.data.forEach(item => {
        const itemCat = getInstrumentCategory(item.instrumento);
        if (selectedCat !== 'ALL' && itemCat !== selectedCat) {
            return;
        }

        const key = getModelKey(item.marca, item.modelo);
        if (!stats[key]) {
            stats[key] = {
                name: key,
                marca: item.marca || '',
                modelo: item.modelo || '',
                instrumento: item.instrumento || '',
                category: itemCat,
                disponible: 0,
                deposito: 0,
                certificando: 0,
                ventasPeriodo: 0,
                ventasTotal: 0,
                discontinuado: false,
                items: [],
                depositoItems: []
            };
        }

        stats[key].items.push(item);
        if (item.discontinuado === 'SI' || item.discontinuado === 'si' || item.discontinuado === true) {
            stats[key].discontinuado = true;
        }

        const normState = getNormalizedState(item);
        const itemDate = parseFullDate(item.fecha_calibracion);

        if (normState === 'DISPONIBLE') {
            stats[key].disponible++;
            totalAvailable++;

            // Detección de Calibración en Estantería (>45 días desde calibración en stock disponible)
            if (itemDate) {
                const daysAged = Math.round((today - itemDate) / 86400000);
                if (daysAged > 45) {
                    agedStockItems.push({
                        id: item.id,
                        modelName: key,
                        instrumento: item.instrumento || key,
                        serie: item.serie || 'S/N',
                        fecha: item.fecha_calibracion || '',
                        daysAged: daysAged
                    });
                }
            }
        } else if (isItemSold(item)) {
            stats[key].ventasTotal++;
            const inPeriod = !cutoffDate || (itemDate && itemDate >= cutoffDate);
            if (inPeriod) {
                stats[key].ventasPeriodo++;
                totalPeriodSales++;
            }
        } else if (normState === 'CERTIFICANDO') {
            stats[key].certificando++;
            totalCertificando++;
        } else if (normState === 'EN DEPÓSITO') {
            stats[key].deposito++;
            stats[key].depositoItems.push(item);
            totalDeposito++;
        }
    });

    // 3. Cálculo de Reposición Inteligente y Modelos Inmovilizados
    const criticalRadar = [];
    const discontinuedModels = [];
    const inmovilizadosList = [];
    const bajaRotacionList = [];

    Object.values(stats).forEach(s => {
        if (s.discontinuado) {
            discontinuedModels.push(s.name);
            return;
        }

        // Velocidad de venta mensual en el período analizado
        s.monthlyRunRate = Number((s.ventasPeriodo / monthsInPeriod).toFixed(2));
        
        // Cobertura estimada de stock en días
        if (s.monthlyRunRate > 0) {
            s.coberturaDias = Math.round((s.disponible / (s.monthlyRunRate / 30.4)));
        } else {
            s.coberturaDias = 999; // Sin demanda en período
        }

        const totalEnStock = s.disponible + s.deposito + s.certificando;

        // REGLA 1: MODELOS INMOVILIZADOS Y BAJA ROTACIÓN (EVITAR CALIBRACIONES INNECESARIAS)
        if (totalEnStock > 0) {
            if (s.ventasTotal === 0) {
                inmovilizadosList.push(s);
            } else if (s.ventasTotal === 1) {
                bajaRotacionList.push(s);
            }
        }

        // REGLA 2: REPOSICIÓN INTELIGENTE (SOLO SI TIENE ROTACIÓN ACTIVA)
        const hasActiveRotation = s.ventasTotal >= 2 && s.monthlyRunRate >= 0.2;

        if (hasActiveRotation) {
            if (s.disponible === 0) {
                s.urgency = 'critical';
                s.urgencyLabel = 'Quiebre Inminente';
                s.urgencyReason = `Sin stock disponible (0u). Demanda: ${s.monthlyRunRate} u/mes`;
                criticalRadar.push(s);
            } else if (s.coberturaDias <= 15) {
                s.urgency = 'critical';
                s.urgencyLabel = `Crítico (${s.coberturaDias}d)`;
                s.urgencyReason = `Stock crítico: ${s.disponible}u (${s.coberturaDias} días). Demanda: ${s.monthlyRunRate} u/mes`;
                criticalRadar.push(s);
            } else if (s.coberturaDias <= 30) {
                s.urgency = 'warning';
                s.urgencyLabel = `Reposición (${s.coberturaDias}d)`;
                s.urgencyReason = `Reposición sugerida: ${s.disponible}u (${s.coberturaDias} días). Demanda: ${s.monthlyRunRate} u/mes`;
                criticalRadar.push(s);
            }
        }
    });

    // Ordenar listas
    criticalRadar.sort((a, b) => {
        if (a.disponible === 0 && b.disponible > 0) return -1;
        if (b.disponible === 0 && a.disponible > 0) return 1;
        if (a.coberturaDias !== b.coberturaDias) return a.coberturaDias - b.coberturaDias;
        return b.monthlyRunRate - a.monthlyRunRate;
    });

    inmovilizadosList.sort((a, b) => (b.disponible + b.deposito) - (a.disponible + a.deposito));
    bajaRotacionList.sort((a, b) => (b.disponible + b.deposito) - (a.disponible + a.deposito));
    agedStockItems.sort((a, b) => b.daysAged - a.daysAged);

    // 4. Actualizar Indicadores Rápidos (KPIs)
    const elDisponible = document.getElementById('kpi-disponible');
    if (elDisponible) elDisponible.innerText = totalAvailable;
    const elDispSub = document.getElementById('kpi-disponible-sub');
    if (elDispSub) {
        const availableModelsCount = Object.values(stats).filter(s => s.disponible > 0).length;
        elDispSub.innerText = `${availableModelsCount} modelo${availableModelsCount !== 1 ? 's' : ''} listo${availableModelsCount !== 1 ? 's' : ''}`;
    }

    const elVentas = document.getElementById('kpi-ventas');
    if (elVentas) elVentas.innerText = totalPeriodSales;
    const elVentasSub = document.getElementById('kpi-ventas-sub');
    if (elVentasSub) {
        const monthlyAvg = Number((totalPeriodSales / monthsInPeriod).toFixed(1));
        elVentasSub.innerText = `~${monthlyAvg} u/mes promedio`;
    }

    const elReposicion = document.getElementById('kpi-reposicion');
    if (elReposicion) elReposicion.innerText = criticalRadar.length;
    const elRepoSub = document.getElementById('kpi-reposicion-sub');
    if (elRepoSub) {
        const critOnly = criticalRadar.filter(x => x.urgency === 'critical').length;
        elRepoSub.innerText = `${critOnly} en riesgo crítico (<15d)`;
    }

    const elCertificando = document.getElementById('kpi-certificando');
    if (elCertificando) elCertificando.innerText = totalCertificando;

    const elDeposito = document.getElementById('kpi-deposito');
    if (elDeposito) elDeposito.innerText = totalDeposito;

    const elInmovilizados = document.getElementById('kpi-inmovilizados');
    if (elInmovilizados) elInmovilizados.innerText = inmovilizadosList.length;
    const elInmovilizadosSub = document.getElementById('kpi-inmovilizados-sub');
    if (elInmovilizadosSub) {
        const inmovUnits = inmovilizadosList.reduce((acc, x) => acc + x.disponible + x.deposito, 0);
        elInmovilizadosSub.innerText = `${inmovUnits} unidades sin salida`;
    }

    const elEnvejecido = document.getElementById('kpi-envejecido');
    if (elEnvejecido) elEnvejecido.innerText = agedStockItems.length;

    // 5. Renderizar Componentes
    appState.radarItems = criticalRadar;
    appState.discontinuedModels = discontinuedModels;
    renderRadarList(criticalRadar, discontinuedModels);

    renderInmovilizados(inmovilizadosList, bajaRotacionList, agedStockItems);
    renderSalesChart(stats);
    renderEvolutionChart();
}

function renderRadarList(criticalItems, discontinuedModels = []) {
    const replenishmentList = document.getElementById('replenishment-list');
    const kpiReposicionCount = document.getElementById('kpi-reposicion-count');
    
    // Contadores de pestañas
    const countAll = document.getElementById('radar-count-all');
    const countCrit = document.getElementById('radar-count-critical');
    const countWarn = document.getElementById('radar-count-warning');
    const countDep = document.getElementById('radar-count-deposito');

    const totalCrit = criticalItems.filter(x => x.urgency === 'critical').length;
    const totalWarn = criticalItems.filter(x => x.urgency === 'warning').length;
    const totalDep = criticalItems.filter(x => x.deposito > 0).length;

    if (countAll) countAll.innerText = criticalItems.length;
    if (countCrit) countCrit.innerText = totalCrit;
    if (countWarn) countWarn.innerText = totalWarn;
    if (countDep) countDep.innerText = totalDep;

    if (kpiReposicionCount) {
        kpiReposicionCount.innerText = `${criticalItems.length} modelo${criticalItems.length !== 1 ? 's' : ''}`;
    }

    if (!replenishmentList) return;
    replenishmentList.innerHTML = '';

    const currentTab = appState.biRadarTab || 'all';
    let filteredList = criticalItems;

    if (currentTab === 'critical') {
        filteredList = criticalItems.filter(x => x.urgency === 'critical');
    } else if (currentTab === 'warning') {
        filteredList = criticalItems.filter(x => x.urgency === 'warning');
    } else if (currentTab === 'deposito') {
        filteredList = criticalItems.filter(x => x.deposito > 0);
    }

    if (filteredList.length === 0) {
        let emptyMsg = 'No hay alertas de reposición para el filtro actual.';
        if (criticalItems.length === 0) emptyMsg = '✅ Stock en niveles óptimos. No se detectaron riesgos de quiebre en modelos activos.';
        replenishmentList.innerHTML = `
            <div style="text-align:center; padding: 2.5rem 1rem; color: var(--text-muted); grid-column: 1 / -1;">
                <i data-lucide="check-circle-2" style="width: 32px; height: 32px; color: var(--state-disponible); margin-bottom: 0.5rem;"></i>
                <p style="margin: 0; font-size: 0.85rem; font-weight: 500;">${emptyMsg}</p>
            </div>
        `;
    } else {
        filteredList.forEach(item => {
            const isCritical = item.urgency === 'critical';
            const cardClass = isCritical ? '' : 'warning';
            const badgeClass = isCritical ? 'critical' : 'warning';
            
            const matchedItem = (item.items && item.items.length > 0) ? item.items[0] : null;
            const targetId = matchedItem ? matchedItem.id : '';
            const hasDeposito = item.deposito > 0;
            const firstDepositoId = (item.depositoItems && item.depositoItems.length > 0) ? item.depositoItems[0].id : targetId;

            const div = document.createElement('div');
            div.className = `radar-card-item ${cardClass}`;
            div.innerHTML = `
                <div class="radar-card-top">
                    <div>
                        <div class="radar-model-title">${item.name}</div>
                        <div class="radar-model-cat">${item.category}</div>
                    </div>
                    <span class="radar-badge-urgency ${badgeClass}">${item.urgencyLabel}</span>
                </div>

                <div class="radar-stats-row">
                    <div class="radar-stat-box">
                        <span class="radar-stat-lbl">Disponible</span>
                        <span class="radar-stat-val" style="color: ${item.disponible === 0 ? '#ef4444' : 'var(--text-primary)'};">${item.disponible} u</span>
                    </div>
                    <div class="radar-stat-box">
                        <span class="radar-stat-lbl">Ritmo</span>
                        <span class="radar-stat-val">${item.monthlyRunRate} u/m</span>
                    </div>
                    <div class="radar-stat-box">
                        <span class="radar-stat-lbl">En Depósito</span>
                        <span class="radar-stat-val" style="color: ${hasDeposito ? 'var(--state-certificando)' : 'var(--text-muted)'};">${item.deposito} u</span>
                    </div>
                </div>

                <div class="radar-actions-row">
                    <div class="radar-coverage-info">
                        <i data-lucide="clock" style="width: 12px; height: 12px;"></i>
                        <span>${item.disponible === 0 ? 'Sin stock' : `~${item.coberturaDias}d cobertura`}</span>
                    </div>
                    <div class="radar-action-buttons">
                        <button type="button" class="btn-radar-disc btn-discontinuar-radar" data-model="${item.name}" title="Discontinuar Modelo">
                            <i data-lucide="archive" style="width: 13px; height: 13px;"></i>
                        </button>
                        ${hasDeposito ? `
                            <button type="button" class="btn-radar-action certificar btn-certificar-radar" data-id="${firstDepositoId}" data-model="${item.name}" title="Certificar desde depósito">
                                <i data-lucide="play" style="width: 12px; height: 12px;"></i> Calibrar (${item.deposito})
                            </button>
                        ` : `
                            <button type="button" class="btn-radar-action reponer btn-reponer-radar" data-id="${targetId}" title="Crear / Reponer stock">
                                <i data-lucide="plus" style="width: 12px; height: 12px;"></i> Reponer
                            </button>
                        `}
                    </div>
                </div>
            `;
            replenishmentList.appendChild(div);
        });
    }

    // Renderizar lista de discontinuados
    const discontinuedContainer = document.getElementById('discontinued-container');
    const discontinuedList = document.getElementById('discontinued-list');
    if (discontinuedContainer && discontinuedList) {
        discontinuedList.innerHTML = '';
        if (discontinuedModels.length > 0) {
            discontinuedModels.forEach(modelName => {
                const span = document.createElement('span');
                span.className = 'badge';
                span.style.cssText = 'background: rgba(107, 114, 128, 0.1); color: var(--text-secondary); border: 1px solid var(--border-color); padding: 0.3rem 0.6rem; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.35rem;';
                span.innerHTML = `
                    ${modelName}
                    <button type="button" class="btn-reactivar-model" data-model="${modelName}" style="background:none; border:none; color:#10b981; cursor:pointer; padding:0; display:inline-flex; align-items:center;" title="Reactivar Modelo">
                        <i data-lucide="rotate-ccw" style="width:12px; height:12px;"></i>
                    </button>
                `;
                discontinuedList.appendChild(span);
            });
            discontinuedContainer.style.display = 'flex';
        } else {
            discontinuedContainer.style.display = 'none';
        }
    }

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}

function renderInmovilizados(inmovilizadosList = [], bajaRotacionList = [], agedStockItems = []) {
    const countInmov = document.getElementById('health-count-inmovilizado');
    const countBaja = document.getElementById('health-count-bajarot');
    const countAged = document.getElementById('health-count-envejecido');

    if (countInmov) countInmov.innerText = inmovilizadosList.length;
    if (countBaja) countBaja.innerText = bajaRotacionList.length;
    if (countAged) countAged.innerText = agedStockItems.length;

    // 1. Grid Inmovilizados (0 Ventas)
    const gridInm = document.getElementById('inmovilizado-grid');
    if (gridInm) {
        gridInm.innerHTML = '';
        if (inmovilizadosList.length === 0) {
            gridInm.innerHTML = `
                <div style="text-align:center; padding: 2.5rem 1rem; color: var(--text-muted); grid-column: 1 / -1;">
                    <i data-lucide="check-circle-2" style="width: 32px; height: 32px; color: var(--state-disponible); margin-bottom: 0.5rem;"></i>
                    <p style="margin: 0; font-size: 0.85rem; font-weight: 500;">Excelente: No hay modelos en stock o depósito con 0 ventas.</p>
                </div>
            `;
        } else {
            inmovilizadosList.forEach(item => {
                const totalUnits = item.disponible + item.deposito;
                const div = document.createElement('div');
                div.className = 'radar-card-item inmovilizado';
                div.innerHTML = `
                    <div class="radar-card-top">
                        <div>
                            <div class="radar-model-title">${item.name}</div>
                            <div class="radar-model-cat">${item.category}</div>
                        </div>
                        <span class="radar-badge-urgency inmovilizado">🚫 NO CALIBRAR</span>
                    </div>

                    <div class="radar-stats-row">
                        <div class="radar-stat-box">
                            <span class="radar-stat-lbl">Disponible</span>
                            <span class="radar-stat-val" style="color: ${item.disponible > 0 ? '#b45309' : 'var(--text-muted)'};">${item.disponible} u</span>
                        </div>
                        <div class="radar-stat-box">
                            <span class="radar-stat-lbl">En Depósito</span>
                            <span class="radar-stat-val" style="color: ${item.deposito > 0 ? '#dc2626' : 'var(--text-muted)'}; font-weight: 700;">${item.deposito} u</span>
                        </div>
                        <div class="radar-stat-box">
                            <span class="radar-stat-lbl">Ventas Hist.</span>
                            <span class="radar-stat-val" style="color: #6b7280;">0 u</span>
                        </div>
                    </div>

                    <div class="radar-actions-row">
                        <div class="radar-coverage-info" style="color: #6b7280;">
                            <i data-lucide="alert-circle" style="width: 12px; height: 12px;"></i>
                            <span>${totalUnits} u inmovilizadas (${item.deposito} en depósito)</span>
                        </div>
                        <div class="radar-action-buttons">
                            <button type="button" class="btn btn-outline btn-sm" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; height: 28px; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.3rem;" onclick="switchView('gestion'); document.getElementById('search-input').value='${item.name}'; appState.search='${item.name.toLowerCase()}'; appState.filter='ALL'; appState.currentPage=1; renderTable();">
                                <i data-lucide="search" style="width: 11px; height: 11px;"></i> Ver en Tabla
                            </button>
                        </div>
                    </div>
                `;
                gridInm.appendChild(div);
            });
        }
    }

    // 2. Grid Baja Rotación (1 Venta)
    const gridBaja = document.getElementById('bajarot-grid');
    if (gridBaja) {
        gridBaja.innerHTML = '';
        if (bajaRotacionList.length === 0) {
            gridBaja.innerHTML = `
                <div style="text-align:center; padding: 2.5rem 1rem; color: var(--text-muted); grid-column: 1 / -1;">
                    <i data-lucide="check-circle-2" style="width: 32px; height: 32px; color: var(--state-disponible); margin-bottom: 0.5rem;"></i>
                    <p style="margin: 0; font-size: 0.85rem; font-weight: 500;">No hay modelos en stock con rotación mínima (1 venta).</p>
                </div>
            `;
        } else {
            bajaRotacionList.forEach(item => {
                const totalUnits = item.disponible + item.deposito;
                const div = document.createElement('div');
                div.className = 'radar-card-item bajarot';
                div.innerHTML = `
                    <div class="radar-card-top">
                        <div>
                            <div class="radar-model-title">${item.name}</div>
                            <div class="radar-model-cat">${item.category}</div>
                        </div>
                        <span class="radar-badge-urgency bajarot">⚠️ ROTACIÓN MÍNIMA</span>
                    </div>

                    <div class="radar-stats-row">
                        <div class="radar-stat-box">
                            <span class="radar-stat-lbl">Disponible</span>
                            <span class="radar-stat-val">${item.disponible} u</span>
                        </div>
                        <div class="radar-stat-box">
                            <span class="radar-stat-lbl">En Depósito</span>
                            <span class="radar-stat-val">${item.deposito} u</span>
                        </div>
                        <div class="radar-stat-box">
                            <span class="radar-stat-lbl">Ventas Hist.</span>
                            <span class="radar-stat-val" style="color: #b45309; font-weight: 700;">1 u</span>
                        </div>
                    </div>

                    <div class="radar-actions-row">
                        <div class="radar-coverage-info" style="color: #b45309;">
                            <i data-lucide="alert-triangle" style="width: 12px; height: 12px;"></i>
                            <span>Precaución: Solo 1 venta registrada</span>
                        </div>
                        <div class="radar-action-buttons">
                            <button type="button" class="btn btn-outline btn-sm" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; height: 28px; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.3rem;" onclick="switchView('gestion'); document.getElementById('search-input').value='${item.name}'; appState.search='${item.name.toLowerCase()}'; appState.filter='ALL'; appState.currentPage=1; renderTable();">
                                <i data-lucide="search" style="width: 11px; height: 11px;"></i> Ver en Tabla
                            </button>
                        </div>
                    </div>
                `;
                gridBaja.appendChild(div);
            });
        }
    }

    // 3. Grid Calibraciones en Estantería (>45 días)
    const gridAged = document.getElementById('aged-stock-grid');
    if (gridAged) {
        gridAged.innerHTML = '';
        if (agedStockItems.length === 0) {
            gridAged.innerHTML = `
                <div style="text-align:center; padding: 2.5rem 1rem; color: var(--text-muted); grid-column: 1 / -1;">
                    <i data-lucide="check-circle-2" style="width: 32px; height: 32px; color: var(--state-disponible); margin-bottom: 0.5rem;"></i>
                    <p style="margin: 0; font-size: 0.85rem; font-weight: 500;">Todo el stock disponible fue calibrado recientemente (&lt; 45 días).</p>
                </div>
            `;
        } else {
            agedStockItems.forEach(item => {
                const isVeryAged = item.daysAged > 90;
                const div = document.createElement('div');
                div.className = 'radar-card-item envejecido';
                div.innerHTML = `
                    <div class="radar-card-top">
                        <div>
                            <div class="radar-model-title">${item.id}: ${item.modelName}</div>
                            <div class="radar-model-cat">${item.instrumento} · Serie: ${item.serie}</div>
                        </div>
                        <span class="radar-badge-urgency envejecido">${item.daysAged}d en stock</span>
                    </div>

                    <div class="radar-stats-row">
                        <div class="radar-stat-box">
                            <span class="radar-stat-lbl">Calibrado</span>
                            <span class="radar-stat-val" style="font-size: 0.75rem;">${item.fecha || 'S/F'}</span>
                        </div>
                        <div class="radar-stat-box">
                            <span class="radar-stat-lbl">Antigüedad</span>
                            <span class="radar-stat-val" style="color: ${isVeryAged ? '#dc2626' : '#d97706'}; font-weight: 700;">${item.daysAged} días</span>
                        </div>
                        <div class="radar-stat-box">
                            <span class="radar-stat-lbl">Estado</span>
                            <span class="radar-stat-val" style="color: var(--state-disponible);">Listo</span>
                        </div>
                    </div>

                    <div class="radar-actions-row">
                        <div class="radar-coverage-info" style="color: #dc2626;">
                            <i data-lucide="clock" style="width: 12px; height: 12px;"></i>
                            <span>Priorizar despacho inmediato</span>
                        </div>
                        <div class="radar-action-buttons">
                            <button type="button" class="btn btn-outline btn-sm" style="font-size: 0.72rem; padding: 0.25rem 0.6rem; height: 28px; border-radius: 4px; display: inline-flex; align-items: center; gap: 0.3rem;" onclick="switchView('gestion'); document.getElementById('search-input').value='${item.id}'; appState.search='${item.id.toLowerCase()}'; appState.filter='ALL'; appState.currentPage=1; renderTable();">
                                <i data-lucide="external-link" style="width: 11px; height: 11px;"></i> Ver Registro
                            </button>
                        </div>
                    </div>
                `;
                gridAged.appendChild(div);
            });
        }
    }

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}

function renderSalesChart(stats = {}) {
    const canvas = document.getElementById('chart-sales');
    if (!canvas) return;

    const titleEl = document.getElementById('chart-sales-title');
    if (titleEl) {
        if (appState.biCategory && appState.biCategory !== 'ALL') {
            titleEl.innerHTML = `<i data-lucide="trending-up"></i> Top 10: ${appState.biCategory} <button type="button" class="btn btn-outline btn-xs" style="font-size:0.68rem; padding:0.15rem 0.5rem; margin-left:0.5rem; border-radius:4px; cursor:pointer;" onclick="appState.biCategory='ALL'; document.getElementById('bi-category-select').value='ALL'; updateDashboard();">Ver Global</button>`;
        } else {
            titleEl.innerHTML = `<i data-lucide="trending-up"></i> Top 10 Equipos Más Vendidos (Todas las Familias)`;
        }
        if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    }

    const isMatte = document.body.classList.contains('theme-matte');
    const chartColor = isMatte ? '#60a5fa' : '#2563eb';
    const textColor = isMatte ? '#a1a1aa' : '#4b5563';

    const salesData = Object.values(stats)
        .filter(s => s.ventasPeriodo > 0)
        .sort((a, b) => b.ventasPeriodo - a.ventasPeriodo)
        .slice(0, 10);

    const ctx = canvas.getContext('2d');
    if (salesChart) salesChart.destroy();

    if (salesData.length === 0) {
        return;
    }

    // Colores según cobertura: Roja (<15d), Naranja (<30d), Verde/Azul (>30d)
    const barColors = salesData.map(d => {
        if (d.disponible === 0 || d.coberturaDias <= 15) return '#ef4444';
        if (d.coberturaDias <= 30) return '#f97316';
        return '#10b981';
    });

    salesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: salesData.map(d => d.name),
            datasets: [{
                label: 'Unidades Vendidas',
                data: salesData.map(d => d.ventasPeriodo),
                backgroundColor: barColors,
                borderRadius: 4,
                barThickness: 12
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 400 },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const d = salesData[context.dataIndex];
                            let statusStr = '🟢 Stock Óptimo';
                            if (d.disponible === 0) statusStr = '🔴 SIN STOCK (0u)';
                            else if (d.coberturaDias <= 15) statusStr = `🔴 CRÍTICO (~${d.coberturaDias}d cobertura)`;
                            else if (d.coberturaDias <= 30) statusStr = `🟠 REPOSICIÓN (~${d.coberturaDias}d cobertura)`;
                            
                            return [
                                ` Ventas período: ${d.ventasPeriodo} u`,
                                ` Stock disponible: ${d.disponible} u`,
                                ` En depósito: ${d.deposito} u`,
                                ` Estado: ${statusStr}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: { 
                    beginAtZero: true, 
                    grid: { display: false },
                    ticks: { stepSize: 1, color: textColor } 
                },
                y: { 
                    grid: { display: false },
                    ticks: {
                        autoSkip: false,
                        font: { size: 10 },
                        color: textColor
                    }
                }
            }
        }
    });
}

function renderEvolutionChart() {
    const canvasEvol = document.getElementById('chart-evolution');
    if (!canvasEvol) return;

    const isMatte = document.body.classList.contains('theme-matte');
    const chartColor = isMatte ? '#60a5fa' : '#2563eb';
    const gridColor = isMatte ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
    const textColor = isMatte ? '#a1a1aa' : '#4b5563';

    const ctxEvol = canvasEvol.getContext('2d');
    const selectedCat = appState.biCategory || 'ALL';
    const evolRange = appState.biEvolRange || '1y';

    const salesByMonth = {};
    (appState.data || []).forEach(item => {
        if (selectedCat !== 'ALL' && getInstrumentCategory(item.instrumento) !== selectedCat) {
            return;
        }

        if (isItemSold(item)) {
            const dateParsed = parseYearMonth(item.fecha_calibracion);
            if (dateParsed) {
                const key = `${dateParsed.year}-${String(dateParsed.month).padStart(2, '0')}`;
                salesByMonth[key] = (salesByMonth[key] || 0) + 1;
            }
        }
    });

    const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const today = new Date();
    let numMonths = 12;
    if (evolRange === '6m') numMonths = 6;
    else if (evolRange === '1y') numMonths = 12;
    else if (evolRange === 'all') numMonths = 24;

    let sortedData = [];
    if (evolRange === 'all') {
        const keys = Object.keys(salesByMonth).sort();
        if (keys.length > 0) {
            const [minY, minM] = keys[0].split('-').map(Number);
            const [maxY, maxM] = [today.getFullYear(), today.getMonth() + 1];
            let currY = minY;
            let currM = minM;
            while (currY < maxY || (currY === maxY && currM <= maxM)) {
                const key = `${currY}-${String(currM).padStart(2, '0')}`;
                sortedData.push({
                    label: `${monthNames[currM - 1]} ${String(currY).slice(-2)}`,
                    count: salesByMonth[key] || 0
                });
                currM++;
                if (currM > 12) {
                    currM = 1;
                    currY++;
                }
            }
        }
    }

    if (sortedData.length === 0) {
        for (let i = numMonths - 1; i >= 0; i--) {
            const temp = new Date(today.getFullYear(), today.getMonth() - i, 1);
            const y = temp.getFullYear();
            const m = temp.getMonth() + 1;
            const key = `${y}-${String(m).padStart(2, '0')}`;
            sortedData.push({
                label: `${monthNames[temp.getMonth()]} ${String(y).slice(-2)}`,
                count: salesByMonth[key] || 0
            });
        }
    }

    const gradient = ctxEvol.createLinearGradient(0, 0, 0, 220);
    if (isMatte) {
        gradient.addColorStop(0, 'rgba(96, 165, 250, 0.35)');
        gradient.addColorStop(1, 'rgba(96, 165, 250, 0.0)');
    } else {
        gradient.addColorStop(0, 'rgba(37, 99, 235, 0.25)');
        gradient.addColorStop(1, 'rgba(37, 99, 235, 0.0)');
    }

    if (evolutionChart) evolutionChart.destroy();

    evolutionChart = new Chart(ctxEvol, {
        type: 'line',
        data: {
            labels: sortedData.map(d => d.label),
            datasets: [{
                label: 'Ventas Mensuales',
                data: sortedData.map(d => d.count),
                borderColor: chartColor,
                backgroundColor: gradient,
                fill: true,
                tension: 0.35,
                borderWidth: 2.5,
                pointBackgroundColor: chartColor,
                pointBorderColor: isMatte ? '#18181b' : '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: { duration: 400 },
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: isMatte ? '#1f2937' : '#ffffff',
                    titleColor: isMatte ? '#ffffff' : '#1f2937',
                    bodyColor: isMatte ? '#d1d5db' : '#4b5563',
                    borderColor: isMatte ? '#374151' : '#e5e7eb',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return ` Ventas: ${context.parsed.y} u`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: true, color: gridColor },
                    ticks: { color: textColor, font: { size: 10 } }
                },
                y: {
                    beginAtZero: true,
                    grid: { display: true, color: gridColor },
                    ticks: { stepSize: 1, color: textColor, font: { size: 10 } }
                }
            }
        }
    });
}

// ==========================================
// RENDERIZADO UI
// ==========================================
function updateUIState() {
    const tableBody = document.getElementById('table-body');
    const loadingState = document.getElementById('loading-state');
    const emptyState = document.getElementById('empty-state');
    
    if (appState.loading) {
        if (tableBody) tableBody.innerHTML = '';
        if (loadingState) loadingState.style.display = 'flex';
        if (emptyState) emptyState.style.display = 'none';
    } else {
        if (loadingState) loadingState.style.display = 'none';
    }
}



// ==========================================
// PAGINACIÓN Y CONTROLADORES DE TABLA
// ==========================================
function setupPaginationListeners() {
    const btnPrev = document.getElementById('btn-page-prev');
    if (btnPrev) {
        btnPrev.addEventListener('click', () => {
            if (appState.currentPage > 1) {
                appState.currentPage--;
                renderTable();
                const tableContainer = document.querySelector('.table-container');
                if (tableContainer) tableContainer.scrollTop = 0;
            }
        });
    }

    const btnNext = document.getElementById('btn-page-next');
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            const pageSize = appState.pageSize || 50;
            const totalPages = pageSize > 0 ? Math.ceil((appState._filteredCount || appState.data.length) / pageSize) : 1;
            if (appState.currentPage < totalPages) {
                appState.currentPage++;
                renderTable();
                const tableContainer = document.querySelector('.table-container');
                if (tableContainer) tableContainer.scrollTop = 0;
            }
        });
    }

    const sizeSelect = document.getElementById('page-size-select');
    if (sizeSelect) {
        sizeSelect.addEventListener('change', (e) => {
            appState.pageSize = parseInt(e.target.value, 10);
            appState.currentPage = 1;
            renderTable();
        });
    }
}

function renderPaginationControls(totalItems, totalPages, startIndex, endIndex) {
    const container = document.getElementById('table-pagination');
    const rangeSpan = document.getElementById('pagination-range');
    const pageIndicator = document.getElementById('pagination-current-page');
    const btnPrev = document.getElementById('btn-page-prev');
    const btnNext = document.getElementById('btn-page-next');
    const sizeSelect = document.getElementById('page-size-select');

    if (!container) return;

    if (totalItems === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'flex';

    const from = totalItems > 0 ? (startIndex + 1) : 0;
    const to = endIndex;
    if (rangeSpan) rangeSpan.textContent = `Mostrando ${from}-${to} de ${totalItems} equipos`;
    if (pageIndicator) pageIndicator.textContent = `Pág. ${appState.currentPage} de ${totalPages}`;

    if (btnPrev) btnPrev.disabled = (appState.currentPage <= 1);
    if (btnNext) btnNext.disabled = (appState.currentPage >= totalPages);

    if (sizeSelect && String(sizeSelect.value) !== String(appState.pageSize)) {
        sizeSelect.value = String(appState.pageSize);
    }
}

function renderTable() {
    const tbody = document.getElementById('table-body');
    const emptyState = document.getElementById('empty-state');
    const summaryContainer = document.getElementById('available-summary');
    if (!tbody) return;

    // 1. Filtrado ultra rápido con claves pre-indexadas
    const searchFilter = appState.search;
    let filtered = appState.data.filter(item => {
        // Filtro por Tab
        if (appState.filter !== 'ALL') {
            const fState = appState.filter;
            const iState = item.estado;
            if (fState === 'VENDIDO - DESPACHADO') {
                if (iState !== 'VENDIDO - DESPACHADO' && iState !== 'RESERVADO') return false;
            } else if (fState === 'VENDIDO - ENTREGADO') {
                if (iState !== 'VENDIDO - ENTREGADO' && iState !== 'ENTREGADO') return false;
            } else {
                if (iState !== fState) return false;
            }
        }
        
        // Filtro por Buscador indexado
        if (searchFilter) {
            const sKey = getItemSearchKey(item);
            if (!sKey.includes(searchFilter)) return false;
        }
        return true;
    });

    const totalItems = filtered.length;
    appState._filteredCount = totalItems;

    // 2. Gestión del Resumen de Disponibles y Todos
    if (appState.filter === 'DISPONIBLE' && totalItems > 0) {
        const counts = {};
        filtered.forEach(item => {
            const key = getModelKey(item.marca, item.modelo);
            counts[key] = (counts[key] || 0) + 1;
        });

        let summaryHTML = `
            <div class="summary-title"><i data-lucide="bar-chart-2" style="width:14px;"></i> Resumen de Stock Disponible</div>
            <div class="summary-grid">
        `;
        
        Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .forEach(([key, count]) => {
                summaryHTML += `
                    <div class="summary-card" title="${key}">
                        <span class="summary-label">${key}</span>
                        <span class="summary-count">${count} u</span>
                    </div>
                `;
            });
        
        summaryHTML += `</div>`;
        summaryContainer.innerHTML = summaryHTML;
        summaryContainer.style.display = 'flex';
    } else if (appState.filter === 'ALL' && totalItems > 0) {
        const counts = {};
        filtered.forEach(item => {
            let stateName = (item.estado || 'SIN ESTADO').toUpperCase();
            if (stateName.includes('DEP')) stateName = 'EN DEPÓSITO';
            if (stateName === 'RESERVADO') stateName = 'VENDIDO - DESPACHADO';
            if (stateName === 'ENTREGADO') stateName = 'VENDIDO - ENTREGADO';
            counts[stateName] = (counts[stateName] || 0) + 1;
        });

        let summaryHTML = `
            <div class="summary-title"><i data-lucide="bar-chart-2" style="width:14px;"></i> Cantidad de Equipos por Estado</div>
            <div class="summary-grid">
        `;
        
        const stateOrder = [
            'EN DEPÓSITO',
            'SIN CERTIFICAR',
            'CERTIFICANDO',
            'DISPONIBLE',
            'VENDIDO - DESPACHADO',
            'VENDIDO - ENTREGADO',
            'VENTA INTERNA'
        ];

        const sortedStates = Object.keys(counts).sort((a, b) => {
            const idxA = stateOrder.indexOf(a);
            const idxB = stateOrder.indexOf(b);
            if (idxA === -1 && idxB === -1) return a.localeCompare(b);
            if (idxA === -1) return 1;
            if (idxB === -1) return -1;
            return idxA - idxB;
        });

        sortedStates.forEach(stateName => {
            const count = counts[stateName];
            let displayLabel = stateName.toLowerCase();
            if (displayLabel.includes('dep') || displayLabel === 'en depósito') displayLabel = 'En Depósito';
            else if (displayLabel === 'sin certificar') displayLabel = 'Sin Certificar';
            else if (displayLabel === 'certificando') displayLabel = 'Certificando';
            else if (displayLabel === 'disponible') displayLabel = 'Disponible';
            else if (displayLabel === 'vendido - despachado') displayLabel = 'Vendido - Despachado';
            else if (displayLabel === 'vendido - entregado') displayLabel = 'Vendido - Entregado';
            else if (displayLabel === 'venta interna') displayLabel = 'Venta Interna';
            else displayLabel = displayLabel.charAt(0).toUpperCase() + displayLabel.slice(1);
            
            summaryHTML += `
                <div class="summary-card" title="${stateName}">
                    <span class="summary-label">${displayLabel}</span>
                    <span class="summary-count">${count} u</span>
                </div>
            `;
        });
        
        summaryHTML += `</div>`;
        summaryContainer.innerHTML = summaryHTML;
        summaryContainer.style.display = 'flex';
    } else {
        summaryContainer.style.display = 'none';
        summaryContainer.innerHTML = '';
    }

    // 3. Manejo de Estado Vacío
    if (totalItems === 0 && !appState.loading) {
        tbody.innerHTML = '';
        emptyState.style.display = 'flex';
        renderPaginationControls(0, 1, 0, 0);
        return;
    }

    emptyState.style.display = 'none';

    // 4. Cálculo de Segmento de Paginación
    const pageSize = appState.pageSize || 50;
    const totalPages = pageSize > 0 ? Math.max(1, Math.ceil(totalItems / pageSize)) : 1;
    if (appState.currentPage > totalPages) appState.currentPage = totalPages;
    const startIndex = pageSize > 0 ? (appState.currentPage - 1) * pageSize : 0;
    const endIndex = pageSize > 0 ? Math.min(startIndex + pageSize, totalItems) : totalItems;
    const pageItems = pageSize > 0 ? filtered.slice(startIndex, endIndex) : filtered;

    // 5. Inserción Atómica en un Solo Paso (Single-pass Commit)
    const rowsHTML = pageItems.map(item => {
        const certText = item.certificado ? item.certificado : '<span class="null-text">N/A</span>';
        const clienteText = item.cliente ? item.cliente : '<span class="null-text">Sin Asignar</span>';

        let displayEstado = item.estado || 'DISPONIBLE';
        if (item.estado === 'RESERVADO') {
            displayEstado = 'VENDIDO - DESPACHADO';
        } else if (item.estado === 'ENTREGADO') {
            displayEstado = 'VENDIDO - ENTREGADO';
        }
        const stateClass = displayEstado.toLowerCase().replace(/\s+/g, '-');
        const isChecked = (appState.selectedIds && appState.selectedIds.has(item.id)) ? 'checked' : '';

        const actionsHTML = `
            <div class="table-actions-cell">
                <button class="btn btn-outline btn-icon-only btn-view-ficha" data-id="${item.id}" title="Ver Ficha"><i data-lucide="eye"></i></button>
                <button class="btn btn-outline btn-icon-only btn-edit-equipo" data-id="${item.id}" title="Editar Equipo" style="color: var(--warning); border-color: var(--warning);"><i data-lucide="edit-2"></i></button>
                <button class="btn btn-outline btn-icon-only btn-duplicate-equipo" data-id="${item.id}" title="Duplicar Equipo"><i data-lucide="copy"></i></button>
                ${item.estado === 'EN DEPÓSITO' ? `<button class="btn btn-outline btn-change-state" data-id="${item.id}" data-target-state="CERTIFICANDO" title="Certificar Equipo" style="color: var(--state-certificando); border-color: var(--state-certificando);">Certificar <i data-lucide="activity"></i></button>` : ''}
                ${item.estado === 'CERTIFICANDO' ? `<button class="btn btn-outline btn-change-state" data-id="${item.id}" data-target-state="DISPONIBLE" title="Finalizar Calibración" style="color: var(--state-certificando); border-color: var(--state-certificando);">Finalizar <i data-lucide="check"></i></button>` : ''}
                ${item.estado === 'DISPONIBLE' ? `
                    <button class="btn btn-outline btn-change-state" data-id="${item.id}" data-target-state="VENDIDO - DESPACHADO" title="Despachar Equipo">Despachar <i data-lucide="arrow-right"></i></button>
                    <button class="btn btn-outline btn-icon-only btn-change-state" data-id="${item.id}" data-target-state="VENTA INTERNA" title="Venta Interna" style="color: #6b7280; border-color: #cbd5e1;"><i data-lucide="home"></i></button>
                ` : ''}
                ${(item.estado === 'RESERVADO' || item.estado === 'VENDIDO - DESPACHADO') ? `
                    <button class="btn btn-outline btn-change-state" data-id="${item.id}" data-target-state="DISPONIBLE" title="Devolución a Disponible" style="color: #059669; border-color: #10b981;"><i data-lucide="rotate-ccw"></i> Devolución</button>
                    <button class="btn btn-primary btn-change-state" data-id="${item.id}" data-target-state="ENTREGADO" title="Entregar Certificado">Entregar <i data-lucide="user-check"></i></button>
                ` : ''}
            </div>
        `;

        return `<tr>
            <td style="text-align: center;"><input type="checkbox" class="bulk-item-select" data-id="${item.id}" ${isChecked} style="width: 15px; height: 15px; cursor: pointer;"></td>
            <td style="white-space: nowrap;"><strong>${item.id}</strong></td>
            <td><div style="line-height: 1.25;"><strong class="text-truncate" title="${item.instrumento || ''}">${item.instrumento || '---'}</strong><br><small style="color: var(--text-secondary);" class="text-truncate" title="${item.marca || ''} ${item.modelo || ''}">${item.marca || ''} ${item.modelo || ''}</small></div></td>
            <td style="white-space: nowrap;"><span class="text-truncate" title="${item.serie || ''}">${item.serie || ''}</span></td>
            <td style="text-align: center; white-space: nowrap;"><span class="badge ${stateClass}">${displayEstado}</span></td>
            <td style="text-align: center; white-space: nowrap;">${item.fecha_calibracion || ''}</td>
            <td style="text-align: center; white-space: nowrap;"><strong>${certText}</strong></td>
            <td><span class="cliente-cell text-truncate" title="${item.cliente || 'Sin Asignar'}">${clienteText}</span></td>
            <td>${actionsHTML}</td>
        </tr>`;
    }).join('');

    tbody.innerHTML = rowsHTML;

    // 6. Optimización de Iconos: Acotado únicamente a las filas activas
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons({ root: tbody });
    }

    // 7. Renderizar Controles de Paginación
    renderPaginationControls(totalItems, totalPages, startIndex, endIndex);
}

// ==========================================
// LOGICA DE MODALES
// ==========================================
function closeAllModals() {
    document.querySelectorAll('.modal-overlay, .modal').forEach(m => m.classList.remove('active'));
    document.getElementById('form-nuevo').reset();
    document.getElementById('form-estado').reset();
}

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('active');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
}

function toggleNuevoStateFields() {
    const nuevoEstado = document.getElementById('nuevo-estado');
    const nuevoFecha = document.getElementById('nuevo-fecha');
    const nuevoPatronesSection = document.getElementById('nuevo-patrones-section');
    const nuevoPuntosSection = document.getElementById('nuevo-puntos-section');
    
    if (!nuevoEstado) return;
    
    const val = nuevoEstado.value;
    if (val === 'EN DEPÓSITO') {
        if (nuevoFecha) {
            nuevoFecha.required = false;
            nuevoFecha.closest('.form-group').style.display = 'none';
        }
        if (nuevoPatronesSection) nuevoPatronesSection.style.display = 'none';
        if (nuevoPuntosSection) nuevoPuntosSection.style.display = 'none';
    } else if (val === 'CERTIFICANDO') {
        if (nuevoFecha) {
            nuevoFecha.required = false;
            nuevoFecha.closest('.form-group').style.display = 'block';
        }
        if (nuevoPatronesSection) nuevoPatronesSection.style.display = 'block';
        if (nuevoPuntosSection) nuevoPuntosSection.style.display = 'block';
    } else {
        if (nuevoFecha) {
            nuevoFecha.required = true;
            nuevoFecha.closest('.form-group').style.display = 'block';
        }
        if (nuevoPatronesSection) nuevoPatronesSection.style.display = 'block';
        if (nuevoPuntosSection) nuevoPuntosSection.style.display = 'block';
    }
}

function toggleEditStateFields() {
    const editEstado = document.getElementById('edit-estado');
    const editFecha = document.getElementById('edit-fecha');
    const editCertificado = document.getElementById('edit-certificado');
    const editCliente = document.getElementById('edit-cliente');
    const editPatronesSection = document.getElementById('edit-patrones-section');
    const editPuntosSection = document.getElementById('edit-puntos-section');
    
    if (!editEstado) return;
    
    const val = editEstado.value;
    if (val === 'EN DEPÓSITO') {
        if (editFecha) {
            editFecha.required = false;
            editFecha.closest('.form-group').style.display = 'none';
        }
        if (editCertificado) editCertificado.closest('.form-group').style.display = 'none';
        if (editCliente) editCliente.closest('.form-group').style.display = 'none';
        if (editPatronesSection) editPatronesSection.style.display = 'none';
        if (editPuntosSection) editPuntosSection.style.display = 'none';
    } else if (val === 'CERTIFICANDO') {
        if (editFecha) {
            editFecha.required = false;
            editFecha.closest('.form-group').style.display = 'block';
        }
        if (editCertificado) editCertificado.closest('.form-group').style.display = 'block';
        if (editCliente) editCliente.closest('.form-group').style.display = 'block';
        if (editPatronesSection) editPatronesSection.style.display = 'block';
        if (editPuntosSection) editPuntosSection.style.display = 'block';
    } else {
        if (editFecha) {
            editFecha.required = true;
            editFecha.closest('.form-group').style.display = 'block';
        }
        if (editCertificado) editCertificado.closest('.form-group').style.display = 'block';
        if (editCliente) editCliente.closest('.form-group').style.display = 'block';
        if (editPatronesSection) editPatronesSection.style.display = 'block';
        if (editPuntosSection) editPuntosSection.style.display = 'block';
    }
}

function openModalNuevo() {
    const modal = document.getElementById('modal-nuevo');
    
    // Resetear visibilidad de campos de calibración según estado inicial
    toggleNuevoStateFields();
    
    // Generar ID Correlativo seguro
    const newId = getNextInstrumentId();
    document.getElementById('nuevo-id').value = newId;

    // Generar Tabla Puntos (Ej: 1 punto inicial por defecto)
    const tbody = document.getElementById('tbody-puntos');
    tbody.innerHTML = '';
    window.puntoCount = 0;
    addPuntoRow(); // Agregar el primero automáticamente
    
    // Fecha actual por defecto
    document.getElementById('nuevo-fecha').valueAsDate = new Date();
    
    // Limpiar checklist de patrones
    updatePatronesChecklist('nuevo', []);
    
    modal.classList.add('active');
}

function toggleMasivoFields() {
    const chk = document.getElementById('masivo-nuevo-articulo-chk');
    const container = document.getElementById('masivo-nuevos-campos-container');
    const groupSelect = document.getElementById('masivo-articulo-group');
    const select = document.getElementById('masivo-articulo-select');
    const nameInput = document.getElementById('masivo-nombre');
    const brandInput = document.getElementById('masivo-marca');
    const modelInput = document.getElementById('masivo-modelo');
    
    if (!chk) return;
    
    if (chk.checked) {
        if (container) container.style.display = 'block';
        if (groupSelect) groupSelect.style.display = 'none';
        if (select) select.required = false;
        if (nameInput) nameInput.required = true;
        if (brandInput) brandInput.required = true;
        if (modelInput) modelInput.required = true;
    } else {
        if (container) container.style.display = 'none';
        if (groupSelect) groupSelect.style.display = 'block';
        if (select) select.required = true;
        if (nameInput) nameInput.required = false;
        if (brandInput) brandInput.required = false;
        if (modelInput) modelInput.required = false;
    }
}

function openModalMasivo() {
    const modal = document.getElementById('modal-masivo');
    document.getElementById('form-masivo').reset();
    
    const chk = document.getElementById('masivo-nuevo-articulo-chk');
    if (chk) chk.checked = false;
    toggleMasivoFields();
    
    // Obtener artículos únicos de la base de datos local
    const uniqueArticles = [];
    const seen = new Set();
    
    if (appState.data && appState.data.length > 0) {
        appState.data.forEach(item => {
            const inst = (item.instrumento || '').trim();
            const brand = (item.marca || '').trim();
            const model = (item.modelo || '').trim();
            if (!inst && !brand && !model) return;
            
            const key = `${inst}|${brand}|${model}`.toUpperCase();
            if (!seen.has(key)) {
                seen.add(key);
                uniqueArticles.push({ instrumento: inst, marca: brand, modelo: model });
            }
        });
    }
    
    // Ordenar alfabéticamente
    uniqueArticles.sort((a, b) => {
        const compInst = a.instrumento.localeCompare(b.instrumento);
        if (compInst !== 0) return compInst;
        const compBrand = a.marca.localeCompare(b.marca);
        if (compBrand !== 0) return compBrand;
        return a.modelo.localeCompare(b.modelo);
    });
    
    const select = document.getElementById('masivo-articulo-select');
    if (select) {
        select.innerHTML = '<option value="">-- Seleccionar Artículo Existente --</option>';
        uniqueArticles.forEach(art => {
            const optVal = JSON.stringify(art);
            const optText = `${art.instrumento} (Marca: ${art.marca}, Modelo: ${art.modelo})`;
            const option = document.createElement('option');
            option.value = optVal;
            option.innerText = optText;
            select.appendChild(option);
        });
    }
    
    modal.classList.add('active');
}

async function handleFormMasivo(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-save-masivo');
    btn.disabled = true;
    btn.innerText = 'Registrando...';
    
    const chk = document.getElementById('masivo-nuevo-articulo-chk');
    let nombre = '';
    let marca = '';
    let modelo = '';
    
    if (chk && chk.checked) {
        nombre = document.getElementById('masivo-nombre').value.trim();
        marca = document.getElementById('masivo-marca').value.trim();
        modelo = document.getElementById('masivo-modelo').value.trim();
    } else {
        const selectVal = document.getElementById('masivo-articulo-select').value;
        if (!selectVal) {
            showToast("Por favor selecciona un artículo existente o activa la casilla para registrar uno nuevo.", "warning");
            btn.disabled = false;
            btn.innerText = 'Registrar Lote';
            return;
        }
        try {
            const art = JSON.parse(selectVal);
            nombre = art.instrumento;
            marca = art.marca;
            modelo = art.modelo;
        } catch(err) {
            console.error("Error al parsear artículo de select:", err);
        }
    }
    
    const cantidad = parseInt(document.getElementById('masivo-cantidad').value) || 0;
    if (cantidad <= 0) {
        showToast("Por favor ingresa una cantidad válida mayor a 0", "error");
        btn.disabled = false;
        btn.innerText = 'Registrar Lote';
        return;
    }
    
    try {
        // Obtener el correlativo ID inicial de forma segura
        let lastNum = 999;
        if (appState.data && appState.data.length > 0) {
            for (let i = 0; i < appState.data.length; i++) {
                const strId = String(appState.data[i].id || '');
                const m = strId.match(/\d+/);
                if (m) {
                    const n = parseInt(m[0], 10);
                    if (!isNaN(n) && n > lastNum) lastNum = n;
                }
            }
        }
        
        const newRecords = [];
        for (let i = 0; i < cantidad; i++) {
            const newId = 'INST-' + (lastNum + 1 + i);
            const itemData = {
                id: newId,
                instrumento: nombre,
                marca: marca,
                modelo: modelo,
                serie: 'S/N',
                fecha_calibracion: '',
                estado: 'EN DEPÓSITO',
                certificado: '',
                cliente: '',
                patrones: '[]',
                puntos: '[]'
            };
            newRecords.push(itemData);
        }

        // 1. ACTUALIZACIÓN OPTIMISTA INMEDIATA (0 ms)
        for (let i = newRecords.length - 1; i >= 0; i--) {
            appState.data.unshift(newRecords[i]);
        }
        closeAllModals();
        renderTable();
        updateDashboard();
        showToast(`Se registraron ${cantidad} equipos en Depósito con éxito.`, "success");

        // 2. PERSISTENCIA EN SEGUNDO PLANO (en fragmentos seguros de Firestore)
        commitBatchInChunks(newRecords, (batch, item) => {
            const ref = db.collection("instrumentos").doc(item.id);
            batch.set(ref, item);
        }).catch(err => {
            console.error("Error al persistir lote en Firestore:", err);
            showToast("⚠️ Error al sincronizar parte del lote en la nube.", "warning");
        });

    } catch(err) {
        console.error("Error en ingreso masivo:", err);
        showToast("⚠️ Falla al realizar ingreso masivo: " + err.toString(), "error");
    } finally {
        btn.disabled = false;
        btn.innerText = 'Registrar Lote';
        hideLoader();
    }
}

function addPuntoRow() {
    window.puntoCount++;
    const tbody = document.getElementById('tbody-puntos');
    const tr = document.createElement('tr');
    tr.id = `punto-row-${window.puntoCount}`;
    tr.innerHTML = `
        <td><input type="text" class="input-tiny" name="pt-name" value="PT${window.puntoCount}" required></td>
        <td><input type="text" class="input-tiny" name="pt-unit" placeholder="Ej. °C" required></td>
        <td><input type="number" step="any" name="pt-ref" required></td>
        <td><input type="number" step="any" name="pt-inst" required></td>
        <td><input type="text" class="input-tiny" name="pt-inc" placeholder="Opcional" style="width: 70px;"></td>
        <td><button type="button" class="btn-icon text-danger" onclick="this.closest('tr').remove()" title="Eliminar"><i data-lucide="trash-2"></i></button></td>
    `;
    tbody.appendChild(tr);
    lucide.createIcons();
}

function openModalDuplicate(id, index = null) {
    let item;
    if (index !== null) {
        item = appState.data[parseInt(index)];
    } else {
        item = appState.data.find(x => x.id === id);
    }
    
    if(!item) return;

    openModalNuevo(); 
    
    document.getElementById('nuevo-nombre').value = item.instrumento || '';
    document.getElementById('nuevo-marca').value = item.marca || '';
    document.getElementById('nuevo-modelo').value = item.modelo || '';
    document.getElementById('nuevo-serie').value = ''; 
    
    // Copiar patrones del equipo duplicado
    let itemPats = [];
    if (item.patrones) {
        try {
            itemPats = JSON.parse(item.patrones);
        } catch(e) {
            if (typeof item.patrones === 'string') {
                itemPats = item.patrones.split(',').map(s => s.trim());
            } else if (Array.isArray(item.patrones)) {
                itemPats = item.patrones;
            }
        }
    }
    updatePatronesChecklist('nuevo', itemPats);
    
    const tbody = document.getElementById('tbody-puntos');
    tbody.innerHTML = '';
    window.puntoCount = 0;
    
    let puntos = [];
    try { if (item.puntos) puntos = JSON.parse(item.puntos); } catch(e) {}
    
    if (puntos.length === 0) {
        addPuntoRow();
    } else {
        puntos.forEach((p) => {
            window.puntoCount++;
            const tr = document.createElement('tr');
            tr.id = `punto-row-${window.puntoCount}`;
            tr.innerHTML = `
                <td><input type="text" class="input-tiny" name="pt-name" value="${p.pt}" required></td>
                <td><input type="text" class="input-tiny" name="pt-unit" value="${p.unidad || ''}" placeholder="Ej. °C" required></td>
                <td><input type="number" step="any" name="pt-ref" value="${p.ref || ''}" required></td>
                <td><input type="number" step="any" name="pt-inst" value="${p.inst || ''}" required></td>
                <td><input type="text" class="input-tiny" name="pt-inc" value="${p.inc || ''}" placeholder="Opcional" style="width: 70px;"></td>
                <td><button type="button" class="btn-icon text-danger" onclick="this.closest('tr').remove()" title="Eliminar"><i data-lucide="trash-2"></i></button></td>
            `;
            tbody.appendChild(tr);
        });
        lucide.createIcons();
    }
}

function openModalEstado(id, targetState) {
    const modal = document.getElementById('modal-estado');
    const item = appState.data.find(x => x.id === id);
    
    if(!item) return;

    document.getElementById('estado-id').value = id;
    document.getElementById('estado-target').value = targetState;
    
    let displayTargetState = targetState;
    if (targetState === 'ENTREGADO') {
        displayTargetState = 'VENDIDO - ENTREGADO';
    } else if (targetState === 'RESERVADO') {
        displayTargetState = 'VENDIDO - DESPACHADO';
    } else if (targetState === 'DISPONIBLE' && (item.estado === 'RESERVADO' || item.estado === 'VENDIDO - DESPACHADO')) {
        displayTargetState = 'DISPONIBLE (DEVOLUCIÓN)';
    }

    if (targetState === 'DISPONIBLE' && (item.estado === 'RESERVADO' || item.estado === 'VENDIDO - DESPACHADO')) {
        document.getElementById('modal-estado-title').innerText = `Registrar Devolución a DISPONIBLE`;
    } else {
        document.getElementById('modal-estado-title').innerText = `Pasar equipo a ${displayTargetState}`;
    }

    // Context Info
    document.getElementById('estado-context').innerHTML = `
        <p>Equipo: <strong>${item.marca} ${item.modelo}</strong> (ID: ${item.id})</p>
        <p>Nº de Serie: <strong>${item.serie}</strong></p>
        ${item.certificado ? `<p>Nº de Certificado: <strong>${item.certificado}</strong></p>` : ''}
    `;

    // Campos condicionales
    const fReservado = document.getElementById('fields-reservado');
    const fEntregado = document.getElementById('fields-entregado');
    const fInterno = document.getElementById('fields-interno');
    const fDevolucion = document.getElementById('fields-devolucion');
    
    if (fReservado) fReservado.style.display = 'none';
    if (fEntregado) fEntregado.style.display = 'none';
    if (fInterno) fInterno.style.display = 'none';
    if (fDevolucion) fDevolucion.style.display = 'none';

    // Deshacer requerimientos previos
    document.getElementById('estado-certificado').required = false;
    document.getElementById('estado-cliente').required = false;
    document.getElementById('estado-fecha').required = false;
    const elDestino = document.getElementById('estado-destino-interno');
    if (elDestino) elDestino.required = false;

    // Pre-poblar fecha actual si existe
    if (item.fecha_calibracion) {
        if (item.fecha_calibracion.includes('-')) {
            document.getElementById('estado-fecha').value = item.fecha_calibracion;
        } else if (item.fecha_calibracion.includes('/')) {
            const parts = item.fecha_calibracion.split('/');
            if (parts.length === 3) {
                document.getElementById('estado-fecha').value = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
            }
        }
    } else {
        document.getElementById('estado-fecha').valueAsDate = new Date();
    }

    if (targetState === 'RESERVADO' || targetState === 'VENDIDO - DESPACHADO') {
        if (fReservado) fReservado.style.display = 'block';
        document.getElementById('estado-certificado').required = true;
        document.getElementById('estado-fecha').required = true;
    } 
    else if (targetState === 'ENTREGADO') {
        if (fEntregado) fEntregado.style.display = 'block';
        document.getElementById('estado-cliente').required = true;
    }
    else if (targetState === 'VENTA INTERNA') {
        if (fInterno) fInterno.style.display = 'block';
        if (elDestino) elDestino.required = true;
    }
    else if (targetState === 'DISPONIBLE' && (item.estado === 'RESERVADO' || item.estado === 'VENDIDO - DESPACHADO')) {
        if (fDevolucion) fDevolucion.style.display = 'block';
    }

    modal.classList.add('active');
}

// ==========================================
// GESTIÓN DE FORMULARIOS (Submits)
// ==========================================
async function handleFormNuevo(e) {
    e.preventDefault();
    console.log(">>> Iniciando alta de equipo nuevo...");
    const btn = document.getElementById('btn-save-nuevo');
    btn.disabled = true;
    btn.innerText = 'Guardando...';

    try {
        const record = {
            id: document.getElementById('nuevo-id').value.trim(),
            instrumento: document.getElementById('nuevo-nombre').value.trim(),
            marca: document.getElementById('nuevo-marca').value.trim(),
            modelo: document.getElementById('nuevo-modelo').value.trim(),
            serie: document.getElementById('nuevo-serie').value.trim(),
            fecha_calibracion: document.getElementById('nuevo-estado').value === 'EN DEPÓSITO' ? '' : document.getElementById('nuevo-fecha').value,
            estado: document.getElementById('nuevo-estado').value,
            certificado: '',
            cliente: ''
        };

        if (record.estado === 'VENDIDO - DESPACHADO') record.estado = 'RESERVADO';
        if (record.estado === 'VENDIDO - ENTREGADO') record.estado = 'ENTREGADO';

        const checkedPats = [];
        if (record.estado !== 'EN DEPÓSITO') {
            document.querySelectorAll('#nuevo-patrones-checklist input[type="checkbox"]:checked').forEach(function(cb) {
                checkedPats.push(cb.value);
            });
        }
        record.patrones = JSON.stringify(checkedPats);

        const puntos = [];
        if (record.estado !== 'EN DEPÓSITO') {
            const trs = document.querySelectorAll('#tbody-puntos tr');
            trs.forEach((tr) => {
                puntos.push({
                    pt: tr.querySelector('input[name="pt-name"]').value,
                    variable: '', 
                    unidad: tr.querySelector('input[name="pt-unit"]').value,
                    ref: tr.querySelector('input[name="pt-ref"]').value,
                    inst: tr.querySelector('input[name="pt-inst"]').value,
                    inc: tr.querySelector('input[name="pt-inc"]').value
                });
            });
        }
        record.puntos = JSON.stringify(puntos);

        // 1. ACTUALIZACIÓN OPTIMISTA INMEDIATA (0 ms)
        appState.data = appState.data.filter(x => x.id !== record.id);
        appState.data.unshift(record);
        appState.data.sort((a, b) => {
            const numA = parseInt(String(a.id || '').replace(/\D/g, '')) || 0;
            const numB = parseInt(String(b.id || '').replace(/\D/g, '')) || 0;
            return numB - numA;
        });

        closeAllModals();
        renderTable();
        updateDashboard();
        showToast("Equipo guardado con éxito.", "success");

        // 2. PERSISTENCIA EN SEGUNDO PLANO
        saveNewRecord(record).catch(err => {
            console.error("Error al persistir en segundo plano:", err);
            showToast("⚠️ Hubo un problema al sincronizar el equipo en la nube.", "warning");
        });

    } catch (error) {
        console.error("Error al guardar nuevo registro:", error);
        showToast("⚠️ Falla al procesar el formulario: " + error.toString(), "error");
    } finally {
        btn.disabled = false;
        btn.innerText = 'Generar Entrada';
        hideLoader();
    }
}


async function handleFormEstado(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-save-estado');
    btn.disabled = true;
    btn.innerText = 'Procesando...';

    try {
        const id = document.getElementById('estado-id').value.trim();
        const targetState = document.getElementById('estado-target').value;
        
        let extraData = {};
        if(targetState === 'RESERVADO' || targetState === 'VENDIDO - DESPACHADO') {
            extraData.certificado = document.getElementById('estado-certificado').value.trim();
            extraData.fecha = document.getElementById('estado-fecha').value;
        } else if (targetState === 'ENTREGADO') {
            extraData.cliente = document.getElementById('estado-cliente').value.trim();
        } else if (targetState === 'VENTA INTERNA') {
            const elDestino = document.getElementById('estado-destino-interno');
            extraData.cliente = elDestino ? elDestino.value.trim() : 'Venta Interna';
        }

        // 1. ACTUALIZACIÓN OPTIMISTA INMEDIATA
        const itemIdx = appState.data.findIndex(x => x.id === id);
        if (itemIdx !== -1) {
            let apiState = targetState;
            if (apiState === 'VENDIDO - DESPACHADO') apiState = 'RESERVADO';
            if (apiState === 'VENDIDO - ENTREGADO') apiState = 'ENTREGADO';
            appState.data[itemIdx].estado = apiState;
            if (extraData.cliente !== undefined) appState.data[itemIdx].cliente = extraData.cliente;
            if (extraData.certificado !== undefined) appState.data[itemIdx].certificado = extraData.certificado;
            if (extraData.fecha !== undefined) appState.data[itemIdx].fecha_calibracion = extraData.fecha;
        }

        closeAllModals();
        renderTable();
        updateDashboard();
        showToast("Estado actualizado con éxito.", "success");

        // 2. PERSISTENCIA EN SEGUNDO PLANO
        updateStateRecord(id, targetState, extraData).catch(err => {
            console.error("Error al persistir estado:", err);
            showToast("⚠️ Hubo un problema al sincronizar el estado en la nube.", "warning");
        });

    } catch (error) {
        console.error("Error al actualizar estado:", error);
        showToast("Hubo un error al actualizar el estado.", "error");
    } finally {
        btn.disabled = false;
        btn.innerText = 'Confirmar';
        hideLoader();
    }
}


function openModalFicha(id) {
    const modal = document.getElementById('modal-ficha');
    const item = appState.data.find(x => x.id === id);
    if(!item) return;

    // Helper: Formatear fecha a DD / MM / YYYY o dejar en blanco si no tiene
    const formatRegDate = (dateStr) => {
        const str = String(dateStr || '').trim();
        if (str === '' || str === '---') {
            return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;2026';
        }
        const parts = str.split('-');
        if (parts.length === 3) {
            return `${parts[2]} / ${parts[1]} / ${parts[0]}`;
        }
        const partsSlash = str.split('/');
        if (partsSlash.length === 3) {
            return `${partsSlash[0]} / ${partsSlash[1]} / ${partsSlash[2]}`;
        }
        return str;
    };

    // Helper: Obtener especificaciones del instrumento
    const getInstrumentSpecs = (instrumento, certificado) => {
        const name = (instrumento || '').toUpperCase();
        const cert = (certificado || '').toUpperCase();
        
        let rango = '---';
        let resolucion = '---';
        let tolerancia = '---';
        
        if (name.includes('DECIBEL') || name.includes('SONÓMETRO') || name.includes('SONOMETRO') || cert.includes('-DE-') || cert.includes('-DB-') || cert.includes('-DC-')) {
            rango = '30 a 130 dB';
            resolucion = '0,1 dB';
        } else if (name.includes('DINAM') || cert.includes('-DN-')) {
            rango = '0 a 500 N';
            resolucion = '0,1 N';
        } else if (name.includes('TERMOHIGR') || cert.includes('-TH-')) {
            rango = 'Temp: 0 a 50 °C / Hum: 10 a 95 %Hr';
            resolucion = 'Temp: 0,1 °C / Hum: 1 %Hr';
        } else if (name.includes('LUX') || cert.includes('-LX-')) {
            rango = '0 a 20000 Lux';
            resolucion = '1 Lux';
        } else if (name.includes('TERMÓM') || name.includes('TERMOM') || cert.includes('-TE-') || cert.includes('-TC-')) {
            rango = '-30 a 150 °C';
            resolucion = '0,1 °C';
        } else if (name.includes('CALIBRE') || cert.includes('-CA-')) {
            rango = '0 a 150 mm';
            resolucion = '0,01 mm';
        }
        
        return { rango, resolucion, tolerancia };
    };

    // Helper: Generar tabla de mediciones (Puntos, V.Ref, V.Inst...)
    const generateTableHTML = (unit, points) => {
        let rowsHTML = '';
        const rowCount = Math.max(3, points.length);
        for (let i = 0; i < rowCount; i++) {
            const p = points[i] || {};
            const refVal = p.ref !== undefined ? String(p.ref).replace('.', ',') : '';
            const instVal = p.inst !== undefined ? String(p.inst).replace('.', ',') : '';
            
            rowsHTML += `
                <tr>
                    <td style="text-align: center; font-weight: bold; width: 10%;">${i + 1}</td>
                    <td style="width: 15%; text-align: center;">${refVal}</td>
                    <td style="width: 15%; text-align: center;">${instVal}</td>
                    <td style="width: 15%;"></td>
                    <td style="width: 15%;"></td>
                    <td style="width: 15%;"></td>
                    <td style="width: 15%;"></td>
                </tr>
            `;
        }
        
        return `
            <div class="reg-table-wrapper" style="display: flex; flex-direction: column; width: 100%; margin-top: 10px; page-break-inside: avoid;">
                <div style="display: flex; justify-content: flex-end; align-items: center; gap: 8px; width: 100%; margin-bottom: 5px;">
                    <span style="font-size: 0.8rem; font-weight: bold;">Unid Med:</span>
                    <span style="border: 2px solid black; padding: 2px 10px; font-size: 0.85rem; font-weight: bold; min-width: 60px; text-align: center; background: white; color: black;">${unit}</span>
                </div>
                <table class="reg-measurement-table">
                    <thead>
                        <tr>
                            <th>PUNTOS</th>
                            <th>V.Ref</th>
                            <th>V.Inst</th>
                            <th>V.Ref</th>
                            <th>V.Inst</th>
                            <th>V.Ref</th>
                            <th>V.Inst</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHTML}
                    </tbody>
                </table>
            </div>
        `;
    };

    // Datos del equipo
    const cliente = (item.cliente || '').trim();
    const fechaFormatted = formatRegDate(item.fecha_calibracion);
    const instrumento = (item.instrumento || '').trim();
    const marca = (item.marca || '').trim();
    const modelo = (item.modelo || '').trim();
    const serie = (item.serie || '').trim();
    const idInstrumento = (item.id || '').trim();
    const certificado = (item.certificado || '').trim();
    
    // Obtener Rango, Resolución, Tolerancia
    const specs = getInstrumentSpecs(instrumento, certificado);

    // Parsear puntos
    let puntosArray = [];
    try {
        if(item.puntos) puntosArray = JSON.parse(item.puntos);
    } catch(e) { console.error("Error leyendo puntos Json", e); }

    // Determinar si es Termohigrómetro
    const instUpper = instrumento.toUpperCase();
    const certUpper = certificado.toUpperCase();
    const isTH = instUpper.includes('TERMOHIGR') || certUpper.includes('-TH-');

    // Generar tablas de resultados
    let tablesHTML = '';
    if (isTH) {
        // Puntos de temperatura (no contienen M2 y la unidad no es %)
        const tempPts = puntosArray.filter(p => !String(p.pt).toUpperCase().includes('M2') && !String(p.unidad).includes('%'));
        // Puntos de humedad (contienen M2 o la unidad es %)
        const humPts = puntosArray.filter(p => String(p.pt).toUpperCase().includes('M2') || String(p.unidad).includes('%'));
        
        tablesHTML = `
            ${generateTableHTML('°C', tempPts)}
            ${generateTableHTML('%Hr', humPts)}
        `;
    } else {
        const unit = puntosArray.length > 0 ? (puntosArray[0].unidad || '°C') : '°C';
        tablesHTML = generateTableHTML(unit, puntosArray);
    }

    // Parsear patrones seleccionados
    let patronesStr = '';
    if (item.patrones) {
        try {
            const pats = JSON.parse(item.patrones);
            if (Array.isArray(pats)) {
                patronesStr = pats.join(', ');
            }
        } catch(e) {
            patronesStr = String(item.patrones);
        }
    }
    if (!patronesStr && isTH) {
        patronesStr = 'THGP-001'; // Default para Termohigrómetro si está en blanco
    }

    // Construir HTML del registro
    const htmlContent = `
        <div class="registro-calibracion-container">
            <!-- Cabecera -->
            <div class="reg-header">
                <div class="reg-title">REGISTRO DE CALIBRACION</div>
                <img src="logo_schwyz.png" alt="SchwyzLab" class="reg-logo">
            </div>
            
            <div class="reg-divider"></div>
            
            <!-- Cliente & Fecha -->
            <div class="reg-row">
                <div class="reg-field" style="flex: 2;">
                    <span class="reg-label">CLIENTE:</span>
                    <span class="reg-value-underline" style="font-weight: 500;">${cliente}</span>
                </div>
                <div class="reg-field" style="flex: 1; justify-content: flex-end;">
                    <span class="reg-label">Fecha:</span>
                    <span class="reg-value-date">${fechaFormatted}</span>
                </div>
            </div>
            
            <div class="reg-divider"></div>
            
            <!-- Grid de Información de Instrumento y Acción Tomada -->
            <div class="reg-info-grid">
                <!-- Columna Izquierda: Información -->
                <div class="reg-info-col-left">
                    <div class="reg-field-line">
                        <span class="reg-label-fixed">INSTRUMENTO:</span>
                        <span class="reg-value-underline">${instrumento}</span>
                    </div>
                    <div class="reg-field-line">
                        <span class="reg-label-fixed">MARCA:</span>
                        <span class="reg-value-underline">${marca}</span>
                    </div>
                    <div class="reg-field-line">
                        <span class="reg-label-fixed">MODELO:</span>
                        <span class="reg-value-underline">${modelo}</span>
                    </div>
                    <div class="reg-field-line">
                        <span class="reg-label-fixed">Nº SERIE:</span>
                        <span class="reg-value-underline">${serie}</span>
                    </div>
                    <div class="reg-field-line">
                        <span class="reg-label-fixed">RANGO:</span>
                        <span class="reg-value-underline">${specs.rango}</span>
                    </div>
                    <div class="reg-field-line">
                        <span class="reg-label-fixed">DIV. MIN(RES):</span>
                        <span class="reg-value-underline">${specs.resolucion}</span>
                    </div>
                    <div class="reg-field-line">
                        <span class="reg-label-fixed">TOLERANCIA:</span>
                        <span class="reg-value-underline">${specs.tolerancia}</span>
                    </div>
                    <div class="reg-field-line">
                        <span class="reg-label-fixed">ID INSTRUMENTO:</span>
                        <span class="reg-value-underline" style="font-weight: bold;">${idInstrumento}</span>
                    </div>
                </div>
                
                <!-- Columna Derecha: Acción y Nº Certificado -->
                <div class="reg-info-col-right">
                    <div class="reg-action-taken-box">
                        <div class="reg-action-title">Accion Tomada:</div>
                        <table class="reg-action-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>SI</th>
                                    <th>NO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="row-label">Limpieza</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td class="row-label">Ajuste</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="reg-cert-number-box">
                        <span class="reg-label">Nº Cert:</span>
                        <span class="reg-value-underline" style="font-weight: bold; text-align: center;">${certificado}</span>
                    </div>
                </div>
            </div>
            
            <div class="reg-divider"></div>
            
            <!-- Resultados -->
            <div class="reg-results-section">
                <div class="reg-results-title">RESULTADO ENCONTRADO</div>
                ${tablesHTML}
            </div>
            
            <!-- Pie de Página -->
            <div class="reg-footer-section">
                <div class="reg-footer-row-top">
                    <div class="reg-footer-col-left">
                        <div class="reg-field-line">
                            <span class="reg-label-fixed-footer">Patron Utilizado:</span>
                            <span class="reg-value-underline" style="font-weight: bold;">${patronesStr}</span>
                        </div>
                        <div class="reg-field-line" style="margin-top: 10px;">
                            <span class="reg-label-fixed-footer">Observacion:</span>
                            <span class="reg-value-underline">___________________________________</span>
                        </div>
                        <div class="reg-field-line">
                            <span class="reg-label-fixed-footer"></span>
                            <span class="reg-value-underline">___________________________________</span>
                        </div>
                    </div>
                    <div class="reg-footer-col-right">
                        <div style="font-size: 0.8rem; line-height: 1.4; color: #333; margin-top: 5px;">
                            <strong>V.Ref</strong> - Valor Patron<br>
                            <strong>V.Inst</strong> - Valor Instrumento
                        </div>
                    </div>
                </div>
                
                <div class="reg-divider" style="margin-top: 15px; margin-bottom: 15px;"></div>
                
                <div class="reg-footer-row-bottom">
                    <div class="reg-field-line" style="margin-bottom: 8px;">
                        <span class="reg-label-fixed-footer">Cond Ambientales:</span>
                        <span class="reg-value-underline" style="width: 100px; display: inline-block; text-align: center;"></span>
                        <span style="font-size: 0.85rem; font-weight: 500; margin-left: 5px;">°C</span>
                    </div>
                    <div class="reg-field-line" style="margin-bottom: 15px;">
                        <span class="reg-label-fixed-footer"></span>
                        <span class="reg-value-underline" style="width: 100px; display: inline-block; text-align: center;"></span>
                        <span style="font-size: 0.85rem; font-weight: 500; margin-left: 5px;">%Hr</span>
                    </div>
                    
                    <div class="reg-field-line" style="margin-top: 10px;">
                        <span class="reg-label-fixed-footer">Calibrado por:</span>
                        <span class="reg-value-underline" style="width: 250px; display: inline-block;"></span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Inyectar HTML en la zona imprimible del modal
    document.querySelector('.printable-ficha').innerHTML = htmlContent;

    // Configurar botón "Emitir Certificado" en la cabecera del modal
    const btnEmitir = document.getElementById('btn-emitir-certificado-ficha');
    if (btnEmitir) {
        if (certificado && certificado !== '---' && certificado.trim() !== '') {
            btnEmitir.style.display = 'inline-flex';
            btnEmitir.onclick = () => {
                imprimirCertificado(item.id);
            };
        } else {
            btnEmitir.style.display = 'none';
        }
    }

    // Mostrar el modal
    modal.classList.add('active');
}

function openModalEdit(id) {
    const item = appState.data.find(x => x.id === id);
    if(!item) return;

    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-instrumento').value = item.instrumento || '';
    document.getElementById('edit-marca').value = item.marca || '';
    document.getElementById('edit-modelo').value = item.modelo || '';
    document.getElementById('edit-serie').value = item.serie || '';
    document.getElementById('edit-fecha').value = item.fecha_calibracion || '';
    
    let selectEstado = item.estado;
    if (selectEstado === 'RESERVADO') {
        selectEstado = 'VENDIDO - DESPACHADO';
    } else if (selectEstado === 'ENTREGADO') {
        selectEstado = 'VENDIDO - ENTREGADO';
    }
    document.getElementById('edit-estado').value = selectEstado;
    toggleEditStateFields();
    document.getElementById('edit-certificado').value = item.certificado || '';
    document.getElementById('edit-cliente').value = item.cliente || '';

    // Cargar patrones seleccionados
    let itemPats = [];
    if (item.patrones) {
        try {
            itemPats = JSON.parse(item.patrones);
        } catch(e) {
            if (typeof item.patrones === 'string') {
                itemPats = item.patrones.split(',').map(s => s.trim());
            } else if (Array.isArray(item.patrones)) {
                itemPats = item.patrones;
            }
        }
    }
    if (itemPats.length === 0) {
        const matchingMapping = getTemplateForInstrument(item.instrumento, item.certificado);
        if (matchingMapping) {
            itemPats = matchingMapping.patrones;
        }
    }
    updatePatronesChecklist('edit', itemPats);

    // Puntos
    const tbody = document.getElementById('edit-tbody-puntos');
    tbody.innerHTML = '';
    let puntos = [];
    try { if(item.puntos) puntos = JSON.parse(item.puntos); } catch(e) {}
    
    puntos.forEach((p) => {
        addPuntoRowEdit(p);
    });
    if (puntos.length === 0) addPuntoRowEdit();

    document.getElementById('modal-edit').classList.add('active');
}

function addPuntoRowEdit(existingData = null) {
    const tbody = document.getElementById('edit-tbody-puntos');
    const tr = document.createElement('tr');
    const idx = tbody.children.length + 1;
    tr.innerHTML = `
        <td><input type="text" class="input-tiny" name="pt-name" value="${existingData ? existingData.pt : 'PT'+idx}" required></td>
        <td><input type="text" class="input-tiny" name="pt-unit" value="${existingData ? existingData.unidad : ''}" placeholder="Ej. °C" required></td>
        <td><input type="number" step="any" name="pt-ref" value="${existingData ? existingData.ref : ''}" required></td>
        <td><input type="number" step="any" name="pt-inst" value="${existingData ? existingData.inst : ''}" required></td>
        <td><input type="text" class="input-tiny" name="pt-inc" value="${existingData ? (existingData.inc || '') : ''}" placeholder="Opcional" style="width: 70px;"></td>
        <td><button type="button" class="btn-icon text-danger" onclick="this.closest('tr').remove()"><i data-lucide="trash-2"></i></button></td>
    `;
    tbody.appendChild(tr);
    lucide.createIcons();
}

async function handleFormEdit(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-save-edit');
    btn.disabled = true;
    btn.innerText = 'Guardando...';

    try {
        const record = {
            id: document.getElementById('edit-id').value.trim(),
            instrumento: document.getElementById('edit-instrumento').value.trim(),
            marca: document.getElementById('edit-marca').value.trim(),
            modelo: document.getElementById('edit-modelo').value.trim(),
            serie: document.getElementById('edit-serie').value.trim(),
            fecha_calibracion: document.getElementById('edit-estado').value === 'EN DEPÓSITO' ? '' : document.getElementById('edit-fecha').value,
            estado: (document.getElementById('edit-estado').value === 'VENDIDO - ENTREGADO') ? 'ENTREGADO' : document.getElementById('edit-estado').value,
            certificado: document.getElementById('edit-estado').value === 'EN DEPÓSITO' ? '' : document.getElementById('edit-certificado').value.trim(),
            cliente: document.getElementById('edit-estado').value === 'EN DEPÓSITO' ? '' : document.getElementById('edit-cliente').value.trim()
        };

        if (record.estado === 'VENDIDO - DESPACHADO') record.estado = 'RESERVADO';

        const checkedPats = [];
        if (record.estado !== 'EN DEPÓSITO') {
            document.querySelectorAll('#edit-patrones-checklist input[type="checkbox"]:checked').forEach(function(cb) {
                checkedPats.push(cb.value);
            });
        }
        record.patrones = JSON.stringify(checkedPats);

        const puntos = [];
        if (record.estado !== 'EN DEPÓSITO') {
            document.querySelectorAll('#edit-tbody-puntos tr').forEach(tr => {
                puntos.push({
                    pt: tr.querySelector('input[name="pt-name"]').value,
                    variable: '', 
                    unidad: tr.querySelector('input[name="pt-unit"]').value,
                    ref: tr.querySelector('input[name="pt-ref"]').value,
                    inst: tr.querySelector('input[name="pt-inst"]').value,
                    inc: tr.querySelector('input[name="pt-inc"]').value
                });
            });
        }
        record.puntos = JSON.stringify(puntos);

        // 1. ACTUALIZACIÓN OPTIMISTA INMEDIATA (0 ms)
        const idx = appState.data.findIndex(x => x.id === record.id);
        if (idx !== -1) {
            appState.data[idx] = Object.assign({}, appState.data[idx], record);
        } else {
            appState.data.unshift(record);
        }
        closeAllModals();
        renderTable();
        updateDashboard();
        showToast("Cambios guardados con éxito.", "success");

        // 2. PERSISTENCIA EN SEGUNDO PLANO
        saveFullUpdate(record).catch(err => {
            console.error("Error al persistir cambios:", err);
            showToast("⚠️ Hubo un problema al sincronizar los cambios en la nube.", "warning");
        });

    } catch (error) {
        console.error("Error al editar registro:", error);
        showToast("Hubo un error al guardar los cambios: " + error.toString(), "error");
    } finally {
        btn.disabled = false;
        btn.innerText = 'Guardar Cambios';
        hideLoader();
    }
}

function updateBadge() {
    const badge = document.getElementById('badge-solicitudes');
    if (!badge) return;
    const pendientes = appState.solicitudes.filter(s => {
        const est = (s.estado || '').trim().toLowerCase();
        return est === '' || est === 'pendiente';
    }).length;
    if (pendientes > 0) {
        badge.innerText = pendientes;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
}

function renderSolicitudes() {
    const tbody = document.getElementById('table-solicitudes');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    if (appState.solicitudes.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:2rem; color:var(--text-secondary);">No hay solicitudes registradas.</td></tr>';
        return;
    }

    // Deduplicación defensiva antes de renderizar la tabla
    const uniqueSolicitudes = [];
    const seenKeys = new Set();

    appState.solicitudes.forEach(s => {
        const key = (s.id || s.firestoreId || `${s.timestamp}_${s.email}_${s.certificado}`).toLowerCase().trim();
        if (!seenKeys.has(key)) {
            seenKeys.add(key);
            uniqueSolicitudes.push(s);
        }
    });

    uniqueSolicitudes.forEach((s, index) => {
        const est = (s.estado || '').trim().toLowerCase();
        const isEnviado = est !== '' && est !== 'pendiente';
        const tr = document.createElement('tr');
        if (isEnviado) tr.style.opacity = '0.6';
        
        let badgeClass = 'reservado';
        if (est === 'enviado') {
            badgeClass = 'entregado';
        } else if (est === 'enviado anteriormente') {
            badgeClass = 'enviado-anteriormente';
        } else if (est === 'duplicada' || est === 'duplicado') {
            badgeClass = 'duplicada';
        } else if (isEnviado) {
            badgeClass = 'entregado';
        }

        // Comprobar si existe un envío previo o si el equipo ya está entregado
        const certSol = String(s.certificado || '').trim().toUpperCase();
        const hasPrevSent = appState.solicitudes.some(other => {
            if (other === s || (s.firestoreId && other.firestoreId === s.firestoreId)) return false;
            const oEst = (other.estado || '').trim().toLowerCase();
            return certificadosCoinciden(other.certificado, certSol) && oEst !== '' && oEst !== 'pendiente';
        });
        const matchedEq = appState.data.find(e => certificadosCoinciden(e.certificado, certSol));
        const isEqDelivered = matchedEq && matchedEq.estado === 'ENTREGADO';
        
        let priorWarningHtml = '';
        if (!isEnviado && (hasPrevSent || isEqDelivered)) {
            priorWarningHtml = `<br><span class="badge" style="background:#fff3cd; color:#856404; border:1px solid #ffeeba; font-size:0.6rem; margin-top:2px; display:inline-block;" title="Ya fue enviado o entregado en el historial">⚠️ Ya enviado/entregado</span>`;
        }

        // Obtener el índice real en appState.solicitudes
        const realIndex = appState.solicitudes.findIndex(orig => (orig.firestoreId && s.firestoreId) ? orig.firestoreId === s.firestoreId : (orig.id && s.id ? orig.id === s.id : orig === s));
        const targetIndex = realIndex > -1 ? realIndex : index;
        
        tr.innerHTML = `
            <td style="white-space: nowrap; font-family: var(--font-data);">${s.timestamp}</td>
            <td><strong class="text-truncate" style="max-width: 180px; display: block;" title="${s.empresa}">${s.empresa}</strong><small style="color: var(--text-secondary);" class="text-truncate" title="${s.contacto}">${s.contacto}</small></td>
            <td style="text-align: center; white-space: nowrap; font-family: var(--font-data);"><code>${s.certificado}</code></td>
            <td><span class="text-truncate" style="max-width: 180px; display: block;" title="${s.email}">${s.email}</span></td>
            <td style="text-align: center; white-space: nowrap;"><span class="badge ${badgeClass}">${s.estado || 'pendiente'}</span>${priorWarningHtml}</td>
            <td style="text-align: right; padding-right: 0.5rem;">
                <div style="display: flex; gap: 0.25rem; justify-content: flex-end; align-items: center;">
                    ${isEnviado ? '' : `<button class="btn btn-primary btn-sm btn-atender-solicitud" data-index="${targetIndex}" style="height: 25px; padding: 0 0.5rem; font-size: 0.7rem; white-space: nowrap;"><i data-lucide="external-link" style="width:13px; height:13px;"></i> Atender</button>`}
                    <button class="btn btn-outline btn-sm btn-ver-ficha-solicitud" data-index="${targetIndex}" title="Ver Ficha del Instrumento" style="height: 25px; padding: 0 0.5rem; font-size: 0.7rem; white-space: nowrap;"><i data-lucide="eye" style="width:13px; height:13px;"></i> Info</button>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

function handleVerFichaSolicitud(index) {
    const s = appState.solicitudes[index];
    if (!s) return;
    
    const certSolicitud = String(s.certificado || '').trim().toUpperCase();
    const equipo = appState.data.find(e => certificadosCoinciden(e.certificado, certSolicitud));
    
    if (!equipo) {
        showToast(`No se encontró ningún equipo en el inventario con el Certificado: "${s.certificado}".`, "warning");
        return;
    }
    
    openModalFicha(equipo.id);
}

function obtenerIdNumericoCertificado(cert) {
    const clean = String(cert || '').trim().toUpperCase();
    const match = clean.match(/\d+$/);
    return match ? match[0] : clean;
}

function obtenerLetrasCertificado(cert) {
    const clean = String(cert || '').trim().toUpperCase();
    // Quitar el año/mes del inicio si existe (4 a 6 dígitos seguidos opcionalmente por guión)
    const sinFecha = clean.replace(/^\d{4,6}-?/, '');
    // Extraer solo las letras
    const match = sinFecha.match(/[A-Z]+/g);
    return match ? match.join('') : '';
}

function certificadosCoinciden(certA, certB) {
    const cleanA = String(certA || '').trim().toUpperCase();
    const cleanB = String(certB || '').trim().toUpperCase();
    
    if (cleanA === '' || cleanB === '') return false;
    if (cleanA === cleanB) return true;
    
    // Validar compatibilidad de letras (tipo de instrumento, ej: TH vs LX)
    const letrasA = obtenerLetrasCertificado(cleanA);
    const letrasB = obtenerLetrasCertificado(cleanB);
    if (letrasA && letrasB && letrasA !== letrasB) {
        return false; // Conflicto de tipo (ej: TH vs LX)
    }
    
    // Quitar todos los caracteres no alfanuméricos
    const alphaA = cleanA.replace(/[^A-Z0-9]/g, '');
    const alphaB = cleanB.replace(/[^A-Z0-9]/g, '');
    if (alphaA === alphaB) return true;
    
    // Si uno contiene al otro completo
    if (cleanA.includes(cleanB) || cleanB.includes(cleanA)) return true;
    
    // Extraer el identificador numérico final
    const numA = obtenerIdNumericoCertificado(cleanA);
    const numB = obtenerIdNumericoCertificado(cleanB);
    if (numA && numB && numA === numB && numA.length >= 4) return true;
    
    return false;
}

function handleAtenderSolicitud(index) {
    console.log("Atendiendo solicitud index:", index);
    const s = appState.solicitudes[index];
    if (!s) {
        console.error("Solicitud no encontrada en appState");
        return;
    }

    // Buscar el equipo en el inventario por código de certificado (limpio)
    const certSolicitud = String(s.certificado || '').trim().toUpperCase();
    console.log("Buscando matching para certificado (Fuzzy):", certSolicitud);

    const equipo = appState.data.find(e => {
        return certificadosCoinciden(e.certificado, certSolicitud);
    });
    
    if (!equipo) {
        console.warn("No se encontró equipo en el inventario.");
        showToast(`No se encontró ningún equipo en el inventario con el Certificado "${s.certificado}". Asegúrate de cargarlo en Gestión de Equipos.`, "warning");
        return;
    }

    console.log("Equipo encontrado:", equipo);

    // Almacenar datos temporalmente para el envío
    appState.currentSolicitudIndex = index; 
    appState.pendingEmail = {
        ...s,
        instrumento: `${equipo.marca} ${equipo.modelo}`,
        equipoId: equipo.id
    };

    // Poblar modal
    const emailTo = document.getElementById('email-to');
    const emailBody = document.getElementById('email-body');
    
    if (!emailTo || !emailBody) {
        console.error("Error: No se encontró el modal de email en el HTML.");
        showToast("Error técnico: El modal de envío no existe en el HTML.", "error");
        return;
    }

    emailTo.value = s.email;
    emailBody.value = `Estimado/a ${s.contacto || s.empresa || 'Cliente'},\n\nAdjunto al presente correo encontrará el certificado de calibración solicitado, correspondiente al código ${s.certificado}. Agradecemos confirmar la correcta recepción de este mensaje.\n\nLe informamos que somos proveedores de instrumentos de medición y certificamos. Puede consultarnos de manera directa si:\n* Tiene otros instrumentos para certificar: Realizamos la calibración y emisión de certificados para todo su equipamiento.\n* Quiere consultar por equipo nuevo: Lo asesoramos y proveemos en la adquisición de nuevo instrumental.\n\nPara cualquier consulta técnica o cotización, puede responder a este correo o escribirnos vía WhatsApp al +54 11 2863-4493.\n\nQuedamos a su entera disposición.\n\nSaludos cordiales,\n\nDarío Del Real\nCR MEDICION | SchwyzLab Laboratorio de Metrología\nPerú 1297 - CABA - Argentina\nTel.: +54 11 4361-3499 / 3680\nWeb: www.todomedicion.com`;
    
    // Comprobar envíos previos o equipo ya entregado para alerta visible en pestaña de envío
    const prevSol = appState.solicitudes.find(other => {
        if (other === s || (s.firestoreId && other.firestoreId === s.firestoreId)) return false;
        const oEst = (other.estado || '').trim().toLowerCase();
        return certificadosCoinciden(other.certificado, certSolicitud) && oEst !== '' && oEst !== 'pendiente';
    });
    const isEqDelivered = (equipo.estado === 'ENTREGADO');

    const warningBox = document.getElementById('email-duplicate-warning');
    const btnSend = document.getElementById('btn-confirm-send');
    if (warningBox) {
        if (prevSol || isEqDelivered) {
            let warnDetails = '';
            if (prevSol) {
                warnDetails += `<div>• <strong>Solicitud anterior:</strong> ${prevSol.timestamp || 'Fecha previa'} - ${prevSol.empresa} (${prevSol.email}) - Estado: <span class="badge entregado" style="font-size:0.6rem; padding:1px 4px;">${prevSol.estado}</span></div>`;
            }
            if (isEqDelivered) {
                warnDetails += `<div>• <strong>Inventario:</strong> El equipo <em>${equipo.marca} ${equipo.modelo}</em> (S/N: ${equipo.serie || 'N/A'}) ya figura como <strong>ENTREGADO</strong> a <strong>${equipo.cliente || 'Cliente'}</strong>.</div>`;
            }

            warningBox.innerHTML = `
                <div class="alert alert-warning" style="margin:0; padding:0.75rem; border:1px solid #ffeeba; background-color:#fff3cd; color:#856404; border-radius:var(--radius-sm);">
                    <div style="font-weight:700; font-size:0.85rem; margin-bottom:0.35rem; display:flex; align-items:center; gap:6px;">
                        <i data-lucide="alert-triangle" style="width:16px; height:16px; color:#856404;"></i> ¡Atención! Certificado ya enviado / entregado previamente
                    </div>
                    <div style="font-size:0.75rem; line-height:1.4; margin-bottom:0.6rem; color:#664d03;">
                        ${warnDetails}
                    </div>
                    <div style="display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center;">
                        <button type="button" class="btn btn-warning btn-sm" onclick="markRequestAsAlreadySent()" style="font-size:0.75rem; padding:0.35rem 0.6rem; font-weight:600; display:flex; align-items:center; gap:4px;">
                            <i data-lucide="check-circle" style="width:14px; height:14px;"></i> Marcar como 'Enviado Anteriormente' (Sin reenviar mail)
                        </button>
                    </div>
                </div>
            `;
            warningBox.style.display = 'block';
            if (btnSend) {
                btnSend.innerHTML = '<i data-lucide="send"></i> Re-enviar Mail de todos modos';
            }
        } else {
            warningBox.innerHTML = '';
            warningBox.style.display = 'none';
            if (btnSend) {
                btnSend.innerHTML = '<i data-lucide="send"></i> Confirmar y Enviar Mail';
            }
        }
    }

    // Configurar pestaña inicial (Email) y buscador de historial
    switchAtenderTab('email');
    const searchVerifyCert = document.getElementById('search-verify-cert');
    if (searchVerifyCert) {
        searchVerifyCert.value = s.certificado || '';
    }
    // Pre-cargar la verificación en segundo plano
    performVerifyCertSearch();
    
    console.log("Abriendo modal confirmación...");
    openModal('modal-email-confirm');
    checkFileInDrive(s.certificado);
}

async function checkFileInDrive(certificado) {
    const statusBox = document.getElementById('email-file-status');
    const btnSend = document.getElementById('btn-confirm-send');
    const errorMsg = document.getElementById('email-error-msg');
    
    statusBox.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Buscando certificado en Drive...';
    statusBox.className = 'status-check-box';
    btnSend.disabled = true;
    errorMsg.style.display = 'none';
    lucide.createIcons();

    if (!certificado || String(certificado).trim() === '') {
        statusBox.innerHTML = `<i data-lucide="alert-circle" style="color:var(--danger);"></i> Certificado no especificado o vacío.`;
        statusBox.classList.add('danger');
        errorMsg.style.display = 'block';
        lucide.createIcons();
        return;
    }

    try {
        const response = await fetch(`${GOOGLE_SHEETS_API_URL}?action=check_file&certificado=${encodeURIComponent(certificado)}`, {
            credentials: 'omit'
        });

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") === -1) {
            throw new Error("El servidor de Google retornó una página HTML en lugar de JSON. Verifique en Google Apps Script que la implementación esté en acceso 'Cualquiera' (Anyone) y autorizada.");
        }

        const result = await response.json();

        if (result.found) {
            statusBox.innerHTML = `<i data-lucide="check-circle" style="color:var(--success);"></i> Archivo localizado: <strong>${result.fileName}</strong>`;
            statusBox.classList.add('success');
            btnSend.disabled = false;
        } else {
            let diagInfo = `<br><small style="color:var(--warning); font-size:0.7rem;">Carpeta: ${result.folderName || 'No detectada'}</small>`;
            if (result.files && result.files.length > 0) {
                diagInfo += `<br><small style="display:block; margin-top:0.3rem; opacity:0.8; font-size:0.65rem;">Visto en Drive: ${result.files.join(', ')}</small>`;
            } else {
                diagInfo += `<br><small style="color:var(--danger); font-size:0.65rem;">(Carpeta vacía o sin acceso)</small>`;
            }
            statusBox.innerHTML = `<i data-lucide="alert-circle" style="color:var(--danger);"></i> No encontrado.${diagInfo}`;
            statusBox.classList.add('danger');
            errorMsg.style.display = 'block';
        }
    } catch (e) {
        statusBox.innerHTML = `<i data-lucide="x-circle"></i> Error de conexión: ${e.message}`;
    }
    lucide.createIcons();
}

async function confirmSendEmail() {
    const btn = document.getElementById('btn-confirm-send');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Enviando...';
    lucide.createIcons();
    showLoader("Enviando email y adjuntos...");

    // Obtenemos el certificado del estado en lugar de extraerlo del HTML
    const certificado = appState.pendingEmail ? appState.pendingEmail.certificado : '';

    // Buscar patrones del equipo para adjuntar
    let patternsData = [];
    if (appState.pendingEmail && appState.pendingEmail.equipoId) {
        const equipo = appState.data.find(function(e) { return e.id === appState.pendingEmail.equipoId; });
        if (equipo) {
            let patIds = [];
            
            // Si el equipo tiene patrones guardados en la base de datos, los usamos
            if (equipo.patrones && equipo.patrones !== '' && equipo.patrones !== '[]') {
                try {
                    patIds = JSON.parse(equipo.patrones);
                } catch(e) {
                    if (typeof equipo.patrones === 'string') {
                        patIds = equipo.patrones.split(',').map(function(s) { return s.trim(); });
                    } else if (Array.isArray(equipo.patrones)) {
                        patIds = equipo.patrones;
                    }
                }
            }
            
            // FALLBACK: Si no tiene patrones (ej. registros anteriores), usamos el mapeo sugerido por defecto
            if (patIds.length === 0) {
                const matchingMapping = getTemplateForInstrument(equipo.instrumento, equipo.certificado);
                patIds = matchingMapping ? matchingMapping.patrones : [];
                console.log(">>> Usando patrones sugeridos por defecto para el envío (registro preexistente):", patIds);
            }
            
            patternsData = patIds.map(function(id) {
                const pDet = PATRONES_CATALOG[id.toUpperCase()];
                return {
                    id: id,
                    cert: pDet ? pDet.cert : ''
                };
            });
        }
    }

    const requestData = {
        action: 'send_email',
        data: {
            timestamp: appState.pendingEmail ? appState.pendingEmail.timestamp : '',
            email: document.getElementById('email-to').value,
            originalEmail: appState.pendingEmail ? appState.pendingEmail.email : '',
            certificado: certificado,
            body: document.getElementById('email-body').value,
            empresa: appState.pendingEmail ? appState.pendingEmail.empresa : '',
            contacto: appState.pendingEmail ? appState.pendingEmail.contacto : '',
            patrones: patternsData,
            status: 'enviado'
        }
    };

    try {
        await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'omit',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

        // Actualizar solicitud en Firebase Firestore
        if (appState.pendingEmail) {
            await updateSolicitudStatusInFirestore(
                appState.pendingEmail.timestamp,
                appState.pendingEmail.email,
                certificado,
                'enviado',
                appState.pendingEmail.firestoreId || appState.pendingEmail.id
            );
        }

        // AUTO-ACTUALIZACIÓN DEL EQUIPO ASOCIADO: De RESERVADO a ENTREGADO con asignación de cliente
        if (appState.pendingEmail && appState.pendingEmail.equipoId) {
            const equipoId = appState.pendingEmail.equipoId;
            const clienteName = appState.pendingEmail.empresa || '';
            console.log(">>> Auto-actualizando equipo tras envío de email:", { equipoId, clienteName });
            
            // 1. Forzar actualización en memoria local de inmediato para feedback instantáneo
            const eqIndex = appState.data.findIndex(e => e.id === equipoId);
            if (eqIndex > -1) {
                appState.data[eqIndex].estado = 'ENTREGADO';
                appState.data[eqIndex].cliente = clienteName;
                renderTable(); // Re-renderizar la tabla del inventario
            }
            
            // 2. Enviar actualización al servidor Google Sheets
            try {
                await updateStateRecord(equipoId, 'ENTREGADO', { cliente: clienteName });
            } catch (errState) {
                console.error("Error al actualizar el estado en Google Sheets automáticamente:", errState);
            }
        }

        // FORZADO LOCAL: Marcamos como enviado en la memoria de la web para cambio instantáneo
        if (appState.currentSolicitudIndex !== undefined) {
            appState.solicitudes[appState.currentSolicitudIndex].estado = 'enviado';
            renderSolicitudes();
            updateBadge();
        }

        // Refrescar datos reales en 2 segundos
        setTimeout(async () => {
            await fetchData();
            closeModal('modal-email-confirm');
            hideLoader();
            showToast("¡Envío de certificado y actualización de equipo procesados con éxito!", "success");
        }, 2000);

    } catch (e) {
        console.error("Fetch error:", e);
        hideLoader();
        
        // Intentar actualizar el equipo incluso si el fetch de mail reportó error (por ejemplo, por CORS)
        if (appState.pendingEmail && appState.pendingEmail.equipoId) {
            const equipoId = appState.pendingEmail.equipoId;
            const clienteName = appState.pendingEmail.empresa || '';
            console.log(">>> Auto-actualizando equipo tras reporte de error de email (CORS/Red):", { equipoId, clienteName });
            
            const eqIndex = appState.data.findIndex(e => e.id === equipoId);
            if (eqIndex > -1) {
                appState.data[eqIndex].estado = 'ENTREGADO';
                appState.data[eqIndex].cliente = clienteName;
                renderTable();
            }
            
            try {
                await updateStateRecord(equipoId, 'ENTREGADO', { cliente: clienteName });
            } catch (errState) {
                console.error("Error al actualizar el estado en Google Sheets automáticamente tras fallo:", errState);
            }
        }

        hideLoader();
        showToast("El envío se ha procesado (verifique su casilla CC por confirmación).", "info");
        closeModal('modal-email-confirm');
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
        lucide.createIcons();
    }
}

// ==========================================
// CRM VENCIMIENTOS (Opción A - Hoja Física)
// ==========================================
function renderVencimientos() {
    const tbody = document.getElementById('table-vencimientos');
    if (!tbody) return;
    tbody.innerHTML = '';

    const today = new Date();
    today.setHours(0,0,0,0);
    
    let kpiVigentes = 0;
    let kpiProximos = 0;
    let kpiVencidos = 0;

    // Actualizar KPIs a 0 por defecto antes del retorno por vacío
    const elVigentes = document.getElementById('kpi-vigentes');
    const elProximos = document.getElementById('kpi-proximos');
    const elVencidos = document.getElementById('kpi-vencidos');
    if (elVigentes) elVigentes.innerText = '0';
    if (elProximos) elProximos.innerText = '0';
    if (elVencidos) elVencidos.innerText = '0';

    if (!appState.vencimientos || appState.vencimientos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:2rem; color:var(--text-secondary);">No hay vencimientos registrados en la hoja de cálculo.</td></tr>';
        return;
    }

    const itemsProcesados = appState.vencimientos.map(item => {
        let vencimientoDate = null;
        let diasRestantes = null;
        let estadoVenc = 'vigente'; 

        if (item.fecha_vencimiento) {
            let parts = [];
            const val = String(item.fecha_vencimiento).trim();
            if (val.includes('-')) {
                parts = val.split('-'); // yyyy-mm-dd
                if (parts.length === 3) {
                    vencimientoDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
                }
            } else if (val.includes('/')) {
                parts = val.split('/'); // dd/mm/yyyy
                if (parts.length === 3) {
                    vencimientoDate = new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
                }
            }

            if (vencimientoDate) {
                const diffTime = vencimientoDate.getTime() - today.getTime();
                diasRestantes = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diasRestantes < 0) {
                    estadoVenc = 'vencido';
                    kpiVencidos++;
                } else if (diasRestantes <= 30) {
                    estadoVenc = 'proximo';
                    kpiProximos++;
                } else {
                    estadoVenc = 'vigente';
                    kpiVigentes++;
                }
            }
        }

        return { ...item, vencimientoDate, diasRestantes, estadoVenc };
    });

    // Ordenar por vencimiento más cercano o vencido (ascendente)
    itemsProcesados.sort((a, b) => {
        if (!a.vencimientoDate) return 1;
        if (!b.vencimientoDate) return -1;
        return a.vencimientoDate - b.vencimientoDate;
    });

    // Actualizar KPIs reales
    if (elVigentes) elVigentes.innerText = kpiVigentes;
    if (elProximos) elProximos.innerText = kpiProximos;
    if (elVencidos) elVencidos.innerText = kpiVencidos;

    itemsProcesados.forEach((eq) => {
        const tr = document.createElement('tr');
        
        const labelVenc = eq.estadoVenc === 'vencido' ? 'Vencido' 
                        : (eq.estadoVenc === 'proximo' ? `Vence en ${eq.diasRestantes}d` : 'Vigente');
        
        let fechaFormateada = '---';
        if (eq.fecha_vencimiento) {
            fechaFormateada = formatToDisplayDate(eq.fecha_vencimiento);
        }

        const isEnviado = eq.estado_recordatorio === 'Enviado';

        tr.innerHTML = `
            <td style="white-space: nowrap; font-family: var(--font-data);"><strong>${eq.id}</strong></td>
            <td><strong class="text-truncate" style="max-width: 170px; display: block;" title="${eq.instrumento}">${eq.instrumento}</strong></td>
            <td><strong class="text-truncate" style="max-width: 170px; display: block;" title="${eq.cliente || '---'}">${eq.cliente || '---'}</strong><small style="color: var(--text-secondary);" class="text-truncate" title="${eq.email}">${eq.email}</small></td>
            <td style="text-align: center; white-space: nowrap; font-family: var(--font-data);">${fechaFormateada}</td>
            <td style="text-align: center; white-space: nowrap;"><span class="badge status-badge ${eq.estadoVenc}">${labelVenc}</span></td>
            <td style="text-align: center; white-space: nowrap;"><span class="badge ${isEnviado ? 'entregado' : 'reservado'}">${eq.estado_recordatorio || 'pendiente'}</span></td>
            <td style="text-align: right; padding-right: 0.5rem;">
                ${eq.email !== '---' && eq.email.includes('@') ? 
                `<button class="btn ${isEnviado ? 'btn-outline' : 'btn-primary'} btn-sm btn-enviar-aviso" onclick="handleEnviarAviso('${eq.id}')" style="height: 25px; padding: 0 0.5rem; font-size: 0.7rem; white-space: nowrap;">
                    <i data-lucide="${isEnviado ? 'check-circle' : 'mail'}" style="width:13px; height:13px;"></i> ${isEnviado ? 'Re-avisar' : 'Avisar'}
                </button>` : `<span class="null-text">Sin Email</span>`}
            </td>
        `;
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

window.handleEnviarAviso = function(id) {
    const eq = appState.vencimientos.find(e => e.id === id);
    if (!eq) return;

    let fechaFormateada = '---';
    if (eq.fecha_vencimiento) {
        fechaFormateada = formatToDisplayDate(eq.fecha_vencimiento);
    }

    if (!eq.email || !eq.email.includes('@')) {
        showToast("El equipo no tiene un email válido registrado.", "warning");
        return;
    }

    appState.pendingReminder = {
        id: eq.id,
        email: eq.email,
        contacto: eq.cliente,
        empresa: eq.cliente,
        certificado: eq.certificado,
        instrumento: eq.instrumento,
        fecha_vencimiento: fechaFormateada
    };

    document.getElementById('reminder-to').value = eq.email;
    document.getElementById('reminder-body').value = `Estimado/a ${eq.cliente},\n\nSegún nuestro sistema, el certificado de calibración de su equipo (${eq.instrumento}, Certificado Nº: ${eq.certificado}) se encuentra próximo a vencer el día ${fechaFormateada}.\n\nPara reprogramar su recalibración y mantener su equipo al día, por favor póngase en contacto con nosotros.\n\nPuede responder a este correo o escribirnos vía WhatsApp al +54 11 2863-4493.\n\nQuedamos a su entera disposición.\n\nSaludos cordiales,\n\nDarío Del Real\nCR MEDICION | SchwyzLab Laboratorio de Metrología\nPerú 1297 - CABA - Argentina\nTel.: +54 11 4361-3499 / 3680\nWeb: www.todomedicion.com`;

    openModal('modal-reminder-confirm');
}

async function confirmSendReminder() {
    const btn = document.getElementById('btn-confirm-reminder');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Enviando...';
    lucide.createIcons();
    showLoader("Enviando recordatorio de vencimiento...");

    const payload = {
        action: 'send_reminder_email',
        data: {
            id: appState.pendingReminder.id,
            email: appState.pendingReminder.email,
            contacto: appState.pendingReminder.contacto,
            empresa: appState.pendingReminder.empresa,
            certificado: appState.pendingReminder.certificado,
            instrumento: appState.pendingReminder.instrumento,
            fecha_vencimiento: appState.pendingReminder.fecha_vencimiento,
            body: document.getElementById('reminder-body').value
        }
    };

    try {
        await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'omit',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        // Actualizar recordatorio en Firebase Firestore
        try {
            await db.collection("vencimientos").doc(appState.pendingReminder.id).update({
                estado_recordatorio: "Enviado"
            });
            console.log("✅ Vencimiento marcado como Enviado en Firebase.");
        } catch(errV) {
            console.error("❌ Error al actualizar vencimiento en Firebase:", errV);
        }
        
        // Marcado local temporal para feedback instantáneo
        const index = appState.vencimientos.findIndex(e => e.id === appState.pendingReminder.id);
        if (index > -1) {
            appState.vencimientos[index].estado_recordatorio = 'Enviado';
            renderVencimientos();
        }

        closeModal('modal-reminder-confirm');

        // Refrescar datos reales en 3 segundos
        setTimeout(async () => {
            await fetchData();
            showToast("¡Recordatorio de vencimiento enviado con éxito!", "success");
        }, 3000);
    } catch (e) {
        console.error("Error al enviar recordatorio:", e);
        closeModal('modal-reminder-confirm');
        hideLoader();
        showToast("El recordatorio ha sido procesado (revise la bandeja CC).", "info");
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
        lucide.createIcons();
    }
}

// ==========================================================
// FUNCIONES DE EMISIÓN DE CERTIFICADO DE CALIBRACIÓN (A4 PDF)
// ==========================================================

const CLIENT_ADDRESSES = {
    'cr medicion': 'Perú 1297, C1141ACA C.A.B.A',
    'cr medición': 'Perú 1297, C1141ACA C.A.B.A',
    'zeid medical srl': 'Av. Córdoba 1450 - C.A.B.A.',
    'myce srl': 'Calle Falsa 123 - Buenos Aires'
};

function getHeaderHTML(certNum, pageNum, totalPages) {
    return `
        <header class="cert-header">
            <div class="cert-logo-container">
                <img src="logo_schwyz.png?v=6" alt="Schwyz" class="cert-logo-img">
            </div>
            <div class="cert-title-container">
                <h1 class="cert-title">Certificado de Calibración</h1>
                <div class="cert-number">Certificado N° <span>${certNum}</span></div>
                <div class="cert-page-num">Página ${pageNum} de ${totalPages}</div>
            </div>
            <div class="cert-company-details">
                <strong>CR Medición</strong><br>
                Perú 1297,C1141ACA C.A.B.A<br>
                ventas@todomedicion.com<br>
                www.todomedicion.com<br>
                Tel: 4361-3499 / 3680
            </div>
        </header>
        <hr class="cert-divider-thick">
    `;
}

function getIntermediateFooterHTML() {
    return `
        <footer class="cert-footer">
            <hr class="cert-divider-thick">
            <div class="cert-footer-text">
                Los resultados contenidos en el presente certificado se refieren a los equipos o instrumentos sometidos a la calibración o medición, así como al momento y las condiciones en que se realizaron las mediciones. El Laboratorio que emite no se responsabiliza de los perjuicios que puedan derivarse del uso inadecuado de este certificado.
            </div>
            <hr class="cert-divider-thick">
        </footer>
    `;
}

function getLastFooterHTML(identificacionVal) {
    return `
        <footer class="cert-footer cert-footer-pg2">
            <div class="signatures-container">
                <div class="signature-box">
                    <div class="signature-line-blank"></div>
                    <div class="signature-name">Aprobado por Albert Mesa</div>
                </div>
            </div>
            <div class="cert-fin-row">
                <div class="cert-fin-text">Fin de Certificado</div>
            </div>
            <hr class="cert-divider-thick">
        </footer>
    `;
}

window.imprimirCertificado = function(id) {
    const item = appState.data.find(x => x.id === id);
    if (!item) {
        showToast("No se encontró el equipo para emitir el certificado.", "error");
        return;
    }

    const certNum = item.certificado || '---';
    const fechaCalib = formatToArgDate(item.fecha_calibracion);
    const fechaEmision = getFechaEmision(item.fecha_calibracion);
    const objeto = getObjetoName(item.instrumento, certNum);

    // 1. Determinar el Tipo de Instrumento
    let certType = 'DE'; // Default a Decibelímetro
    const certUpper = certNum.toUpperCase();
    const instUpper = (item.instrumento || '').toUpperCase();

    if (certUpper.includes('-CA-') || instUpper.includes('CALIBRE')) {
        certType = 'CA';
    } else if (certUpper.includes('-DN-') || instUpper.includes('DINAM')) {
        certType = 'DN';
    } else if (certUpper.includes('-TH-') || instUpper.includes('TERMOHIGR')) {
        certType = 'TH';
    } else if (certUpper.includes('-LX-') || instUpper.includes('LUX')) {
        certType = 'LX';
    } else if (certUpper.includes('-TE-') || certUpper.includes('-TC-') || instUpper.includes('TERMÓM') || instUpper.includes('TERMOM')) {
        certType = 'TE';
    }

    const totalPages = (certType === 'CA' || certType === 'TH') ? 3 : 2;

    // 2. Información del cliente y dirección
    const clientName = (item.cliente || '---').trim();
    const clientAddr = CLIENT_ADDRESSES[clientName.toLowerCase()] || '';

    // 3. Generar Página 1
    let htmlContent = `
        <div class="cert-page cert-page-1">
            <div class="cert-watermark"></div>
            ${getHeaderHTML(certNum, 1, totalPages)}
            <main class="cert-main">
                <div class="cert-intro-text">
                    <p>Este certificado de calibración documenta la trazabilidad a los patrones nacionales, los cuales representan a las unidades físicas de medida de medición en concordancia con el sistema internacional de Unidades (SI).</p>
                    <p>Este certificado no podrá ser reproducido parcialmente excepto cuando se haya obtenido previamente permiso por escrito de SCHWYZ LAB. Certificados de calibración sin firma y aclaración, no serán válidos.</p>
                    <p>El usuario es el responsable de la recalibración del objeto a intervalos apropiados.</p>
                </div>
                
                <table class="cert-metadata-table">
                    <tr>
                        <td class="meta-label">Objeto</td>
                        <td class="meta-val">${objeto}</td>
                    </tr>
                    <tr>
                        <td class="meta-label">Fabricante</td>
                        <td class="meta-val">${item.marca || '---'}</td>
                    </tr>
                    <tr>
                        <td class="meta-label">Modelo</td>
                        <td class="meta-val">${item.modelo || '---'}</td>
                    </tr>
                    <tr>
                        <td class="meta-label">N° Serie</td>
                        <td class="meta-val">${item.serie || '---'}</td>
                    </tr>
                    <tr>
                        <td class="meta-label">Identificación</td>
                        <td class="meta-val">${item.id || 'Sin identificar'}</td>
                    </tr>
                    <tr>
                        <td class="meta-label">Determinación requerida</td>
                        <td class="meta-val">Calibración</td>
                    </tr>
                    <tr>
                        <td class="meta-label">Fecha de calibración</td>
                        <td class="meta-val">${fechaCalib}</td>
                    </tr>
                    <tr>
                        <td class="meta-label">Fecha de emisión</td>
                        <td class="meta-val">${fechaEmision}</td>
                    </tr>
                    <tr>
                        <td class="meta-label">Cliente</td>
                        <td class="meta-val meta-val-left">${clientName}</td>
                    </tr>
                    ${clientAddr ? `
                    <tr>
                        <td class="meta-label" style="padding-top:0; border:none;"></td>
                        <td class="meta-val meta-val-left" style="padding-top:0; color:#000000; font-size:12pt;">${clientAddr}</td>
                    </tr>
                    ` : ''}
                </table>
            </main>
            ${getIntermediateFooterHTML()}
        </div>
    `;

    // 4. Parámetros Técnicos según Tipo de Instrumento
    let metodologia = '';
    let temp = '';
    let hum = '';
    let rangoHdr = '';
    let resolucionHdr = '';

    if (certType === 'DE') {
        metodologia = 'La calibración fue realizada por comparación con patrones, de acuerdo al instructivo de calibración IT-010-LAB (Calibración de decibelimetro).';
        temp = '(20 ± 2) °C';
        hum = '(50 ± 15) %Hr';
        rangoHdr = '30 a 130 dB';
        resolucionHdr = '0,1 dB';
    } else if (certType === 'DN') {
        metodologia = 'La calibración fue realizada por comparación con patrones, de acuerdo al instructivo de calibración IT-020-LAB (Calibración de dinamómetros).';
        temp = '(22 ± 3) °C';
        hum = '(45 ± 15) %Hr';
        rangoHdr = '0 a 500 N';
        resolucionHdr = '0,1 N';
    } else if (certType === 'TH') {
        metodologia = 'La calibración fue realizada por comparación con patrones, de acuerdo al instructivo de calibración IT-011-LAB (Calibración de termohigrometro).';
        temp = '(20 ± 2) °C';
        hum = '(50 ± 15) %Hr';
    } else if (certType === 'LX') {
        metodologia = 'La calibración fue realizada por comparación directa sobre banco óptico en concordancia con el instructivo IT-012-LAB.';
        temp = '(23 ± 2) °C';
        hum = '(45 ± 10) %Hr';
        rangoHdr = '0 a 20000 Lux';
        resolucionHdr = '1 Lux';
    } else if (certType === 'CA') {
        metodologia = 'La calibración fue realizada por comparación con patrones, de acuerdo al instructivo de calibración IT-001-LAB (Calibración de calibre pie de rey).';
        temp = '(20 ± 2) °C';
        hum = '(50 ± 15) %Hr';
    } else { // TE (Termómetro)
        metodologia = 'La calibración fue realizada por comparación en baño termostático con termómetro patrón digital de acuerdo al instructivo IT-002-LAB.';
        temp = '(21 ± 2) °C';
        hum = '(50 ± 15) %Hr';
        rangoHdr = '-30 a 150 °C';
        resolucionHdr = '0,1 °C';
    }

    // 5. Cargar Puntos de Medición (JSON)
    let puntosArray = [];
    try {
        if (item.puntos) puntosArray = JSON.parse(item.puntos);
    } catch (e) {
        console.error("Error leyendo puntos Json para certificado", e);
    }

    // 6. Construir Páginas Adicionales
    if (totalPages === 2) {
        // --- CASO DE 2 PÁGINAS (DE, DN, LX, TE, etc.) ---
        
        // Formatear filas de la tabla de resultados única
        let resultsRowsHTML = '';
        if (puntosArray.length === 0) {
            resultsRowsHTML = '<tr><td colspan="4">Sin puntos de medición registrados.</td></tr>';
        } else {
            puntosArray.forEach(p => {
                const refVal = parseFloat(String(p.ref).replace(',', '.'));
                const instVal = parseFloat(String(p.inst).replace(',', '.'));
                
                let errorStr = '---';
                if (!isNaN(refVal) && !isNaN(instVal)) {
                    const error = instVal - refVal;
                    errorStr = error.toFixed(1).replace('.', ',');
                    if (error > 0) errorStr = '+' + errorStr;
                }
                
                let incStr = String(p.inc || '').trim();
                if (incStr === '') {
                    incStr = (certType === 'DE') ? '0,4' : '0,1';
                }
                incStr = incStr.replace('.', ',');
                const refStr = String(p.ref).replace('.', ',');
                const instStr = String(p.inst).replace('.', ',');
                const unit = p.unidad || '';
                
                resultsRowsHTML += `
                    <tr>
                        <td>${refStr}</td>
                        <td>${instStr}</td>
                        <td>${errorStr}</td>
                        <td>${incStr}</td>
                    </tr>
                `;
            });
        }

        // Cargar Patrones
        let selectedPats = [];
        try {
            if (item.patrones) selectedPats = JSON.parse(item.patrones);
        } catch(e) {}
        if (selectedPats.length === 0) {
            const mapping = getTemplateForInstrument(item.instrumento, certNum);
            selectedPats = mapping ? mapping.patrones : [];
        }
        let patternsRowsHTML = '';
        selectedPats.forEach(patId => {
            const pDet = PATRONES_CATALOG[patId];
            const desc = pDet ? pDet.desc : 'Patrón de Referencia';
            const cert = pDet && pDet.cert ? pDet.cert : '---';
            const emisor = pDet && pDet.emisor ? pDet.emisor : 'CR MEDICION';
            patternsRowsHTML += `
                <tr>
                    <td>${patId}</td>
                    <td>${desc}</td>
                    <td>${cert}</td>
                    <td>${emisor}</td>
                </tr>
            `;
        });

        htmlContent += `
            <div class="cert-page cert-page-2">
                <div class="cert-watermark"></div>
                ${getHeaderHTML(certNum, 2, 2)}
                <main class="cert-main">
                    <!-- Metodología Side-by-Side -->
                    <div class="cert-row-side-by-side">
                        <div class="cert-row-label">Metodología empleada</div>
                        <div class="cert-row-value" style="font-weight: bold;">${metodologia}</div>
                    </div>

                    <!-- Condiciones Ambientales Side-by-Side -->
                    <div class="cert-row-side-by-side">
                        <div class="cert-row-label">Condiciones ambientales</div>
                        <div class="cert-row-value">
                            <div class="condiciones-val-grid" style="font-weight: bold;">
                                <div>Temperatura: ${temp}</div>
                                <div>Humedad: ${hum}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Resultados Side-by-Side -->
                    <div class="cert-row-side-by-side">
                        <div class="cert-row-label">Resultados</div>
                        <div class="cert-row-value">
                            <div class="resultados-meta">
                                <div class="rango-resolucion-row" style="font-weight: bold;">
                                    <span>Rango de medición: ${rangoHdr}</span>
                                    <span>Resolución: ${resolucionHdr}</span>
                                </div>
                            </div>
                            <table class="cert-results-table">
                                <thead>
                                    <tr>
                                        <th>Valor de<br>Referencia</th>
                                        <th>Valor<br>Instrumento</th>
                                        <th>Error<br>Obtenido</th>
                                        <th>Incertidumbre<br>Expandida</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${resultsRowsHTML}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- Patrones utilizados (Stacked) -->
                    <div style="margin-top: 3mm !important; page-break-inside: avoid !important;">
                        <div style="font-weight: bold; font-size: 12.5px; text-transform: uppercase; margin-bottom: 1.5mm !important; text-align: left;">
                            Patrones utilizados
                        </div>
                        <table class="cert-patterns-table">
                            <thead>
                                <tr>
                                    <th style="width: 20%;">Identificación</th>
                                    <th style="width: 48%;">Descripción</th>
                                    <th style="width: 17%;">Certificado</th>
                                    <th style="width: 15%;">Emisor</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${patternsRowsHTML}
                            </tbody>
                        </table>
                    </div>

                    <!-- Información Side-by-Side -->
                    <div class="cert-row-side-by-side" style="margin-top: 4mm !important;">
                        <div class="cert-row-label">Información:</div>
                        <div class="cert-row-value" style="font-size: 9.5px !important; line-height: 1.4 !important; color:#333;">
                            <p style="margin-bottom: 1.5mm !important;">La incertidumbre expandida de medición informada fue calculada en conformidad con los requerimientos de la Guía ISO para Expresión de Incertidumbre, según el procedimiento PT-003-LAB, multiplicando la incertidumbre estándar combinada por un factor de cubertura k = 2, lo que corresponde a un nivel aproximado de confianza del 95% bajo distribución normal.</p>
                            <p>Los resultados encontrados son el promedio de 3 mediciones en cada punto de calibración.</p>
                        </div>
                    </div>
                </main>
                ${getLastFooterHTML(item.id || 'Sin identificar')}
            </div>
        `;
    } else {
        // --- CASO DE 3 PÁGINAS (CA, TH) ---

        // Generar Tablas de Resultados para la Página 2
        let resultsSectionHTML = '';
        if (certType === 'CA') {
            // Dividir los puntos de Calibre
            const mordazaPts = puntosArray.filter(p => ['PT1', 'PT2', 'PT3', 'PT4', 'PT5', 'PT6'].includes(p.pt));
            const extremidadPts = puntosArray.filter(p => ['PT7', 'PT8'].includes(p.pt));
            const interiorPts = puntosArray.filter(p => ['PT9', 'PT10'].includes(p.pt));
            const profundidadPts = puntosArray.filter(p => ['PT11', 'PT12'].includes(p.pt));

            resultsSectionHTML += `
                <div class="resultados-meta" style="margin-bottom: 2mm !important;">
                    <div class="rango-resolucion-row">
                        <span><strong>Rango de medición:</strong> 0 a 150 mm</span>
                        <span><strong>Resolución:</strong> 0,01 mm</span>
                    </div>
                </div>
                ${renderSubTableHTML('Mordaza', mordazaPts)}
                ${renderSubTableHTML('Extremidad Mordaza', extremidadPts)}
                ${renderSubTableHTML('Mordaza Interior', interiorPts)}
                ${renderSubTableHTML('Profundidad', profundidadPts)}
            `;
        } else if (certType === 'TH') {
            // Dividir puntos de Termohigrómetro
            const tempPts = puntosArray.filter(p => !String(p.pt).includes('M2'));
            const humPts = puntosArray.filter(p => String(p.pt).includes('M2'));

            resultsSectionHTML += `
                ${renderTermohigrometroTableHTML('Temperatura', tempPts, '0 a 50 °C', '0,1 °C', false)}
                ${renderTermohigrometroTableHTML('Humedad', humPts, '0 a 100 %Hr', '1 %Hr', true)}
            `;
        }

        // Construir Página 2
        htmlContent += `
            <div class="cert-page cert-page-2">
                <div class="cert-watermark"></div>
                ${getHeaderHTML(certNum, 2, 3)}
                <main class="cert-main">
                    <!-- Metodología Side-by-Side -->
                    <div class="cert-row-side-by-side">
                        <div class="cert-row-label">Metodología empleada</div>
                        <div class="cert-row-value" style="font-weight: bold;">${metodologia}</div>
                    </div>

                    <!-- Condiciones Ambientales Side-by-Side -->
                    <div class="cert-row-side-by-side">
                        <div class="cert-row-label">Condiciones ambientales</div>
                        <div class="cert-row-value">
                            <div class="condiciones-val-grid" style="font-weight: bold;">
                                <div>Temperatura: ${temp}</div>
                                <div>Humedad: ${hum}</div>
                            </div>
                        </div>
                    </div>

                    <!-- Resultados Side-by-Side (Tablas y Rangos) -->
                    <div class="cert-row-side-by-side">
                        <div class="cert-row-label">Resultados</div>
                        <div class="cert-row-value">
                            ${resultsSectionHTML}
                        </div>
                    </div>
                </main>
                ${getIntermediateFooterHTML()}
            </div>
        `;

        // Cargar Patrones para la Página 3
        let selectedPats = [];
        try {
            if (item.patrones) selectedPats = JSON.parse(item.patrones);
        } catch(e) {}
        if (selectedPats.length === 0) {
            const mapping = getTemplateForInstrument(item.instrumento, certNum);
            selectedPats = mapping ? mapping.patrones : [];
        }
        let patternsRowsHTML = '';
        selectedPats.forEach(patId => {
            const pDet = PATRONES_CATALOG[patId];
            const desc = pDet ? pDet.desc : 'Patrón de Referencia';
            const cert = pDet && pDet.cert ? pDet.cert : '---';
            const emisor = pDet && pDet.emisor ? pDet.emisor : 'CR MEDICION';
            patternsRowsHTML += `
                <tr>
                    <td>${patId}</td>
                    <td>${desc}</td>
                    <td>${cert}</td>
                    <td>${emisor}</td>
                </tr>
            `;
        });

        // Construir Página 3
        htmlContent += `
            <div class="cert-page cert-page-3">
                <div class="cert-watermark"></div>
                ${getHeaderHTML(certNum, 3, 3)}
                <main class="cert-main">
                    <!-- Patrones utilizados (Stacked) -->
                    <div style="margin-top: 4mm !important; page-break-inside: avoid !important;">
                        <div style="font-weight: bold; font-size: 12.5px; text-transform: uppercase; margin-bottom: 2mm !important; text-align: left;">
                            Patrones utilizados
                        </div>
                        <table class="cert-patterns-table">
                            <thead>
                                <tr>
                                    <th style="width: 20%;">Identificación</th>
                                    <th style="width: 48%;">Descripción</th>
                                    <th style="width: 17%;">Certificado</th>
                                    <th style="width: 15%;">Emisor</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${patternsRowsHTML}
                            </tbody>
                        </table>
                    </div>

                    <!-- Información Side-by-Side -->
                    <div class="cert-row-side-by-side" style="margin-top: 8mm !important;">
                        <div class="cert-row-label">Información:</div>
                        <div class="cert-row-value" style="font-size: 9.5px !important; line-height: 1.4 !important; color:#333;">
                            <p style="margin-bottom: 1.5mm !important;">La incertidumbre expandida de medición informada fue calculada en conformidad con los requerimientos de la Guía ISO para Expresión de Incertidumbre, según el procedimiento PT-003-LAB, multiplicando la incertidumbre estándar combinada por un factor de cubertura k = 2, lo que corresponde a un nivel aproximado de confianza del 95% bajo distribución normal.</p>
                            <p>Los resultados encontrados son el promedio de 3 mediciones en cada punto de calibración.</p>
                        </div>
                    </div>
                </main>
                ${getLastFooterHTML(item.id || 'Sin identificar')}
            </div>
        `;
    }

    // Inyectar HTML dinámico final en el contenedor
    document.getElementById('printable-certificate').innerHTML = htmlContent;

    // Disparar la ventana de impresión nativa
    window.print();
};

// Funciones auxiliares para renderizar sub-tablas
function renderSubTableHTML(title, points) {
    if (points.length === 0) return '';
    
    let rowsHTML = '';
    points.forEach(p => {
        const refVal = parseFloat(String(p.ref).replace(',', '.'));
        const instVal = parseFloat(String(p.inst).replace(',', '.'));
        let errorStr = '---';
        if (!isNaN(refVal) && !isNaN(instVal)) {
            const error = instVal - refVal;
            errorStr = error.toFixed(2).replace('.', ',');
            if (error > 0) errorStr = '+' + errorStr;
        }
        let incStr = String(p.inc || '0,01').replace('.', ',');
        const refStr = String(p.ref).replace('.', ',');
        const instStr = String(p.inst).replace('.', ',');
        const unit = p.unidad || 'mm';
        
        rowsHTML += `
            <tr>
                <td>${refStr}</td>
                <td>${instStr}</td>
                <td>${errorStr}</td>
                <td>${incStr}</td>
            </tr>
        `;
    });
    
    return `
        <div style="font-weight: bold; font-size: 11px; margin-top: 3mm !important; margin-bottom: 1mm !important; text-align: left; color:#000;">
            Valores Encontrados - ${title}
        </div>
        <table class="cert-results-table">
            <thead>
                <tr class="table-hdr-sub-1">
                    <th>Valor de</th>
                    <th>Valor de</th>
                    <th>Error</th>
                    <th>Incertidumbre</th>
                </tr>
                <tr class="table-hdr-sub-2">
                    <th>Referencia</th>
                    <th>${title}</th>
                    <th>Obtenido</th>
                    <th>Expandida</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHTML}
            </tbody>
        </table>
    `;
}

function renderTermohigrometroTableHTML(title, points, rango, resolucion, isHumidity) {
    if (points.length === 0) return '';
    
    let rowsHTML = '';
    points.forEach(p => {
        const refVal = parseFloat(String(p.ref).replace(',', '.'));
        const instVal = parseFloat(String(p.inst).replace(',', '.'));
        let errorStr = '---';
        if (!isNaN(refVal) && !isNaN(instVal)) {
            const error = instVal - refVal;
            errorStr = error.toFixed(1).replace('.', ',');
            if (error > 0) errorStr = '+' + errorStr;
        }
        let incStr = String(p.inc || '').trim();
        if (incStr === '') {
            incStr = isHumidity ? '1,5' : '0,2';
        }
        incStr = incStr.replace('.', ',');
        const refStr = String(p.ref).replace('.', ',');
        const instStr = String(p.inst).replace('.', ',');
        const unit = p.unidad || (isHumidity ? '%Hr' : '°C');
        
        rowsHTML += `
            <tr>
                <td>${refStr}</td>
                <td>${instStr}</td>
                <td>${errorStr}</td>
                <td>${incStr}</td>
            </tr>
        `;
    });
    
    return `
        <div style="font-weight: bold; font-size: 11px; margin-top: 3mm !important; margin-bottom: 1mm !important; text-align: left; color:#000;">
            Valores Encontrados - ${title}
        </div>
        <div class="resultados-meta">
            <div class="rango-resolucion-row" style="font-weight: bold;">
                <span>Rango de medición: ${rango}</span>
                <span>Resolución: ${resolucion}</span>
            </div>
        </div>
        <table class="cert-results-table">
            <thead>
                <tr class="table-hdr-top">
                    <th class="hdr-empty"></th>
                    <th colspan="2" class="hdr-val-enc">Valores Encontrados</th>
                    <th class="hdr-empty"></th>
                </tr>
                <tr class="table-hdr-sub-1">
                    <th>Valor de</th>
                    <th>Valor</th>
                    <th>Error</th>
                    <th>Incertidumbre</th>
                </tr>
                <tr class="table-hdr-sub-2">
                    <th>Referencia</th>
                    <th>Instrumento</th>
                    <th>Obtenido</th>
                    <th>Expandida</th>
                </tr>
            </thead>
            <tbody>
                ${rowsHTML}
            </tbody>
        </table>
    `;
}

function parseToDateObject(dateStr) {
    if (!dateStr || typeof dateStr !== 'string') return null;
    dateStr = dateStr.trim();
    if (dateStr === '' || dateStr === '---') return null;
    
    let parts = [];
    if (dateStr.includes('-')) {
        parts = dateStr.split('-');
        if (parts.length === 3) {
            if (parts[0].length === 4) {
                return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
            } else {
                return new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
            }
        }
    } else if (dateStr.includes('/')) {
        parts = dateStr.split('/');
        if (parts.length === 3) {
            if (parts[0].length === 4) {
                return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
            } else {
                return new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));
            }
        }
    }
    return null;
}

function formatToDisplayDate(dateStr) {
    const d = parseToDateObject(dateStr);
    if (!d || isNaN(d.getTime())) return '---';
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

function formatToArgDate(dateStr) {
    if (!dateStr || dateStr === '---' || dateStr.trim() === '') return '---';
    return formatToDisplayDate(dateStr);
}

function getFechaEmision(calibDateStr) {
    if (!calibDateStr || calibDateStr === '---' || calibDateStr.trim() === '') return '---';
    const d = parseToDateObject(calibDateStr);
    if (d && !isNaN(d.getTime())) {
        d.setDate(d.getDate() + 1); // Sumar 1 día
        const dd = d.getDate();
        const mm = d.getMonth() + 1;
        const yyyy = d.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    }
    return calibDateStr;
}

function getObjetoName(instrumento, certificado) {
    let name = String(instrumento || '').toLowerCase();
    if (name.includes('decibel') || name.includes('sonómetro') || String(certificado).includes('-DE-') || String(certificado).includes('-DB-') || String(certificado).includes('-DC-')) {
        return 'Decibelímetro Digital';
    }
    if (name.includes('dinam') || String(certificado).includes('-DN-')) {
        return 'Dinamómetro Digital';
    }
    if (name.includes('termohigr') || String(certificado).includes('-TH-')) {
        return 'Termohigrómetro Digital';
    }
    if (name.includes('lux') || String(certificado).includes('-LX-')) {
        return 'Luxómetro Digital';
    }
    if (name.includes('termóm') || String(certificado).includes('-TE-') || String(certificado).includes('-TC-')) {
        return 'Termómetro Digital';
    }
    if (name.includes('calibre') || String(certificado).includes('-CA-')) {
        return 'Calibre Digital';
    }
    return instrumento || 'Instrumento de Medición';
}

// ==========================================
// SISTEMA DE AUTENTICACIÓN (LOGIN)
// ==========================================
const AUTH_CREDENTIALS = {
    username: 'admin01',
    password: 'peru1297'
};

function initLoginSystem() {
    const loginForm = document.getElementById('login-form');
    const btnTogglePassword = document.getElementById('btn-toggle-password');
    const btnLogout = document.getElementById('btn-logout');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (btnTogglePassword) {
        btnTogglePassword.addEventListener('click', () => {
            const passwordInput = document.getElementById('login-password');
            const icon = document.getElementById('toggle-password-icon');
            if (passwordInput && icon) {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    icon.setAttribute('data-lucide', 'eye-off');
                    btnTogglePassword.title = "Ocultar contraseña";
                } else {
                    passwordInput.type = 'password';
                    icon.setAttribute('data-lucide', 'eye');
                    btnTogglePassword.title = "Mostrar contraseña";
                }
                lucide.createIcons();
            }
        });
    }
    
    if (btnLogout) {
        btnLogout.addEventListener('click', handleLogout);
    }
}

function checkSession() {
    const isRemembered = localStorage.getItem('auth_session') === 'true';
    const isSessionActive = sessionStorage.getItem('auth_session') === 'true';
    
    if (isRemembered || isSessionActive) {
        // Mostrar app, ocultar login, cargar datos
        document.getElementById('login-container').style.display = 'none';
        document.querySelector('.app-container').style.display = 'flex';
        fetchData();
    } else {
        // Ocultar app, mostrar login
        document.getElementById('login-container').style.display = 'flex';
        document.querySelector('.app-container').style.display = 'none';
    }
}

async function handleLogin(e) {
    e.preventDefault();
    
    const userVal = document.getElementById('login-username').value.trim();
    const passVal = document.getElementById('login-password').value;
    const rememberCheckbox = document.getElementById('login-remember');
    const submitBtn = document.getElementById('btn-login-submit');
    
    const originalContent = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Ingresando...</span><i data-lucide="loader-2" class="spin"></i>';
    lucide.createIcons();
    
    // Simular pequeña latencia de 600ms para realismo y seguridad de fuerza bruta básica
    await new Promise(r => setTimeout(r, 600));
    
    if (userVal === AUTH_CREDENTIALS.username && passVal === AUTH_CREDENTIALS.password) {
        // Credenciales correctas
        if (rememberCheckbox && rememberCheckbox.checked) {
            localStorage.setItem('auth_session', 'true');
        } else {
            sessionStorage.setItem('auth_session', 'true');
        }
        
        showToast("Sesión iniciada con éxito.", "success");
        
        // Animación de salida del Login
        const loginContainer = document.getElementById('login-container');
        loginContainer.classList.add('login-exit');
        
        setTimeout(() => {
            loginContainer.style.display = 'none';
            loginContainer.classList.remove('login-exit');
            
            // Mostrar la aplicación principal
            const appContainer = document.querySelector('.app-container');
            appContainer.style.display = 'flex';
            
            // Forzar render de iconos Lucide dentro de la app por si acaso
            lucide.createIcons();
            
            // Cargar base de datos real
            fetchData();
        }, 400);
    } else {
        // Credenciales incorrectas
        showToast("Usuario o contraseña incorrectos.", "error");
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
        lucide.createIcons();
    }
}

function handleLogout() {
    localStorage.removeItem('auth_session');
    sessionStorage.removeItem('auth_session');
    
    // Desuscribir listener en tiempo real de Firestore si está activo
    if (solicitudesUnsubscribe) {
        solicitudesUnsubscribe();
        solicitudesUnsubscribe = null;
    }

    // Cancelar timer de sincronización de fondo
    if (syncIntervalId) {
        clearInterval(syncIntervalId);
        syncIntervalId = null;
    }

    // Limpiar estado en memoria
    appState.data = [];
    appState.solicitudes = [];
    appState.vencimientos = [];
    if (appState.selectedIds) appState.selectedIds.clear();

    showToast("Sesión cerrada.", "info");
    
    // Ocultar la app y mostrar el login
    const appContainer = document.querySelector('.app-container');
    const loginContainer = document.getElementById('login-container');
    
    appContainer.style.display = 'none';
    loginContainer.style.display = 'flex';
    
    // Limpiar campos
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
    
    // Reiniciar inputs de contraseña a tipo password y resetear icono
    const passwordInput = document.getElementById('login-password');
    const toggleIcon = document.getElementById('toggle-password-icon');
    if (passwordInput && toggleIcon) {
        passwordInput.type = 'password';
        toggleIcon.setAttribute('data-lucide', 'eye');
    }
    
    lucide.createIcons();
}

// ==========================================
// FUNCIONES DE CONTROL DE PESTAÑAS Y VERIFICACIÓN (ATENDER)
// ==========================================

function switchAtenderTab(tabName) {
    const tabEmail = document.getElementById('tab-btn-email');
    const tabVerify = document.getElementById('tab-btn-verify');
    const contentEmail = document.getElementById('tab-content-email');
    const contentVerify = document.getElementById('tab-content-verify');
    const footerEmailBtn = document.getElementById('btn-confirm-send');
    
    if (!tabEmail || !tabVerify || !contentEmail || !contentVerify) return;
    
    if (tabName === 'email') {
        tabEmail.classList.add('active');
        tabVerify.classList.remove('active');
        contentEmail.style.display = 'block';
        contentVerify.style.display = 'none';
        if (footerEmailBtn) footerEmailBtn.style.display = 'inline-flex';
    } else {
        tabVerify.classList.add('active');
        tabEmail.classList.remove('active');
        contentVerify.style.display = 'block';
        contentEmail.style.display = 'none';
        if (footerEmailBtn) footerEmailBtn.style.display = 'none';
        
        // Ejecutar búsqueda con el valor actual
        performVerifyCertSearch();
    }
}

function performVerifyCertSearch() {
    const searchInput = document.getElementById('search-verify-cert');
    if (!searchInput) return;
    const searchVal = String(searchInput.value || '').trim().toUpperCase();
    const resultsContainer = document.getElementById('verify-search-results');
    if (!resultsContainer) return;
    
    if (searchVal === '') {
        resultsContainer.innerHTML = '<div class="alert alert-warning" style="font-size:0.75rem;">Por favor ingrese un número de certificado para buscar.</div>';
        return;
    }
    
    // Obtener la solicitud seleccionada actualmente
    const currentSolIndex = appState.currentSolicitudIndex;
    const currentSol = currentSolIndex !== undefined ? appState.solicitudes[currentSolIndex] : null;
    
    // 1. Buscar en solicitudes
    const matchingSolicitudes = appState.solicitudes.filter(s => {
        return certificadosCoinciden(s.certificado, searchVal);
    });
    
    // 2. Buscar en inventario
    const matchingEquipos = appState.data.filter(e => {
        return certificadosCoinciden(e.certificado, searchVal);
    });
    
    let html = '';
    
    // 3. Renderizar coincidencia en solicitudes
    html += `<div style="margin-bottom:1rem;">`;
    html += `<h4 style="margin:0 0 0.5rem 0; font-size:0.85rem; color:var(--text-primary);">Coincidencias en Solicitudes de Clientes:</h4>`;
    if (matchingSolicitudes.length === 0) {
        html += `<p style="font-size:0.75rem; color:var(--text-muted); margin:0;">No se encontraron solicitudes con este certificado.</p>`;
    } else {
        html += `<ul style="margin:0; padding-left:1.2rem; font-size:0.75rem; color:var(--text-secondary); display:flex; flex-direction:column; gap:0.25rem;">`;
        matchingSolicitudes.forEach(s => {
            const isCurrent = currentSol && s.timestamp === currentSol.timestamp && s.email === currentSol.email && s.certificado === currentSol.certificado;
            
            const estClean = (s.estado || '').trim().toLowerCase();
            let labelClass = 'reservado';
            if (estClean === 'enviado') {
                labelClass = 'entregado';
            } else if (estClean === 'enviado anteriormente') {
                labelClass = 'enviado-anteriormente';
            } else if (estClean === 'duplicada' || estClean === 'duplicado') {
                labelClass = 'duplicada';
            } else if (estClean !== '' && estClean !== 'pendiente') {
                labelClass = 'entregado';
            }
            
            const statusLabel = `<span class="badge ${labelClass}" style="font-size:0.6rem; padding:1px 4px;">${s.estado || 'pendiente'}</span>`;
                
            html += `<li>
                <strong>${s.empresa}</strong> (${s.timestamp}) - ${s.email} - Estado: ${statusLabel} ${isCurrent ? ' <span style="color:var(--primary); font-weight:600;">(Actual)</span>' : ''}
            </li>`;
        });
        html += `</ul>`;
    }
    html += `</div>`;
    
    // 4. Renderizar coincidencia en inventario
    html += `<div style="margin-bottom:1rem;">`;
    html += `<h4 style="margin:0 0 0.5rem 0; font-size:0.85rem; color:var(--text-primary);">Coincidencias en Inventario de Equipos:</h4>`;
    if (matchingEquipos.length === 0) {
        html += `<p style="font-size:0.75rem; color:var(--text-muted); margin:0;">No se encontró ningún equipo en el inventario con este certificado.</p>`;
    } else {
        html += `<ul style="margin:0; padding-left:1.2rem; font-size:0.75rem; color:var(--text-secondary); display:flex; flex-direction:column; gap:0.25rem;">`;
        matchingEquipos.forEach(e => {
            const statusLabel = e.estado === 'ENTREGADO'
                ? `<span class="badge entregado" style="font-size:0.6rem; padding:1px 4px;">ENTREGADO</span>`
                : `<span class="badge disponible" style="font-size:0.6rem; padding:1px 4px;">${e.estado}</span>`;
            html += `<li>
                <strong>${e.marca} ${e.modelo}</strong> (S/N: ${e.serie || 'N/A'}) - Cert: <code>${e.certificado}</code> - Cliente: ${e.cliente || 'Ninguno'} - Estado: ${statusLabel}
            </li>`;
        });
        html += `</ul>`;
    }
    html += `</div>`;
    
    // 5. Alertas de duplicados / envíos previos
    const yaEnviadoSol = matchingSolicitudes.some(s => {
        const isCurrent = currentSol && s.timestamp === currentSol.timestamp && s.email === currentSol.email && s.certificado === currentSol.certificado;
        const estClean = (s.estado || '').trim().toLowerCase();
        return !isCurrent && estClean !== '' && estClean !== 'pendiente';
    });
    
    const yaEntregadoEq = matchingEquipos.some(e => e.estado === 'ENTREGADO');
    
    if (yaEnviadoSol || yaEntregadoEq) {
        html += `<div class="alert alert-warning" style="margin-top:0.5rem; display:flex; align-items:flex-start; gap:0.5rem; font-size:0.75rem; background-color:var(--alert-medium-bg); border:1px solid var(--alert-medium-border); color:var(--alert-medium-text); padding:0.5rem; border-radius:var(--radius-sm);">
            <i data-lucide="alert-triangle" style="flex-shrink:0; width:16px; height:16px; margin-top:2px;"></i>
            <div>
                <strong>¡Atención! Envío previo detectado.</strong> El certificado ya fue enviado/entregado anteriormente:
                <ul style="margin: 0.25rem 0 0 1rem; padding: 0;">
                    ${yaEnviadoSol ? '<li>Se registró otro escaneo del QR ya marcado como enviado/duplicado.</li>' : ''}
                    ${yaEntregadoEq ? '<li>El equipo asociado está registrado como ENTREGADO en la base de datos.</li>' : ''}
                </ul>
            </div>
        </div>`;
    } else {
        html += `<div class="alert alert-info" style="margin-top:0.5rem; display:flex; align-items:center; gap:0.5rem; font-size:0.75rem; background-color:var(--state-entregado-bg); border:1px solid var(--border-color); color:var(--state-entregado); padding:0.5rem; border-radius:var(--radius-sm);">
            <i data-lucide="info" style="flex-shrink:0; width:16px; height:16px;"></i>
            <span>No se registran envíos exitosos previos de este certificado en otras solicitudes.</span>
        </div>`;
    }
    
    resultsContainer.innerHTML = html;
    lucide.createIcons();
}

async function updateSolicitudStatusInFirestore(timestamp, email, certificado, newStatus, firestoreId) {
    try {
        let updatedDirectly = false;
        if (firestoreId) {
            try {
                await db.collection("solicitudes").doc(firestoreId).update({ estado: newStatus });
                console.log("✅ Solicitud actualizada por firestoreId en Firebase:", firestoreId);
                updatedDirectly = true;
            } catch (eId) {
                console.warn("No se pudo actualizar directamente por doc ID:", eId);
            }
        }
        
        // También buscar y actualizar en batch cualquier solicitud pendiente coincidente
        try {
            const querySnapshot = await db.collection("solicitudes").get();
            const batch = db.batch();
            let batchCount = 0;
            const searchCert = String(certificado || '').trim();
            const searchEmail = String(email || '').trim().toLowerCase();
            const searchTs = String(timestamp || '').trim();

            querySnapshot.forEach(doc => {
                if (updatedDirectly && doc.id === firestoreId) return;
                const data = doc.data();
                const dCert = String(data.certificado || '').trim();
                const dEmail = String(data.email || '').trim().toLowerCase();
                const dTs = String(data.timestamp || '').trim();
                const dEst = String(data.estado || '').trim().toLowerCase();

                const timeMatches = (dTs === searchTs) || (searchTs !== '' && dTs !== '' && (dTs.startsWith(searchTs.substring(0, 10)) || searchTs.startsWith(dTs.substring(0, 10))));
                const certMatches = certificadosCoinciden(dCert, searchCert);
                const emailMatches = (dEmail === searchEmail);

                if (certMatches && (emailMatches || timeMatches) && (dEst === '' || dEst === 'pendiente')) {
                    batch.update(doc.ref, { estado: newStatus });
                    batchCount++;
                }
            });

            if (batchCount > 0) {
                await batch.commit();
                console.log(`✅ ${batchCount} solicitud(es) coincidente(s) actualizada(s) en Firebase.`);
            }
        } catch (eBatch) {
            console.warn("Aviso en actualización batch Firebase:", eBatch);
        }
    } catch(e) {
        console.error("❌ Error al actualizar solicitud en Firebase:", e);
    }
}

async function markRequestAsAlreadySent() {
    const index = appState.currentSolicitudIndex;
    if (index === undefined) {
        showToast("Error: No hay una solicitud seleccionada.", "error");
        return;
    }
    const s = appState.solicitudes[index];
    if (!s) {
        showToast("Error: Solicitud no válida.", "error");
        return;
    }
    
    const markSelect = document.getElementById('mark-status-select');
    const targetStatus = markSelect ? markSelect.value : 'enviado anteriormente';
    
    const btn = document.getElementById('btn-mark-already-sent');
    const originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<i data-lucide="loader-2" class="spin"></i> Procesando...';
    lucide.createIcons();
    showLoader(`Marcando solicitud como: ${targetStatus}...`);
    
    const requestData = {
        action: 'mark_request_sent',
        data: {
            timestamp: s.timestamp,
            email: s.email,
            certificado: s.certificado,
            status: targetStatus
        }
    };
    
    try {
        if (GOOGLE_SHEETS_API_URL !== '') {
            await fetch(GOOGLE_SHEETS_API_URL, {
                method: 'POST',
                mode: 'no-cors',
                credentials: 'omit',
                cache: 'no-cache',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData)
            });
        }

        // Actualizar en Firebase Firestore
        await updateSolicitudStatusInFirestore(s.timestamp, s.email, s.certificado, targetStatus, s.firestoreId);
        
        // Auto-actualización del equipo asociado a ENTREGADO si existe
        if (appState.pendingEmail && appState.pendingEmail.equipoId) {
            const equipoId = appState.pendingEmail.equipoId;
            const clienteName = appState.pendingEmail.empresa || '';
            const eqIndex = appState.data.findIndex(e => e.id === equipoId);
            if (eqIndex > -1) {
                appState.data[eqIndex].estado = 'ENTREGADO';
                appState.data[eqIndex].cliente = clienteName;
                renderTable();
            }
            try {
                await updateStateRecord(equipoId, 'ENTREGADO', { cliente: clienteName });
            } catch(e) {
                console.error("Error al actualizar estado de equipo asociado:", e);
            }
        }
        
        // Marcado local de la solicitud
        appState.solicitudes[index].estado = targetStatus;
        renderSolicitudes();
        updateBadge();
        
        setTimeout(async () => {
            await fetchData();
            closeModal('modal-email-confirm');
            hideLoader();
            showToast(`Solicitud marcada como "${targetStatus}" con éxito.`, "success");
        }, 1500);
        
    } catch(e) {
        console.error("Error al marcar solicitud como enviada:", e);
        hideLoader();
        showToast("Error de conexión al marcar la solicitud.", "error");
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalText;
        lucide.createIcons();
    }
}

// ==========================================
// ACCIONES MASIVAS (BULK ACTIONS)
// ==========================================
appState.selectedIds = new Set();

function initBulkEvents() {
    // 1. Checkbox header click (Seleccionar todo)
    const selectAllCheckbox = document.getElementById('bulk-select-all');
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function(e) {
            const checked = e.target.checked;
            const checkboxes = document.querySelectorAll('.bulk-item-select');
            checkboxes.forEach(cb => {
                const id = cb.getAttribute('data-id');
                cb.checked = checked;
                if (checked) {
                    appState.selectedIds.add(id);
                } else {
                    appState.selectedIds.delete(id);
                }
            });
            updateBulkActionBar();
        });
    }

    // 2. Click en checkboxes individuales (Delegado en el table-body)
    const tableBody = document.getElementById('table-body');
    if (tableBody) {
        tableBody.addEventListener('change', function(e) {
            const cb = e.target.closest('.bulk-item-select');
            if (cb) {
                const id = cb.getAttribute('data-id');
                if (cb.checked) {
                    appState.selectedIds.add(id);
                } else {
                    appState.selectedIds.delete(id);
                }
                updateBulkActionBar();
            }
        });
    }

    // 3. Botones de acciones masivas
    const btnCancel = document.getElementById('btn-bulk-cancelar');
    if (btnCancel) {
        btnCancel.addEventListener('click', clearBulkSelection);
    }

    const btnCertificar = document.getElementById('btn-bulk-certificar');
    if (btnCertificar) {
        btnCertificar.addEventListener('click', bulkCertificar);
    }

    const btnEditar = document.getElementById('btn-bulk-editar');
    if (btnEditar) {
        btnEditar.addEventListener('click', openBulkEditModal);
    }

    const btnEliminar = document.getElementById('btn-bulk-eliminar');
    if (btnEliminar) {
        btnEliminar.addEventListener('click', bulkEliminar);
    }

    // 4. Formulario de edición masiva
    const formBulkEdit = document.getElementById('form-bulk-edit');
    if (formBulkEdit) {
        formBulkEdit.addEventListener('submit', handleFormBulkEdit);
    }
}

function updateBulkActionBar() {
    const bar = document.getElementById('bulk-action-bar');
    const countSpan = document.getElementById('bulk-selected-count');
    const selectAllCheckbox = document.getElementById('bulk-select-all');
    
    const count = appState.selectedIds.size;
    if (countSpan) countSpan.innerText = `${count} equipo${count === 1 ? '' : 's'} seleccionado${count === 1 ? '' : 's'}`;
    
    if (count > 0) {
        if (bar) bar.classList.add('active');
    } else {
        if (bar) bar.classList.remove('active');
    }

    // Alinear checkbox global
    if (selectAllCheckbox) {
        const visibleCheckboxes = document.querySelectorAll('.bulk-item-select');
        const checkedCount = Array.from(visibleCheckboxes).filter(cb => cb.checked).length;
        if (visibleCheckboxes.length > 0) {
            selectAllCheckbox.checked = (checkedCount === visibleCheckboxes.length);
            selectAllCheckbox.indeterminate = (checkedCount > 0 && checkedCount < visibleCheckboxes.length);
        } else {
            selectAllCheckbox.checked = false;
            selectAllCheckbox.indeterminate = false;
        }
    }
}

function clearBulkSelection() {
    appState.selectedIds.clear();
    const selectAllCheckbox = document.getElementById('bulk-select-all');
    if (selectAllCheckbox) selectAllCheckbox.checked = false;
    
    document.querySelectorAll('.bulk-item-select').forEach(cb => {
        cb.checked = false;
    });
    updateBulkActionBar();
}

async function bulkCertificar() {
    const count = appState.selectedIds.size;
    if (count === 0) return;
    
    if (!confirm(`¿Estás seguro de que deseas cambiar a CERTIFICANDO los ${count} equipos seleccionados?`)) {
        return;
    }
    
    try {
        const selectedArray = Array.from(appState.selectedIds);

        // 1. ACTUALIZACIÓN OPTIMISTA
        selectedArray.forEach(id => {
            const item = appState.data.find(x => x.id === id);
            if (item) item.estado = 'CERTIFICANDO';
        });
        clearBulkSelection();
        renderTable();
        updateDashboard();
        showToast(`Se pasaron ${count} equipos a "CERTIFICANDO" con éxito.`, "success");

        // 2. PERSISTENCIA EN SEGUNDO PLANO
        commitBatchInChunks(selectedArray, (batch, id) => {
            const docRef = db.collection("instrumentos").doc(id);
            batch.update(docRef, { estado: 'CERTIFICANDO' });
        }).then(() => {
            // Sincronizar con Sheets de forma no bloqueante
            if (GOOGLE_SHEETS_API_URL !== '') {
                fetch(GOOGLE_SHEETS_API_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    credentials: 'omit',
                    cache: 'no-cache',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'update_status_bulk',
                        data: { ids: selectedArray, estado: 'CERTIFICANDO' }
                    })
                }).catch(err => console.error("Error al sincronizar estado masivo con Sheets:", err));
            }
        }).catch(err => {
            console.error("Error al certificar en lote en Firestore:", err);
            showToast("⚠️ Error al sincronizar el cambio de estado en la nube.", "warning");
        });

    } catch(err) {
        console.error("Error al certificar en lote:", err);
        showToast("⚠️ Falla al cambiar estados en lote: " + err.toString(), "error");
    } finally {
        hideLoader();
    }
}

function openBulkEditModal() {
    const count = appState.selectedIds.size;
    if (count === 0) return;
    document.getElementById('form-bulk-edit').reset();
    document.getElementById('modal-bulk-edit').classList.add('active');
}

async function handleFormBulkEdit(e) {
    e.preventDefault();
    const count = appState.selectedIds.size;
    if (count === 0) return;

    const nombre = document.getElementById('bulk-edit-nombre').value.trim();
    const marca = document.getElementById('bulk-edit-marca').value.trim();
    const modelo = document.getElementById('bulk-edit-modelo').value.trim();
    const estado = document.getElementById('bulk-edit-estado').value;

    const updates = {};
    if (nombre) updates.instrumento = nombre;
    if (marca) updates.marca = marca;
    if (modelo) updates.modelo = modelo;
    if (estado) {
        updates.estado = (estado === 'VENDIDO - ENTREGADO') ? 'ENTREGADO' : estado;
        if (estado === 'EN DEPÓSITO') {
            updates.fecha_calibracion = '';
            updates.certificado = '';
            updates.cliente = '';
            updates.patrones = '[]';
            updates.puntos = '[]';
        }
    }

    if (Object.keys(updates).length === 0) {
        showToast("Por favor, ingresa al menos un dato para cambiar.", "warning");
        return;
    }

    const btn = document.getElementById('btn-save-bulk-edit');
    btn.disabled = true;
    btn.innerText = 'Aplicando...';

    try {
        const selectedArray = Array.from(appState.selectedIds);

        // 1. ACTUALIZACIÓN OPTIMISTA
        selectedArray.forEach(id => {
            const idx = appState.data.findIndex(x => x.id === id);
            if (idx !== -1) {
                appState.data[idx] = Object.assign({}, appState.data[idx], updates);
            }
        });

        closeAllModals();
        clearBulkSelection();
        renderTable();
        updateDashboard();
        showToast(`Se actualizaron los datos de ${count} equipos con éxito.`, "success");

        // 2. PERSISTENCIA EN SEGUNDO PLANO
        commitBatchInChunks(selectedArray, (batch, id) => {
            const docRef = db.collection("instrumentos").doc(id);
            batch.set(docRef, updates, { merge: true });
        }).catch(err => {
            console.error("Error al persistir edición en lote en Firestore:", err);
            showToast("⚠️ Error al guardar los cambios en lote en la nube.", "warning");
        });

    } catch(err) {
        console.error("Error al editar en lote:", err);
        showToast("⚠️ Falla al actualizar datos en lote: " + err.toString(), "error");
    } finally {
        btn.disabled = false;
        btn.innerText = 'Aplicar Cambios';
        hideLoader();
    }
}

async function bulkEliminar() {
    const count = appState.selectedIds.size;
    if (count === 0) return;

    if (!confirm(`🚨 ¡ATENCIÓN! ¿Estás seguro de que deseas eliminar permanentemente del inventario los ${count} equipos seleccionados?`)) {
        return;
    }

    try {
        const idsArray = Array.from(appState.selectedIds);
        const idsSet = new Set(idsArray);

        // 1. ACTUALIZACIÓN OPTIMISTA
        appState.data = appState.data.filter(x => !idsSet.has(x.id));
        clearBulkSelection();
        renderTable();
        updateDashboard();
        showToast(`Se eliminaron ${count} equipos con éxito del inventario.`, "success");

        // 2. PERSISTENCIA EN SEGUNDO PLANO
        commitBatchInChunks(idsArray, (batch, id) => {
            const docRef = db.collection("instrumentos").doc(id);
            batch.delete(docRef);
        }).then(() => {
            // Sincronización con Sheets
            if (GOOGLE_SHEETS_API_URL !== '') {
                fetch(GOOGLE_SHEETS_API_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    credentials: 'omit',
                    cache: 'no-cache',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'delete_bulk',
                        ids: idsArray
                    })
                }).catch(err => console.error("Error al eliminar masivo de Sheets:", err));
            }
        }).catch(err => {
            console.error("Error al eliminar en lote en Firestore:", err);
            showToast("⚠️ Error al eliminar equipos en la nube.", "warning");
        });

    } catch(err) {
        console.error("Error al eliminar en lote:", err);
        showToast("⚠️ Falla al eliminar equipos en lote: " + err.toString(), "error");
    } finally {
        hideLoader();
    }
}
