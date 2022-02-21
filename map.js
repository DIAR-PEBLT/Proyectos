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
    iconSize: [30, 50], // size of the icon
    //shadowSize: [50, 64], // size of the shadow
    //iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    //shadowAnchor: [4, 62], // the same for the shadow
    //popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marcador_Amarillo = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png",
    iconSize: [30, 50], // size of the icon
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
    })


;

//Agrupando los Marcadores de Tipo Proyecto
var Proyectos = L.layerGroup([Urinsaya, huancarani, sucre, llallimayo, jilas]);

//Agrupando los Marcadores de Tipo Estudio
var Estudio = L.layerGroup([Viluyo_lara, paylla_mira, Kcatawi, sur_paylla]);

//Agregando los grupos de Capas al Mapa
var map = L.map('map', {
    center: [-15.488396, -70.167500],
    zoom: 8,
    layers: [Google, Proyectos, Estudio]
});

// Agrupando los Mapas Base
var baseMaps = {
    "Google": Google,
    "OpenStreetMap": OpenStreetMap_Mapnik,
    "Dark": CartoDB_DarkMatter
};

// Creando Capas de Marcadores
var Capas = {
    "Proyectos de Inversión": Proyectos,
    "Estudios": Estudio
};


// Creando Control de Capas
L.control.layers(baseMaps, Capas).addTo(map);


// Color GRis 
var baseMaps = {
    "<span style='color: gray'>Grayscale</span>": grayscale,
    "Streets": streets
};