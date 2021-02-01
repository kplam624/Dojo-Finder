// Calls the form.
var form = d3.select("form");

// Event listener for form
form.on("submit",runEnter)

// Creates a function.
function runEnter() {

    // Prevent the default.
    d3.event.preventDefault();

    // Creates the variables to use.
    var lat;
    var lng;

    // Takes the input of the form.
    var inputLat = d3.select("#latitude");
    var sessLat = inputLat.property("value");
    
    // Check to see if the value is correct.
    lat = sessLat;

    // Takes the input of the form.
    var inputLng = d3.select("#longitude");
    var sessLng = inputLng.property("value");

    // Sets the longitude variable.
    lng = sessLng;

    // Creates a sessionStorage instance
    sessionStorage.setItem('lat', String(lat));
    sessionStorage.setItem('lng', String(lng));

    // Pulls the value for each session storage.
    data1 = sessionStorage.getItem('lat');
    data2 = sessionStorage.getItem('lng');
};

// When the user inputs and selects outside the form.
form.on("change",runChange);

// Function that will keep the form value saved.
function runChange() {

    // Prevent the default.
    d3.event.preventDefault();

    // Creates the variables to use.
    var lat;
    var lng;

    // Takes the input of the form.
    var inputLat = d3.select("#latitude");
    var sessLat = inputLat.property("value");
    
    // Check to see if the value is correct.
    lat = sessLat;

    // Takes the input of the form.
    var inputLng = d3.select("#longitude");
    var sessLng = inputLng.property("value");

    // Sets the longitude variable.
    lng = sessLng;

    // Pulls the value for each session storage.
    sessionStorage.setItem('lat', String(lat));
    sessionStorage.setItem('lng', String(lng));

    // Pulls the value for each session storage.
    data1 = sessionStorage.getItem('lat');
    data2 = sessionStorage.getItem('lng');
};

//SHH its a secret
// API_KEY = 'pk.eyJ1Ijoia3BsYW02MjQiLCJhIjoiY2tqdW85emxoMGFkMzJ0cXppb2lnMGRvcCJ9.GxyMhx1CNAMxZXmJufDmDQ'

d3.json('/apikey', function(apidata){
    var newKey = apidata[0].pull;
    console.log(apidata)
    console.log(newKey)
    if (newKey){
        API_KEY = newKey;
    }
    else{
        //SHH its a secret
        API_KEY = 'pk.eyJ1Ijoia3BsYW02MjQiLCJhIjoiY2tqdW85emxoMGFkMzJ0cXppb2lnMGRvcCJ9.GxyMhx1CNAMxZXmJufDmDQ'

    };
});

// Setting the data to the session storage.
data1 = sessionStorage.getItem('lat');
data2 = sessionStorage.getItem('lng');

console.log(data1);
console.log(data2);
