// Create a map object
var myMap = L.map("map", {
    center: [40.0583, -74.4057],
    zoom: 8
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
  
  // An array containing each city's name, location, and population
  d3.json ("../final_dojo.json", function(data) {
  var locations = data["data"];

 // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
  for (var i = 0; i < locations.length; i++) {
        var location = locations[i];

        var markerpoint = [location['lat'], location['lng']];
        console.log(markerpoint);

        L.marker(markerpoint)
        .bindPopup("<h3>"+ location.Name + "<h3>Phone: " + location.Phone + "</h3><h3>" + location.Street + ", " + location.City + ", " + location.Zipcode +"<h3>County: " + location.County + "</h3><h3>State: " + location.State + "</h3>")
        .addTo(myMap);
     }
    }); 