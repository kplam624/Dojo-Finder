// if (!data3){
//     console.log('It is undefined')
// }

// Read the json file.
d3.json('/dojoapi', function(data){
    console.log(data)
    // First connect the app to the html file.
    var tbody = d3.select("tbody");

    // Create a loop to append a row to the table. (<tr>)
    data.forEach(function(dojo){
        var row = tbody.append("tr");

        // Created cells for the table
        Object.entries(dojo).forEach(function([key,value]){

            // Creating the cells and placing the values into the cell.
            var cell = row.append("td");
            cell.text(value);
        });
    });

    // Creating a filter for the search form.
    var form = d3.select("form");
    var button = d3.select("#filter-btn");
    var reset = d3.select("#reset-btn");
    var filteredData = [];

    // When the user presses enter on the form
    form.on("submit",runEnter);

    // Filter for the data
    // Function that will keep the form value saved.
    // This is in case the user presses enter on the form. This prevents a webpage refresh.
    function runEnter() {
        d3.event.preventDefault();

        // Takes the input of the form.
        var inputdate = d3.select("#county");
        var inputData = inputdate.property("value");
        
        // Check to see if the value is correct.
        console.log(inputData);

        // Filter for the data
        filteredData = data.filter(dojo => dojo.county === inputData);
        console.log(filteredData);
    };

    // When the user inputs and selects outside the form.
    form.on("change",runChange);

    // Function that will keep the form value saved.
    function runChange() {
        d3.event.preventDefault();

        // Takes the input of the form.
        var inputdate = d3.select("#county");
        var inputData = inputdate.property("value");
        
        // Check to see if the value is correct.
        console.log(inputData);

        // Filter for the data
        filteredData = data.filter(dojo => dojo.datetime === inputData);
        console.log(filteredData);
    };

    // Button when clicked will show the filtered data.
    button.on("click",runEntered);
    function runEntered() {

        // Create a conditional to show data if it exists otherwise will not do anything.
        if(filteredData.length > 0){
            
            // Removes the table rows in the graph.
            tbody.selectAll("tr").remove();

            // Reads the filteredData array.
            filteredData.forEach(function(dojos){
                var row = tbody.append("tr");
            
                // Created cells for the table
                Object.entries(dojos).forEach(function([key,value]){
            
                    // Creating the cells and placing the values into the cell.
                    var cell = row.append("td");
                    cell.text(value);
                });
            });
        }
        // If the table length is 0 or less than zero. The error message appears.
        else{
            tbody.selectAll("tr").remove();
            // This will be presented in the console.
            console.log("Invalid Query.");
        };
    };

    // For a table reset
    reset.on("click",runReset);

    // function to run
    function runReset() {
        // remove the table
        tbody.selectAll("tr").remove();

        // Adds the table to the page.
        data.forEach(function(dojos){
            var row = tbody.append("tr");
        
            // Created cells for the table
            Object.entries(dojos).forEach(function([key,value]){
        
                // Creating the cells and placing the values into the cell.
                var cell = row.append("td");
                cell.text(value);
            });
        });
    };
});