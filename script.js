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

function showLoader(message = 'Sincronizando con Google Sheets...') {
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
}

function hideLoader() {
    const loader = document.getElementById('global-loader');
    if (loader) {
        loader.style.display = 'none';
    }
}

/**
 * Configuración: 
 * Cuando tengas tu Web App de Google Apps Script publicada, 
 * pega el enlace aquí.
 */
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbwgmgHF3DHNpOjnmTGsVBwYPEd0tLiwZDXhRsZaTknXEkhBbpOZEqtDlXhH5pyhSWE/exec';

// ==========================================
// MOCK DATA (Para probar sin Google Sheets)
// ==========================================
let mockDatabase = [];

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let appState = {
    data: [],
    solicitudes: [],
    vencimientos: [],
    loading: false,
    filter: 'ALL',
    search: ''
};

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar Iconos Lucide
    lucide.createIcons();
    
    // Configurar controladores de selecciÃ³n de patrones
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

    // Registrar Service Worker para PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('Service Worker registrado.', reg))
                .catch(err => console.log('Error al registrar Service Worker.', err));
        });
    }

    // Cargar datos
    fetchData();

    // Event Listeners Básicos
    const btnNewEquipo = document.getElementById('btn-new-equipo');
    if (btnNewEquipo) btnNewEquipo.addEventListener('click', openModalNuevo);
    
    // Configurar Modales (Cerrar)
    document.querySelectorAll('.btn-close, .btn-close-action').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Búsqueda y Filtros
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            appState.search = e.target.value.toLowerCase();
            renderTable();
        });
    }

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            appState.filter = e.target.getAttribute('data-filter');
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
    
    const btnAddPunto = document.getElementById('btn-add-punto');
    if (btnAddPunto) btnAddPunto.addEventListener('click', addPuntoRow);
    
    const btnAddPuntoEdit = document.getElementById('btn-add-punto-edit');
    if (btnAddPuntoEdit) btnAddPuntoEdit.addEventListener('click', () => addPuntoRowEdit());
    
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
    });
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


// ==========================================
// OPERACIONES DE DATOS (Simulando API)
// ==========================================
async function fetchData() {
    appState.loading = true;
    updateUIState();
    showLoader('Sincronizando con Google Sheets...');

    try {
        if(GOOGLE_SHEETS_API_URL !== '') {
            // Se inyecta un Timestamp para forzar al navegador a ignorar el caché (Cache-Busting)
            const response = await fetch(GOOGLE_SHEETS_API_URL + '?action=get&_t=' + new Date().getTime());
            const result = await response.json();
            appState.data = result.items || [];
            appState.solicitudes = result.solicitudes || [];
            appState.vencimientos = result.vencimientos || [];
            
            console.log(">>> DATOS RECIBIDOS DEL SERVIDOR:");
            console.table(appState.data.slice(0, 5).map(i => ({ID: i.id, Modelo: i.modelo, Estado: i.estado})));
            
            renderTable();
        } else {
            // Mock
            await new Promise(r => setTimeout(r, 1000));
            appState.data = [...mockDatabase];
            appState.solicitudes = [];
        }
    } catch (err) {
        console.error("Error al cargar datos:", err);
        showToast("Hubo un error cargando los datos desde Google Sheets.", "error");
    } finally {
        appState.loading = false;
        updateUIState();
        hideLoader();
        renderTable();
        renderSolicitudes();
        renderVencimientos();
        updateBadge();
        updateDashboard(); 
    }
}


async function saveFullUpdate(record) {
    if(GOOGLE_SHEETS_API_URL !== '') {
        const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            body: JSON.stringify({ action: 'update_full', data: record })
        });
        return await response.json();
    } else {
        await new Promise(r => setTimeout(r, 800));
        const index = mockDatabase.findIndex(x => x.id === record.id);
        if(index > -1) mockDatabase[index] = record;
        appState.data = [...mockDatabase];
        return { success: true };
    }
}

async function updateStateRecord(id, newState, extraData) {
    console.log(">>> Solicitando cambio de estado:", { id, newState, extraData });
    if(GOOGLE_SHEETS_API_URL !== '') {
        const requestData = { 
            action: 'update_status', 
            data: { id: String(id).trim(), estado: newState, ...extraData } 
        };
        const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            body: JSON.stringify(requestData)
        });
        const result = await response.json();
        console.log("<<< Respuesta del servidor:", result);
        return result;
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

async function saveNewRecord(record) {
    if(GOOGLE_SHEETS_API_URL !== '') {
        const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            body: JSON.stringify({ action: 'create', data: record })
        });
        return await response.json();
    } else {
        // En Mock Local
        await new Promise(r => setTimeout(r, 800));
        mockDatabase.push(record);
        appState.data = [...mockDatabase];
        return { success: true };
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

let salesChart = null;

function updateDashboard() {
    const biSection = document.getElementById('bi-dashboard');
    if (!biSection) return;

    if(biSection.style.display === 'none' && !appState.loading) {
         // Si no estamos viendo el dashboard, solo calculamos los números básicos para los KPIs si fuera necesario, 
         // pero los gráficos Chart.js requieren que el canvas sea visible.
    }

    if(!appState.data || appState.data.length === 0) return;

    // 1. Cálculos de Ventas y Reposición
    const stats = {};
    let totalAvailable = 0;
    let totalVentas = 0;

    let totalCertificando = 0;
    appState.data.forEach(item => {
        const key = `${item.marca} ${item.modelo}`.toUpperCase();
        if(!stats[key]) stats[key] = { disponible: 0, entregado: 0 };
        
        if(item.estado === 'DISPONIBLE') {
            stats[key].disponible++;
            totalAvailable++;
        } else if (item.estado === 'ENTREGADO' || item.estado === 'RESERVADO') {
            stats[key].entregado++;
            totalVentas++;
        } else if (item.estado === 'CERTIFICANDO') {
            totalCertificando++;
        }
    });

    // 2. Actualizar KPIs
    const elDisponible = document.getElementById('kpi-disponible');
    if (elDisponible) elDisponible.innerText = totalAvailable;
    const elVentas = document.getElementById('kpi-ventas');
    if (elVentas) elVentas.innerText = totalVentas;
    const elCertificando = document.getElementById('kpi-certificando');
    if (elCertificando) elCertificando.innerText = totalCertificando;

    // 3. Radar de Reposición (Lógica Crítica)
    const replenishmentList = document.getElementById('replenishment-list');
    
    const criticalItems = Object.entries(stats)
        .map(([name, s]) => ({ name, ...s }))
        .filter(s => s.entregado > 0 && s.disponible < 2) // Menos de 2 unidades y con historial de ventas
        .sort((a,b) => b.entregado - a.entregado); // Ordenar por demanda

    const elReposicion = document.getElementById('kpi-reposicion');
    if (elReposicion) elReposicion.innerText = criticalItems.length;

    if(biSection.style.display !== 'none') {
        if (replenishmentList) {
            replenishmentList.innerHTML = '';
            if(criticalItems.length === 0) {
                replenishmentList.innerHTML = '<p style="text-align:center; padding: 2rem; color: var(--text-muted);">No hay alertas críticas de reposición.</p>';
            } else {
                criticalItems.forEach(item => {
                    const priorityClass = item.disponible === 0 ? 'priority-high' : 'priority-medium';
                    const reason = item.disponible === 0 
                        ? `SIN STOCK. Ventas registradas: ${item.entregado}u` 
                        : `STOCK CRÍTICO (${item.disponible}u). Ventas: ${item.entregado}u`;
                    
                    const div = document.createElement('div');
                    div.className = `alert-item ${priorityClass}`;
                    div.innerHTML = `
                        <div class="alert-info-text">
                            <span class="alert-model">${item.name}</span>
                            <span class="alert-reason">${reason}</span>
                        </div>
                        <div class="alert-action-badge">${item.disponible === 0 ? 'Reponer' : 'Pedir'}</div>
                    `;
                    replenishmentList.appendChild(div);
                });
            }
        }

        // 4. Gráfico de Ventas (Top Demand)
        const canvas = document.getElementById('chart-sales');
        if(!canvas) return;
        const ctx = canvas.getContext('2d');
        
        const isMatte = document.body.classList.contains('theme-matte');
        const chartColor = isMatte ? '#60a5fa' : '#2563eb';
        const gridColor = isMatte ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
        const textColor = isMatte ? '#a1a1aa' : '#4b5563';

        const salesData = Object.entries(stats)
            .map(([name, s]) => ({ name, count: s.entregado }))
            .filter(s => s.count > 0)
            .sort((a, b) => b.count - a.count)
            .slice(0, 5); // Top 5 para mayor estabilidad
        
        if(salesChart) salesChart.destroy();
        
        salesChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: salesData.map(d => d.name),
                datasets: [{
                    label: 'Unidades Vendidas',
                    data: salesData.map(d => d.count),
                    backgroundColor: chartColor,
                    borderRadius: 4,
                    barThickness: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 500
                },
                plugins: {
                    legend: { display: false }
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



function renderTable() {
    const tbody = document.getElementById('table-body');
    const emptyState = document.getElementById('empty-state');
    const summaryContainer = document.getElementById('available-summary');
    if (!tbody) return;
    tbody.innerHTML = '';

    // Filtrar
    let filtered = appState.data.filter(item => {
        // Filtro por Tab
        if(appState.filter !== 'ALL' && item.estado !== appState.filter) return false;
        
        // Filtro por Buscador
        if(appState.search) {
            const searchStr = `${item.id} ${item.instrumento || ''} ${item.modelo} ${item.marca} ${item.serie} ${item.cliente} ${item.certificado}`.toLowerCase();
            if(!searchStr.includes(appState.search)) return false;
        }
        return true;
    });

    // Gestión del Resumen de Disponibles
    if (appState.filter === 'DISPONIBLE' && filtered.length > 0) {
        const counts = {};
        filtered.forEach(item => {
            const key = `${item.marca} ${item.modelo}`.toUpperCase();
            counts[key] = (counts[key] || 0) + 1;
        });

        let summaryHTML = `
            <div class="summary-title"><i data-lucide="bar-chart-2" style="width:14px;"></i> Resumen de Stock Disponible</div>
            <div class="summary-grid">
        `;
        
        // Ordenar por cantidad descendente
        Object.entries(counts)
            .sort((a, b) => b[1] - a[1])
            .forEach(([key, count]) => {
                summaryHTML += `
                    <div class="summary-card" title="${key}">
                        <span class="summary-label">${key}</span>
                        <span class="summary-count">${count} ${count === 1 ? 'u' : 'u'}</span>
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

    if (filtered.length === 0 && !appState.loading) {
        emptyState.style.display = 'flex';
    } else {
        emptyState.style.display = 'none';
        
        filtered.forEach(item => {
            const tr = document.createElement('tr');
            
            // Textos vacíos
            const certText = item.certificado ? item.certificado : '<span class="null-text">N/A</span>';
            const clienteText = item.cliente ? item.cliente : '<span class="null-text">Sin Asignar</span>';
            
            const actionsHTML = `
                <div style="display: flex; gap: 0.25rem;">
                    <button class="btn btn-outline btn-icon-only btn-view-ficha" data-id="${item.id}" title="Ver Ficha"><i data-lucide="eye"></i></button>
                    <button class="btn btn-outline btn-icon-only btn-edit-equipo" data-id="${item.id}" title="Editar Equipo" style="color: var(--warning); border-color: var(--warning);"><i data-lucide="edit-2"></i></button>
                    <button class="btn btn-outline btn-icon-only btn-duplicate-equipo" data-id="${item.id}" data-index="${appState.data.indexOf(item)}" title="Duplicar Equipo"><i data-lucide="copy"></i></button>
                    ${item.estado === 'CERTIFICANDO' ? `<button class="btn btn-outline btn-change-state" data-id="${item.id}" data-target-state="DISPONIBLE" title="Finalizar" style="color: var(--state-certificando); border-color: var(--state-certificando);">Finalizar <i data-lucide="check"></i></button>` : ''}
                    ${item.estado === 'DISPONIBLE' ? `
                        <button class="btn btn-outline btn-change-state" data-id="${item.id}" data-target-state="RESERVADO" title="Despachar">Despachar <i data-lucide="arrow-right"></i></button>
                        <button class="btn btn-outline btn-icon-only btn-change-state" data-id="${item.id}" data-target-state="VENTA INTERNA" title="Venta Interna" style="color: #6b7280; border-color: #cbd5e1;"><i data-lucide="home"></i></button>
                    ` : ''}
                    ${item.estado === 'RESERVADO' ? `<button class="btn btn-primary btn-change-state" data-id="${item.id}" data-target-state="ENTREGADO" title="Asignar Cliente">Asignar Cliente <i data-lucide="user-check"></i></button>` : ''}
                </div>
            `;

            const stateClass = item.estado.toLowerCase().replace(/\s+/g, '-');

            tr.innerHTML = `
                <td><strong>${item.id}</strong></td>
                <td><strong>${item.instrumento || '---'}</strong><br><small style="color: var(--text-secondary);">${item.marca} ${item.modelo}</small></td>
                <td>${item.serie}</td>
                <td><span class="badge ${stateClass}">${item.estado}</span></td>
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

function openModalNuevo() {
    const modal = document.getElementById('modal-nuevo');
    
    // Generar ID Correlativo
    let lastNum = 999;
    if(appState.data && appState.data.length > 0) {
        const ids = appState.data.map(item => {
            const match = String(item.id).match(/\d+/);
            return match ? parseInt(match[0]) : 0;
        });
        const maxIdNum = Math.max(...ids);
        if(maxIdNum >= 1000) lastNum = maxIdNum;
        else if (maxIdNum > 0 && maxIdNum < 1000) {
             lastNum = 999; 
        }
    }
    const newId = 'INST-' + (lastNum + 1);
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
    document.getElementById('modal-estado-title').innerText = `Pasar equipo a ${targetState}`;

    // Context Info
    document.getElementById('estado-context').innerHTML = `
        <p>Equipo: <strong>${item.marca} ${item.modelo}</strong> (ID: ${item.id})</p>
        <p>Nº de Serie: <strong>${item.serie}</strong></p>
    `;

    // Campos condicionales
    const fReservado = document.getElementById('fields-reservado');
    const fEntregado = document.getElementById('fields-entregado');
    const fInterno = document.getElementById('fields-interno');
    
    fReservado.style.display = 'none';
    fEntregado.style.display = 'none';
    if (fInterno) fInterno.style.display = 'none';

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

    if (targetState === 'RESERVADO') {
        fReservado.style.display = 'block';
        document.getElementById('estado-certificado').required = true;
        document.getElementById('estado-fecha').required = true;
    } 
    else if (targetState === 'ENTREGADO') {
        fEntregado.style.display = 'block';
        document.getElementById('estado-cliente').required = true;
    }
    else if (targetState === 'VENTA INTERNA') {
        if (fInterno) fInterno.style.display = 'block';
        if (elDestino) elDestino.required = true;
    }

    modal.classList.add('active');
}

// ==========================================
// GESTIÓN DE FORMULARIOS (Submits)
// ==========================================
async function handleFormNuevo(e) {
    e.preventDefault();
    console.log(">>> SISTEMA V16 UP: Iniciando alta en CERTIFICANDO");
    const btn = document.getElementById('btn-save-nuevo');
    btn.disabled = true;
    btn.innerText = 'Guardando...';

    try {
        showLoader('Guardando equipo nuevo...');
        const record = {
            id: document.getElementById('nuevo-id').value,
            instrumento: document.getElementById('nuevo-nombre').value,
            marca: document.getElementById('nuevo-marca').value,
            modelo: document.getElementById('nuevo-modelo').value,
            serie: document.getElementById('nuevo-serie').value,
            fecha_calibracion: document.getElementById('nuevo-fecha').value,
            estado: 'CERTIFICANDO',
            certificado: '',
            cliente: ''
        };

        const checkedPats = [];
        document.querySelectorAll('#nuevo-patrones-checklist input[type="checkbox"]:checked').forEach(function(cb) {
            checkedPats.push(cb.value);
        });
        record.patrones = JSON.stringify(checkedPats);

        const puntos = [];
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
        record.puntos = JSON.stringify(puntos);

        const result = await saveNewRecord(record);
        
        if (result && result.success) {
            closeAllModals();
            await fetchData(); // Recargar datos para evitar duplicados en memoria
            showToast("Equipo guardado con éxito.", "success");
        } else {
            const errorMsg = result && result.error ? result.error : "Respuesta de guardado vacía o inválida del servidor.";
            showToast("⚠️ Falla crítica al guardar: " + errorMsg, "error");
        }
    } catch (error) {
        console.error("Error al guardar nuevo registro:", error);
        showToast("⚠️ Falla crítica de red: " + error.toString(), "error");
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
        showLoader('Actualizando estado...');
        const id = document.getElementById('estado-id').value;
        const targetState = document.getElementById('estado-target').value;
        
        let extraData = {};
        if(targetState === 'RESERVADO') {
            extraData.certificado = document.getElementById('estado-certificado').value;
            extraData.fecha = document.getElementById('estado-fecha').value;
        } else if (targetState === 'ENTREGADO') {
            extraData.cliente = document.getElementById('estado-cliente').value;
        } else if (targetState === 'VENTA INTERNA') {
            const elDestino = document.getElementById('estado-destino-interno');
            extraData.cliente = elDestino ? elDestino.value : 'Venta Interna';
        }

        const result = await updateStateRecord(id, targetState, extraData);

        if (result && result.success) {
            closeAllModals();
            await fetchData(); // Recargar datos frescos
            showToast("Estado actualizado con éxito.", "success");
        } else {
            showToast("Error al actualizar: " + (result ? result.error : "Sin respuesta del servidor"), "error");
        }
    } catch (error) {
        console.error("Error al actualizar estado:", error);
        showToast("Hubo un error al actualizar el estado. Por favor, inténtalo de nuevo.", "error");
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

    // Configurar acción del botón Emitir Certificado
    const btnEmitir = document.getElementById('btn-emitir-certificado-pdf');
    if (btnEmitir) {
        btnEmitir.onclick = () => window.imprimirCertificado(id);
    }

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
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; color: #9ca3af;">Sin puntos de medición registrados.</td></tr>';
    } else {
        puntosArray.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${p.pt}</strong></td>
                <td>${p.unidad || '-'}</td>
                <td>${p.ref || '-'}</td>
                <td>${p.inst || '-'}</td>
            `;
            tbody.appendChild(tr);
        });
    }

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
    document.getElementById('edit-estado').value = item.estado;
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
        showLoader('Guardando cambios...');
        const record = {
            id: document.getElementById('edit-id').value,
            instrumento: document.getElementById('edit-instrumento').value,
            marca: document.getElementById('edit-marca').value,
            modelo: document.getElementById('edit-modelo').value,
            serie: document.getElementById('edit-serie').value,
            fecha_calibracion: document.getElementById('edit-fecha').value,
            estado: document.getElementById('edit-estado').value,
            certificado: document.getElementById('edit-certificado').value,
            cliente: document.getElementById('edit-cliente').value
        };

        const checkedPats = [];
        document.querySelectorAll('#edit-patrones-checklist input[type="checkbox"]:checked').forEach(function(cb) {
            checkedPats.push(cb.value);
        });
        record.patrones = JSON.stringify(checkedPats);

        const puntos = [];
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
        record.puntos = JSON.stringify(puntos);

        const result = await saveFullUpdate(record);
        if (result && result.success) {
            await fetchData(); // Recargar datos frescos
            closeAllModals();
            showToast("Cambios guardados con éxito.", "success");
        } else {
            const errorMsg = result && result.error ? result.error : "Respuesta de guardado vacía o inválida del servidor.";
            showToast("⚠️ Falla al editar: " + errorMsg, "error");
        }
    } catch (error) {
        console.error("Error al editar registro:", error);
        showToast("Hubo un error al guardar los cambios. Por favor, inténtalo de nuevo.", "error");
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

    appState.solicitudes.forEach((s, index) => {
        const est = (s.estado || '').trim().toLowerCase();
        const isEnviado = est !== '' && est !== 'pendiente';
        const tr = document.createElement('tr');
        if (isEnviado) tr.style.opacity = '0.6';
        
        tr.innerHTML = `
            <td>${s.timestamp}</td>
            <td><strong>${s.empresa}</strong><br><small>${s.contacto}</small></td>
            <td><code>${s.certificado}</code></td>
            <td>${s.email}</td>
            <td><span class="badge ${isEnviado ? 'entregado' : 'reservado'}">${s.estado || 'pendiente'}</span></td>
            <td>
                <div style="display: flex; gap: 0.25rem;">
                    ${isEnviado ? '' : `<button class="btn btn-primary btn-sm btn-atender-solicitud" data-index="${index}"><i data-lucide="external-link" style="width:14px; height:14px;"></i> Atender</button>`}
                    <button class="btn btn-outline btn-sm btn-ver-ficha-solicitud" data-index="${index}" title="Ver Ficha del Instrumento"><i data-lucide="eye" style="width:14px; height:14px;"></i> Info</button>
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

function certificadosCoinciden(certA, certB) {
    const cleanA = String(certA || '').trim().toUpperCase();
    const cleanB = String(certB || '').trim().toUpperCase();
    
    if (cleanA === '' || cleanB === '') return false;
    if (cleanA === cleanB) return true;
    
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
    emailBody.value = `Estimado/a ${s.contacto || s.empresa || 'Cliente'},\n\nAdjunto al presente correo encontrará el certificado de calibración solicitado, correspondiente al código ${s.certificado}. Agradecemos confirmar la correcta recepción de este mensaje.\n\nLe informamos que somos proveedores de instrumentos de medición y certificamos. Puede consultarnos de manera directa si:\n* Tiene otros instrumentos para certificar: Realizamos la calibración y emisión de certificados para todo su equipamiento.\n* Quiere consultar por equipo nuevo: Lo asesoramos y proveemos en la adquisición de nuevo instrumental.\n\nPara cualquier consulta técnica o cotización, puede responder a este correo o escribirnos vía WhatsApp al +54 11 4971-7053.\n\nQuedamos a su entera disposición.\n\nSaludos cordiales,\n\nDarío Del Real\nCR MEDICION | SchwyzLab Laboratorio de Metrología\nPerú 1297 - CABA - Argentina\nTel.: +54 11 4361-3499 / 3680\nWeb: www.todomedicion.com`;
    
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

    try {
        const response = await fetch(`${GOOGLE_SHEETS_API_URL}?action=check_file&certificado=${encodeURIComponent(certificado)}`);
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
        if (equipo && equipo.patrones) {
            let patIds = [];
            try {
                patIds = JSON.parse(equipo.patrones);
            } catch(e) {
                if (typeof equipo.patrones === 'string') {
                    patIds = equipo.patrones.split(',').map(function(s) { return s.trim(); });
                } else if (Array.isArray(equipo.patrones)) {
                    patIds = equipo.patrones;
                }
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
            email: document.getElementById('email-to').value,
            certificado: certificado,
            body: document.getElementById('email-body').value,
            empresa: appState.pendingEmail ? appState.pendingEmail.empresa : '',
            originalEmail: appState.pendingEmail ? appState.pendingEmail.email : '',
            patrones: patternsData
        }
    };

    try {
        await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        });

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

        // Refrescar datos reales en 3 segundos
        setTimeout(async () => {
            await fetchData();
            closeModal('modal-email-confirm');
            showToast("¡Envío de certificado y actualización de equipo procesados con éxito!", "success");
        }, 3000);

    } catch (e) {
        console.error("Fetch error:", e);
        
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
            let parts = eq.fecha_vencimiento.split('-');
            if (parts.length === 3) {
                fechaFormateada = `${parts[2]}/${parts[1]}/${parts[0]}`;
            }
        }

        const isEnviado = eq.estado_recordatorio === 'Enviado';

        tr.innerHTML = `
            <td><strong>${eq.id}</strong></td>
            <td>${eq.instrumento}</td>
            <td><strong>${eq.cliente || '---'}</strong><br><small>${eq.email}</small></td>
            <td>${fechaFormateada}</td>
            <td><span class="badge status-badge ${eq.estadoVenc}">${labelVenc}</span></td>
            <td><span class="badge ${isEnviado ? 'entregado' : 'reservado'}">${eq.estado_recordatorio || 'pendiente'}</span></td>
            <td>
                ${eq.email !== '---' && eq.email.includes('@') ? 
                `<button class="btn ${isEnviado ? 'btn-outline' : 'btn-primary'} btn-sm btn-enviar-aviso" onclick="handleEnviarAviso('${eq.id}')">
                    <i data-lucide="${isEnviado ? 'check-circle' : 'mail'}" style="width:14px; height:14px;"></i> ${isEnviado ? 'Re-avisar' : 'Avisar'}
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
        let parts = eq.fecha_vencimiento.split('-');
        if (parts.length === 3) {
            fechaFormateada = `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
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
    document.getElementById('reminder-body').value = `Estimado/a ${eq.cliente},\n\nSegún nuestro sistema, el certificado de calibración de su equipo (${eq.instrumento}, Certificado Nº: ${eq.certificado}) se encuentra próximo a vencer el día ${fechaFormateada}.\n\nPara reprogramar su recalibración y mantener su equipo al día, por favor póngase en contacto con nosotros.\n\nPuede responder a este correo o escribirnos vía WhatsApp al +54 11 4971-7053.\n\nQuedamos a su entera disposición.\n\nSaludos cordiales,\n\nDarío Del Real\nCR MEDICION | SchwyzLab Laboratorio de Metrología\nPerú 1297 - CABA - Argentina\nTel.: +54 11 4361-3499 / 3680\nWeb: www.todomedicion.com`;

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
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
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

window.imprimirCertificado = function(id) {
    const item = appState.data.find(x => x.id === id);
    if (!item) {
        showToast("No se encontró el equipo para emitir el certificado.", "error");
        return;
    }

    // 1. Formatear Fechas y Datos Básicos
    const certNum = item.certificado || '---';
    const fechaCalib = formatToArgDate(item.fecha_calibracion);
    const fechaEmision = getFechaEmision(item.fecha_calibracion);
    const objeto = getObjetoName(item.instrumento, certNum);

    // Página 1 y 2 Cabeceras
    document.getElementById('cert-pdf-num').innerText = certNum;
    document.getElementById('cert-pdf-num-pg2').innerText = certNum;
    
    // Página 1 Datos
    document.getElementById('cert-pdf-objeto').innerText = objeto;
    document.getElementById('cert-pdf-fabricante').innerText = item.marca || '---';
    document.getElementById('cert-pdf-modelo').innerText = item.modelo || '---';
    document.getElementById('cert-pdf-serie').innerText = item.serie || '---';
    document.getElementById('cert-pdf-identificacion').innerText = 'Sin identificar';
    document.getElementById('cert-pdf-fecha-calib').innerText = fechaCalib;
    document.getElementById('cert-pdf-fecha-emision').innerText = fechaEmision;
    document.getElementById('cert-pdf-cliente').innerText = item.cliente || '---';

    // 2. Determinar Plantilla Técnica por Tipo de Instrumento
    let certType = 'DE'; // Default a Decibelímetro
    const certUpper = certNum.toUpperCase();
    const instUpper = (item.instrumento || '').toUpperCase();

    if (certUpper.includes('-DN-') || instUpper.includes('DINAM')) {
        certType = 'DN';
    } else if (certUpper.includes('-TH-') || instUpper.includes('TERMOHIGR')) {
        certType = 'TH';
    } else if (certUpper.includes('-LX-') || instUpper.includes('LUX')) {
        certType = 'LX';
    } else if (certUpper.includes('-TE-') || certUpper.includes('-TC-') || instUpper.includes('TERMÓM') || instUpper.includes('TERMOM')) {
        certType = 'TE';
    }

    let metodologia = '';
    let temp = '';
    let hum = '';
    let rangoHdr = '';
    let resolucionHdr = '';
    let patrones = [];

    if (certType === 'DE') {
        metodologia = 'La calibración fue realizada por comparación con patrones, de acuerdo al instructivo de calibración IT-010-LAB (Calibración de decibelímetro).';
        temp = '(20 ± 2) °C';
        hum = '(50 ± 15) %Hr';
        rangoHdr = 'Rango de medición: 30 a 130 dB';
        resolucionHdr = 'Resolución: 0,1 dB';
        patrones = [
            { id: 'CDEC-001', desc: 'Calibrador Acústico', cert: 'C00624.1', emisor: 'CINTRA' },
            { id: 'THGP-001', desc: 'Termohigrómetro', cert: '2023-003220-1', emisor: 'TESTO' }
        ];
    } else if (certType === 'DN') {
        metodologia = 'La calibración fue realizada por comparación con patrones, de acuerdo al instructivo de calibración IT-020-LAB (Calibración de dinamómetros).';
        temp = '(22 ± 3) °C';
        hum = '(45 ± 15) %Hr';
        rangoHdr = 'Rango de medición: 0 a 500 N';
        resolucionHdr = 'Resolución: 0,1 N';
        patrones = [
            { id: 'PAT-DN-01', desc: 'Carga de Tracción Patrón', cert: 'C-4091', emisor: 'INTI' },
            { id: 'CR-002', desc: 'Cronómetro Digital', cert: 'CR-9081', emisor: 'CINTRA' }
        ];
    } else if (certType === 'TH') {
        metodologia = 'La calibración fue realizada por comparación directa en cámara climatizada con termo-anemómetros de referencia de acuerdo al instructivo IT-005-LAB.';
        temp = '(21 ± 2) °C';
        hum = '(50 ± 10) %Hr';
        rangoHdr = 'Rango de medición: -10 a 60 °C / 10 a 95 %Hr';
        resolucionHdr = 'Resolución: 0,1 °C / 0,1 %Hr';
        patrones = [
            { id: 'PTH-001', desc: 'Termómetro de Referencia', cert: 'C-89102', emisor: 'CINTRA' },
            { id: 'HREF-002', desc: 'Higrómetro de Referencia', cert: 'H-90123', emisor: 'TESTO' }
        ];
    } else if (certType === 'LX') {
        metodologia = 'La calibración fue realizada por comparación directa sobre banco óptico en concordancia con el instructivo IT-012-LAB.';
        temp = '(23 ± 2) °C';
        hum = '(45 ± 10) %Hr';
        rangoHdr = 'Rango de medición: 0 a 20000 Lux';
        resolucionHdr = 'Resolución: 1 Lux';
        patrones = [
            { id: 'PLX-001', desc: 'Lámpara Patrón Incandescente', cert: 'L-87612', emisor: 'NIST' },
            { id: 'THGP-001', desc: 'Termohigrómetro', cert: '2023-003220-1', emisor: 'TESTO' }
        ];
    } else { // TE
        metodologia = 'La calibración fue realizada por comparación en baño termostático con termómetro patrón digital de acuerdo al instructivo IT-002-LAB.';
        temp = '(21 ± 2) °C';
        hum = '(50 ± 15) %Hr';
        rangoHdr = 'Rango de medición: -30 a 150 °C';
        resolucionHdr = 'Resolución: 0,1 °C';
        patrones = [
            { id: 'PTE-002', desc: 'Termómetro Patrón Digital', cert: 'C-99812', emisor: 'CINTRA' }
        ];
    }

    document.getElementById('cert-pdf-metodologia').innerText = metodologia;
    document.getElementById('cert-pdf-temp').innerText = temp;
    document.getElementById('cert-pdf-hum').innerText = hum;
    document.getElementById('cert-pdf-rango-hdr').innerText = rangoHdr;
    document.getElementById('cert-pdf-resolucion-hdr').innerText = resolucionHdr;

    // 3. Cargar Patrones en la Tabla
    const tbodyPatrones = document.getElementById('cert-pdf-tbody-patrones');
    tbodyPatrones.innerHTML = '';
    patrones.forEach(pat => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${pat.id}</td>
            <td>${pat.desc}</td>
            <td>${pat.cert}</td>
            <td>${pat.emisor}</td>
        `;
        tbodyPatrones.appendChild(tr);
    });

    // 4. Cargar y Calcular Resultados Encontrados
    let puntosArray = [];
    try {
        if (item.puntos) puntosArray = JSON.parse(item.puntos);
    } catch (e) {
        console.error("Error leyendo puntos Json para certificado", e);
    }

    const tbodyResultados = document.getElementById('cert-pdf-tbody-resultados');
    tbodyResultados.innerHTML = '';

    if (puntosArray.length === 0) {
        tbodyResultados.innerHTML = '<tr><td colspan="4">Sin puntos de medición registrados.</td></tr>';
    } else {
        puntosArray.forEach(p => {
            const refVal = parseFloat(String(p.ref).replace(',', '.'));
            const instVal = parseFloat(String(p.inst).replace(',', '.'));
            
            let errorStr = '---';
            if (!isNaN(refVal) && !isNaN(instVal)) {
                // Calcular Error Obtenido (Diferencia Absoluta para coincidir con el PDF del decibelímetro)
                const error = Math.abs(refVal - instVal);
                errorStr = error.toFixed(1).replace('.', ',');
            }

            // Incertidumbre por defecto o cargada en el campo inc
            let incStr = String(p.inc || '').trim();
            if (incStr === '') {
                incStr = (certType === 'DE') ? '0,4' : '0,1';
            }
            incStr = incStr.replace('.', ',');

            const refStr = String(p.ref).replace('.', ',');
            const instStr = String(p.inst).replace('.', ',');
            const unit = p.unidad || '';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${refStr} ${unit}</td>
                <td>${instStr} ${unit}</td>
                <td>${errorStr} ${unit}</td>
                <td>${incStr} ${unit}</td>
            `;
            tbodyResultados.appendChild(tr);
        });
    }

    // 5. Lanzar diálogo de impresión
    window.print();
}

function formatToArgDate(dateStr) {
    if (!dateStr || dateStr === '---' || dateStr.trim() === '') return '---';
    // Si viene en formato yyyy-mm-dd
    const parts = dateStr.split('-');
    if (parts.length === 3) {
        return `${parseInt(parts[2], 10)}/${parseInt(parts[1], 10)}/${parts[0]}`;
    }
    // Si ya viene formateado
    return dateStr;
}

function getFechaEmision(calibDateStr) {
    if (!calibDateStr || calibDateStr === '---' || calibDateStr.trim() === '') return '---';
    const parts = calibDateStr.split('-');
    if (parts.length === 3) {
        const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
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
