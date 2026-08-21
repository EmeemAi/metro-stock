# 📦 Instructivo de Operación: Registro de Despacho de Equipos
**SchwyzLab & CR MEDICION — Sistema MetroML Despacho**

---

Este instructivo detalla el paso a paso para que el personal de depósito y laboratorio registre la salida y despacho de instrumentos de medición de forma rápida y sin errores.

---

## 📱 Paso 1: Acceder a la Aplicación

Puedes ingresar al sistema de despacho desde tu celular, tablet o computadora de dos formas:

1. **Escanear el Código QR**: Apunta la cámara de tu celular al código QR pegado en el sector de despacho/depósito.
2. **Ingresar al Enlace Web**:
   👉 **`https://emeemai.github.io/metro-stock/despacho/`**

> 💡 **Tip para el celular**: En el navegador (Chrome o Safari), toca los tres puntos (o botón compartir) y selecciona **"Agregar a pantalla principal"**. Así tendrás un ícono directo como si fuera una app instalada.

---

## 🔍 Paso 2: Buscar el Equipo a Despachar

1. En la barra superior de búsqueda, escribe cualquiera de los siguientes datos del equipo:
   * **Número de Inventario** (ej. `INST-15586`)
   * **Nombre del Instrumento** (ej. `Calibre`, `Decibelímetro`, `Luxómetro`)
   * **Marca o Modelo** (ej. `SCHWYZ`, `EXTECH`, `ND9`)
   * **Número de Serie** (ej. `17113143`)
2. La lista filtrará automáticamente y mostrará únicamente los equipos que están **DISPONIBLES** para entrega.
3. Verifica que el **N° de Inventario** de la tarjeta coincida con la etiqueta física del equipo.

---

## ✍️ Paso 3: Ingresar los Datos del Despacho

1. En la tarjeta del equipo que vas a entregar, presiona el botón azul **"Registrar Despacho"**.
2. Se abrirá una ventana emergente donde debes completar:
   * **Número de Certificado**: Escribe el código del certificado de calibración emitido (ej. `202608-DE-15681`).
   * **Fecha de Calibración / Salida**: Selecciona la fecha correspondiente (por defecto viene seleccionada la fecha de hoy).
3. Presiona el botón **"Revisar y Continuar"**.

---

## ✅ Paso 4: Confirmar los Datos

1. Aparecerá una pantalla de **resumen y verificación**:
   * Revisa atentamente que el **N° de Inventario**, el **N° de Certificado** y la **Fecha** sean los correctos.
2. **Si hay algún error de tipeo**: Presiona **"Modificar"** para corregir el dato.
3. **Si todo es correcto**: Presiona el botón verde **"Confirmar Despacho"**.

---

## 🎉 Paso 5: Registro Exitoso

* Aparecerá una notificación verde en pantalla confirmando el despacho.
* El instrumento se guardará automáticamente en **Firebase** y en la planilla de **Google Sheets**.
* El equipo desaparecerá de la lista de disponibles para evitar despachos duplicados.

---

*SchwyzLab Laboratorio de Metrología | CR MEDICION*
