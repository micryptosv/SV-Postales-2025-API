# 🇸🇻 SV Postales 2025 API

API pública gratuita de **direcciones dependientes de El Salvador (2025)**  
(Departamento → Municipio → Distrito → Código Postal).  
**Creado por [Francisco Alas](https://github.com/FranciscoAlas)**  

---

## 🚀 Uso rápido (sin instalación)

Solo copia y pega en tu navegador o Postman:

```bash
# Verificar estado de la API
GET https://sv-postales-2025-api.vercel.app/health

# Listar departamentos
GET https://sv-postales-2025-api.vercel.app/v1/departamentos

# Listar municipios de un departamento
GET https://sv-postales-2025-api.vercel.app/v1/municipios?departamento=San%20Salvador

# Listar distritos de un municipio
GET https://sv-postales-2025-api.vercel.app/v1/distritos?departamento=San%20Salvador&municipio=Soyapango

# Obtener código postal
GET https://sv-postales-2025-api.vercel.app/v1/postal?departamento=San%20Salvador&municipio=Soyapango&distrito=Bosques%20de%20Prusia

# Ver toda la estructura anidada (departamentos → municipios → distritos)
GET https://sv-postales-2025-api.vercel.app/v1/tree
