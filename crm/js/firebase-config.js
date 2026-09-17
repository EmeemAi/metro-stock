// ==========================================
// METROCRM PRO - FIREBASE CONFIGURATION
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

let crmDb = null;
let isFirestoreAvailable = false;

try {
    if (typeof firebase !== 'undefined') {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        crmDb = firebase.firestore();
        isFirestoreAvailable = true;
        console.log("MetroCRM Pro: Firebase Firestore conectado exitosamente.");
    } else {
        console.warn("MetroCRM Pro: Firebase SDK no disponible globalmente. Operando en modo local.");
    }
} catch (e) {
    console.warn("MetroCRM Pro: Fallo de inicialización Firestore:", e);
    isFirestoreAvailable = false;
}
