/* =========================================================
   config.js
   Configuración general del widget Tarifas UNH
   ========================================================= */

/**
 * URL pública del Google Sheets (formato CSV)
 * Hoja: inventario
 * Columnas esperadas:
 * origen | unidad | cxc | area | proceso | tarifa | monto | requisitos | correo | celular
 */

const API_URL = "https://script.google.com/macros/s/AKfycbxaCInZHVKDP9k2xZFJQAwS33Xd9tWzDUgokiekMAcoT-6Wc7uIYp0KmHEteLtlE7RilQ/exec";

/**
 * Configuración general del widget
 */
const CONFIG = {
  PAGE_SIZE: 21,
  MONTO_MIN_DEFAULT: 0,
  MONTO_MAX_DEFAULT: 3000,
  PAIS_TELEFONO: "51", // Perú
};
