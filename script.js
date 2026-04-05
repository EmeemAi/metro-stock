/**
 * Configuración: 
 * Cuando tengas tu Web App de Google Apps Script publicada, 
 * pega el enlace aquí.
 */
const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbzzACLbJLiNwKh9PBkUMi_WZsoXL_WGjsG-5q7KzBpOupXjuXMn3nrDxNs_hAJdJ8jn/exec';

// ==========================================
// MOCK DATA (Para probar sin Google Sheets)
// ==========================================
let mockDatabase = [
    {
        "id": "100",
        "instrumento": "Pirómetro",
        "marca": "BT Meter",
        "modelo": "BT-1500-APP",
        "serie": "20230029270 L",
        "estado": "DISPONIBLE",
        "fecha_calibracion": "2025-05-09",
        "puntos": "[]"
    }
];

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let appState = {
    data: [],
    loading: false,
    filter: 'ALL',
    search: ''
};

// Función auxiliar para debounce
function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

// Función auxiliar para inicializar iconos de forma segura
function safeCreateIcons(parentNode = document) {
    try {
        if(typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons({ parent: parentNode });
        }
    } catch(err) {
        console.warn("Lucide Icons no pudo cargar; continuando sin refrescar iconos.", err);
    }
}

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    safeCreateIcons();
    fetchData();

    // Event Listeners
    document.getElementById('btn-new-equipo').addEventListener('click', openModalNuevo);
    
    document.querySelectorAll('.btn-close, .btn-close-action').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });

    const debouncedRender = debounce(() => renderTable());
    
    document.getElementById('search-input').addEventListener('input', (e) => {
        appState.search = e.target.value.toLowerCase();
        debouncedRender();
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
    document.getElementById('form-edit').addEventListener('submit', handleFormEdit);
    document.getElementById('form-estado').addEventListener('submit', handleFormEstado);
    document.getElementById('btn-add-punto').addEventListener('click', () => addPuntoRow('tbody-puntos'));
    document.getElementById('edit-btn-add-punto').addEventListener('click', () => addPuntoRow('edit-tbody-puntos'));
    
    // Tabla click delegation
    document.getElementById('table-body').addEventListener('click', (e) => {
        const btnState = e.target.closest('.btn-change-state');
        if(btnState) {
            openModalEstado(btnState.getAttribute('data-id'), btnState.getAttribute('data-target-state'));
        }
        
        const btnFicha = e.target.closest('.btn-view-ficha');
        if(btnFicha) {
            openModalFicha(btnFicha.getAttribute('data-id'));
        }

        const btnEdit = e.target.closest('.btn-edit-equipo');
        if(btnEdit) {
            openModalEdit(btnEdit.getAttribute('data-id'));
        }
    });

    // Sidebar Mobile
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
    }
});

// ==========================================
// OPERACIONES DE DATOS
// ==========================================
async function fetchData() {
    appState.loading = true;
    updateUIState();
    try {
        if(GOOGLE_SHEETS_API_URL !== '') {
            const response = await fetch(GOOGLE_SHEETS_API_URL + '?action=get');
            const data = await response.json();
            appState.data = data.items || [];
        } else {
            await new Promise(r => setTimeout(r, 600));
            appState.data = [...mockDatabase];
        }
    } catch (err) {
        console.error("Error fetchData:", err);
    } finally {
        appState.loading = false;
        updateUIState();
        renderTable();
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
        mockDatabase.unshift({ ...record, points_count: 0 });
        appState.data = [...mockDatabase];
        return { success: true };
    }
}

async function updateFullRecord(record) {
    if(GOOGLE_SHEETS_API_URL !== '') {
        const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            body: JSON.stringify({ action: 'update_full', record: record })
        });
        return await response.json();
    } else {
        const idx = mockDatabase.findIndex(x => x.id == record.id);
        if(idx !== -1) mockDatabase[idx] = record;
        appState.data = [...mockDatabase];
        return { success: true };
    }
}

async function updateStateRecord(id, newState, extraData) {
    if(GOOGLE_SHEETS_API_URL !== '') {
        const response = await fetch(GOOGLE_SHEETS_API_URL, {
            method: 'POST',
            body: JSON.stringify({ action: 'update_state', id: id, state: newState, ...extraData })
        });
        return await response.json();
    } else {
        const item = mockDatabase.find(x => x.id == id);
        if(item) {
            item.estado = newState;
            if(extraData.certificado) item.certificado = extraData.certificado;
            if(extraData.cliente) item.cliente = extraData.cliente;
        }
        appState.data = [...mockDatabase];
        return { success: true };
    }
}

// ==========================================
// RENDERIZADO
// ==========================================
function renderTable() {
    const tbody = document.getElementById('table-body');
    const filtered = appState.data.filter(item => {
        const matchesFilter = appState.filter === 'ALL' || item.estado === appState.filter;
        const searchStr = `${item.id} ${item.marca} ${item.modelo} ${item.serie} ${item.cliente} ${item.certificado}`.toLowerCase();
        const matchesSearch = searchStr.includes(appState.search);
        return matchesFilter && matchesSearch;
    });

    tbody.innerHTML = filtered.map(item => {
        const statusClass = `status-${item.estado.toLowerCase()}`;
        return `
            <tr>
                <td><strong>#${item.id}</strong></td>
                <td>
                    <div class="equipo-info">
                        <span class="equipo-name">${item.marca || ''} ${item.modelo || ''}</span>
                        <span class="equipo-serie">${item.serie || 'S/N'}</span>
                    </div>
                </td>
                <td><span class="status-badge ${statusClass}">${item.estado}</span></td>
                <td>${item.fecha_calibracion ? item.fecha_calibracion.split(' ')[0] : '---'}</td>
                <td>${item.cliente || '---'}</td>
                <td>
                    <div class="actions-cell">
                        <button class="btn-icon btn-view-ficha" data-id="${item.id}" title="Ver Ficha"><i data-lucide="eye"></i></button>
                        <button class="btn-icon btn-edit-equipo" data-id="${item.id}" title="Editar Completo"><i data-lucide="pencil"></i></button>
                        ${item.estado === 'DISPONIBLE' ? 
                            `<button class="btn-action btn-reservar btn-change-state" data-id="${item.id}" data-target-state="RESERVADO">Reservar</button>` : ''}
                        ${item.estado === 'RESERVADO' ? 
                            `<button class="btn-action btn-vender btn-change-state" data-id="${item.id}" data-target-state="ENTREGADO">Vender</button>` : ''}
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    safeCreateIcons(tbody);
}

// ==========================================
// MODALES
// ==========================================
function openModalNuevo() {
    const modal = document.getElementById('modal-nuevo');
    document.getElementById('form-nuevo').reset();
    document.getElementById('tbody-puntos').innerHTML = '';
    addPuntoRow('tbody-puntos');
    modal.classList.add('active');
}

function openModalEdit(id) {
    const modal = document.getElementById('modal-edit');
    const item = appState.data.find(x => x.id == id);
    if(!item) return;

    document.getElementById('edit-id').value = item.id;
    document.getElementById('edit-instrumento').value = item.instrumento || '';
    document.getElementById('edit-marca').value = item.marca || '';
    document.getElementById('edit-modelo').value = item.modelo || '';
    document.getElementById('edit-serie').value = item.serie || '';
    document.getElementById('edit-estado').value = item.estado;
    document.getElementById('edit-fecha').value = item.fecha_calibracion || '';
    document.getElementById('edit-certificado').value = item.certificado || '';
    document.getElementById('edit-cliente').value = item.cliente || '';

    const tbody = document.getElementById('edit-tbody-puntos');
    tbody.innerHTML = '';
    let puntosArray = [];
    try { if(item.puntos) puntosArray = JSON.parse(item.puntos); } catch(e){}
    
    puntosArray.forEach(p => addPuntoRow('edit-tbody-puntos', p));
    if(puntosArray.length === 0) addPuntoRow('edit-tbody-puntos');

    safeCreateIcons(modal);
    modal.classList.add('active');
}

function openModalEstado(id, targetState) {
    const modal = document.getElementById('modal-estado');
    const item = appState.data.find(x => x.id == id);
    if(!item) return;

    document.getElementById('estado-id').value = id;
    document.getElementById('estado-target').value = targetState;
    document.getElementById('modal-estado-title').innerText = `Pasar equipo a ${targetState}`;
    document.getElementById('estado-context').innerHTML = `<p>Equipo: <strong>${item.marca} ${item.modelo}</strong> (ID: ${item.id})</p>`;

    document.getElementById('fields-reservado').style.display = targetState === 'RESERVADO' ? 'block' : 'none';
    document.getElementById('fields-entregado').style.display = targetState === 'ENTREGADO' ? 'block' : 'none';
    
    modal.classList.add('active');
}

function openModalFicha(id) {
    const modal = document.getElementById('modal-ficha');
    const item = appState.data.find(x => x.id == id);
    if(!item) return;

    document.getElementById('ficha-id').innerText = `ID: ${item.id}`;
    document.getElementById('ficha-instrumento').innerText = item.instrumento || '---';
    document.getElementById('ficha-marca').innerText = item.marca || '---';
    document.getElementById('ficha-modelo').innerText = item.modelo || '---';
    document.getElementById('ficha-serie').innerText = item.serie || '---';
    document.getElementById('ficha-estado').innerText = item.estado;

    const tbody = document.getElementById('ficha-tbody-puntos');
    tbody.innerHTML = '';
    let pts = [];
    try { if(item.puntos) pts = JSON.parse(item.puntos); } catch(e){}

    if(pts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">Sin puntos registrados.</td></tr>';
    } else {
        pts.forEach(p => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${p.pt}</td><td>${p.variable||''}</td><td>${p.unidad||''}</td><td>${p.ref||''}</td><td>${p.inst||''}</td>`;
            tbody.appendChild(tr);
        });
    }

    modal.classList.add('active');
}

// ==========================================
// FORM SUBMITS
// ==========================================
async function handleFormNuevo(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-save-nuevo');
    btn.disabled = true;
    const record = {
        id: document.getElementById('nuevo-id').value,
        instrumento: document.getElementById('nuevo-nombre').value,
        marca: document.getElementById('nuevo-marca').value,
        modelo: document.getElementById('nuevo-modelo').value,
        serie: document.getElementById('nuevo-serie').value,
        fecha_calibracion: document.getElementById('nuevo-fecha').value,
        estado: 'DISPONIBLE'
    };
    const puntos = [];
    document.querySelectorAll('#tbody-puntos tr').forEach(tr => {
        puntos.push({
            pt: tr.querySelector('input[name="pt-name"]').value,
            variable: tr.querySelector('input[name="pt-var"]').value,
            unidad: tr.querySelector('input[name="pt-unit"]').value,
            ref: tr.querySelector('input[name="pt-ref"]').value,
            inst: tr.querySelector('input[name="pt-inst"]').value
        });
    });
    record.puntos = JSON.stringify(puntos);
    await saveNewRecord(record);
    closeAllModals();
    fetchData();
    btn.disabled = false;
}

async function handleFormEdit(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-save-edit');
    btn.disabled = true;
    const record = {
        id: document.getElementById('edit-id').value,
        instrumento: document.getElementById('edit-instrumento').value,
        marca: document.getElementById('edit-marca').value,
        modelo: document.getElementById('edit-modelo').value,
        serie: document.getElementById('edit-serie').value,
        estado: document.getElementById('edit-estado').value,
        fecha_calibracion: document.getElementById('edit-fecha').value,
        certificado: document.getElementById('edit-certificado').value,
        cliente: document.getElementById('edit-cliente').value
    };
    const puntos = [];
    document.querySelectorAll('#edit-tbody-puntos tr').forEach(tr => {
        puntos.push({
            pt: tr.querySelector('input[name="pt-name"]').value,
            variable: tr.querySelector('input[name="pt-var"]').value,
            unidad: tr.querySelector('input[name="pt-unit"]').value,
            ref: tr.querySelector('input[name="pt-ref"]').value,
            inst: tr.querySelector('input[name="pt-inst"]').value
        });
    });
    record.puntos = JSON.stringify(puntos);

    const res = await updateFullRecord(record);
    if(res.success) {
        closeAllModals();
        fetchData();
    }
    btn.disabled = false;
}

async function handleFormEstado(e) {
    e.preventDefault();
    const btn = document.getElementById('btn-save-estado');
    btn.disabled = true;
    const id = document.getElementById('estado-id').value;
    const target = document.getElementById('estado-target').value;
    let extra = {};
    if(target === 'RESERVADO') {
        extra.certificado = document.getElementById('estado-certificado').value;
        extra.fecha = document.getElementById('estado-fecha').value;
    } else if(target === 'ENTREGADO') {
        extra.cliente = document.getElementById('estado-cliente').value;
    }
    await updateStateRecord(id, target, extra);
    closeAllModals();
    fetchData();
    btn.disabled = false;
}

// Auxiliares adicionales
function addPuntoRow(tbodyId, data = null) {
    const tbody = document.getElementById(tbodyId);
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><input type="text" name="pt-name" value="${data ? data.pt : ''}" required></td>
        <td><input type="text" name="pt-var" value="${data ? data.variable : ''}"></td>
        <td><input type="text" name="pt-unit" value="${data ? data.unidad : ''}"></td>
        <td><input type="text" name="pt-ref" value="${data ? data.ref : ''}" required></td>
        <td><input type="text" name="pt-inst" value="${data ? data.inst : ''}" required></td>
        <td><button type="button" class="btn-icon text-danger" onclick="this.closest('tr').remove()"><i data-lucide="trash-2"></i></button></td>
    `;
    tbody.appendChild(tr);
    safeCreateIcons(tr);
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

function updateUIState() {
    // Podrías añadir loaders aquí si quieres
}
