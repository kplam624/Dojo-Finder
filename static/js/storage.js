var form = d3.select("form");

form.on("submit",runEnter)

function runEnter() {
    d3.event.preventDefault();

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

    lng = sessLng;

    sessionStorage.setItem('lat', String(lat));
    sessionStorage.setItem('lng', String(lng));

    data1 = sessionStorage.getItem('lat');
    data2 = sessionStorage.getItem('lng');
    
    console.log(data1);
    console.log(data2);
};

// When the user inputs and selects outside the form.
form.on("change",runChange);

// Function that will keep the form value saved.
function runChange() {
    d3.event.preventDefault();

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

    lng = sessLng;

    sessionStorage.setItem('lat', String(lat));
    sessionStorage.setItem('lng', String(lng));

    data1 = sessionStorage.getItem('lat');
    data2 = sessionStorage.getItem('lng');
    
    console.log(data1);
    console.log(data2);
};

data1 = sessionStorage.getItem('lat');
data2 = sessionStorage.getItem('lng');

console.log(data1);
console.log(data2);
