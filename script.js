/**
 * Configuración: 
 * Cuando tengas tu Web App de Google Apps Script publicada, 
 * pega el enlace aquí.
 */
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbzzACLbJLiNwKh9PBkUMi_WZsoXL_WGjsG-5q7KzBpOupXjuXMn3nrDxNs_hAJdJ8jn/exec'; // Ej: 'https://script.google.com/macros/s/AKfycb.../exec'

// ==========================================
// MOCK DATA (Para probar sin Google Sheets)
// ==========================================
let mockDatabase = [];

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let appState = {
    data: [],
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

    // Cargar datos
    fetchData();

    // Event Listeners Básicos
    document.getElementById('btn-new-equipo').addEventListener('click', openModalNuevo);
    
    // Configurar Modales (Cerrar)
    document.querySelectorAll('.btn-close, .btn-close-action').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    // Búsqueda y Filtros
    document.getElementById('search-input').addEventListener('input', (e) => {
        appState.search = e.target.value.toLowerCase();
        renderTable();
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            appState.filter = e.target.getAttribute('data-filter');
            renderTable();
        });
    });

    // Formularios
    document.getElementById('form-nuevo').addEventListener('submit', handleFormNuevo);
    document.getElementById('form-estado').addEventListener('submit', handleFormEstado);
    document.getElementById('form-edit').addEventListener('submit', handleFormEdit);
    document.getElementById('btn-add-punto').addEventListener('click', addPuntoRow);
    document.getElementById('btn-add-punto-edit').addEventListener('click', () => addPuntoRowEdit());
    
    // Tabla de botones dinámicos (Delegación de eventos)
    document.getElementById('table-body').addEventListener('click', (e) => {
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
    document.getElementById('nav-gestion').addEventListener('click', (e) => {
        e.preventDefault();
        switchView('gestion');
    });
    document.getElementById('nav-stats').addEventListener('click', (e) => {
        e.preventDefault();
        switchView('stats');
    });

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
        if (isMatte) {
            themeText.innerText = 'Modo Claro';
            btnTheme.querySelector('i').setAttribute('data-lucide', 'sun');
        } else {
            themeText.innerText = 'Modo Mate';
            btnTheme.querySelector('i').setAttribute('data-lucide', 'moon');
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

    try {
        if(GOOGLE_SHEETS_API_URL !== '') {
            // Real fetch a Google Sheets
            const response = await fetch(GOOGLE_SHEETS_API_URL + '?action=get');
            const data = await response.json();
            appState.data = data.items || [];
        } else {
            // Usar Mock Data con retraso simulado (1s)
            await new Promise(r => setTimeout(r, 1000));
            appState.data = [...mockDatabase];
        }
    } catch (err) {
        console.error("Error al cargar datos:", err);
        alert("Hubo un error cargando los datos. Verifica la URL de Google Sheets.");
    } finally {
        appState.loading = false;
        updateUIState();
        renderTable();
        updateDashboard(); // Actualizar indicadores globales
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
    if(GOOGLE_SHEETS_API_URL !== '') {
        const requestData = { action: 'update_state', id: id, state: newState, ...extraData };
        const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            body: JSON.stringify(requestData)
        });
        return await response.json();
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
    const navItems = document.querySelectorAll('.nav-item');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    const btnNew = document.getElementById('btn-new-equipo');
    
    navItems.forEach(n => n.classList.remove('active'));

    if(view === 'gestion') {
        document.getElementById('nav-gestion').classList.add('active');
        if(viewGestion) viewGestion.style.display = 'flex';
        if(viewStats) viewStats.style.display = 'none';
        if(btnNew) btnNew.style.display = 'inline-flex';
        pageTitle.innerText = "Gestión de Inventario";
        pageSubtitle.innerText = "gestiona el stock de instrumentos con certificado para entrega inmediata";
    } else {
        document.getElementById('nav-stats').classList.add('active');
        if(viewGestion) viewGestion.style.display = 'none';
        if(viewStats) viewStats.style.display = 'flex';
        if(btnNew) btnNew.style.display = 'none';
        pageTitle.innerText = "Inteligencia de Negocio";
        pageSubtitle.innerText = "Análisis de demanda y necesidades de reposición";
        updateDashboard();
    }
    lucide.createIcons();
}

let salesChart = null;

function updateDashboard() {
    const biSection = document.getElementById('bi-dashboard');
    if(biSection.style.display === 'none' && !appState.loading) {
         // Si no estamos viendo el dashboard, solo calculamos los números básicos para los KPIs si fuera necesario, 
         // pero los gráficos Chart.js requieren que el canvas sea visible.
    }

    if(!appState.data || appState.data.length === 0) return;

    // 1. Cálculos de Ventas y Reposición
    const stats = {};
    let totalAvailable = 0;
    let totalVentas = 0;

    appState.data.forEach(item => {
        const key = `${item.marca} ${item.modelo}`.toUpperCase();
        if(!stats[key]) stats[key] = { disponible: 0, entregado: 0 };
        
        if(item.estado === 'DISPONIBLE') {
            stats[key].disponible++;
            totalAvailable++;
        } else if (item.estado === 'ENTREGADO') {
            stats[key].entregado++;
            totalVentas++;
        }
    });

    // 2. Actualizar KPIs
    document.getElementById('kpi-disponible').innerText = totalAvailable;
    document.getElementById('kpi-ventas').innerText = totalVentas;

    // 3. Radar de Reposición (Lógica Crítica)
    const replenishmentList = document.getElementById('replenishment-list');
    replenishmentList.innerHTML = '';
    
    const criticalItems = Object.entries(stats)
        .map(([name, s]) => ({ name, ...s }))
        .filter(s => s.entregado > 0 && s.disponible < 2) // Menos de 2 unidades y con historial de ventas
        .sort((a,b) => b.entregado - a.entregado); // Ordenar por demanda

    document.getElementById('kpi-reposicion').innerText = criticalItems.length;

    if(biSection.style.display !== 'none') {
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
                    borderRadius: 4
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
                        grid: { color: gridColor },
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
    
    if (appState.loading) {
        tableBody.innerHTML = '';
        loadingState.style.display = 'flex';
        document.getElementById('empty-state').style.display = 'none';
    } else {
        loadingState.style.display = 'none';
    }
}



function renderTable() {
    const tbody = document.getElementById('table-body');
    const emptyState = document.getElementById('empty-state');
    const summaryContainer = document.getElementById('available-summary');
    tbody.innerHTML = '';

    // Filtrar
    let filtered = appState.data.filter(item => {
        // Filtro por Tab
        if(appState.filter !== 'ALL' && item.estado !== appState.filter) return false;
        
        // Filtro por Buscador
        if(appState.search) {
            const searchStr = `${item.id} ${item.modelo} ${item.marca} ${item.serie} ${item.cliente} ${item.certificado}`.toLowerCase();
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
                    ${item.estado === 'DISPONIBLE' ? `<button class="btn btn-outline btn-change-state" data-id="${item.id}" data-target-state="RESERVADO" title="Vender">Vender <i data-lucide="arrow-right"></i></button>` : ''}
                    ${item.estado === 'RESERVADO' ? `<button class="btn btn-primary btn-change-state" data-id="${item.id}" data-target-state="ENTREGADO" title="Entregar">Entregar <i data-lucide="truck"></i></button>` : ''}
                </div>
            `;

            tr.innerHTML = `
                <td><strong>${item.id}</strong></td>
                <td>${item.marca} ${item.modelo}</td>
                <td>${item.serie}</td>
                <td><span class="badge ${item.estado.toLowerCase()}">${item.estado}</span></td>
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
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    document.getElementById('form-nuevo').reset();
    document.getElementById('form-estado').reset();
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
             // Si hay IDs menores a 1000, seguimos desde el mayor o desde 999.
             // El usuario pidió que empiecen con 1000.
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
    
    fReservado.style.display = 'none';
    fEntregado.style.display = 'none';

    // Deshacer requerimientos previos
    document.getElementById('estado-certificado').required = false;
    document.getElementById('estado-cliente').required = false;
    document.getElementById('estado-fecha').required = false;

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

    modal.classList.add('active');
}

// ==========================================
// GESTIÓN DE FORMULARIOS (Submits)
// ==========================================
async function handleFormNuevo(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-save-nuevo');
    btn.disabled = true;
    btn.innerText = 'Guardando...';

    try {
        const record = {
            id: document.getElementById('nuevo-id').value,
            instrumento: document.getElementById('nuevo-nombre').value,
            marca: document.getElementById('nuevo-marca').value,
            modelo: document.getElementById('nuevo-modelo').value,
            serie: document.getElementById('nuevo-serie').value,
            fecha_calibracion: document.getElementById('nuevo-fecha').value,
            estado: 'DISPONIBLE',
            certificado: '',
            cliente: ''
        };

        // Recoger puntos 
        const puntos = [];
        const trs = document.querySelectorAll('#tbody-puntos tr');
        trs.forEach((tr) => {
            puntos.push({
                pt: tr.querySelector('input[name="pt-name"]').value,
                variable: '', // Se deja vacío ya que se eliminó del form
                unidad: tr.querySelector('input[name="pt-unit"]').value,
                ref: tr.querySelector('input[name="pt-ref"]').value,
                inst: tr.querySelector('input[name="pt-inst"]').value
            });
        });
        record.puntos = JSON.stringify(puntos); // JSON de puntos con magnitudes

        await saveNewRecord(record);
        
        closeAllModals();
        await fetchData(); // Recargar datos para evitar duplicados en memoria
        alert("Equipo guardado con éxito.");
    } catch (error) {
        console.error("Error al guardar nuevo registro:", error);
        alert("Hubo un error al guardar el registro. Por favor, inténtalo de nuevo.");
    } finally {
        btn.disabled = false;
        btn.innerText = 'Generar Entrada';
    }
}


async function handleFormEstado(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-save-estado');
    btn.disabled = true;
    btn.innerText = 'Procesando...';

    try {
        const id = document.getElementById('estado-id').value;
        const targetState = document.getElementById('estado-target').value;
        
        let extraData = {};
        if(targetState === 'RESERVADO') {
            extraData.certificado = document.getElementById('estado-certificado').value;
            extraData.fecha = document.getElementById('estado-fecha').value;
        } else if (targetState === 'ENTREGADO') {
            extraData.cliente = document.getElementById('estado-cliente').value;
        }

        await updateStateRecord(id, targetState, extraData);

        closeAllModals();
        await fetchData(); // Recargar datos frescos
        alert("Estado actualizado con éxito.");
    } catch (error) {
        console.error("Error al actualizar estado:", error);
        alert("Hubo un error al actualizar el estado. Por favor, inténtalo de nuevo.");
    } finally {
        btn.disabled = false;
        btn.innerText = 'Confirmar';
    }
}


function openModalFicha(id) {
    const modal = document.getElementById('modal-ficha');
    const item = appState.data.find(x => x.id === id);
    if(!item) return;

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
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color: #9ca3af;">Sin puntos de medición registrados.</td></tr>';
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

    // Puntos
    const tbody = document.getElementById('edit-tbody-puntos');
    tbody.innerHTML = '';
    let puntos = [];
    try { if(item.puntos) puntos = JSON.parse(item.puntos); } catch(e) {}
    
    puntos.forEach((p, idx) => {
        addPuntoRowEdit(p);
    });

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

        const puntos = [];
        document.querySelectorAll('#edit-tbody-puntos tr').forEach(tr => {
            puntos.push({
                pt: tr.querySelector('input[name="pt-name"]').value,
                variable: '', // Se deja vacío ya que se eliminó del form
                unidad: tr.querySelector('input[name="pt-unit"]').value,
                ref: tr.querySelector('input[name="pt-ref"]').value,
                inst: tr.querySelector('input[name="pt-inst"]').value
            });
        });
        record.puntos = JSON.stringify(puntos);

        await saveFullUpdate(record);
        await fetchData(); // Recargar datos frescos
        
        closeAllModals();
        alert("Cambios guardados con éxito.");
    } catch (error) {
        console.error("Error al editar registro:", error);
        alert("Hubo un error al guardar los cambios. Por favor, inténtalo de nuevo.");
    } finally {
        btn.disabled = false;
        btn.innerText = 'Guardar Cambios';
    }
}