// Initializes a variable called start point.
var startPoint

// Pulls the variables from the storage.js
data1 = sessionStorage.getItem('lat');
data2 = sessionStorage.getItem('lng');

// Does a check on the two variables to create the starting point and magnification.
if (!data1 || !data2){
  startPoint = [40.0583, -74.4057];
  mag = 8
}
else{
  startPoint = [parseInt(data1),parseInt(data2)]
  mag = 13
}

// Shows the values of the ma
console.log(mag)
console.log(startPoint)

  // An array containing each city's name, location, and population
  d3.json ("/dojoapi", function(data) {
    var locations = data;
  
  // Create a map object
  var myMap = L.map("map", {
  center: startPoint,
  zoom: mag
});

// Add a tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);


 // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
    for (var i = 0; i < locations.length; i++) {
          var location = locations[i];

          var markerpoint = [location['lat'], location['lng']];
          // console.log(markerpoint);

          L.marker(markerpoint)
          .bindPopup("<h5>"+ location.name + "<h5>Phone: " + location.phone + "</h5><h5>" + location.street + ", " + location.city + ", " + location.zipcode +"<h5>County: " + location.county + "</h5><h5>State: " + location.state + "</h5>")
          .addTo(myMap);
      }
    });