var queryUrl = "https://dojos.info/NewJersey/Counties.aspx"
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