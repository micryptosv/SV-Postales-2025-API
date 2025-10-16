function buildIndexes(rows) {
  const departamentos = new Set();
  const muniByDepto = new Map(); // depto -> Set(municipios)
  const distByDeptoMuni = new Map(); // `${depto}|${muni}` -> Set(distritos)
  const postalByTriple = new Map(); // `${depto}|${muni}|${dist}` -> codigo

  const key = (...parts) => parts.map(p => p.toLowerCase()).join('|');

  for (const r of rows) {
    departamentos.add(r.departamento);

    if (!muniByDepto.has(r.departamento)) muniByDepto.set(r.departamento, new Set());
    muniByDepto.get(r.departamento).add(r.municipio);

    const dm = key(r.departamento, r.municipio);
    if (!distByDeptoMuni.has(dm)) distByDeptoMuni.set(dm, new Set());
    distByDeptoMuni.get(dm).add(r.distrito);

    postalByTriple.set(key(r.departamento, r.municipio, r.distrito), r.codigo_postal);
  }

  return {
    departamentos: [...departamentos].sort(),
    muniByDepto: new Map([...muniByDepto].map(([k, set]) => [k, [...set].sort()])),
    distByDeptoMuni: new Map([...distByDeptoMuni].map(([k, set]) => [k, [...set].sort()])),
    postalByTriple
  };
}
module.exports = { buildIndexes };
