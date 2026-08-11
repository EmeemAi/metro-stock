/**
 * METROML DESPACHO - LÓGICA PRINCIPAL
 * Versión 1.0
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

// Credenciales válidas
const VALID_USERS = {
    "user1": "1297"
};

// Inicializar Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let state = {
    user: null,
    items: [],
    filter: 'ALL',
    search: '',
    selectedItem: null,
    unsubscribe: null
};

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    checkSession();
    setupEventListeners();
});

// ==========================================
// AUTENTICACIÓN
// ==========================================
function checkSession() {
    const savedUser = sessionStorage.getItem('despacho_user');
    if (savedUser && VALID_USERS[savedUser]) {
        state.user = savedUser;
        showAppScreen();
    } else {
        showLoginScreen();
    }
}

function handleLogin(e) {
    e.preventDefault();
    const userInput = document.getElementById('login-user').value.trim();
    const passInput = document.getElementById('login-pass').value.trim();
    const errorDiv = document.getElementById('login-error');

    if (VALID_USERS[userInput] && VALID_USERS[userInput] === passInput) {
        state.user = userInput;
        sessionStorage.setItem('despacho_user', userInput);
        errorDiv.style.display = 'none';
        showAppScreen();
        showToast(`Bienvenido ${userInput}`, 'success');
    } else {
        errorDiv.style.display = 'flex';
        lucide.createIcons();
    }
}

function handleLogout() {
    if (state.unsubscribe) state.unsubscribe();
    state.user = null;
    sessionStorage.removeItem('despacho_user');
    showLoginScreen();
    showToast('Sesión cerrada correctamente.', 'info');
}

function showLoginScreen() {
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('app-screen').style.display = 'none';
}

function showAppScreen() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('app-screen').style.display = 'flex';
    document.getElementById('user-display-name').innerHTML = `<i data-lucide="user-check"></i> ${state.user}`;
    lucide.createIcons();
    
    // Iniciar escucha en tiempo real de Firestore
    listenFirestore();
}

// ==========================================
// FIRESTORE EN TIEMPO REAL
// ==========================================
function listenFirestore() {
    const loadingState = document.getElementById('loading-state');
    loadingState.style.display = 'block';

    // Cancelar escucha anterior si existe
    if (state.unsubscribe) state.unsubscribe();

    state.unsubscribe = db.collection("instrumentos").onSnapshot((snapshot) => {
        let items = [];
        snapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data() });
        });

        state.items = items;
        loadingState.style.display = 'none';
        
        updateStats();
        renderItems();
    }, (error) => {
        console.error("Error al escuchar Firestore:", error);
        loadingState.style.display = 'none';
        showToast("⚠️ Error al sincronizar con la base de datos", "error");
    });
}

// ==========================================
// RENDERIZADO Y FILTRADO
// ==========================================
function updateStats() {
    let deposito = 0;
    let disponible = 0;
    let despachado = 0;

    state.items.forEach(item => {
        const est = (item.estado || '').toUpperCase();
        if (est.includes('DEPÓSITO') || est.includes('DEPOSITO')) deposito++;
        else if (est.includes('DISPONIBLE')) disponible++;
        else if (est.includes('DESPACHADO')) despachado++;
    });

    document.getElementById('count-deposito').innerText = deposito;
    document.getElementById('count-disponible').innerText = disponible;
    document.getElementById('count-despachado').innerText = despachado;
}

function filterItems() {
    return state.items.filter(item => {
        const query = state.search.toLowerCase();
        
        // Coincidencia de texto
        const matchSearch = query === '' ||
            (item.id || '').toLowerCase().includes(query) ||
            (item.instrumento || item.nombre || '').toLowerCase().includes(query) ||
            (item.marca || '').toLowerCase().includes(query) ||
            (item.modelo || '').toLowerCase().includes(query) ||
            (item.serie || '').toLowerCase().includes(query) ||
            (item.cliente || '').toLowerCase().includes(query) ||
            (item.certificado || '').toLowerCase().includes(query);

        // Coincidencia de Filtro Pill
        const est = (item.estado || '').toUpperCase();
        let matchFilter = true;

        if (state.filter === 'DEP') {
            matchFilter = est.includes('DEPÓSITO') || est.includes('DEPOSITO');
        } else if (state.filter === 'DISP') {
            matchFilter = est.includes('DISPONIBLE');
        } else if (state.filter === 'DESP') {
            matchFilter = est.includes('DESPACHADO');
        }

        return matchSearch && matchFilter;
    });
}

function renderItems() {
    const container = document.getElementById('instruments-container');
    const emptyState = document.getElementById('empty-state');
    const resultsCount = document.getElementById('results-count');

    const filtered = filterItems();
    resultsCount.innerText = filtered.length;

    if (filtered.length === 0) {
        container.innerHTML = '';
        emptyState.style.display = 'block';
        lucide.createIcons();
        return;
    }

    emptyState.style.display = 'none';

    container.innerHTML = filtered.map(item => {
        const est = (item.estado || 'EN DEPÓSITO').toUpperCase();
        let badgeClass = 'status-deposito';
        if (est.includes('DISPONIBLE')) badgeClass = 'status-disponible';
        else if (est.includes('DESPACHADO')) badgeClass = 'status-despachado';
        else if (est.includes('CERTIFICANDO')) badgeClass = 'status-certificando';

        const isDespachado = est.includes('DESPACHADO');

        return `
            <div class="card-instrument glass-panel">
                <div class="card-top">
                    <span class="badge-id">${item.id || 'N/A'}</span>
                    <span class="badge-status ${badgeClass}">${est}</span>
                </div>
                
                <div>
                    <h3 class="card-title">${escapeHtml(item.instrumento || item.nombre || 'Instrumento')}</h3>
                    <p class="card-subtitle">${escapeHtml(item.marca || '-')} ${escapeHtml(item.modelo || '-')}</p>
                </div>

                <div class="card-details">
                    <div class="detail-row">
                        <i data-lucide="hash"></i>
                        <span>Serie: <strong class="detail-value">${escapeHtml(item.serie || 'S/N')}</strong></span>
                    </div>
                    ${item.cliente ? `
                        <div class="detail-row">
                            <i data-lucide="building-2"></i>
                            <span>Cliente: <strong class="detail-value">${escapeHtml(item.cliente)}</strong></span>
                        </div>
                    ` : ''}
                    ${item.certificado ? `
                        <div class="detail-row">
                            <i data-lucide="award"></i>
                            <span>Certificado: <strong class="detail-value">${escapeHtml(item.certificado)}</strong></span>
                        </div>
                    ` : ''}
                    ${item.fecha_despacho ? `
                        <div class="detail-row">
                            <i data-lucide="clock"></i>
                            <span>Despachado: <strong class="detail-value">${escapeHtml(item.fecha_despacho)}</strong></span>
                        </div>
                    ` : ''}
                </div>

                <div class="card-actions">
                    <button class="btn ${isDespachado ? 'btn-outline' : 'btn-primary'} btn-block btn-despachar" 
                            data-id="${item.id}" 
                            ${isDespachado ? 'disabled' : ''}>
                        <i data-lucide="${isDespachado ? 'check-check' : 'truck'}"></i>
                        <span>${isDespachado ? 'Ya Despachado' : 'Registrar Despacho'}</span>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    lucide.createIcons();

    // Event listeners para los botones de despacho
    document.querySelectorAll('.btn-despachar:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => {
            const itemId = btn.getAttribute('data-id');
            openDespachoModal(itemId);
        });
    });
}

// ==========================================
// MODAL DE REGISTRO DE DESPACHO
// ==========================================
function openDespachoModal(itemId) {
    const item = state.items.find(x => x.id === itemId);
    if (!item) return;

    state.selectedItem = item;

    document.getElementById('modal-item-id').innerText = item.id;
    document.getElementById('modal-item-name').innerText = item.instrumento || item.nombre || 'Instrumento';
    document.getElementById('modal-item-details').innerText = `${item.marca || ''} ${item.modelo || ''} | N° Serie: ${item.serie || 'S/N'}`;
    
    document.getElementById('despacho-cliente').value = item.cliente || '';
    document.getElementById('despacho-observacion').value = '';

    document.getElementById('modal-despacho').style.display = 'flex';
    lucide.createIcons();
}

function closeDespachoModal() {
    document.getElementById('modal-despacho').style.display = 'none';
    state.selectedItem = null;
}

async function handleConfirmDespacho(e) {
    e.preventDefault();
    if (!state.selectedItem) return;

    const btnSubmit = document.getElementById('btn-submit-despacho');
    btnSubmit.disabled = true;
    btnSubmit.innerHTML = `<div class="spinner" style="width:16px;height:16px;margin:0;border-width:2px;"></div> Procesando...`;

    const itemId = state.selectedItem.id;
    const cliente = document.getElementById('despacho-cliente').value.trim();
    const observacion = document.getElementById('despacho-observacion').value.trim();
    const nowStr = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });

    const updateData = {
        estado: 'DESPACHADO',
        fecha_despacho: nowStr,
        despachado_por: state.user,
        cliente: cliente || state.selectedItem.cliente || '',
        observacion_despacho: observacion
    };

    try {
        // 1. Actualizar en Firestore
        await db.collection("instrumentos").doc(itemId).update(updateData);

        // 2. Sincronizar asíncronamente con Google Sheets si la API está configurada
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
            }).catch(err => console.error("Error al sync con Sheets:", err));
        }

        showToast(`✅ ${itemId} registrado como DESPACHADO.`, 'success');
        closeDespachoModal();
    } catch (err) {
        console.error("Error al actualizar despacho:", err);
        showToast("⚠️ Falla al registrar el despacho: " + err.toString(), 'error');
    } finally {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = `<i data-lucide="check-circle-2"></i> Confirmar Despacho`;
        lucide.createIcons();
    }
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function setupEventListeners() {
    // Form Login
    document.getElementById('form-login').addEventListener('submit', handleLogin);
    document.getElementById('btn-logout').addEventListener('click', handleLogout);

    // Búsqueda
    const searchInput = document.getElementById('search-input');
    const btnClearSearch = document.getElementById('btn-clear-search');

    searchInput.addEventListener('input', (e) => {
        state.search = e.target.value;
        btnClearSearch.style.display = state.search ? 'block' : 'none';
        renderItems();
    });

    btnClearSearch.addEventListener('click', () => {
        searchInput.value = '';
        state.search = '';
        btnClearSearch.style.display = 'none';
        renderItems();
    });

    // Refresh Manual
    document.getElementById('btn-refresh').addEventListener('click', () => {
        showToast('Sincronizando con Firestore...', 'info');
        listenFirestore();
    });

    // Filtros Pills
    document.getElementById('filter-pills').addEventListener('click', (e) => {
        const pill = e.target.closest('.pill');
        if (pill) {
            document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            state.filter = pill.getAttribute('data-filter');
            renderItems();
        }
    });

    // Modal Despacho
    document.getElementById('btn-close-despacho').addEventListener('click', closeDespachoModal);
    document.getElementById('btn-cancel-despacho').addEventListener('click', closeDespachoModal);
    document.getElementById('form-confirm-despacho').addEventListener('submit', handleConfirmDespacho);
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

// Toast helper
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
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
        toast.style.transition = 'all 0.3s';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
