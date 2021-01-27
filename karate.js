var queryUrl = "https://dojos.info/NewJersey/Counties.aspx"
var myCenter = new google.maps.LatLng(39.533, -74.687);
    function initialize() {
        var mapProp = {
            center: myCenter,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
        });
        marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
var myCenter = new google.maps.LatLng(40.926, -74.077);
    function initialize() {
       var mapProp = {
            center: myCenter,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
        });
        marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
d3.json(queryUrl, function(data) {
   createFeatures(data.features);
});
function createFeatures(karateData) {
function styleinfo(feature){
   return {
function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place +
        "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
    }
var karate = L.geoJSON(karateData, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng);
        },
        style: styleinfo
    });