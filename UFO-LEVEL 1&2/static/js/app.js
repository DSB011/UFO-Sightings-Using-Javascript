// from data.js
var tableData = data;

// YOUR CODE HERE!

tbody = d3.select("tbody");

function displayData(data){
    tbody.text("")
    data.forEach(function(sighting) {
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key,value]){
        new_td = new_tr.append("td").text(value)
    })

        
    })
}

displayData(tableData)

var dataInputText = d3.select("#datetime")
var button = d3.select("#filter-btn")
var dataInputCity = d3.select("#city")
var dataInputState = d3.select("#state")
var dataInputCountry = d3.select("#country")
var dataInputShape = d3.select("#shape")

function clickSelect(){
    d3.event.preventDefault();
    console.log(dataInputText.property("value"));
    var new_table = tableData;
    if (dataInputText.property("value")!== ""){
         new_table = new_table.filter(sighting => sighting.datetime===dataInputText.property("value"))

    }
    if (dataInputCity.property("value")!== ""){
        new_table = new_table.filter(sighting => sighting.city===dataInputCity.property("value"))

    }
    if (dataInputState.property("value")!== ""){
        new_table = new_table.filter(sighting => sighting.state===dataInputState.property("value"))

    }
    if (dataInputCountry.property("value")!== ""){
        new_table = new_table.filter(sighting => sighting.country===dataInputCountry.property("value"))

    }
    if (dataInputShape.property("value")!== ""){
        new_table = new_table.filter(sighting => sighting.shape===dataInputShape.property("value"))

    }

    
    displayData(new_table);
}

button.on("click", clickSelect)

