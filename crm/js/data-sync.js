// ==========================================
// METROCRM PRO - DATA ENGINE & FIRESTORE SYNC
// ==========================================

const DataSync = {
    STORAGE_KEY: 'metrocrm_pro_clients_v4',
    HISTORY_KEY: 'metrocrm_pro_history_v4',

    async loadInitialClients() {
        // 1. Try local storage (user overrides, stages, notes)
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    console.log(`MetroCRM: Cargados ${parsed.length} clientes desde caché local.`);
                    return parsed;
                }
            } catch (e) {
                console.warn("Fallo al parsear caché local:", e);
            }
        }

        // 2. Try window.INITIAL_CRM_CLIENTS (from clients_data.js)
        if (window.INITIAL_CRM_CLIENTS && window.INITIAL_CRM_CLIENTS.length > 0) {
            console.log(`MetroCRM: Inicializados ${window.INITIAL_CRM_CLIENTS.length} clientes desde dataset base.`);
            this.saveClients(window.INITIAL_CRM_CLIENTS);
            return window.INITIAL_CRM_CLIENTS;
        }

        // 3. Try fetch backup_clients.json
        try {
            const resp = await fetch('data/backup_clients.json');
            if (resp.ok) {
                const data = await resp.json();
                console.log(`MetroCRM: Cargados ${data.length} clientes desde backup_clients.json.`);
                this.saveClients(data);
                return data;
            }
        } catch (e) {
            console.warn("Fallo al cargar backup_clients.json:", e);
        }

        return [];
    },

    saveClients(clients) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(clients));
        } catch (e) {
            console.warn("Error guardando en localStorage:", e);
        }
    },

    loadHistory() {
        try {
            const saved = localStorage.getItem(this.HISTORY_KEY);
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            return [];
        }
    },

    saveHistory(history) {
        try {
            localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history));
        } catch (e) {
            console.warn("Error guardando bitácora:", e);
        }
    },

    // Real-time or on-demand sync from Firestore
    async syncFromFirestore(currentClients) {
        if (!window.isFirestoreAvailable || !window.crmDb) {
            throw new Error("Firebase Firestore no está disponible en este momento.");
        }

        console.log("Iniciando sincronización con Firestore...");
        const [solSnapshot, instSnapshot] = await Promise.all([
            window.crmDb.collection("solicitudes").get(),
            window.crmDb.collection("instrumentos").get()
        ]);

        const certMap = {};
        instSnapshot.docs.forEach(doc => {
            const d = doc.data();
            const cert = String(d.certificado || '').trim().toUpperCase();
            if (cert) certMap[cert] = d;
        });

        const clientMap = {};
        // Index existing clients by email and name for clean merge
        currentClients.forEach(c => {
            const emailKey = (c.emails && c.emails[0]) ? c.emails[0].toLowerCase().trim() : '';
            const nameKey = (c.empresa || c.nombre || '').toLowerCase().trim();
            if (emailKey) clientMap[emailKey] = c;
            if (nameKey) clientMap[nameKey] = c;
        });

        let newLeadsCount = 0;

        solSnapshot.docs.forEach(doc => {
            const s = doc.data();
            const email = String(s.email || '').toLowerCase().trim();
            const empresa = String(s.empresa || '').trim();
            const contacto = String(s.contacto || '').trim();
            const cert = String(s.certificado || '').toUpperCase().trim();
            const timestamp = String(s.timestamp || '').trim();

            const key = email || empresa.toLowerCase();
            if (!key) return;

            let client = clientMap[key];
            if (!client) {
                // New client entered via Mercado Libre!
                newLeadsCount++;
                client = {
                    id: 'CRM-' + (1000 + Object.keys(clientMap).length + 1),
                    nombre: empresa || contacto,
                    empresa: empresa || contacto,
                    cuit: '',
                    contactos: contacto ? [contacto] : [],
                    emails: email ? [email] : [],
                    telefonos: [],
                    categorias: [],
                    marcas: [],
                    equipos: [],
                    total_calibraciones: 0,
                    ultima_calibracion: timestamp,
                    estado: 'nuevo',
                    nicho_id: 'gral',
                    nicho: 'Servicios Generales y Mantenimiento',
                    nicho_short: 'Servicios Generales',
                    pitch: '',
                    oportunidades: [],
                    scoring: 'C',
                    notas: [],
                    proxima_accion: null,
                    web: '',
                    linkedin: ''
                };
                clientMap[key] = client;
                currentClients.unshift(client);
            }

            // Update client data without overwriting commercial status
            if (contacto && !client.contactos.includes(contacto)) client.contactos.push(contacto);
            if (email && !client.emails.includes(email)) client.emails.push(email);

            if (cert) {
                const already = client.equipos.some(e => e.certificado === cert);
                if (!already) {
                    const instData = certMap[cert] || {};
                    let instName = instData.instrumento || 'Instrumento de Medición';
                    if (/lux/i.test(instName)) instName = 'Luxómetro';
                    else if (/decibel|sonom/i.test(instName)) instName = 'Decibelímetro';
                    else if (/termohigr/i.test(instName)) instName = 'Termohigrómetro';
                    else if (/dinam/i.test(instName)) instName = 'Dinamómetro';

                    const equipo = {
                        certificado: cert,
                        instrumento: instName,
                        marca: instData.marca || '',
                        modelo: instData.modelo || '',
                        serie: instData.serie || '',
                        fecha_calibracion: instData.fecha_calibracion || timestamp,
                        timestamp_solicitud: timestamp
                    };

                    try {
                        const parts = equipo.fecha_calibracion.slice(0, 10).split('-');
                        equipo.fecha_vencimiento = `${parseInt(parts[0]) + 1}-${parts[1]}-${parts[2]}`;
                    } catch(e) {
                        equipo.fecha_vencimiento = '';
                    }

                    client.equipos.push(equipo);
                    client.total_calibraciones = client.equipos.length;
                    if (!client.categorias.includes(instName)) client.categorias.push(instName);
                    if (instData.marca && !client.marcas.includes(instData.marca)) client.marcas.push(instData.marca);
                }
            }

            if (timestamp && timestamp > (client.ultima_calibracion || '')) {
                client.ultima_calibracion = timestamp;
            }
        });

        // Re-classify and save
        currentClients.forEach(c => {
            if (!c.nicho_id || c.nicho_id === 'gral') {
                c.nicho_id = window.ResearchEngine.detectNiche(c.empresa, c.categorias, c.marcas);
                const ninfo = window.NICHES[c.nicho_id];
                c.nicho = ninfo.name;
                c.nicho_short = ninfo.short;
                c.pitch = ninfo.pitch;
                c.oportunidades = ninfo.oportunidades;
            }
        });

        this.saveClients(currentClients);
        return {
            totalClients: currentClients.length,
            newLeads: newLeadsCount
        };
    },

    exportToCSV(clients) {
        if (!clients || clients.length === 0) return;
        const headers = ["ID", "Empresa", "Contacto", "Email", "CUIT", "Nicho", "Equipos Calibrados", "Total Calibraciones", "Ultima Fecha", "Estado Comercial", "Scoring"];
        const rows = clients.map(c => [
            c.id || '',
            `"${(c.empresa || c.nombre || '').replace(/"/g, '""')}"`,
            `"${(c.contactos && c.contactos[0] ? c.contactos[0] : '').replace(/"/g, '""')}"`,
            c.emails ? c.emails.join('; ') : '',
            c.cuit || '',
            c.nicho_short || '',
            `"${(c.categorias || []).join(', ').replace(/"/g, '""')}"`,
            c.total_calibraciones || (c.equipos ? c.equipos.length : 0),
            c.ultima_calibracion || '',
            c.estado || 'Nuevo',
            c.scoring || 'C'
        ]);

        const csvContent = "\uFEFF" + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `MetroCRM_Clientes_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

window.DataSync = DataSync;
