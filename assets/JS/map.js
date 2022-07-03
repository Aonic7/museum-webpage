mapboxgl.accessToken = 'pk.eyJ1IjoiYW9uaWM3NzciLCJhIjoiY2t1bmJub2ZyMHJtdDJ1dGhuZ3doN3Z6OCJ9.y6IaWbJh1QClo7Me6JRelg';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [2.336526, 48.861174], // starting position [lng, lat]
    zoom: 16.30 // starting zoom
});


let nav = new mapboxgl.NavigationControl({
    showCompass: true,
    showZoom: true

})

map.addControl(nav, 'top-right');


// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({ color: 'black' })
    .setLngLat([2.3364, 48.86091])
    .addTo(map);

const marker2 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3333, 48.8602])
    .addTo(map);


const marker3 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3330, 48.8619])
    .addTo(map);


const marker4 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3365, 48.8625])
    .addTo(map);

const marker5 = new mapboxgl.Marker({ color: 'grey' })
    .setLngLat([2.3397, 48.8607])
    .addTo(map);