import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const csvPath = path.join(process.cwd(), 'data', 'elsalvador.csv');
const outPath = path.join(process.cwd(), 'data', 'elsalvador.json');

const csv = fs.readFileSync(csvPath, 'utf8');
const records = parse(csv, { columns: true, skip_empty_lines: true, trim: true });

const rows = records.map(r => ({
  departamento: r.Departamento,
  municipio: r.Municipio,
  distrito: r.Distrito,
  codigo_postal: r.CodigoPostal
}));

fs.writeFileSync(outPath, JSON.stringify(rows, null, 2), 'utf8');
console.log(`OK → ${outPath} (${rows.length} filas)`);
