# SV Postales 2025 API

Direcciones dependientes (Departamento → Municipio → Distrito → Código Postal) de El Salvador. **Creado por Francisco Alas**.

## Uso rápido (local)

```bash
npm i
npm run build:data
npm run dev
# http://localhost:3000/health
```

### Endpoints
- `GET /v1/departamentos`
- `GET /v1/municipios?departamento=San Salvador`
- `GET /v1/distritos?departamento=San Salvador&municipio=Soyapango`
- `GET /v1/postal?departamento=San Salvador&municipio=Soyapango&distrito=...`
- `GET /v1/tree`

## Despliegue en Vercel (desde GitHub)
1. Repo ya conectado. Solo sube estos archivos a **sv-postales-2025-api**.
2. Vercel usará `vercel.json` automáticamente y publicará tu API en `https://sv-postales-2025-api.vercel.app`.

## Datos
- Fuente CSV: `data/elsalvador.csv` (encabezados: `Departamento,Municipio,Distrito,CodigoPostal`).
- Compilado JSON: `data/elsalvador.json` (generado con `npm run build:data`).

## Licencia
MIT — © 2025 Francisco Alas
