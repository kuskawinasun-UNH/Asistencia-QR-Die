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

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ9zCIn-z3eqQvCZQ529J888MMd084OsBFbyf_qzctbNS_t0JUvJdfJkXtKAIbYZrlVrydPIYaqdugN/pub?output=csv";

/**
 * Configuración general del widget
 */
const CONFIG = {
  PAGE_SIZE: 21,
  MONTO_MIN_DEFAULT: 0,
  MONTO_MAX_DEFAULT: 3000,
  PAIS_TELEFONO: "51", // Perú
};
