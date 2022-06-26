// from data.js
var tableData = data;

// YOUR CODE HERE!
//Checking Data
console.log(tableData);

//Table creation

//TABLE creation and insert
// Selecting body
var tableBody = d3.select("tbody");
//Function to clear table to edit/insert values
function clearTable(DataInsert) {
    tableBody.html("");
    // Adding all rows and cells
    DataInsert.forEach((ufosighting) => {
        var row = tableBody.append("tr");
        Object.entries(ufosighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
clearTable(data);

//FILTER
//Define function to filter
function clickfilter() {
    //Reference to each coloumn
    var inputDate = d3.select("#datetime").property("value");
    var inputCity = d3.select("#city").property("value").toLowercase();
    var inputState = d3.select("#state").property("value");
    var inputCountry = d3.select("#country").property("value");
    var inputShape= d3.select("#shape").property("value");
    let filteredDATA = data;
    if (inputDate) {filteredDATA = filteredDATA.filter(row => row.datetime === inputDate);}
    if (inputCity) {filteredDATA = filteredDATA.filter(row => row.city === inputCity);}
    if (inputState){filteredDATA = filteredDATA.filter(row => row.state === inputDate);}
    if (inputCountry){filteredDATA = filteredDATA.filter(row => row.country === inputDate);}
    if (inputShape){filteredDATA = filteredDATA.filter(row => row.shape === inputDate);}
    clearTable(filteredDATA);
};
d3.selectAll("filter-btn").on("click",clickfilter);