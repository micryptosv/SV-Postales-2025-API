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
GET https://sv-postales-2025-api.vercel.app/v1/distritos?departamento=San%20Salvador&municipio=San%20Salvador%20Este

# Obtener código postal
GET https://sv-postales-2025-api.vercel.app/v1/postal?departamento=San%20Salvador&municipio=San%20Salvador%20Este&distrito=soyapango

# Ver toda la estructura anidada (departamentos → municipios → distritos)
GET https://sv-postales-2025-api.vercel.app/v1/tree


Despartamento,municipio,distrito,codigo postal
Ahuachapán,Ahuachapán Norte,Atiquizaya,02103
Ahuachapán,Ahuachapán Norte,El Refugio,02107
Ahuachapán,Ahuachapán Norte,San Lorenzo,02115
Ahuachapán,Ahuachapán Norte,Turín,02118
Ahuachapán,Ahuachapán Centro,Ahuachapán,02101
Ahuachapán,Ahuachapán Centro,Apaneca,02102
Ahuachapán,Ahuachapán Centro,Concepción de Ataco,02106
Ahuachapán,Ahuachapán Centro,Tacuba,02117
Ahuachapán,Ahuachapán Sur,Guaymango,02108
Ahuachapán,Ahuachapán Sur,Jujutla,02109
Ahuachapán,Ahuachapán Sur,San Francisco Menéndez,02113
Ahuachapán,Ahuachapán Sur,San Pedro Puxtla,02116
San Salvador,San Salvador Norte,Aguilares,01122
San Salvador,San Salvador Norte,El Paisnal,01124
San Salvador,San Salvador Norte,Guazapa,01125
San Salvador,San Salvador Oeste,Apopa,01123
San Salvador,San Salvador Oeste,Nejapa,01126
San Salvador,San Salvador Este,Ilopango,01117
San Salvador,San Salvador Este,San Martín,01129
San Salvador,San Salvador Este,Soyapango,01116
San Salvador,San Salvador Este,Tonacatepeque,01132
San Salvador,San Salvador Centro,Ayutuxtepeque,01121
San Salvador,San Salvador Centro,Mejicanos,01120
San Salvador,San Salvador Centro,San Salvador,01101
San Salvador,San Salvador Centro,Cuscatancingo,01119
San Salvador,San Salvador Centro,Ciudad Delgado,01118
San Salvador,San Salvador Sur,Panchimalco,01127
San Salvador,San Salvador Sur,Rosario de Mora,01128
San Salvador,San Salvador Sur,San Marcos,01115
San Salvador,San Salvador Sur,Santo Tomás,01131
San Salvador,San Salvador Sur,Santiago Texacuangos,01130
La Libertad,La Libertad Norte,Quezaltepeque,01515
La Libertad,La Libertad Norte,San Matías,01518
La Libertad,La Libertad Norte,San Pablo Tacachico,01519
La Libertad,La Libertad Centro,San Juan Opico,01514
La Libertad,La Libertad Centro,Ciudad Arce,01504
La Libertad,La Libertad Oeste,Colón,01512
La Libertad,La Libertad Oeste,Jayaque,01509
La Libertad,La Libertad Oeste,Sacacoyo,01516
La Libertad,La Libertad Oeste,Tepecoyo,01524
La Libertad,La Libertad Oeste,Talnique,01521
La Libertad,La Libertad Este,Antiguo Cuscatlán,01502
La Libertad,La Libertad Este,Huizúcar,01508
La Libertad,La Libertad Este,Nuevo Cuscatlán,01513
La Libertad,La Libertad Este,San José Villanueva,01517
La Libertad,La Libertad Este,Zaragoza,01525
La Libertad,La Libertad Costa,Chiltiupán,01507
La Libertad,La Libertad Costa,Jicalapa,01510
La Libertad,La Libertad Costa,La Libertad,01511
La Libertad,La Libertad Costa,Tamanique,01522
La Libertad,La Libertad Costa,Teotepeque,01523
La Libertad,La Libertad Sur,Comasagua,01506
La Libertad,La Libertad Sur,Santa Tecla,01501
Chalatenango,Chalatenango Norte,La Palma,01314
Chalatenango,Chalatenango Norte,Citalá,01306
Chalatenango,Chalatenango Norte,San Ignacio,01329
Chalatenango,Chalatenango Centro,Nueva Concepción,01319
Chalatenango,Chalatenango Centro,Tejutla,01335
Chalatenango,Chalatenango Centro,La Reina,01315
Chalatenango,Chalatenango Centro,Agua Caliente,01302
Chalatenango,Chalatenango Centro,Dulce Nombre de María,01309
Chalatenango,Chalatenango Centro,El Paraíso,01312
Chalatenango,Chalatenango Centro,San Francisco Morazán,01328
Chalatenango,Chalatenango Centro,San Rafael,01333
Chalatenango,Chalatenango Centro,Santa Rita,01334
Chalatenango,Chalatenango Centro,San Fernando,01326
Chalatenango,Chalatenango Sur,Chalatenango,01301
Chalatenango,Chalatenango Sur,Arcatao,01303
Chalatenango,Chalatenango Sur,Azacualpa,01304
Chalatenango,Chalatenango Sur,Comalapa,01307
Chalatenango,Chalatenango Sur,Concepción Quezaltepeque,01308
Chalatenango,Chalatenango Sur,El Carrizal,01311
Chalatenango,Chalatenango Sur,La Laguna,01313
Chalatenango,Chalatenango Sur,Las Vueltas,01317
Chalatenango,Chalatenango Sur,Nombre de Jesús,01318
Chalatenango,Chalatenango Sur,Nueva Trinidad,01320
Chalatenango,Chalatenango Sur,Ojos de Agua,01321
Chalatenango,Chalatenango Sur,Potonico,01322
Chalatenango,Chalatenango Sur,San Antonio de La Cruz,01324
Chalatenango,Chalatenango Sur,San Antonio Los Ranchos,01325
Chalatenango,Chalatenango Sur,San Francisco Lempa,01327
Chalatenango,Chalatenango Sur,San Isidro Labrador,01330
Chalatenango,Chalatenango Sur,San José Cancasque,01305
Chalatenango,Chalatenango Sur,San Miguel de Mercedes,01332
Chalatenango,Chalatenango Sur,San José Las Flores,01316
Chalatenango,Chalatenango Sur,San Luis del Carmen,01331
Cuscatlán,Cuscatlán Norte,Suchitoto,01415
Cuscatlán,Cuscatlán Norte,San José Guayabal,01409
Cuscatlán,Cuscatlán Norte,Oratorio de Concepción,01406
Cuscatlán,Cuscatlán Norte,San Bartolomé Perulapán,01407
Cuscatlán,Cuscatlán Norte,San Pedro Perulapán,01410
Cuscatlán,Cuscatlán Sur,Cojutepeque,01401
Cuscatlán,Cuscatlán Sur,San Rafael Cedros,01411
Cuscatlán,Cuscatlán Sur,Candelaria,01402
Cuscatlán,Cuscatlán Sur,Monte San Juan,01405
Cuscatlán,Cuscatlán Sur,El Carmen,01403
Cuscatlán,Cuscatlán Sur,San Cristóbal,01408
Cuscatlán,Cuscatlán Sur,Santa Cruz Michapa,01414
Cuscatlán,Cuscatlán Sur,San Ramón,01412
Cuscatlán,Cuscatlán Sur,El Rosario,01404
Cuscatlán,Cuscatlán Sur,Santa Cruz Analquito,01413
Cuscatlán,Cuscatlán Sur,Tenancingo,01416
Cabañas,Cabañas Este,Sensuntepeque,01201
Cabañas,Cabañas Este,Victoria,01210
Cabañas,Cabañas Este,Dolores,01209
Cabañas,Cabañas Este,Guacotecti,01203
Cabañas,Cabañas Este,San Isidro,01207
Cabañas,Cabañas Oeste,Ilobasco,01204
Cabañas,Cabañas Oeste,Tejutepeque,01208
Cabañas,Cabañas Oeste,Jutiapa,01206
Cabañas,Cabañas Oeste,Cinquera,01202
La Paz,La Paz Oeste,Cuyultitán,01603
La Paz,La Paz Oeste,Olocuilta,01608
La Paz,La Paz Oeste,San Juan Talpa,01614
La Paz,La Paz Oeste,San Luis Talpa,01616
La Paz,La Paz Oeste,San Pedro Masahuat,01618
La Paz,La Paz Oeste,Tapalhuaca,01623
La Paz,La Paz Oeste,San Francisco Chinameca,01612
La Paz,La Paz Centro,El Rosario,01604
La Paz,La Paz Centro,Jerusalén,01605
La Paz,La Paz Centro,Mercedes La Ceiba,01607
La Paz,La Paz Centro,Paraíso de Osorio,01609
La Paz,La Paz Centro,San Antonio Masahuat,01610
La Paz,La Paz Centro,San Emigdio,01611
La Paz,La Paz Centro,San Juan Tepezontes,01615
La Paz,La Paz Centro,San Luis La Herradura,01606
La Paz,La Paz Centro,San Miguel Tepezontes,01617
La Paz,La Paz Centro,San Pedro Nonualco,01619
La Paz,La Paz Centro,Santa María Ostuma,01621
La Paz,La Paz Centro,Santiago Nonualco,01622
La Paz,La Paz Este,San Juan Nonualco,01613
La Paz,La Paz Este,San Rafael Obrajuelo,01620
La Paz,La Paz Este,Zacatecoluca,01601
La Unión,La Unión Norte,Anamorós,03104
La Unión,La Unión Norte,Bolívar,03105
La Unión,La Unión Norte,Concepción de Oriente,03106
La Unión,La Unión Norte,El Sauce,03109
La Unión,La Unión Norte,Lislique,03112
La Unión,La Unión Norte,Nueva Esparta,03114
La Unión,La Unión Norte,Pasaquina,03116
La Unión,La Unión Norte,Polorós,03117
La Unión,La Unión Norte,San José La Fuente,03120
La Unión,La Unión Norte,Santa Rosa de Lima,03121
La Unión,La Unión Sur,Conchagua,03107
La Unión,La Unión Sur,El Carmen,03108
La Unión,La Unión Sur,Intipucá,03111
La Unión,La Unión Sur,La Unión,03101
La Unión,La Unión Sur,Meanguera del Golfo,03113
La Unión,La Unión Sur,San Alejo,03119
La Unión,La Unión Sur,Yayantique,03122
La Unión,La Unión Sur,Yucuaiquín,03123
Usulután,Usulután Norte,Santiago de María,03424
Usulután,Usulután Norte,Alegría,03404
Usulután,Usulután Norte,Berlín,03403
Usulután,Usulután Norte,Mercedes Umaña,03412
Usulután,Usulután Norte,Jucuapa,03410
Usulután,Usulután Norte,El Triunfo,03406
Usulután,Usulután Norte,Estanzuelas,03408
Usulután,Usulután Norte,San Buenaventura,03419
Usulután,Usulután Norte,Nueva Granada,03413
Usulután,Usulután Este,Usulután,03401
Usulután,Usulután Este,Jucuarán,03411
Usulután,Usulután Este,San Dionisio,03420
Usulután,Usulután Este,Concepción Batres,03405
Usulután,Usulután Este,Santa María,03423
Usulután,Usulután Este,Ozatlán,03415
Usulután,Usulután Este,Tecapán,03426
Usulután,Usulután Este,Santa Elena,03422
Usulután,Usulután Este,California,03404
Usulután,Usulután Este,Ereguayquín,03407
Usulután,Usulután Oeste,Jiquilisco,03409
Usulután,Usulután Oeste,Puerto El Triunfo,03417
Usulután,Usulután Oeste,San Agustín,03418
Usulután,Usulután Oeste,San Francisco Javier,03421
Sonsonate,Sonsonate Norte,Juayúa,02307
Sonsonate,Sonsonate Norte,Nahuizalco,02311
Sonsonate,Sonsonate Norte,Salcoatitán,02313
Sonsonate,Sonsonate Norte,Santa Catarina Masahuat,02317
Sonsonate,Sonsonate Centro,Sonsonate,02301
Sonsonate,Sonsonate Centro,Sonzacate,02320
Sonsonate,Sonsonate Centro,Nahulingo,02312
Sonsonate,Sonsonate Centro,San Antonio del Monte,02314
Sonsonate,Sonsonate Centro,Santo Domingo de Guzmán,02319
Sonsonate,Sonsonate Este,Izalco,02306
Sonsonate,Sonsonate Este,Armenia,02303
Sonsonate,Sonsonate Este,Caluco,02304
Sonsonate,Sonsonate Este,San Julián,02316
Sonsonate,Sonsonate Este,Cuisnahuat,02305
Sonsonate,Sonsonate Este,Santa Isabel Ishuatán,02318
Sonsonate,Sonsonate Oeste,Acajutla,02302
Santa Ana,Santa Ana Norte,Masahuat,02210
Santa Ana,Santa Ana Norte,Metapán,02211
Santa Ana,Santa Ana Norte,Santa Rosa Guachipilín,02216
Santa Ana,Santa Ana Norte,Texistepeque,02218
Santa Ana,Santa Ana Centro,Santa Ana,02201
Santa Ana,Santa Ana Este,Coatepeque,02204
Santa Ana,Santa Ana Este,El Congo,02207
Santa Ana,Santa Ana Oeste,Candelaria de la Frontera,02203
Santa Ana,Santa Ana Oeste,Chalchuapa,02205
Santa Ana,Santa Ana Oeste,El Porvenir,02208
Santa Ana,Santa Ana Oeste,San Antonio Pajonal,02212
Santa Ana,Santa Ana Oeste,San Sebastián Salitrillo,02215
Santa Ana,Santa Ana Oeste,Santiago de La Frontera,02217
San Vicente,San Vicente Norte,Apastepeque,01702
San Vicente,San Vicente Norte,Santa Clara,01709
San Vicente,San Vicente Norte,San Ildefonso,01706
San Vicente,San Vicente Norte,San Esteban Catarina,01705
San Vicente,San Vicente Norte,San Sebastián,01708
San Vicente,San Vicente Norte,San Lorenzo,01707
San Vicente,San Vicente Norte,Santo Domingo,01710
San Vicente,San Vicente Sur,San Vicente,01701
San Vicente,San Vicente Sur,Guadalupe,01703
San Vicente,San Vicente Sur,Verapaz,01713
San Vicente,San Vicente Sur,Tepetitán,01712
San Vicente,San Vicente Sur,Tecoluca,01711
San Vicente,San Vicente Sur,San Cayetano Istepeque,01704
San Miguel,San Miguel Norte,Ciudad Barrios,03303
San Miguel,San Miguel Norte,Sesori,03323
San Miguel,San Miguel Norte,Nuevo Edén de San Juan,03314
San Miguel,San Miguel Norte,San Gerardo,03318
San Miguel,San Miguel Norte,San Luis de La Reina,03320
San Miguel,San Miguel Norte,Carolina,03302
San Miguel,San Miguel Norte,San Antonio del Mosco,03316
San Miguel,San Miguel Norte,Chapeltique,03305
San Miguel,San Miguel Centro,San Miguel,03301
San Miguel,San Miguel Centro,Comacarán,03304
San Miguel,San Miguel Centro,Uluazapa,03324
San Miguel,San Miguel Centro,Moncagua,03312
San Miguel,San Miguel Centro,Quelepa,03315
San Miguel,San Miguel Centro,Chirilagua,03307
San Miguel,San Miguel Oeste,Chinameca,03306
San Miguel,San Miguel Oeste,Nueva Guadalupe,03313
San Miguel,San Miguel Oeste,Lolotique,03311
San Miguel,San Miguel Oeste,San Jorge,03319
San Miguel,San Miguel Oeste,San Rafael Oriente,03322
San Miguel,San Miguel Oeste,El Tránsito,03309
Morazán,Morazán Norte,Arambala,03202
Morazán,Morazán Norte,Cacaopera,03203
Morazán,Morazán Norte,Corinto,03204
Morazán,Morazán Norte,El Rosario,03208
Morazán,Morazán Norte,Joateca,03211
Morazán,Morazán Norte,Jocoaitique,03212
Morazán,Morazán Norte,Meanguera,03215
Morazán,Morazán Norte,Perquín,03217
Morazán,Morazán Norte,San Fernando,03219
Morazán,Morazán Norte,San Isidro,03220
Morazán,Morazán Norte,Torola,03224
Morazán,Morazán Sur,Chilanga,03205
Morazán,Morazán Sur,Delicias de Concepción,03206
Morazán,Morazán Sur,El Divisadero,03207
Morazán,Morazán Sur,Gualococti,03209
Morazán,Morazán Sur,Guatajiagua,03210
Morazán,Morazán Sur,Jocoro,03213
Morazán,Morazán Sur,Lolotiquillo,03214
Morazán,Morazán Sur,Osicala,03216
Morazán,Morazán Sur,San Carlos,03218
Morazán,Morazán Sur,San Francisco Gotera,03201
Morazán,Morazán Sur,San Simón,03221
Morazán,Morazán Sur,Sensembra,03222
Morazán,Morazán Sur,Sociedad,03223
Morazán,Morazán Sur,Yamabal,03225
Morazán,Morazán Sur,Yoloaiquín,03226

