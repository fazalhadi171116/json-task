// get Json file .....................
let jsonData = require('./data.json');
let newJsonData = jsonData.Full;
//console.log(newJsonData);

// update current json object.......................................
let jdata = newJsonData.map((data) => {
    if (data.ID == 7) {
        // uddate value
        data.FirstName = "Maqbool";
        data.LastName = "Ahmad"
    }
    return data;
})
console.log(jdata);

// add new object-------------------------------
let newobj = {
    ID: 31,
    FirstName: "Fazal",
    ListName: "Hadi",
    Address: "Hangu KPK",
    Age: 22,
    Grade: 3.2,
    Country: "Pakistan"
}

// push new object in json file.............................
jdata.push(newobj);
console.log(jdata)

// Delete object in pop() function
jdata.pop(newobj);
console.log(jdata)