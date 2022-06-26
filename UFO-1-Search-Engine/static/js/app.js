// IMPORTING FROM data.js
var tableData = data;
//Check Data (i)
console.log(tableData);



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
    //Get reference to dateTime
    var filterdate = d3.select("#datetime").property("value");
    let filteredDATA = data;
    if (filterdate) {filteredDATA = filteredDATA.filter(row => row.datetime === inputDate);}
    clearTable(filteredDATA);
}
d3.selectAll("#filter-btn").on("click", clickfilter);