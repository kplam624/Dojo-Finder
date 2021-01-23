var queryUrl = "https://dojos.info/NewJersey/Counties.aspx"
d3.json(queryUrl, function(data) {
   createFeatures(data.features);
});
function createFeatures(karateData) {
function styleinfo(feature){