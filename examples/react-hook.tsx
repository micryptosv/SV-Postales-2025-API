import { useEffect, useState } from 'react';

const API = 'https://sv-postales-2025-api.vercel.app';

export function useDireccionesSV() {
  const [departamentos, setDepartamentos] = useState<string[]>([]);
  const [municipios, setMunicipios] = useState<string[]>([]);
  const [distritos, setDistritos] = useState<string[]>([]);
  const [codigoPostal, setCodigoPostal] = useState<string>('');

  const [depto, setDepto] = useState<string>('');
  const [muni, setMuni] = useState<string>('');
  const [dist, setDist] = useState<string>('');

  useEffect(() => { fetch(`${API}/v1/departamentos`).then(r=>r.json()).then(setDepartamentos); }, []);

  useEffect(() => {
    setMunicipios([]); setMuni(''); setDistritos([]); setDist(''); setCodigoPostal('');
    if (!depto) return;
    fetch(`${API}/v1/municipios?departamento=${encodeURIComponent(depto)}`)
      .then(r=>r.json()).then(setMunicipios);
  }, [depto]);

  useEffect(() => {
    setDistritos([]); setDist(''); setCodigoPostal('');
    if (!depto || !muni) return;
    fetch(`${API}/v1/distritos?departamento=${encodeURIComponent(depto)}&municipio=${encodeURIComponent(muni)}`)
      .then(r=>r.json()).then(setDistritos);
  }, [depto, muni]);

  useEffect(() => {
    setCodigoPostal('');
    if (!depto || !muni || !dist) return;
    fetch(`${API}/v1/postal?departamento=${encodeURIComponent(depto)}&municipio=${encodeURIComponent(muni)}&distrito=${encodeURIComponent(dist)}`)
      .then(r=>r.json()).then(o => setCodigoPostal(o.codigo_postal || ''));
  }, [depto, muni, dist]);

  return { departamentos, municipios, distritos, codigoPostal, depto, setDepto, muni, setMuni, dist, setDist };
}
