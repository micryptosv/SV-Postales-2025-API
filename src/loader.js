import fs from 'fs';
import path from 'path';


export function loadData() {
const jsonPath = path.join(process.cwd(), 'data', 'elsalvador.json');
const raw = fs.readFileSync(jsonPath, 'utf8');
/** @type {{departamento:string, municipio:string, distrito:string, codigo_postal:string}[]} */
const rows = JSON.parse(raw);


// Normalización básica
const norm = (s) => s.normalize('NFC').trim();
for (const r of rows) {
r.departamento = norm(r.departamento);
r.municipio = norm(r.municipio);
r.distrito = norm(r.distrito);
r.codigo_postal = norm(r.codigo_postal);
}
return rows;
}
