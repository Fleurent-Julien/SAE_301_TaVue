<script setup>
//Import éléments de vue 
import { onMounted,ref} from 'vue';

//Import Leaflet
import * as Leaflet from 'leaflet'

//Css leaflet
import 'leaflet/dist/leaflet.css'

//Canvas pour la carte
let tileLayer = Leaflet.tileLayer

//Initialisation de la carte sous forme d'une ref
let map = ref()

//Coordéonnées de l'utilisateur
let coordMe = ref({
    latitude : 0,
    longitude : 0,
})

//Lorsque le composant est monté dans la vue
onMounted( async ()=> {
    //Caractéristiques de la carte
    tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });

    // Création de la carte sur la div ayant l'id = 'map'
    map = Leaflet.map('map',
    {
        zoomControl: true,
        layers: [tileLayer],
        maxZoom: 18,
        minZoom: 6
    })

    // Projection de la carte avec centrage aux coordonnées indiqués, avec facteur d'agrandissement
    .setView([47.51109886351994, 6.7968116215432905], 17)

    
    // Création d'une icone
let myIcon = Leaflet.icon({
    iconUrl: 'images/marker-icon.png',
    shadowUrl: 'images/marker-shadow.png',
    iconSize: [25,41],
    shadowSize: [25,41],
    iconAnchor: [-10,-10],
    shadowAnchor: [-10,-10],
    popupAnchor: [0,0]
})

// Ajout d'un marqueur
let marker = Leaflet.marker([47.495328,6.8044455], {icon: myIcon}).addTo(map)

//Ajout d'une popup
marker.bindPopup('Je suis un marqueur')

//Recentrage de la carte au bout de 5 secondes à une autre position
setTimeout(
    function() {
        map.panTo([47.51109886351994, 6.7968116215432905])
    }, 5000
)

//Ajout nouveau marqueur à la position de recentrage
let marker2 = Leaflet.marker([47.51109886351994, 6.7968116215432905], {icon: myIcon}).addTo(map)

//Ajouter une popup
marker2.bindPopup('Je suis la gendarmerie nationale')
}) // Fin de OnMounted

//Fonction de détection de la géolocalisation vie le navigateur
const locMe = () => {
    //Géolocalisation du navigateur => lorsque la geolocalisation a été faite
    // => Appel d'une fonction showLocation
    navigator.geolocation.getCurrentPosition(showLocation)
}

//Fonction appelé par LocMe pour charger les valeurs de géolocalisation
const showLocation = (position) => {
    console.log("position", position)
                //Recupération latitude longitude
            coordMe.value.latitude = position.coords.latitude
            coordMe.value.longitude = position.coords.longitude
            //Recentrage de la carte sur position utilisateur
            map.panTo([coordMe.value.latitude, coordMe.value.longitude])
            //Créer un marqueur
            let markerMe = Leaflet.marker([coordMe.value.latitude, coordMe.value.longitude]).addTo(map)
            //Ajouter une popup
            markerMe.bindPopup('On est ici !!!!!')
}
</script>

<template>
<div>
        <div class="container">
          <div id="map">

          </div>
        </div>
    </div>
</template>

<style scoped>
#map {
    width: 100%;
    height: 70vh;
}
</style>