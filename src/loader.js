const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

function loadData() {
  const jsonPath = path.join(__dirname, '../data/elsalvador.json');
  const csvPath = path.join(__dirname, '../data/elsalvador.csv');

  // Si el JSON existe, lo usa directamente
  if (fs.existsSync(jsonPath)) {
    return JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  }

  // Si no existe, genera el JSON desde el CSV
  if (fs.existsSync(csvPath)) {
    const csv = fs.readFileSync(csvPath, 'utf8');
    const records = parse(csv, { columns: true, skip_empty_lines: true, trim: true });
    const rows = records.map(r => ({
      departamento: r.Departamento,
      municipio: r.Municipio,
      distrito: r.Distrito,
      codigo_postal: r.CodigoPostal
    }));
    // Lo guarda para futuras ejecuciones (solo local)
    try {
      fs.writeFileSync(jsonPath, JSON.stringify(rows, null, 2), 'utf8');
    } catch (err) {
      console.log('⚠️ No se pudo guardar JSON (solo lectura en Vercel)');
    }
    return rows;
  }

  throw new Error('No se encontró data/elsalvador.json ni data/elsalvador.csv');
}

module.exports = { loadData };
