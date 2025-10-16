import express from 'express';

export function buildRouter(indexes) {
  const router = express.Router();

  router.get('/health', (req, res) => {
    res.json({ ok: true, message: 'SV Postales 2025 API activa' });
  });

  // GET /v1/departamentos
  router.get('/v1/departamentos', (req, res) => {
    res.json(indexes.departamentos);
  });

  // GET /v1/municipios?departamento=San Salvador
  router.get('/v1/municipios', (req, res) => {
    const d = req.query.departamento;
    if (!d) return res.status(400).json({ error: 'Falta query param: departamento' });
    const list = indexes.muniByDepto.get(d);
    if (!list) return res.status(404).json({ error: 'Departamento no encontrado' });
    res.json(list);
  });

  // GET /v1/distritos?departamento=...&municipio=...
  router.get('/v1/distritos', (req, res) => {
    const { departamento, municipio } = req.query;
    if (!departamento || !municipio) {
      return res.status(400).json({ error: 'Faltan query params: departamento y municipio' });
    }
    const key = `${departamento.toLowerCase()}|${municipio.toLowerCase()}`;
    const list = indexes.distByDeptoMuni.get(key);
    if (!list) return res.status(404).json({ error: 'Par (departamento, municipio) no encontrado' });
    res.json(list);
  });

  // GET /v1/postal?departamento=...&municipio=...&distrito=...
  router.get('/v1/postal', (req, res) => {
    const { departamento, municipio, distrito } = req.query;
    if (!departamento || !municipio || !distrito) {
      return res.status(400).json({ error: 'Faltan query params: departamento, municipio y distrito' });
    }
    const key = `${departamento.toLowerCase()}|${municipio.toLowerCase()}|${distrito.toLowerCase()}`;
    const code = indexes.postalByTriple.get(key);
    if (!code) return res.status(404).json({ error: 'Combinación no encontrada' });
    res.json({ codigo_postal: code });
  });

  // GET /v1/tree  → estructura anidada completa
  router.get('/v1/tree', (req, res) => {
    const tree = {};
    for (const d of indexes.departamentos) {
      tree[d] = {};
      const municipios = indexes.muniByDepto.get(d) || [];
      for (const m of municipios) {
        const key = `${d.toLowerCase()}|${m.toLowerCase()}`;
        tree[d][m] = { distritos: indexes.distByDeptoMuni.get(key) || [] };
      }
    }
    res.json(tree);
  });

  return router;
}
