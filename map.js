//let map = L.map('map').setView([-15.488396, -70.167500], 8)

//L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { foo: 'bar', attribution: '&copy; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>' }).addTo(map);

//marcadores

//var marcador = L.marker([-15.72133, -70.70477], {
//draggable: true,
//title: "Presa Lagunillas",



//}).addTo(map).bindPopup("<h1>Presa Lagunillas</h1> <p> Reservorio Lagunillas 580 MM3 </p><img src='./img/presa.jpg'/> <a href='https://datastudio.google.com/u/2/reporting/3dc19c28-3194-448d-9bcd-fa0bc7b20a7a/page/qX5SC'target='blank'>Datos Aqui</a> <iframe width='600' height='500' src='https://datastudio.google.com/embed/reporting/8d756330-5145-4e50-a8cf-7db63867695b/page/qX5SC' frameborder='0' style='border:0' allowfullscreen></iframe>");




// Configuracion del Marcador
var marcador_rojo = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    iconSize: [20, 33], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62], // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marcador_Amarillo = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
    iconSize: [20, 33], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62], // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marcador_Verde = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
    iconSize: [22, 33], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62], // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});




// Varios Mapas Base 
var Google = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', { foo: 'bar', attribution: '&copy; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>' }),
    OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }),
    CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    });

// Varios Marcadores segun tipo (Proyectos)
var Urinsaya = L.marker([-14.269265, -69.986970], {
        icon: marcador_rojo,
        draggable: false,
        title: "MEJORAMIENTO DEL SISTEMA DE RIEGO DEL COMITE DE REGANTES URINSAYA",
    }).bindPopup("<h2> <center> MEJORAMIENTO DEL SISTEMA DE RIEGO DEL COMITE DE REGANTES URINSAYA, DISTRITO DE CRUCERO - CARABAYA - PUNO </center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2237500</td> <td class='tg-wd1d'>11,692962.23</td> <td class='tg-wd1d'>92.5%</td> <td class='tg-wd1d'>Culminado / Pendiente a Transferir</td> <td class='tg-wd1d'>360</td> <td class='tg-wd1d'>1240 productores</td> <td class='tg-wd1d'>Crucero - Carabaya - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/formato/verFichaSNIP/183699/0/0'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table>", { maxWidth: "auto" }),
    huancarani = L.marker([-14.811686, -70.183354], {
        icon: marcador_rojo,
        draggable: false,
        title: "MEJORAMIENTO Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO ROSARIO HUANCARANI",
    }).bindPopup("<h2> <center> MEJORAMIENTO Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO ROSARIO HUANCARANI DISTRITO DE AZANGARO, PROVINCIA DE AZANGARO, REGION PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2273604</td> <td class='tg-wd1d'>6,740264.21</td> <td class='tg-wd1d'>99.27%</td> <td class='tg-wd1d'>Culminado / Pendiente a Transferir</td> <td class='tg-wd1d'>300</td> <td class='tg-wd1d'>2570 productores</td> <td class='tg-wd1d'>Crucero - Carabaya - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/formato/verFichaSNIP/320519/0/0'target='blank'>Click AquI</a><br></td> </tr> </tbody> </table> ", { maxWidth: "auto" }),
    sucre = L.marker([-14.964020, -70.891904], {
        icon: marcador_rojo,
        draggable: false,
        title: "INSTALACION Y MEJORAMIENTO DEL SISTEMA DE RIEGO SUCRE",
    }).bindPopup("<h2> <center> INSTALACION Y MEJORAMIENTO DEL SISTEMA DE RIEGO SUCRE, DISTRITO DE LLALLI - MELGAR - PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2209914</td> <td class='tg-wd1d'>8,637,563.52</td> <td class='tg-wd1d'>39.91%</td> <td class='tg-wd1d'>Ejecución</td> <td class='tg-wd1d'>240</td> <td class='tg-wd1d'>750 productores</td> <td class='tg-wd1d'>Llalli - Melgar - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/formato/verFichaSNIP/193205/0/0'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table> ", {
        maxWidth: "auto"
    }),
    llallimayo = L.marker([-14.970754, -70.907915], {
        icon: marcador_rojo,
        draggable: false,
        title: "MEJORAMIENTO DEL SISTEMA DE RIEGO MENOR LLALLIMAYO",
    }).bindPopup("<h2> <center> MEJORAMIENTO DEL SISTEMA DE RIEGO MENOR LLALLIMAYO A NIVEL DE LATERALES DEL, DISTRITO DE LLALLI - MELGAR - PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2267881</td> <td class='tg-wd1d'>4,788,431.14</td> <td class='tg-wd1d'>0%</td> <td class='tg-wd1d'>Ejecución</td> <td class='tg-wd1d'>180</td> <td class='tg-wd1d'>224 productores</td> <td class='tg-wd1d'>Llalli - Melgar - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/formato/verFichaSNIP/318531/0/0'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table>", {
        maxWidth: "auto"
    }),
    jilas = L.marker([-14.674447, -70.362794], {
        icon: marcador_rojo,
        draggable: false,
        title: "MEJORAMIENTO DE LOS SERVICIOS DE PROTECCION DE LAS RIVERAS DEL RIO CRUCERO EN JILA SAN GERNOMINO, JILA CENTRAL, JILA HUANCASAYANI Y SANTA CRUZ DE MACHARIRI",
    }).bindPopup("<h2> <center>MEJORAMIENTO DE LOS SERVICIOS DE PROTECCION DE LAS RIVERAS DEL RIO CRUCERO EN JILA SAN GERNOMINO, JILA CENTRAL, JILA HUANCASAYANI Y SANTA CRUZ DE MACHARIRI, DISTRITO DE ASILLO - AZANGARO - PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2267881</td> <td class='tg-wd1d'>4,788,431.14</td> <td class='tg-wd1d'>60.85%</td> <td class='tg-wd1d'>Ejecución</td> <td class='tg-wd1d'>180</td> <td class='tg-wd1d'>224 productores</td> <td class='tg-wd1d'>Llalli - Melgar - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/formato/verFichaSNIP/318531/0/0'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table>", {
        maxWidth: "auto"
    }),
    Viluyo_lara = L.marker([-16.176941, -70.090705], {
        icon: marcador_Amarillo,
        draggable: false,
        title: "CREACION Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO VILUYO-LARAQUERI",
    }).bindPopup("<h2> <center>CREACION Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO VILUYO-LARAQUERI - DISTRITO PICHACANI, PROVINCIA PUNO, REGION PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2314455</td> <td class='tg-wd1d'>3,343,244.00</td> <td class='tg-wd1d'>100%</td> <td class='tg-wd1d'>Expediente Tecnico</td> <td class='tg-wd1d'>180</td> <td class='tg-wd1d'>7238 productores</td> <td class='tg-wd1d'>Pichacani - Puno - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/formato/verFichaSNIP/76828/0/0'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table> ", {
        maxWidth: "auto"
    }),
    paylla_mira = L.marker([-14.944237, -70.873373], {
        icon: marcador_Amarillo,
        draggable: false,
        title: "MEJORAMIENTO DEL SERVICIO DE AGUA PARA RIEGO EN LOS SECTORES CENTRO PAYLLA Y MIRAFLORES",
    }).bindPopup("<h2> <center>MEJORAMIENTO DEL SERVICIO DE AGUA PARA RIEGO EN LOS SECTORES CENTRO PAYLLA Y MIRAFLORES DEL DISTRITO DE UMACHIRI - PROVINCIA DE MELGAR - DEPARTAMENTO DE PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2342780</td> <td class='tg-wd1d'>1,016,444.00</td> <td class='tg-wd1d'>100%</td> <td class='tg-wd1d'>Expediente Tecnico Observado</td> <td class='tg-wd1d'>135</td> <td class='tg-wd1d'>239 productores</td> <td class='tg-wd1d'>Umachiri - Melgar - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/formato/verProyecto/82723'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table> ", {
        maxWidth: "auto"
    }),
    Kcatawi = L.marker([-14.931156, -70.852839], {
        icon: marcador_Amarillo,
        draggable: false,
        title: "MEJORAMIENTO DEL SERVICIO DE AGUA PARA RIEGO, EN LOS SECTORES DE KCATAWI, CCOTAMAMANI, PHUSUMA Y NUEVO AMANECER SORA MULLANI",
    }).bindPopup("<h2> <center>MEJORAMIENTO DEL SERVICIO DE AGUA PARA RIEGO, EN LOS SECTORES DE KCATAWI, CCOTAMAMANI, PHUSUMA Y NUEVO AMANECER SORA MULLANI, EN LOS DISTRITOS DE UMACHIRI, CUPI Y LLALLI, PROVINCIA DE MELGAR, REGIÓN PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2326691</td> <td class='tg-wd1d'>1,358,253.00</td> <td class='tg-wd1d'>75%</td> <td class='tg-wd1d'>Expediente Tecnico Observado</td> <td class='tg-wd1d'>135</td> <td class='tg-wd1d'>1722 productores</td> <td class='tg-wd1d'>Umachiri - Melgar - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/formato/verProyecto/19218'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table>  ", {
        maxWidth: "auto"
    }),
    sur_paylla = L.marker([-14.850940, -70.755256], {
        icon: marcador_Amarillo,
        draggable: false,
        title: "MEJORAMIENTO DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO SUR PAYLLA EN LA COMUNIDAD DE SUR PAYLLA",
    }).bindPopup("<h2> <center>MEJORAMIENTO DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO SUR PAYLLA EN LA COMUNIDAD DE SUR PAYLLA, DISTRITO DE UMACHIRI - PROVINCIA DE MELGAR - DEPARTAMENTO DE PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2307157</td> <td class='tg-wd1d'>506,106.00</td> <td class='tg-wd1d'>100%</td> <td class='tg-wd1d'>Expediente Tecnico</td> <td class='tg-wd1d'>72</td> <td class='tg-wd1d'>116 productores</td> <td class='tg-wd1d'>Umachiri - Melgar - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/formato/verProyecto/19218'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table>  ", {
        maxWidth: "auto"
    }),
    asillo = L.marker([-14.686137, -70.376118], {
        icon: marcador_Verde,
        draggable: false,
        title: "MEJORAMIENTO Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO ASILLO - PROGRESO",
    }).bindPopup("<h2> <center>MEJORAMIENTO Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO ASILLO - PROGRESO  DISTRITO DE ASILLO - PROVINCIA DE AZANGARO - DEPARTAMENTO DE PUNO, DISTRITO DE UMACHIRI - PROVINCIA DE MELGAR - DEPARTAMENTO DE PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>Código de Idea</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>100293</td> <td class='tg-wd1d'>110,217,872.44</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Asillo - Azangaro - Puno</td> <td class='tg-wd1d'> ND<br></td> </tr> </tbody> </table> ", {
        maxWidth: "auto"
    }),
    acora_totorani = L.marker([-16.075038, -69.902106], {
        icon: marcador_Verde,
        draggable: false,
        title: "CREACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO ACORA - TOTORANI",
    }).bindPopup("<h2> <center>CREACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO ACORA - TOTORANI EN EL CENTRO POBLADO DE AGUAS CALIENTES DEL DISTRITO DE ACORA - PROVINCIA DE PUNO - DEPARTAMENTO DE PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>Código de Idea</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>104912</td> <td class='tg-wd1d'>164,825,615.00</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Acora - Puno - Puno</td> <td class='tg-wd1d'>ND</td> </tr> </tbody> </table> ", {
        maxWidth: "auto"
    }),
    conavire = L.marker([-15.860447, -70.411807], {
        icon: marcador_Verde,
        draggable: false,
        title: "MEJORAMIENTO Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO CONAVIRE, CAHUALLA Y CARI CARI",
    }).bindPopup("<h2> <center>MEJORAMIENTO Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO CONAVIRE, CAHUALLA Y CARI CARI DEL DISTRITO DE MAÑAZO - PROVINCIA DE PUNO - DEPARTAMENTO DE PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>Código de Idea</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>29547</td> <td class='tg-wd1d'>29,000,000.00</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Mañazo - Puno - Puno</td> <td class='tg-wd1d'>ND</td> </tr> </tbody> </table> ", {
        maxWidth: "auto"
    }),
    pisquichiri_camja = L.marker([-16.449083, -69.285856], {
        icon: marcador_rojo,
        draggable: false,
        title: "CONSTRUCCION DE SISTEMA DE RIEGO DE LAS LOCALIDADES DE PISQUICHIRI Y CAJNAJO",
    }).bindPopup("<h2> <center>CONSTRUCCION DE SISTEMA DE RIEGO DE LAS LOCALIDADES DE PISQUICHIRI Y CAJNAJO, DE LA COMUNIDAD DE PATACOLLO, DISTRITO DE ZEPITA, PROVINCIA DE CHUCUITO-PUNO </center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2146317</td> <td class='tg-wd1d'>150,771.00</td> <td class='tg-wd1d'>100%</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>90</td> <td class='tg-wd1d'>725 productores</td> <td class='tg-wd1d'>Zepita - Chucuito - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/informeCierre/consultaCierre/2146317'target='blank'>Click Aqui<a><br></td> </tr> </tbody> </table> ", {
        maxWidth: "auto"
    }),
    pasanacollo = L.marker([-14.532436, -70.524779], {
        icon: marcador_rojo,
        draggable: false,
        title: "MEJORAMIENTO Y AMPLIACIÓN DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO PASANACOLLO",
    }).bindPopup("<h2> <center>MEJORAMIENTO Y AMPLIACIÓN DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO PASANACOLLO, EN LA COMUNIDAD DE PASANACOLLO, DISTRITO DE NUÑOA, PROVINCIA DE MELGAR, REGIÓN PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2232348</td> <td class='tg-wd1d'>10,453,134.91</td> <td class='tg-wd1d'>98%</td> <td class='tg-wd1d'>No Culminada</td> <td class='tg-wd1d'>419</td> <td class='tg-wd1d'>850 productores</td> <td class='tg-wd1d'>Nuñoa- Melgar - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/informeCierre/consultaCierre/2232348'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table> ", {
        maxWidth: "auto"
    }),
    molino_kapia = L.marker([-16.396395, -69.119744], {
        icon: marcador_rojo,
        draggable: false,
        title: "MEJORAMIENTO Y AMPLIACION DE SISTEMA DE RIEGO EN LA LOCALIDAD DE MOLINO KAPIA",
    }).bindPopup("<h2> <center>MEJORAMIENTO Y AMPLIACION DE SISTEMA DE RIEGO EN LA LOCALIDAD DE MOLINO KAPIA DISTRITO DE ZEPITA, PROVINCIA DE CHUCUITO - PUNO</center></h2> <table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2146314</td> <td class='tg-wd1d'>373,528.75</td> <td class='tg-wd1d'>100%</td> <td class='tg-wd1d'>Culminado / Pendiente a Transferir</td> <td class='tg-wd1d'>90</td> <td class='tg-wd1d'>600 productores</td> <td class='tg-wd1d'>Zepita - Nuñoa - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/formato/verFichaSNIP/136989/4/0'target='blank'>Click Aqui</a><br></td></tr></tbody> </table>", {
        maxWidth: "auto"
    }),
    canteria = L.marker([-15.559063, -70.269675], {
        icon: marcador_rojo,
        draggable: false,
        title: "REHABILITACIÓN DE LA IRRIGACIÓN CANTERIA",
    }).bindPopup("<h2><center>REHABILITACIÓN DE LA IRRIGACIÓN CANTERIA</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2094964</td> <td class='tg-wd1d'>12,459,367.48</td> <td class='tg-wd1d'>96 %</td> <td class='tg-wd1d'>No culminada</td> <td class='tg-wd1d'>180</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Lampa - Lampa - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/informeCierre/consultaCierre/2094964'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table>", {
        maxWidth: "auto"
    }),
    molienda = L.marker([-14.284025, -69.974473], {
        icon: marcador_rojo,
        draggable: false,
        title: "MEJORAMIENTO DEL SISTEMA RIEGO MOLIENDA",
    }).bindPopup("<h2><center>MEJORAMIENTO DEL SISTEMA RIEGO MOLIENDA, DISTRITO DE CRUCERO - CARABAYA - PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2149946</td> <td class='tg-wd1d'>7,543,081.00</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>liquidacion obserbada</td> <td class='tg-wd1d'>360</td> <td class='tg-wd1d'>787 productores (120 familias)</td> <td class='tg-wd1d'>Crucero - Carabaya - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/ejecucion/verFichaEjecucion/2149946'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table>", {
        maxWidth: "auto"
    }),
    Santa_licia_ca_lampa = L.marker([-15.667675, -70.652650], {
        icon: marcador_Amarillo,
        draggable: false,
        title: "MEJORAMIENTO Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO SANTA LUCIA-CABANILLA-LAMPA",
    }).bindPopup("<h2> <center>MEJORAMIENTO Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO SANTA LUCIA-CABANILLA-LAMPA, DISTRITOS DE SANTA LUCIA, CABANILLA Y LAMPA, PROVINCIA DE LAMPA, REGIÓN PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2277099</td> <td class='tg-wd1d'>240,531,550.00</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Registro de Expediente Técnico</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Santa Lucia/Cabanilla/Lampa - Lampa - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/ejecucion/verFichaEjecucion/2277099'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table>", {
        maxWidth: "auto"
    }),
    ampliacion_cabana = L.marker([-15.706292, -70.358843], {
        icon: marcador_Amarillo,
        draggable: false,
        title: "AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO CABANA",
    }).bindPopup("<h2> <center>AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO CABANA, DISTRITO DE CABANA - PROVINCIA DE SAN ROMAN - DEPARTAMENTO DE PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2339393</td> <td class='tg-wd1d'>51,868,469.07</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Registro de Expediente Técnico</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Cabana - San Román - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/ejecucion/verFichaEjecucion/2339393'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table>", {
        maxWidth: "auto"
    }),
    ampliacion_vilque_mañazo = L.marker([-15.784944, -70.307327], {
        icon: marcador_Amarillo,
        draggable: false,
        title: "AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO VILQUE - MAÑAZO",
    }).bindPopup("<h2> <center>AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO VILQUE - MAÑAZO (SECTORES COTAÑA, MOLINO, PHESCACHA, PETRARIA,C.C. VISCACHANI, QUERI, SAN JUAN DE QUEARAYA Y C.C. CANLLACOLLO) EN LOS DISTRITOS DE VILQUE Y MAÑAZO DE LA  PROVINCIA DE PUNO - DEPARTAMENTO DE PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2471016</td> <td class='tg-wd1d'>50,023,551.84</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Expediente Técnico</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Vilque/Mañazo - San Román - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/seguimiento/verFichaSeguimiento/2471016'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table>", {
        maxWidth: "auto"
    }),
    Canal_n = L.marker([-14.882257, -70.822267], {
        icon: marcador_rojo,
        draggable: false,
        title: "MEJORAMIENTO Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO CANAL N",
    }).bindPopup("<h2> <center>MEJORAMIENTO Y AMPLIACION DEL SERVICIO DE AGUA PARA EL SISTEMA DE RIEGO CANAL N, EN LOS SECTORES DE CORANI, AQUESAYA, INCALARKA, CHALLAPATA Y MELGAR, DE LOS DISTRITOS DE CUPI Y UMACHIRI, PROVINCIA DE MELGAR, REGION PUNO</center></h2><table class='tg'> <thead> <tr> <th class='tg-n533'>SNIP</th> <th class='tg-n533'>Presupuesto</th> <th class='tg-n533'>Avance Fisico</th> <th class='tg-n533'>Estado</th> <th class='tg-n533'>Plazo de Ejecución (Días)</th> <th class='tg-n533'>N. Beneficiarios</th> <th class='tg-f0bj'>Ubicación</th> <th class='tg-n533'>Mas Detalle</th> </tr> </thead> <tbody> <tr> <td class='tg-wd1d'>2173526</td> <td class='tg-wd1d'>35,196,835.5</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Culminado/Pendiente Liquidación</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>ND</td> <td class='tg-wd1d'>Cupi/Umachiri - Melgar - Puno</td> <td class='tg-wd1d'><a href='https://ofi5.mef.gob.pe/invierte/formato/verFichaSNIP/222886/0/0'target='blank'>Click Aqui</a><br></td> </tr> </tbody> </table>", {
        maxWidth: "auto"
    })


;





//Agrupando los Marcadores de Tipo Proyecto
var Proyectos = L.layerGroup([Urinsaya, huancarani, sucre, llallimayo, jilas,
    pisquichiri_camja, pasanacollo, molino_kapia, canteria, molienda, Canal_n
]);

//Agrupando los Marcadores de Tipo Estudio
var Estudio = L.layerGroup([Viluyo_lara, paylla_mira, Kcatawi, sur_paylla,
    Santa_licia_ca_lampa, ampliacion_cabana, ampliacion_vilque_mañazo
]);

// Agrpando los Marcadores de Tipo Idea de Proyecto

var Idea = L.layerGroup([asillo, acora_totorani, conavire]);

//Agregando los grupos de Capas al Mapa
var map = L.map('map', {
    center: [-15.488396, -70.167500],
    zoom: 8,
    layers: [Google, Proyectos, Estudio, Idea]
});

// Agrupando los Mapas Base
var baseMaps = {
    "Google": Google,
    "OpenStreetMap": OpenStreetMap_Mapnik,
    "Dark": CartoDB_DarkMatter
};

'<img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" width="400" height="341"/> Sectores de Riego'

// Creando Capas de Marcadores
var Capas = {
    '<img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png" width="10" height="15"/> Proyectos de Inversión': Proyectos,
    '<img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png" width="10" height="15"/> Estudios': Estudio,
    '<img src="https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png" width="10" height="15"/> Idea de Proyecto': Idea,
};


// Creando Control de Capas
L.control.layers(baseMaps, Capas).addTo(map);


// Color GRis 
var baseMaps = {
    "<span style='color: gray'>Grayscale</span>": grayscale,
    "Streets": streets
};