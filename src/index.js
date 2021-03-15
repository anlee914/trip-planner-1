import mapboxgl from "mapbox-gl";
import buildMarker from "./marker";

mapboxgl.accessToken = "pk.eyJ1IjoiYW5sZWU5MTQiLCJhIjoiY2ttYXJnMjZxMThoNzJwbnV3YmdqZm1zMiJ9.GyHIB_6Beeu3tEjqqSa3_Q";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const domElem = document.getElementById('test-marker')
domElem.style.width = "32px";
domElem.style.height = "39px";
// domElem.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
new mapboxgl.Marker(domElem).setLngLat([-74.009151, 40.705086]).addTo(map);

const marker = buildMarker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);</

console.log('message to check we are right')

