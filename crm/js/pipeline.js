// ==========================================
// METROCRM PRO - SALES PIPELINE & KANBAN (LIGHT THEME)
// ==========================================

const PIPELINE_STAGES = [
    {
        id: "nuevo",
        name: "Nuevo Lead ML",
        icon: "inbox",
        badgeClass: "bg-blue-100 text-blue-800 border-blue-300 font-bold",
        headerClass: "bg-blue-50 text-blue-900 border-b border-blue-200",
        description: "Solicitud de certificado recién ingresada por Mercado Libre"
    },
    {
        id: "investigado",
        name: "Investigado & Perfilado",
        icon: "search",
        badgeClass: "bg-indigo-100 text-indigo-800 border-indigo-300 font-bold",
        headerClass: "bg-indigo-50 text-indigo-900 border-b border-indigo-200",
        description: "Datos de empresa, CUIT, rubro y decisores verificados"
    },
    {
        id: "contactado",
        name: "Primer Contacto Enviado",
        icon: "send",
        badgeClass: "bg-amber-100 text-amber-800 border-amber-300 font-bold",
        headerClass: "bg-amber-50 text-amber-900 border-b border-amber-200",
        description: "Email de bienvenida o pitch por nicho despachado"
    },
    {
        id: "en_conversacion",
        name: "En Conversación / Cotizado",
        icon: "message-square",
        badgeClass: "bg-purple-100 text-purple-800 border-purple-300 font-bold",
        headerClass: "bg-purple-50 text-purple-900 border-b border-purple-200",
        description: "Cliente respondió o solicitó presupuesto de calibración/equipos"
    },
    {
        id: "ganado",
        name: "Cliente Fidelizado",
        icon: "star",
        badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300 font-bold",
        headerClass: "bg-emerald-50 text-emerald-900 border-b border-emerald-200",
        description: "Compras recurrentes o contrato de calibración cerrado"
    },
    {
        id: "recalibracion",
        name: "Próxima Recalibración",
        icon: "clock",
        badgeClass: "bg-rose-100 text-rose-800 border-rose-300 font-bold",
        headerClass: "bg-rose-50 text-rose-900 border-b border-rose-200",
        description: "Certificado cumple 10-12 meses, oportunidad de renovación"
    }
];

const PipelineManager = {
    getStages() {
        return PIPELINE_STAGES;
    },

    normalizeStage(rawStage) {
        if (!rawStage) return "nuevo";
        const s = String(rawStage).toLowerCase().trim();
        if (s === "nuevo") return "nuevo";
        if (s === "investigado" || s === "perfilado") return "investigado";
        if (s === "contactado") return "contactado";
        if (s === "en_conversacion" || s === "interesado" || s === "cotizado") return "en_conversacion";
        if (s === "ganado" || s === "fidelizado") return "ganado";
        if (s === "recalibracion" || s === "vencimiento") return "recalibracion";
        return "nuevo";
    },

    renderKanban(clients, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let html = '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 min-h-[650px]">';

        PIPELINE_STAGES.forEach(stage => {
            const stageClients = clients.filter(c => PipelineManager.normalizeStage(c.estado) === stage.id);

            html += `
            <div class="bg-slate-100/80 rounded-2xl border border-slate-200 flex flex-col h-full max-h-[780px] shadow-sm">
                <!-- Column Header -->
                <div class="p-3.5 ${stage.headerClass} rounded-t-2xl flex items-center justify-between">
                    <div class="flex items-center gap-2">
                        <i data-lucide="${stage.icon}" class="w-3.5 h-3.5"></i>
                        <h3 class="text-xs font-bold uppercase tracking-wider">${stage.name}</h3>
                    </div>
                    <span class="text-xs font-mono px-2 py-0.5 rounded-full bg-white text-slate-800 font-bold border border-slate-200 shadow-xs">
                        ${stageClients.length}
                    </span>
                </div>

                <!-- Column Cards Container -->
                <div class="p-2.5 space-y-2.5 overflow-y-auto flex-1 custom-scrollbar">
            `;

            if (stageClients.length === 0) {
                html += `
                    <div class="h-28 border border-dashed border-slate-300 rounded-xl flex items-center justify-center text-slate-400 text-[11px] italic bg-white/50">
                        Sin clientes en esta etapa
                    </div>
                `;
            } else {
                stageClients.forEach(client => {
                    const nichoMeta = window.NICHES[client.nicho_id || 'gral'] || window.NICHES['gral'];
                    const contacto = (client.contactos && client.contactos.length > 0) ? client.contactos[0] : '';
                    const totalEq = client.equipos ? client.equipos.length : (client.total_calibraciones || 1);
                    const scoringColor = client.scoring === 'A' ? 'text-amber-900 bg-amber-100 border-amber-300' : 
                                         client.scoring === 'B' ? 'text-blue-900 bg-blue-100 border-blue-300' : 
                                         'text-slate-700 bg-slate-100 border-slate-200';

                    html += `
                    <div class="kanban-card bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-500 rounded-xl p-3.5 cursor-pointer transition shadow-xs"
                         onclick="window.openClientDrawer('${client.id}')">
                        <div class="flex items-start justify-between gap-2 mb-2">
                            <span class="text-[10px] font-bold px-1.5 py-0.5 rounded border ${scoringColor}">
                                Tier ${client.scoring || 'C'}
                            </span>
                            <span class="text-[10px] px-2 py-0.5 rounded-full font-semibold ${nichoMeta.badgeClass}">
                                ${nichoMeta.short}
                            </span>
                        </div>
                        
                        <h4 class="text-xs font-bold text-slate-900 hover:text-blue-600 line-clamp-1 mb-1">
                            ${client.empresa || client.nombre}
                        </h4>
                        
                        ${contacto ? `<p class="text-[11px] text-slate-600 flex items-center gap-1 line-clamp-1"><i data-lucide="user" class="w-3 h-3 text-slate-400"></i> ${contacto}</p>` : ''}

                        <div class="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                            <span class="flex items-center gap-1 font-mono text-blue-700 font-bold">
                                <i data-lucide="package" class="w-3 h-3 text-blue-600"></i> ${totalEq} eq.
                            </span>
                            <span class="text-[10px] text-slate-500 font-mono">
                                ${client.ultima_calibracion ? client.ultima_calibracion.slice(0, 10) : ''}
                            </span>
                        </div>

                        <!-- Stage Switcher Dropdown -->
                        <div class="mt-2.5 pt-1.5 border-t border-slate-100" onclick="event.stopPropagation()">
                            <select onchange="window.moveClientStage('${client.id}', this.value)" 
                                    class="w-full bg-slate-50 hover:bg-white border border-slate-200 text-[11px] text-slate-700 rounded-lg px-2 py-1 focus:outline-none focus:border-blue-500 transition">
                                ${PIPELINE_STAGES.map(st => `
                                    <option value="${st.id}" ${st.id === stage.id ? 'selected' : ''}>Mover a: ${st.name}</option>
                                `).join('')}
                            </select>
                        </div>
                    </div>
                    `;
                });
            }

            html += `
                </div>
            </div>
            `;
        });

        html += '</div>';
        container.innerHTML = html;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
};

window.PIPELINE_STAGES = PIPELINE_STAGES;
window.PipelineManager = PipelineManager;
