// get Json file .....................
let jsonData = require('./data.json');
let newJsonData = jsonData.Full;

class Student{
    constructor(id,firstName,lastName) {
        let newobj = {
            ID: id,
            FirstName: firstName,
            LastName : lastName
        }
        newJsonData.push(newobj);
    }
    addNewStudent(id, firstName, lastName, address, age) {
        let newStudent = {
            ID: id,
            FirstName: firstName,
            LastName: lastName,
            Address: address,
            Age : age
        }
        newJsonData.push(newStudent);
    }

    updateStudent(currentID, Id, firstName, lastName) {
        var currentObj = newJsonData.find(x => x.ID == currentID);
 
        currentObj.ID = Id;
        currentObj.FirstName = firstName;
        currentObj.LastName = lastName;
    }


    printAllJsonData(){
        newJsonData.map((data) => {
            console.log(data)
        })
    }
}

let std = new Student("31", "Fazal", "Hadi");

//std.printAllJsonData();
//addNewStudent("1","Maqbool","Ahmad","peshawar",22)
std.updateStudent(31, 100, "Maqbool", "Ahmad");
std.printAllJsonData();