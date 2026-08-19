# MetroML Despacho 📦

Aplicación web independiente, ligera y optimizada para dispositivos móviles (PWA) destinada al personal de depósito de **SchwyzLab & CR MEDICION**.

Permite a los operadores buscar instrumentos por código, serie, marca o cliente y registrar la salida/despacho de equipos en tiempo real.

---

## 🚀 Características

- **Autenticación con PIN/Usuario**: Acceso seguro (`user1` / `1297`).
- **Base de Datos en Tiempo Real**: Conectado a **Firebase Firestore** (`metromlstock`).
- **Sincronización Dual**: Refleja inmediatamente los cambios en la app principal ERP (`MetroMLStock`) y en Google Sheets.
- **Búsqueda & Filtros Instantáneos**: Búsqueda por ID, modelo, serie o cliente con filtros por pestañas (*Disponibles*, *Despachados*, *Todos*).
- **Gestión de Salidas (Despacho)**: Registro inmediato de certificado de calibración y fecha de salida.
- **Gestión de Devoluciones (Retorno a Stock)**: Permite devolver equipos despachados que no pudieron ser entregados, reintegrándolos automáticamente al estado `DISPONIBLE` con registro de motivo y fecha.
- **Diseño Ultra-rápido & Táctil**: Dark mode con interfaz de alta legibilidad optimizada para celulares y tablets.

---

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3 (Vanilla), JavaScript (ES6+), Lucide Icons.
- **Backend / Database**: Firebase Firestore (v10 compat SDK) + Google Apps Script Webhook.

---

## ⚙️ Estructura del Proyecto

```
/despacho
  ├── index.html     # Interfaz principal y modal de despacho
  ├── styles.css     # Sistema de diseño y estilos responsive
  ├── app.js         # Lógica de autenticación, Firestore realtime y despacho
  └── README.md      # Documentación del proyecto
```
