var places = require('./places');


function getPlaces () {
	var placesList = JSON.stringify(places);
	return placesList;
}

function addStudent (student) {
	var studentId = students.length + 1;
	student.id = studentId;
	students.push(student);
	
	return student;
}

function removeCountry (id) {
    var item = findId(countries, id);
    countries.splice(item, 1);
}

function changeData (id, data) {
    var item = findId(students, id),
        studentData = JSON.parse(data);
    
    students.splice(item, 1, studentData);
	return JSON.stringify(studentData);
}

function findId (collection, id) {
    var findItem;
    collection.forEach(function (item, i) {
        if(id === item.id) {
            findItem = i;
        }
    })
    return findItem;
}

exports.getPlaces = getPlaces;
exports.removeCountry = removeCountry;
exports.changeData = changeData;
exports.addStudent = addStudent;

