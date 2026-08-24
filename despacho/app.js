/**
 * METROML DESPACHO - LÓGICA PRINCIPAL (DIRECT ACCESS & CONFIRMATION FLOW)
 * Versión 6.0
 */

// ==========================================
// CONFIGURACIÓN DE FIREBASE & APPS SCRIPT
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyAhNkR8-grFyC7QZ0Zpidu12-E3DZMXims",
    authDomain: "metromlstock.firebaseapp.com",
    projectId: "metromlstock",
    storageBucket: "metromlstock.firebasestorage.app",
    messagingSenderId: "350986843825",
    appId: "1:350986843825:web:8586b31a7c9df6b2f89490",
    measurementId: "G-VDB4314N2F"
};

const GOOGLE_SHEETS_API_URL = 'https://script.google.com/macros/s/AKfycbwgmgHF3DHNpOjnmTGsVBwYPEd0tLiwZDXhRsZaTknXEkhBbpOZEqtDlXhH5pyhSWE/exec';

// Inicializar Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let state = {
    items: [],
    search: '',
    selectedItem: null,
    pendingDespachoData: null,
    unsubscribe: null
};

// ==========================================
// INICIALIZACIÓN DIRECTA (SIN LOGIN)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    setupEventListeners();
    listenFirestore();
});

// ==========================================
// FIRESTORE EN TIEMPO REAL
// ==========================================
function listenFirestore() {
    const loadingState = document.getElementById('loading-state');
    if (loadingState) loadingState.style.display = 'block';

    // Cancelar escucha anterior si existe
    if (state.unsubscribe) state.unsubscribe();

    // Optimización de rendimiento: Escuchar únicamente instrumentos con estado DISPONIBLE
    state.unsubscribe = db.collection("instrumentos")
        .where("estado", "==", "DISPONIBLE")
        .onSnapshot((snapshot) => {
            let items = [];
            snapshot.forEach((doc) => {
                items.push({ id: doc.id, ...doc.data() });
            });

            state.items = items;
            if (loadingState) loadingState.style.display = 'none';
            
            renderItems();
        }, (error) => {
            console.error("Error al escuchar Firestore:", error);
            if (loadingState) loadingState.style.display = 'none';
            showToast("⚠️ Error al sincronizar con la base de datos", "error");
        });
}

// ==========================================
// FILTRADO ESTRICTO (SOLO DISPONIBLES)
// ==========================================
function filterItems() {
    return state.items.filter(item => {
        const estClean = (item.estado || '').trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        
        // REGLA ESTRICTA: Mostrar ÚNICAMENTE equipos en estado "DISPONIBLE"
        const isDisponible = estClean === 'DISPONIBLE' || estClean.includes('DISPONIBLE');
        if (!isDisponible) return false;

        const query = state.search.toLowerCase().trim();
        if (query === '') return true;
        
        // Coincidencia de texto en búsqueda
        return (item.id || '').toLowerCase().includes(query) ||
            (item.instrumento || item.nombre || '').toLowerCase().includes(query) ||
            (item.marca || '').toLowerCase().includes(query) ||
            (item.modelo || '').toLowerCase().includes(query) ||
            (item.serie || '').toLowerCase().includes(query) ||
            (item.certificado || '').toLowerCase().includes(query);
    });
}

// ==========================================
// RENDERIZADO DE EQUIPOS DISPONIBLES
// ==========================================
function renderItems() {
    const container = document.getElementById('instruments-container');
    const emptyState = document.getElementById('empty-state');
    const resultsCount = document.getElementById('results-count');

    const filtered = filterItems();
    if (resultsCount) resultsCount.innerText = filtered.length;

    if (filtered.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        lucide.createIcons();
        return;
    }

    emptyState.style.display = 'none';

    container.innerHTML = filtered.map(item => {
        return `
            <div class="card-instrument glass-panel">
                <div class="card-top">
                    <div class="inventory-id-pill">
                        <span class="id-label">N° INV</span>
                        <span class="id-code">${item.id || 'N/A'}</span>
                    </div>
                    <span class="badge-status status-disponible">
                        <span class="status-dot"></span>
                        DISPONIBLE
                    </span>
                </div>
                
                <div class="card-body">
                    <h3 class="card-title">${escapeHtml(item.instrumento || item.nombre || 'Instrumento')}</h3>
                    <p class="card-subtitle">${escapeHtml(item.marca || '-')} ${escapeHtml(item.modelo || '')}</p>
                </div>

                <div class="card-meta">
                    <span class="meta-item"><strong>Serie:</strong> <span>${escapeHtml(item.serie || 'S/N')}</span></span>
                    ${item.certificado ? `<span class="meta-item"><strong>Cert:</strong> <span>${escapeHtml(item.certificado)}</span></span>` : ''}
                    ${item.cliente ? `<span class="meta-item"><strong>Cliente:</strong> <span>${escapeHtml(item.cliente)}</span></span>` : ''}
                </div>

                <div class="card-actions">
                    <button class="btn btn-primary btn-block btn-despachar" data-id="${item.id}">
                        <i data-lucide="truck"></i>
                        <span>Registrar Despacho</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();

    // Event listeners para los botones de despacho
    document.querySelectorAll('.btn-despachar').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = btn.getAttribute('data-id');
            openDespachoModal(itemId);
        });
    });
}

// ==========================================
// MODAL DE DESPACHO CON PASO DE CONFIRMACIÓN
// ==========================================
function openDespachoModal(itemId) {
    const item = state.items.find(x => x.id === itemId);
    if (!item) return;

    state.selectedItem = item;
    state.pendingDespachoData = null;

    // Resetear a Paso 1
    document.getElementById('despacho-step-1').style.display = 'block';
    document.getElementById('despacho-step-2').style.display = 'none';
    document.getElementById('modal-title-text').innerText = 'Registrar Despacho';

    // Rellenar datos del equipo en Paso 1
    document.getElementById('modal-item-id').innerText = item.id;
    document.getElementById('modal-item-name').innerText = item.instrumento || item.nombre || 'Instrumento';
    document.getElementById('modal-item-details').innerText = `${item.marca || ''} ${item.modelo || ''} | N° Serie: ${item.serie || 'S/N'}`;
    
    document.getElementById('despacho-certificado').value = item.certificado || '';
    
    // Asignar fecha actual por defecto
    const todayISO = new Date().toISOString().split('T')[0];
    document.getElementById('despacho-fecha-calibracion').value = item.fecha_calibracion || todayISO;

    document.getElementById('modal-despacho').style.display = 'flex';
    lucide.createIcons();
    
    // Foco automático en el campo de certificado
    setTimeout(() => {
        const certInput = document.getElementById('despacho-certificado');
        if (certInput) certInput.focus();
    }, 100);
}

function closeDespachoModal() {
    document.getElementById('modal-despacho').style.display = 'none';
    state.selectedItem = null;
    state.pendingDespachoData = null;
}

// Paso 1 -> Paso 2: Revisar y mostrar resumen de confirmación
function handleToStep2(e) {
    e.preventDefault();
    if (!state.selectedItem) return;

    const certificado = document.getElementById('despacho-certificado').value.trim();
    const fechaCalibracion = document.getElementById('despacho-fecha-calibracion').value;

    if (!certificado) {
        showToast('Por favor, ingresa el número de certificado.', 'error');
        return;
    }

    if (!fechaCalibracion) {
        showToast('Por favor, ingresa la fecha de calibración.', 'error');
        return;
    }

    // Guardar datos temporales para confirmación
    state.pendingDespachoData = {
        certificado: certificado,
        fecha_calibracion: fechaCalibracion
    };

    // Rellenar tarjeta de confirmación del Paso 2
    document.getElementById('conf-id').innerText = state.selectedItem.id || 'N/A';
    document.getElementById('conf-name').innerText = state.selectedItem.instrumento || state.selectedItem.nombre || 'Instrumento';
    document.getElementById('conf-model').innerText = `${state.selectedItem.marca || '-'} ${state.selectedItem.modelo || ''}`;
    document.getElementById('conf-serie').innerText = state.selectedItem.serie || 'S/N';
    document.getElementById('conf-cert').innerText = certificado;
    
    // Formato legible de fecha para el resumen (DD/MM/YYYY)
    const [year, month, day] = fechaCalibracion.split('-');
    const formattedDate = (year && month && day) ? `${day}/${month}/${year}` : fechaCalibracion;
    document.getElementById('conf-date').innerText = formattedDate;

    // Cambiar de paso
    document.getElementById('despacho-step-1').style.display = 'none';
    document.getElementById('despacho-step-2').style.display = 'block';
    document.getElementById('modal-title-text').innerText = 'Confirmar Salida de Equipo';
    lucide.createIcons();
}

// Paso 2 -> Paso 1: Volver a modificar datos
function handleBackToStep1() {
    document.getElementById('despacho-step-2').style.display = 'none';
    document.getElementById('despacho-step-1').style.display = 'block';
    document.getElementById('modal-title-text').innerText = 'Registrar Despacho';
    lucide.createIcons();
}

// Paso 2: Confirmación Final y Guardado
async function handleFinalConfirmDespacho() {
    if (!state.selectedItem || !state.pendingDespachoData) return;

    const btnSubmit = document.getElementById('btn-final-confirm-despacho');
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = `<div class="spinner" style="width:16px;height:16px;margin:0;border-width:2px;"></div> Procesando...`;

    const itemId = state.selectedItem.id;
    const { certificado, fecha_calibracion } = state.pendingDespachoData;
    const nowStr = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });

    const updateData = {
        estado: 'DESPACHADO',
        certificado: certificado,
        fecha_calibracion: fecha_calibracion,
        fecha_despacho: nowStr,
        despachado_por: 'Despacho'
    };

    try {
        // 1. Actualizar inmediatamente en Firestore
        await db.collection("instrumentos").doc(itemId).update(updateData);

        // 2. Sincronizar asíncronamente con Google Sheets si está disponible
        if (GOOGLE_SHEETS_API_URL) {
            const mergedItem = Object.assign({}, state.selectedItem, updateData);
            fetch(GOOGLE_SHEETS_API_URL, {
                method: 'POST',
                mode: 'no-cors',
                credentials: 'omit',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    action: 'update_full',
                    data: mergedItem
                })
            }).catch(err => console.error("Error al sincronizar con Sheets:", err));
        }

        showToast(`✅ ${itemId} (${certificado}) despachado con éxito.`, 'success');
        closeDespachoModal();
    } catch (err) {
        console.error("Error al registrar despacho:", err);
        showToast("⚠️ Falla al registrar despacho: " + err.toString(), 'error');
    } finally {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `<i data-lucide="check-circle-2"></i> <span>Confirmar Despacho</span>`;
        lucide.createIcons();
    }
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function setupEventListeners() {
    // Búsqueda en Vivo
    const searchInput = document.getElementById('search-input');
    const btnClearSearch = document.getElementById('btn-clear-search');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.search = e.target.value;
            if (btnClearSearch) btnClearSearch.style.display = state.search ? 'flex' : 'none';
            renderItems();
        });
    }

    if (btnClearSearch) {
        btnClearSearch.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            state.search = '';
            btnClearSearch.style.display = 'none';
            renderItems();
        });
    }

    // Botón Refresh Manual
    const btnRefresh = document.getElementById('btn-refresh');
    if (btnRefresh) {
        btnRefresh.addEventListener('click', () => {
            showToast('Sincronizando inventario...', 'info');
            listenFirestore();
        });
    }

    // Control de Modales y Pasos
    const btnClose = document.getElementById('btn-close-despacho');
    if (btnClose) btnClose.addEventListener('click', closeDespachoModal);

    const btnCancel = document.getElementById('btn-cancel-despacho');
    if (btnCancel) btnCancel.addEventListener('click', closeDespachoModal);
    
    // Paso 1: Revisar
    const formDespacho = document.getElementById('form-confirm-despacho');
    if (formDespacho) formDespacho.addEventListener('submit', handleToStep2);
    
    // Paso 2: Volver o Confirmar
    const btnBack = document.getElementById('btn-back-to-step-1');
    if (btnBack) btnBack.addEventListener('click', handleBackToStep1);

    const btnFinalConfirm = document.getElementById('btn-final-confirm-despacho');
    if (btnFinalConfirm) btnFinalConfirm.addEventListener('click', handleFinalConfirmDespacho);
}

// Helper para prevenir XSS
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Helper de Toast Notifications
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconName = 'info';
    if (type === 'success') iconName = 'check-circle-2';
    if (type === 'error') iconName = 'alert-triangle';

    toast.innerHTML = `<i data-lucide="${iconName}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.25s ease-out';
        setTimeout(() => toast.remove(), 250);
    }, 3500);
}
