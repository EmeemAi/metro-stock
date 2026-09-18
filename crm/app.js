// ==========================================
// METROCRM PRO - MASTER CONTROLLER (LIGHT THEME)
// ==========================================

let clients = [];
let interactionsHistory = [];
let currentView = 'dashboard';
let selectedNicheFilter = 'todos';
let selectedStatusFilter = 'todos';
let selectedScoringFilter = 'todos';
let selectedExpirationFilter = 'todos'; // 'todos' | 'urgentes' | 'vencidos' | 'por_vencer' | 'al_dia'
let currentSortOrder = 'vencimiento_urgente'; // 'vencimiento_urgente' | 'vencimiento_lejano' | 'recientes' | 'antiguos' | 'empresa_asc' | 'equipos_desc' | 'scoring_desc'
let searchQuery = '';
let selectedClient = null;
let currentCampaignClient = null;

// Helper: Calcular información detallada de vencimiento metrológico
function getClientExpirationInfo(client) {
    if (!client) return { status: 'desconocido', daysRemaining: 9999, label: 'Sin datos', sublabel: '', badgeClass: '' };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let expDate = null;
    let expEq = null;

    // 1. Buscar entre todos los equipos el vencimiento más cercano
    if (client.equipos && client.equipos.length > 0) {
        for (const eq of client.equipos) {
            let dStr = eq.fecha_vencimiento;
            if (!dStr && eq.fecha_calibracion) {
                try {
                    const parts = eq.fecha_calibracion.slice(0, 10).split('-');
                    dStr = `${parseInt(parts[0]) + 1}-${parts[1]}-${parts[2]}`;
                } catch(e){}
            }
            if (dStr && dStr.length >= 10) {
                const parsed = new Date(dStr.slice(0, 10) + 'T00:00:00');
                if (!isNaN(parsed.getTime())) {
                    if (!expDate || parsed < expDate) {
                        expDate = parsed;
                        expEq = eq;
                    }
                }
            }
        }
    }

    // 2. Fallback a ultima_calibracion + 1 año
    if (!expDate && client.ultima_calibracion && client.ultima_calibracion.length >= 10) {
        try {
            const parts = client.ultima_calibracion.slice(0, 10).split('-');
            const dStr = `${parseInt(parts[0]) + 1}-${parts[1]}-${parts[2]}`;
            const parsed = new Date(dStr + 'T00:00:00');
            if (!isNaN(parsed.getTime())) {
                expDate = parsed;
            }
        } catch(e){}
    }

    if (!expDate) {
        return {
            status: 'desconocido',
            daysRemaining: 9999,
            dateFormatted: 'Sin fecha',
            rawDate: '9999-12-31',
            badgeClass: 'bg-slate-100 text-slate-600 border-slate-200',
            label: 'Sin vencimiento',
            sublabel: 'Sin registros',
            equipment: null
        };
    }

    const diffDays = Math.round((expDate - today) / (1000 * 60 * 60 * 24));
    const year = expDate.getFullYear();
    const month = String(expDate.getMonth() + 1).padStart(2, '0');
    const day = String(expDate.getDate()).padStart(2, '0');
    const dateFormatted = `${day}/${month}/${year}`;
    const rawDate = `${year}-${month}-${day}`;

    if (diffDays < 0) {
        const daysAgo = Math.abs(diffDays);
        return {
            status: 'vencido',
            daysRemaining: diffDays,
            daysAgo: daysAgo,
            dateFormatted: dateFormatted,
            rawDate: rawDate,
            badgeClass: 'bg-rose-50 text-rose-700 border-rose-300 font-bold',
            icon: 'alert-circle',
            label: daysAgo === 0 ? 'Vence hoy' : `Vencido hace ${daysAgo}d`,
            sublabel: `Venció el ${dateFormatted}`,
            equipment: expEq
        };
    } else if (diffDays <= 60) {
        return {
            status: 'por_vencer',
            daysRemaining: diffDays,
            dateFormatted: dateFormatted,
            rawDate: rawDate,
            badgeClass: 'bg-amber-50 text-amber-800 border-amber-300 font-bold',
            icon: 'clock',
            label: diffDays === 0 ? 'Vence hoy' : `Vence en ${diffDays}d`,
            sublabel: `Vence el ${dateFormatted}`,
            equipment: expEq
        };
    } else {
        const months = Math.round(diffDays / 30.4);
        return {
            status: 'al_dia',
            daysRemaining: diffDays,
            dateFormatted: dateFormatted,
            rawDate: rawDate,
            badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-medium',
            icon: 'check-circle-2',
            label: `Al día (en ${months}m)`,
            sublabel: `Vence el ${dateFormatted}`,
            equipment: expEq
        };
    }
}

// ==========================================
// THEME MANAGER (DARK / LIGHT MODE)
// ==========================================

function initTheme() {
    try {
        const savedTheme = localStorage.getItem('metrocrm_theme');
        // Si no hay preferencia guardada, respetamos preferencia del sistema si es dark, o por defecto light
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
        applyTheme(isDark ? 'dark' : 'light', false);
    } catch (e) {
        console.warn("No se pudo inicializar tema:", e);
    }
}

function applyTheme(theme, showNotification = true) {
    const isDark = theme === 'dark';
    const htmlEl = document.documentElement;
    const btnText = document.getElementById('theme-toggle-text');
    const btnIcon = document.getElementById('theme-toggle-icon');
    const btn = document.getElementById('btn-theme-toggle');

    if (isDark) {
        htmlEl.classList.add('dark');
        try { localStorage.setItem('metrocrm_theme', 'dark'); } catch(e){}
        if (btnText) btnText.innerText = 'Modo Claro';
        if (btnIcon) {
            btnIcon.setAttribute('data-lucide', 'sun');
            btnIcon.className = 'w-3.5 h-3.5 text-amber-400';
        }
        if (btn) btn.title = 'Cambiar a Modo Claro (Ctrl+Shift+D)';
    } else {
        htmlEl.classList.remove('dark');
        try { localStorage.setItem('metrocrm_theme', 'light'); } catch(e){}
        if (btnText) btnText.innerText = 'Modo Oscuro';
        if (btnIcon) {
            btnIcon.setAttribute('data-lucide', 'moon');
            btnIcon.className = 'w-3.5 h-3.5 text-indigo-500';
        }
        if (btn) btn.title = 'Cambiar a Modo Oscuro (Ctrl+Shift+D)';
    }

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    if (showNotification && typeof showToast === 'function') {
        showToast(isDark ? 'Modo Oscuro activado 🌙' : 'Modo Claro activado ☀️');
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark', true);
}

// Initialize Application
async function initApp() {
    try {
        initTheme();
        console.log("MetroCRM Pro iniciando...");
        clients = await window.DataSync.loadInitialClients();
        interactionsHistory = window.DataSync.loadHistory();

        // Limpiar cualquier autocompletado del navegador en el buscador
        const searchInput = document.getElementById('global-search');
        if (searchInput) searchInput.value = '';
        searchQuery = '';

        updateDashboardKPIs();
        renderNicheCards();
        renderNichePills();
        renderClientsTable();
        initCampaignStudio();
        renderBitacora();
        updateTopBarStatus();
        if (window.GeminiAI) window.GeminiAI.updateStatusBadge();

        if (typeof lucide !== 'undefined') lucide.createIcons();
        console.log(`MetroCRM Pro listo. ${clients.length} clientes cargados.`);
    } catch (err) {
        console.error("Error crítico inicializando MetroCRM:", err);
    }
}

// Navigation Handler
function switchView(viewName) {
    currentView = viewName;
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white', 'shadow-sm');
        btn.classList.add('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
    });

    const activeNav = document.getElementById('nav-' + viewName);
    if (activeNav) {
        activeNav.classList.remove('text-slate-600', 'hover:text-slate-900', 'hover:bg-slate-100');
        activeNav.classList.add('bg-blue-600', 'text-white', 'shadow-sm');
    }

    const views = ['dashboard', 'pipeline', 'directorio', 'campanias', 'bitacora'];
    views.forEach(v => {
        const el = document.getElementById('view-' + v);
        if (el) el.classList.toggle('hidden', v !== viewName);
    });

    if (viewName === 'pipeline') {
        window.PipelineManager.renderKanban(clients, 'kanban-container');
    } else if (viewName === 'directorio') {
        renderClientsTable();
    } else if (viewName === 'dashboard') {
        updateDashboardKPIs();
        renderNicheCards();
    } else if (viewName === 'campanias') {
        updateCampaignPreview();
    } else if (viewName === 'bitacora') {
        renderBitacora();
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Dashboard KPIs
function updateDashboardKPIs() {
    const total = clients.length;
    const contacted = clients.filter(c => c.estado && c.estado !== 'nuevo' && c.estado !== 'Nuevo').length;
    const contactedPct = total > 0 ? Math.round((contacted * 100) / total) : 0;
    
    // Conteo de vencimientos en tiempo real
    let vencidosCount = 0;
    let porVencerCount = 0;
    let alDiaCount = 0;

    clients.forEach(c => {
        const info = getClientExpirationInfo(c);
        if (info.status === 'vencido') vencidosCount++;
        else if (info.status === 'por_vencer') porVencerCount++;
        else alDiaCount++;
    });

    const urgentesCount = vencidosCount + porVencerCount;

    const elTotal = document.getElementById('kpi-total-clients');
    const elContacted = document.getElementById('kpi-contacted');
    const elContactedPct = document.getElementById('kpi-contacted-pct');
    const elRecalib = document.getElementById('kpi-recalib-count');
    const badgeTotal = document.getElementById('badge-total-clients');

    if (elTotal) elTotal.innerText = total;
    if (elContacted) elContacted.innerText = contacted;
    if (elContactedPct) elContactedPct.innerText = `${contactedPct}% del total`;
    if (elRecalib) elRecalib.innerText = urgentesCount;
    if (badgeTotal) badgeTotal.innerText = total;

    // Actualizar contadores de las píldoras de vencimiento en Directorio
    const elExpTodos = document.getElementById('count-exp-todos');
    const elExpUrgentes = document.getElementById('count-exp-urgentes');
    const elExpVencidos = document.getElementById('count-exp-vencidos');
    const elExpPorVencer = document.getElementById('count-exp-por-vencer');
    const elExpAlDia = document.getElementById('count-exp-al-dia');

    if (elExpTodos) elExpTodos.innerText = total;
    if (elExpUrgentes) elExpUrgentes.innerText = urgentesCount;
    if (elExpVencidos) elExpVencidos.innerText = vencidosCount;
    if (elExpPorVencer) elExpPorVencer.innerText = porVencerCount;
    if (elExpAlDia) elExpAlDia.innerText = alDiaCount;
}

function renderNicheCards() {
    const container = document.getElementById('niche-cards-container');
    if (!container) return;

    const counts = { hs: 0, farma: 0, metal: 0, end: 0, gas: 0, gral: 0 };
    clients.forEach(c => {
        const nid = c.nicho_id || 'gral';
        if (counts[nid] !== undefined) counts[nid]++;
        else counts['gral']++;
    });

    let html = '';
    Object.values(window.NICHES).forEach(meta => {
        const count = counts[meta.id] || 0;
        html += `
        <div onclick="window.filterByNicheAndGoDirectorio('${meta.id}')" 
             class="glass-card p-5 rounded-2xl cursor-pointer border border-slate-200 hover:border-blue-500 transition group flex flex-col justify-between bg-white shadow-xs hover:shadow-md">
            <div>
                <div class="flex items-center justify-between mb-3">
                    <span class="text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1.5 ${meta.badgeClass}">
                        <i data-lucide="${meta.icon}" class="w-3.5 h-3.5"></i>
                        <span>${meta.short}</span>
                    </span>
                    <span class="text-2xl font-black text-slate-900 font-mono">${count}</span>
                </div>
                <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition mb-1.5">
                    ${meta.name}
                </h3>
                <p class="text-[12px] text-slate-600 leading-snug line-clamp-2">
                    ${meta.pitch}
                </p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-bold">
                <span>Ver clientes y oportunidades</span>
                <i data-lucide="arrow-right" class="w-4 h-4 transform group-hover:translate-x-1 transition"></i>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function filterByNicheAndGoDirectorio(nicheId) {
    selectedNicheFilter = nicheId;
    renderNichePills();
    switchView('directorio');
}

// 360 Directory Table
function renderNichePills() {
    const container = document.getElementById('niche-pills-container');
    if (!container) return;

    let html = `
    <button onclick="window.handleNichePillClick('todos')" 
            class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${selectedNicheFilter === 'todos' ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}">
        Todos (${clients.length})
    </button>
    `;

    Object.values(window.NICHES).forEach(meta => {
        const count = clients.filter(c => (c.nicho_id || 'gral') === meta.id).length;
        const isActive = selectedNicheFilter === meta.id;
        html += `
        <button onclick="window.handleNichePillClick('${meta.id}')" 
                class="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'}">
            <span>${meta.short}</span>
            <span class="text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'} font-mono">${count}</span>
        </button>
        `;
    });

    container.innerHTML = html;
}

function handleNichePillClick(nicheId) {
    selectedNicheFilter = nicheId;
    renderNichePills();
    renderClientsTable();
}

function handleSearch(val) {
    searchQuery = (val || '').toLowerCase().trim();
    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn) clearBtn.classList.toggle('hidden', searchQuery === '');
    renderClientsTable();
}

function clearSearch() {
    const input = document.getElementById('global-search');
    if (input) input.value = '';
    searchQuery = '';
    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn) clearBtn.classList.add('hidden');
    renderClientsTable();
}

function sortClients(clientList, sortOrder) {
    return clientList.sort((a, b) => {
        const expA = getClientExpirationInfo(a);
        const expB = getClientExpirationInfo(b);

        switch (sortOrder) {
            case 'vencimiento_urgente':
                // Los días negativos (vencidos) o más pequeños primero
                return expA.daysRemaining - expB.daysRemaining;
            case 'vencimiento_lejano':
                return expB.daysRemaining - expA.daysRemaining;
            case 'recientes':
                return (b.ultima_calibracion || '').localeCompare(a.ultima_calibracion || '');
            case 'antiguos':
                return (a.ultima_calibracion || '').localeCompare(b.ultima_calibracion || '');
            case 'empresa_asc':
                return (a.empresa || a.nombre || '').localeCompare(b.empresa || b.nombre || '');
            case 'equipos_desc':
                const eqA = a.equipos ? a.equipos.length : (a.total_calibraciones || 1);
                const eqB = b.equipos ? b.equipos.length : (b.total_calibraciones || 1);
                return eqB - eqA;
            case 'scoring_desc':
                const scoreOrder = { A: 1, B: 2, C: 3 };
                return (scoreOrder[a.scoring || 'C'] || 3) - (scoreOrder[b.scoring || 'C'] || 3);
            default:
                return expA.daysRemaining - expB.daysRemaining;
        }
    });
}

function getFilteredClients() {
    const list = clients.filter(c => {
        const nid = c.nicho_id || 'gral';
        if (selectedNicheFilter !== 'todos' && nid !== selectedNicheFilter) return false;
        if (selectedStatusFilter !== 'todos' && window.PipelineManager.normalizeStage(c.estado) !== selectedStatusFilter) return false;
        if (selectedScoringFilter !== 'todos' && (c.scoring || 'C') !== selectedScoringFilter) return false;

        // Filtro de vencimiento
        if (selectedExpirationFilter !== 'todos') {
            const exp = getClientExpirationInfo(c);
            if (selectedExpirationFilter === 'urgentes') {
                if (exp.status !== 'vencido' && exp.status !== 'por_vencer') return false;
            } else if (selectedExpirationFilter === 'vencidos') {
                if (exp.status !== 'vencido') return false;
            } else if (selectedExpirationFilter === 'por_vencer') {
                if (exp.status !== 'por_vencer') return false;
            } else if (selectedExpirationFilter === 'al_dia') {
                if (exp.status !== 'al_dia') return false;
            }
        }

        if (searchQuery) {
            const name = (c.nombre || '').toLowerCase();
            const emp = (c.empresa || '').toLowerCase();
            const contacts = (c.contactos || []).join(' ').toLowerCase();
            const emails = (c.emails || []).join(' ').toLowerCase();
            const cats = (c.categorias || []).join(' ').toLowerCase();
            const cuit = (c.cuit || '').toLowerCase();

            return name.includes(searchQuery) ||
                   emp.includes(searchQuery) ||
                   contacts.includes(searchQuery) ||
                   emails.includes(searchQuery) ||
                   cats.includes(searchQuery) ||
                   cuit.includes(searchQuery);
        }
        return true;
    });

    return sortClients(list, currentSortOrder);
}

function renderClientsTable() {
    const tbody = document.getElementById('clients-table-body');
    const countDiv = document.getElementById('table-results-count');
    if (!tbody) return;

    const filtered = getFilteredClients();
    if (countDiv) countDiv.innerText = `Mostrando ${filtered.length} de ${clients.length} clientes`;

    if (filtered.length === 0) {
        tbody.innerHTML = `
        <tr>
            <td colspan="7" class="px-6 py-12 text-center text-slate-500">
                <div class="max-w-md mx-auto space-y-3">
                    <div class="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                        <i data-lucide="search-x" class="w-6 h-6"></i>
                    </div>
                    <p class="text-sm font-bold text-slate-800">No se encontraron clientes con los filtros aplicados.</p>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        ${searchQuery ? `Hay una búsqueda de texto activa: <span class="font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">"${searchQuery}"</span>.<br>` : ''}
                        ${selectedNicheFilter !== 'todos' ? `Está seleccionado el nicho: <span class="font-bold text-indigo-700">${selectedNicheFilter}</span>.<br>` : ''}
                        ${selectedExpirationFilter !== 'todos' ? `Filtro de vencimiento: <span class="font-bold text-rose-700">${selectedExpirationFilter}</span>.` : ''}
                    </p>
                    <div class="pt-2">
                        <button onclick="window.resetAllFilters()" 
                                class="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer inline-flex items-center gap-2">
                            <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                            <span>Restablecer Filtros y Ver los 271 Clientes</span>
                        </button>
                    </div>
                </div>
            </td>
        </tr>
        `;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    let html = '';
    filtered.slice(0, 100).forEach(c => {
        const nichoMeta = window.NICHES[c.nicho_id || 'gral'] || window.NICHES['gral'];
        const contacto = (c.contactos && c.contactos.length > 0) ? c.contactos[0] : '-';
        const email = (c.emails && c.emails.length > 0) ? c.emails[0] : 'Sin email';
        const totalEq = c.equipos ? c.equipos.length : (c.total_calibraciones || 1);
        const stage = window.PIPELINE_STAGES.find(s => s.id === window.PipelineManager.normalizeStage(c.estado)) || window.PIPELINE_STAGES[0];
        const expInfo = getClientExpirationInfo(c);

        const scoringBadge = c.scoring === 'A' ? 'bg-amber-100 text-amber-900 border-amber-300' :
                             c.scoring === 'B' ? 'bg-blue-100 text-blue-900 border-blue-300' :
                             'bg-slate-100 text-slate-700 border-slate-200';

        html += `
        <tr class="hover:bg-blue-50/40 cursor-pointer transition border-b border-slate-100" onclick="window.openClientDrawer('${c.id}')">
            <!-- Empresa & CUIT -->
            <td class="px-4 py-3.5">
                <div class="flex items-center gap-2.5">
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded border ${scoringBadge}">
                        Tier ${c.scoring || 'C'}
                    </span>
                    <div>
                        <div class="font-bold text-slate-900 text-xs">${c.empresa || c.nombre}</div>
                        <div class="text-[10px] font-mono text-slate-500">${c.cuit ? 'CUIT: ' + c.cuit : c.id}</div>
                    </div>
                </div>
            </td>

            <!-- Contacto & Email -->
            <td class="px-4 py-3.5">
                <div class="text-xs font-semibold text-slate-800">${contacto}</div>
                <div class="text-[11px] font-mono text-blue-600 font-medium">${email}</div>
            </td>

            <!-- Nicho -->
            <td class="px-4 py-3.5">
                <span class="text-[11px] px-2.5 py-0.5 rounded-full font-bold ${nichoMeta.badgeClass}">
                    ${nichoMeta.short}
                </span>
            </td>

            <!-- Instrumentos -->
            <td class="px-4 py-3.5">
                <div class="text-xs font-semibold text-slate-900 flex items-center gap-1.5">
                    <span class="font-mono text-blue-700 font-bold">${totalEq} eq.</span>
                    <span class="text-[11px] text-slate-600 truncate max-w-[170px]">
                        ${(c.categorias || []).slice(0, 2).join(', ')}
                    </span>
                </div>
                <div class="text-[10px] text-slate-400 font-mono mt-0.5">
                    Últ: ${c.ultima_calibracion ? c.ultima_calibracion.slice(0, 10) : 'N/A'}
                </div>
            </td>

            <!-- Semáforo de Vencimiento -->
            <td class="px-4 py-3.5">
                <div class="flex items-center gap-1.5">
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] border ${expInfo.badgeClass}">
                        ${expInfo.status === 'vencido' ? '<span class="w-2 h-2 rounded-full bg-rose-500"></span>' : 
                          expInfo.status === 'por_vencer' ? '<span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>' : 
                          '<span class="w-2 h-2 rounded-full bg-emerald-500"></span>'}
                        <span>${expInfo.label}</span>
                    </span>
                </div>
                <div class="text-[10px] text-slate-500 font-mono mt-1 flex items-center gap-1">
                    <i data-lucide="calendar" class="w-3 h-3 text-slate-400"></i>
                    <span>${expInfo.sublabel}</span>
                </div>
            </td>

            <!-- Estado Comercial -->
            <td class="px-4 py-3.5">
                <span class="text-[10px] px-2.5 py-0.5 rounded-full font-bold border ${stage.badgeClass}">
                    ${stage.name}
                </span>
            </td>

            <!-- Acciones Rápidas -->
            <td class="px-4 py-3.5 text-right" onclick="event.stopPropagation()">
                <div class="flex items-center justify-end gap-1.5">
                    ${expInfo.status === 'vencido' || expInfo.status === 'por_vencer' ? `
                    <button onclick="window.prepareEmailForClient('${c.id}', 'recalibracion_anual')" 
                            title="Enviar Recordatorio de Vencimiento"
                            class="px-2.5 py-1.5 ${expInfo.status === 'vencido' ? 'bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white border-rose-300' : 'bg-amber-50 hover:bg-amber-600 text-amber-800 hover:text-white border-amber-300'} rounded-lg border transition shadow-2xs text-xs font-bold flex items-center gap-1.5">
                        <i data-lucide="bell-ring" class="w-3.5 h-3.5"></i>
                        <span class="hidden xl:inline">${expInfo.status === 'vencido' ? 'Aviso Vencido' : 'Recordar'}</span>
                    </button>
                    ` : `
                    <button onclick="window.prepareEmailForClient('${c.id}')" 
                            title="Preparar Email"
                            class="p-2 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white rounded-lg border border-blue-200 transition shadow-2xs">
                        <i data-lucide="mail" class="w-3.5 h-3.5"></i>
                    </button>
                    `}
                    <button onclick="window.openClientDrawer('${c.id}')" 
                            title="Ver Ficha 360° & Investigar"
                            class="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition border border-slate-200 shadow-2xs">
                        <i data-lucide="eye" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            </td>
        </tr>
        `;
    });

    tbody.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// 360 Drawer Controller
function openClientDrawer(clientId) {
    selectedClient = clients.find(c => c.id === clientId);
    if (!selectedClient) return;

    const drawer = document.getElementById('client-drawer');
    if (!drawer) return;

    const nichoMeta = window.NICHES[selectedClient.nicho_id || 'gral'] || window.NICHES['gral'];

    // Fill Drawer Header
    document.getElementById('drawer-client-id').innerText = selectedClient.id;
    document.getElementById('drawer-client-name').innerText = selectedClient.empresa || selectedClient.nombre;
    document.getElementById('drawer-client-empresa').innerText = selectedClient.contactos ? selectedClient.contactos.join(', ') : '';

    const badgeNicho = document.getElementById('drawer-nicho-badge');
    badgeNicho.className = `text-xs px-2.5 py-0.5 rounded-full font-bold ${nichoMeta.badgeClass}`;
    badgeNicho.innerText = nichoMeta.name;

    // Contact Details
    document.getElementById('drawer-contacts').innerText = selectedClient.contactos ? selectedClient.contactos.join(', ') : 'No especificado';
    document.getElementById('drawer-emails').innerText = selectedClient.emails ? selectedClient.emails.join(', ') : 'Sin email';

    // Empresa and Web inputs
    const empresaInput = document.getElementById('drawer-empresa-input');
    if (empresaInput) empresaInput.value = selectedClient.empresa || selectedClient.nombre || '';

    const webInput = document.getElementById('drawer-web-input');
    const webBtn = document.getElementById('btn-drawer-web-link');
    if (webInput) webInput.value = selectedClient.web || '';
    if (webBtn) {
        if (selectedClient.web) {
            let url = selectedClient.web.trim();
            if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
            webBtn.href = url;
            webBtn.classList.remove('hidden');
        } else {
            webBtn.classList.add('hidden');
        }
    }

    // CUIT input
    const cuitInput = document.getElementById('drawer-cuit-input');
    if (cuitInput) cuitInput.value = selectedClient.cuit || '';

    // Status & Niche Selects
    document.getElementById('drawer-status-select').value = window.PipelineManager.normalizeStage(selectedClient.estado);
    document.getElementById('drawer-nicho-select').value = selectedClient.nicho_id || 'gral';
    document.getElementById('drawer-scoring-select').value = selectedClient.scoring || 'C';

    // Research URLs
    const googleBtn = document.getElementById('btn-research-google');
    const cuitBtn = document.getElementById('btn-research-cuit');
    const linkedinBtn = document.getElementById('btn-research-linkedin');
    const mapsBtn = document.getElementById('btn-research-maps');

    const empName = selectedClient.empresa || selectedClient.nombre;
    if (googleBtn) googleBtn.href = window.ResearchEngine.getGoogleSearchUrl(empName);
    if (cuitBtn) cuitBtn.href = window.ResearchEngine.getCuitOnlineUrl(selectedClient.cuit || empName);
    if (linkedinBtn) linkedinBtn.href = window.ResearchEngine.getLinkedInCompanyUrl(empName);
    if (mapsBtn) mapsBtn.href = window.ResearchEngine.getGoogleMapsUrl(empName);

    // AI Pitch & Opportunities
    document.getElementById('drawer-pitch').innerText = `"${selectedClient.pitch || nichoMeta.pitch}"`;
    const oppList = document.getElementById('drawer-oportunidades');
    oppList.innerHTML = (selectedClient.oportunidades || nichoMeta.oportunidades || []).map(o => `<li>${o}</li>`).join('');

    // Instruments List
    const instList = document.getElementById('drawer-instruments-list');
    document.getElementById('drawer-total-calibs').innerText = `${selectedClient.equipos ? selectedClient.equipos.length : 0} equipos`;
    
    if (!selectedClient.equipos || selectedClient.equipos.length === 0) {
        instList.innerHTML = '<p class="text-xs text-slate-500 italic">No hay equipos registrados para este cliente.</p>';
    } else {
        instList.innerHTML = selectedClient.equipos.map(eq => {
            let eqBadgeClass = 'bg-slate-100 text-slate-700 border-slate-300';
            let eqVenceLabel = eq.fecha_vencimiento ? `Vence: ${eq.fecha_vencimiento}` : '12 meses';

            if (eq.fecha_vencimiento && eq.fecha_vencimiento.length >= 10) {
                try {
                    const expD = new Date(eq.fecha_vencimiento.slice(0, 10) + 'T00:00:00');
                    if (!isNaN(expD.getTime())) {
                        const nowD = new Date();
                        nowD.setHours(0, 0, 0, 0);
                        const diff = Math.round((expD - nowD) / (1000 * 60 * 60 * 24));
                        if (diff < 0) {
                            eqBadgeClass = 'bg-rose-100 text-rose-800 border-rose-300 font-bold';
                            eqVenceLabel = `Vencido (${Math.abs(diff)}d) • ${eq.fecha_vencimiento}`;
                        } else if (diff <= 60) {
                            eqBadgeClass = 'bg-amber-100 text-amber-900 border-amber-300 font-bold';
                            eqVenceLabel = `Vence en ${diff}d • ${eq.fecha_vencimiento}`;
                        } else {
                            eqBadgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-300 font-medium';
                            eqVenceLabel = `Al día • Vence: ${eq.fecha_vencimiento}`;
                        }
                    }
                } catch(e) {}
            }

            return `
            <div class="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-xs shadow-2xs">
                <div>
                    <div class="font-bold text-slate-900 flex items-center gap-2">
                        <span>${eq.instrumento}</span>
                        ${eq.marca ? `<span class="text-[11px] text-slate-600 font-normal">(${eq.marca} ${eq.modelo || ''})</span>` : ''}
                    </div>
                    <div class="text-[11px] font-mono text-blue-700 font-medium mt-0.5">
                        Cert: ${eq.certificado || 'Sin Cert.'} ${eq.serie ? `• S/N: ${eq.serie}` : ''}
                    </div>
                </div>
                <div class="text-right">
                    <span class="text-[10px] px-2 py-0.5 rounded-full border font-mono ${eqBadgeClass}">
                        ${eqVenceLabel}
                    </span>
                    <div class="text-[10px] text-slate-500 font-mono mt-1">
                        Calib: ${eq.fecha_calibracion || eq.timestamp_solicitud || ''}
                    </div>
                </div>
            </div>
            `;
        }).join('');
    }

    // Commercial Notes
    renderDrawerNotes();

    drawer.classList.remove('hidden');
    drawer.classList.add('flex');
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeClientDrawer() {
    const drawer = document.getElementById('client-drawer');
    if (drawer) {
        drawer.classList.add('hidden');
        drawer.classList.remove('flex');
    }
}

function updateClientDrawerData() {
    if (!selectedClient) return;

    const empresaVal = document.getElementById('drawer-empresa-input')?.value.trim();
    const webVal = document.getElementById('drawer-web-input')?.value.trim();
    const cuitVal = document.getElementById('drawer-cuit-input')?.value.trim();
    const statusVal = document.getElementById('drawer-status-select')?.value;
    const nichoVal = document.getElementById('drawer-nicho-select')?.value;
    const scoringVal = document.getElementById('drawer-scoring-select')?.value;

    if (empresaVal) {
        selectedClient.empresa = empresaVal;
        const nameEl = document.getElementById('drawer-client-name');
        if (nameEl) nameEl.innerText = empresaVal;
    }
    if (webVal !== undefined) {
        selectedClient.web = webVal;
        const webBtn = document.getElementById('btn-drawer-web-link');
        if (webBtn) {
            if (webVal) {
                let url = webVal;
                if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
                webBtn.href = url;
                webBtn.classList.remove('hidden');
            } else {
                webBtn.classList.add('hidden');
            }
        }
    }
    if (cuitVal !== undefined) selectedClient.cuit = cuitVal;
    if (statusVal) selectedClient.estado = statusVal;
    if (scoringVal) selectedClient.scoring = scoringVal;

    if (nichoVal) {
        selectedClient.nicho_id = nichoVal;
        const ninfo = window.NICHES[nichoVal];
        if (ninfo) {
            selectedClient.nicho = ninfo.name;
            selectedClient.nicho_short = ninfo.short;
            selectedClient.pitch = ninfo.pitch;
            selectedClient.oportunidades = ninfo.oportunidades;

            const badgeNicho = document.getElementById('drawer-nicho-badge');
            if (badgeNicho) {
                badgeNicho.className = `text-xs px-2.5 py-0.5 rounded-full font-bold ${ninfo.badgeClass}`;
                badgeNicho.innerText = ninfo.name;
            }
            const pitchEl = document.getElementById('drawer-pitch');
            if (pitchEl) pitchEl.innerText = `"${selectedClient.pitch || ninfo.pitch}"`;
            const oppList = document.getElementById('drawer-oportunidades');
            if (oppList) {
                oppList.innerHTML = (selectedClient.oportunidades || ninfo.oportunidades || []).map(o => `<li>${o}</li>`).join('');
            }
        }
    }

    // Refresh research links with updated company name
    const empName = selectedClient.empresa || selectedClient.nombre;
    const googleBtn = document.getElementById('btn-research-google');
    const cuitBtn = document.getElementById('btn-research-cuit');
    const linkedinBtn = document.getElementById('btn-research-linkedin');
    const mapsBtn = document.getElementById('btn-research-maps');

    if (googleBtn) googleBtn.href = window.ResearchEngine.getGoogleSearchUrl(empName);
    if (cuitBtn) cuitBtn.href = window.ResearchEngine.getCuitOnlineUrl(selectedClient.cuit || empName);
    if (linkedinBtn) linkedinBtn.href = window.ResearchEngine.getLinkedInCompanyUrl(empName);
    if (mapsBtn) mapsBtn.href = window.ResearchEngine.getGoogleMapsUrl(empName);

    window.DataSync.saveClients(clients);
    updateDashboardKPIs();
    renderClientsTable();
    if (currentView === 'pipeline') window.PipelineManager.renderKanban(clients, 'kanban-container');

    showToast("Ficha del cliente actualizada.");
}

function moveClientStage(clientId, newStage) {
    const client = clients.find(c => c.id === clientId);
    if (!client) return;

    client.estado = newStage;
    window.DataSync.saveClients(clients);
    logInteraction(clientId, client.empresa || client.nombre, 'Cambio de Estado', `Movido a la etapa: ${newStage}`);
    updateDashboardKPIs();
    if (currentView === 'pipeline') window.PipelineManager.renderKanban(clients, 'kanban-container');
    showToast(`Cliente movido a: ${newStage}`);
}

// Notes System
function renderDrawerNotes() {
    const list = document.getElementById('drawer-notes-list');
    if (!list || !selectedClient) return;

    const notes = selectedClient.notas || [];
    if (notes.length === 0) {
        list.innerHTML = '<p class="text-xs text-slate-500 italic">No hay notas registradas.</p>';
        return;
    }

    list.innerHTML = notes.map(n => `
        <div class="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800">
            <div class="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                <span class="font-medium">${n.fecha}</span>
            </div>
            <p>${n.texto}</p>
        </div>
    `).join('');
}

function addDrawerNote() {
    const input = document.getElementById('drawer-new-note');
    if (!input || !input.value.trim() || !selectedClient) return;

    if (!selectedClient.notas) selectedClient.notas = [];
    const noteObj = {
        id: 'NOTE-' + Date.now(),
        fecha: new Date().toLocaleString('es-AR', { dateStyle: 'short', timeStyle: 'short' }),
        texto: input.value.trim()
    };
    selectedClient.notas.unshift(noteObj);
    input.value = '';

    window.DataSync.saveClients(clients);
    logInteraction(selectedClient.id, selectedClient.empresa || selectedClient.nombre, 'Nota', noteObj.texto);
    renderDrawerNotes();
    showToast("Nota guardada en la bitácora.");
}

// Email Studio & Campaigns
function initCampaignStudio() {
    const tplSelect = document.getElementById('campaign-template-select');
    if (!tplSelect) return;

    tplSelect.innerHTML = Object.values(window.CRM_TEMPLATES).map(tpl => `
        <option value="${tpl.id}">${tpl.nombre} (${tpl.nicho.toUpperCase()})</option>
    `).join('');

    tplSelect.value = 'onboarding_ml';
    handleTemplateChange('onboarding_ml');
}

function handleTemplateChange(templateId) {
    const tpl = window.CRM_TEMPLATES[templateId];
    if (!tpl) return;

    const subInput = document.getElementById('campaign-subject-input');
    const bodyInput = document.getElementById('campaign-body-input');

    if (subInput) subInput.value = tpl.asunto;
    if (bodyInput) bodyInput.value = tpl.cuerpo;

    updateCampaignPreview();
}

function prepareEmailForClient(clientId, templateId = null) {
    const client = clients.find(c => c.id === clientId);
    if (!client) return;

    currentCampaignClient = client;
    switchView('campanias');

    let chosenTpl = templateId;
    if (!chosenTpl) {
        const expInfo = getClientExpirationInfo(client);
        if (expInfo.status === 'vencido' || expInfo.status === 'por_vencer') {
            chosenTpl = 'recalibracion_anual';
        } else {
            chosenTpl = Object.keys(window.CRM_TEMPLATES).find(k => k.startsWith(client.nicho_id)) || 'onboarding_ml';
        }
    }
    
    const tplSelect = document.getElementById('campaign-template-select');
    if (tplSelect) {
        tplSelect.value = chosenTpl;
        handleTemplateChange(chosenTpl);
    }
}

function updateCampaignPreview() {
    const client = currentCampaignClient || (clients.length > 0 ? clients[0] : null);
    if (!client) return;

    const subRaw = document.getElementById('campaign-subject-input')?.value || '';
    const bodyRaw = document.getElementById('campaign-body-input')?.value || '';

    const subFinal = window.EmailStudio.interpolate(subRaw, client);
    const bodyFinal = window.EmailStudio.interpolate(bodyRaw, client);

    const toEl = document.getElementById('preview-to');
    const subEl = document.getElementById('preview-subject');
    const bodyEl = document.getElementById('preview-body');

    if (toEl) toEl.innerText = (client.emails && client.emails[0]) ? `${client.contactos[0] || client.empresa} <${client.emails[0]}>` : 'Sin email registrado';
    if (subEl) subEl.innerText = subFinal;
    if (bodyEl) bodyEl.innerText = bodyFinal;
}

function dispatchOutlookDesktop() {
    const client = currentCampaignClient || clients[0];
    if (!client || !client.emails || !client.emails[0]) {
        alert("Este cliente no tiene correo electrónico registrado.");
        return;
    }
    const subject = document.getElementById('preview-subject')?.innerText || '';
    const body = document.getElementById('preview-body')?.innerText || '';

    window.EmailStudio.openOutlookDesktop(client.emails[0], subject, body);
    logInteraction(client.id, client.empresa || client.nombre, 'Email Enviado', `Abierto en Outlook: "${subject}"`);
    showToast("Abriendo correo en Microsoft Outlook...");
}

function dispatchGmailWeb() {
    const client = currentCampaignClient || clients[0];
    if (!client || !client.emails || !client.emails[0]) {
        alert("Este cliente no tiene correo electrónico registrado.");
        return;
    }
    const subject = document.getElementById('preview-subject')?.innerText || '';
    const body = document.getElementById('preview-body')?.innerText || '';

    window.EmailStudio.openGmailWeb(client.emails[0], subject, body);
    logInteraction(client.id, client.empresa || client.nombre, 'Email Enviado', `Abierto en Gmail: "${subject}"`);
    showToast("Abriendo en Gmail Web...");
}

async function copyEmailToClipboard() {
    const subject = document.getElementById('preview-subject')?.innerText || '';
    const body = document.getElementById('preview-body')?.innerText || '';
    await window.EmailStudio.copyToClipboard(subject, body);
    showToast("¡Asunto y cuerpo copiados al portapapeles!");
}

// Activity Log & Bitácora
function logInteraction(clientId, clientName, type, detail) {
    const entry = {
        id: 'INT-' + Date.now(),
        clientId,
        clientName,
        type,
        detail,
        timestamp: new Date().toLocaleString('es-AR', { dateStyle: 'short', timeStyle: 'short' })
    };
    interactionsHistory.unshift(entry);
    window.DataSync.saveHistory(interactionsHistory);
    renderBitacora();
}

function renderBitacora() {
    const list = document.getElementById('bitacora-list');
    const badge = document.getElementById('badge-interactions-count');
    if (badge) badge.innerText = interactionsHistory.length;
    if (!list) return;

    if (interactionsHistory.length === 0) {
        list.innerHTML = '<p class="text-xs text-slate-500 italic py-6 text-center">No hay interacciones comerciales registradas en la bitácora.</p>';
        return;
    }

    list.innerHTML = interactionsHistory.slice(0, 50).map(i => `
        <div class="p-3 bg-white border border-slate-200 rounded-xl flex items-start justify-between gap-3 text-xs shadow-2xs">
            <div class="space-y-1">
                <div class="flex items-center gap-2">
                    <span class="font-bold text-slate-900">${i.clientName}</span>
                    <span class="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 font-bold">
                        ${i.type}
                    </span>
                </div>
                <p class="text-slate-700 text-[11px]">${i.detail}</p>
            </div>
            <span class="text-[10px] font-mono text-slate-500 shrink-0 font-medium">${i.timestamp}</span>
        </div>
    `).join('');
}

function clearBitacora() {
    if (confirm("¿Estás seguro de vaciar el historial de la bitácora?")) {
        interactionsHistory = [];
        window.DataSync.saveHistory(interactionsHistory);
        renderBitacora();
        showToast("Bitácora reiniciada.");
    }
}

// Top Bar Sync Action
async function handleSyncFirestore() {
    const syncBtn = document.getElementById('btn-sync-firestore');
    if (syncBtn) {
        syncBtn.disabled = true;
        syncBtn.classList.add('animate-pulse');
        syncBtn.innerHTML = `<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Sincronizando...`;
    }

    try {
        const res = await window.DataSync.syncFromFirestore(clients);
        updateDashboardKPIs();
        renderNicheCards();
        renderClientsTable();
        if (currentView === 'pipeline') window.PipelineManager.renderKanban(clients, 'kanban-container');
        showToast(`¡Sincronización completa! Total clientes: ${res.totalClients} (${res.newLeads} nuevos leads).`);
    } catch (err) {
        console.warn("Fallo sync Firestore:", err);
        showToast("Sincronización offline. Mostrando datos locales consolidados.");
    } finally {
        if (syncBtn) {
            syncBtn.disabled = false;
            syncBtn.classList.remove('animate-pulse');
            syncBtn.innerHTML = `<i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> Sincronizar Firestore`;
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }
    }
}

function updateTopBarStatus() {
    const timeEl = document.getElementById('header-time');
    if (timeEl) {
        timeEl.innerText = new Date().toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
    }
}

function showToast(msg) {
    const toast = document.getElementById('crm-toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3200);
}

// Global Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeClientDrawer();
    }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'D' || e.key === 'd')) {
        e.preventDefault();
        toggleTheme();
    }
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        document.getElementById('global-search')?.focus();
    }
});

// Auto-run on ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

window.initTheme = initTheme;
window.applyTheme = applyTheme;
window.toggleTheme = toggleTheme;
window.switchView = switchView;
window.handleSearch = handleSearch;
window.clearSearch = clearSearch;
window.handleNichePillClick = handleNichePillClick;
window.filterByNicheAndGoDirectorio = filterByNicheAndGoDirectorio;
window.openClientDrawer = openClientDrawer;
window.closeClientDrawer = closeClientDrawer;
window.updateClientDrawerData = updateClientDrawerData;
window.moveClientStage = moveClientStage;
window.addDrawerNote = addDrawerNote;
window.prepareEmailForClient = prepareEmailForClient;
window.handleTemplateChange = handleTemplateChange;
window.dispatchOutlookDesktop = dispatchOutlookDesktop;
window.dispatchGmailWeb = dispatchGmailWeb;
window.copyEmailToClipboard = copyEmailToClipboard;
window.clearBitacora = clearBitacora;
window.handleSyncFirestore = handleSyncFirestore;
window.exportAllCSV = () => window.DataSync.exportToCSV(clients);

// ==========================================
// GEMINI AI INTEGRATION HANDLERS
// ==========================================

function openSettingsModal() {
    const modal = document.getElementById('settings-modal');
    const input = document.getElementById('setting-gemini-key');
    if (input && window.GeminiAI) input.value = window.GeminiAI.getApiKey();
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        modal.style.display = 'flex';
    }
}

function closeSettingsModal() {
    const modal = document.getElementById('settings-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        modal.style.display = 'none';
    }
}

function saveSettingsModal() {
    const input = document.getElementById('setting-gemini-key');
    if (input) {
        window.GeminiAI.setApiKey(input.value.trim());
        showToast(window.GeminiAI.hasApiKey() ? "API Key de Gemini guardada." : "API Key eliminada.");
    }
    closeSettingsModal();
}

async function investigateWithGemini() {
    if (!selectedClient) return;
    if (!window.GeminiAI.hasApiKey()) {
        openSettingsModal();
        return;
    }

    const btn = document.getElementById('btn-ai-investigate');
    const origHtml = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Analizando con IA...`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    try {
        const result = await window.GeminiAI.investigateClient(selectedClient);
        
        if (result.nicho_id && window.NICHES[result.nicho_id]) {
            selectedClient.nicho_id = result.nicho_id;
            selectedClient.nicho = window.NICHES[result.nicho_id].name;
            selectedClient.nicho_short = window.NICHES[result.nicho_id].short;
        }
        if (result.scoring) selectedClient.scoring = result.scoring;
        if (result.pitch_personalizado) selectedClient.pitch = result.pitch_personalizado;
        if (result.oportunidades && Array.isArray(result.oportunidades)) selectedClient.oportunidades = result.oportunidades;

        if (!selectedClient.notas) selectedClient.notas = [];
        selectedClient.notas.unshift({
            id: 'NOTE-' + Date.now(),
            fecha: new Date().toLocaleString('es-AR', { dateStyle: 'short', timeStyle: 'short' }),
            texto: `✨ [Investigación IA]: ${result.rubro_detalle || ''} | Perfil: ${result.tipo_cliente || ''}`
        });

        window.DataSync.saveClients(clients);
        openClientDrawer(selectedClient.id);
        renderClientsTable();
        updateDashboardKPIs();
        showToast("¡Investigación con IA completada exitosamente!");
    } catch (err) {
        console.error("Error investigando con Gemini:", err);
        alert(err.message || "Error al conectar con la API de Gemini.");
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = origHtml;
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }
    }
}

async function generateEmailWithGemini(tone = 'profesional') {
    const client = currentCampaignClient || (clients.length > 0 ? clients[0] : null);
    if (!client) {
        alert("Selecciona un cliente para redactar el correo.");
        return;
    }
    if (!window.GeminiAI.hasApiKey()) {
        openSettingsModal();
        return;
    }

    const btn = document.getElementById('btn-ai-compose');
    const origHtml = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Redactando con IA...`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    try {
        const result = await window.GeminiAI.generateCustomEmail(client, tone);
        const subInput = document.getElementById('campaign-subject-input');
        const bodyInput = document.getElementById('campaign-body-input');

        if (subInput) subInput.value = result.subject || subInput.value;
        if (bodyInput) bodyInput.value = result.body || bodyInput.value;

        updateCampaignPreview();
        showToast("¡Email personalizado redactado con Gemini IA!");
    } catch (err) {
        console.error("Error redactando con Gemini:", err);
        alert(err.message || "Error al conectar con la API de Gemini.");
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = origHtml;
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }
    }
}

async function processNoteWithGemini() {
    const input = document.getElementById('drawer-new-note');
    if (!input || !input.value.trim() || !selectedClient) {
        alert("Escribe una nota antes de procesarla con IA.");
        return;
    }
    if (!window.GeminiAI.hasApiKey()) {
        openSettingsModal();
        return;
    }

    const rawText = input.value.trim();
    const btn = document.getElementById('btn-ai-process-note');
    const origHtml = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i>`;
    }

    try {
        const result = await window.GeminiAI.processNoteToTask(rawText);
        if (!selectedClient.notas) selectedClient.notas = [];
        
        selectedClient.notas.unshift({
            id: 'NOTE-' + Date.now(),
            fecha: new Date().toLocaleString('es-AR', { dateStyle: 'short', timeStyle: 'short' }),
            texto: `✨ ${result.cleanNote || rawText}${result.nextAction ? ` [Próxima Acción: ${result.nextAction}]` : ''}`
        });

        if (result.suggestedStage) {
            selectedClient.estado = result.suggestedStage;
            document.getElementById('drawer-status-select').value = result.suggestedStage;
        }

        input.value = '';
        window.DataSync.saveClients(clients);
        renderDrawerNotes();
        renderClientsTable();
        updateDashboardKPIs();
        showToast("¡Nota procesada y clasificada con IA!");
    } catch (err) {
        console.error("Error procesando nota:", err);
        alert(err.message || "Error al conectar con Gemini.");
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = origHtml;
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }
    }
}

async function analyzeOpportunitiesWithGemini() {
    if (!window.GeminiAI.hasApiKey()) {
        openSettingsModal();
        return;
    }

    const btn = document.getElementById('btn-ai-analyze-dashboard');
    const origHtml = btn ? btn.innerHTML : '';
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = `<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Analizando cartera con IA...`;
    }

    try {
        const list = await window.GeminiAI.analyzeTopOpportunities(clients);
        const modal = document.getElementById('opportunities-modal');
        const content = document.getElementById('opportunities-modal-content');
        if (content) {
            content.innerHTML = list.map(item => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 hover:border-blue-300 transition shadow-2xs">
                    <div class="flex items-center justify-between">
                        <h4 class="font-bold text-slate-900 text-sm">${item.empresa}</h4>
                        <span class="text-xs font-mono bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded">${item.id}</span>
                    </div>
                    <p class="text-xs text-slate-700"><strong>¿Por qué hoy?:</strong> ${item.motivo}</p>
                    <p class="text-xs text-emerald-800 font-medium"><strong>Acción sugerida:</strong> ${item.accion_recomendada}</p>
                    <div class="pt-2 flex justify-end">
                        <button onclick="window.closeOpportunitiesModal(); window.openClientDrawer('${item.id}');" class="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition shadow-2xs">
                            Abrir Ficha 360°
                        </button>
                    </div>
                </div>
            `).join('');
        }
        if (modal) {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
        if (typeof lucide !== 'undefined') lucide.createIcons();
    } catch (err) {
        console.error("Error analizando oportunidades:", err);
        alert(err.message || "Error al conectar con Gemini.");
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = origHtml;
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }
    }
}

function closeOpportunitiesModal() {
    const modal = document.getElementById('opportunities-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

window.openSettingsModal = openSettingsModal;
window.closeSettingsModal = closeSettingsModal;
window.saveSettingsModal = saveSettingsModal;
window.investigateWithGemini = investigateWithGemini;
window.generateEmailWithGemini = generateEmailWithGemini;
window.processNoteWithGemini = processNoteWithGemini;
window.analyzeOpportunitiesWithGemini = analyzeOpportunitiesWithGemini;
window.closeOpportunitiesModal = closeOpportunitiesModal;
window.getClientExpirationInfo = getClientExpirationInfo;

window.setExpirationFilter = function(filterType) {
    selectedExpirationFilter = filterType;
    
    // Actualizar estilos activos de las píldoras
    const filters = ['todos', 'urgentes', 'vencidos', 'por_vencer', 'al_dia'];
    filters.forEach(f => {
        const btn = document.getElementById(`filter-exp-${f.replace('_', '-')}`);
        if (btn) {
            if (f === filterType) {
                btn.className = "px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-blue-600 text-white shadow-2xs";
            } else {
                btn.className = "px-2.5 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200";
            }
        }
    });

    // Si filtra urgentes o vencidos, ordenar automáticamente por más urgentes
    if (filterType !== 'todos' && filterType !== 'al_dia') {
        currentSortOrder = 'vencimiento_urgente';
        const sortSel = document.getElementById('table-sort-select');
        if (sortSel) sortSel.value = 'vencimiento_urgente';

        // Si estaba seleccionado un nicho sin clientes en esta categoría, resetear nicho a 'todos'
        if (selectedNicheFilter !== 'todos') {
            const inNiche = clients.filter(c => (c.nicho_id || 'gral') === selectedNicheFilter);
            if (inNiche.length === 0) {
                selectedNicheFilter = 'todos';
                renderNichePills();
            }
        }
    }

    renderClientsTable();
};

window.setTableSort = function(sortType) {
    currentSortOrder = sortType;
    renderClientsTable();
};

window.toggleVencimientoSort = function() {
    if (currentSortOrder === 'vencimiento_urgente') {
        currentSortOrder = 'vencimiento_lejano';
    } else {
        currentSortOrder = 'vencimiento_urgente';
    }
    const sortSel = document.getElementById('table-sort-select');
    if (sortSel) sortSel.value = currentSortOrder;
    renderClientsTable();
    showToast(currentSortOrder === 'vencimiento_urgente' ? "Orden: Vencimientos más urgentes / vencidos primero" : "Orden: Vencimientos más lejanos primero");
};

window.filterByRecalibracionAndGoDirectorio = function() {
    switchView('directorio');
    // Limpiar búsqueda y restablecer nicho a todos para mostrar los 63 urgentes
    clearSearch();
    selectedNicheFilter = 'todos';
    renderNichePills();
    window.setExpirationFilter('urgentes');
    window.setTableSort('vencimiento_urgente');
    const sortSel = document.getElementById('table-sort-select');
    if (sortSel) sortSel.value = 'vencimiento_urgente';
    const target = document.getElementById('view-directorio');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
};

window.resetAllFilters = function() {
    clearSearch();
    selectedNicheFilter = 'todos';
    selectedStatusFilter = 'todos';
    selectedScoringFilter = 'todos';
    selectedExpirationFilter = 'todos';
    currentSortOrder = 'vencimiento_urgente';
    const sortSel = document.getElementById('table-sort-select');
    if (sortSel) sortSel.value = 'vencimiento_urgente';
    renderNichePills();
    window.setExpirationFilter('todos');
    renderClientsTable();
    showToast("Filtros restablecidos: mostrando los 271 clientes.");
};
