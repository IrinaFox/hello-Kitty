'use strict';

var studentList = require('./studentList'),
    places = require('./places');


function getStudentList () {
    var studentsString = JSON.stringify(studentList);
    return studentsString;
}

function getPlaces () {
  var placesList = JSON.stringify(places);
  return placesList;
}

exports.getStudentList = getStudentList;
exports.getPlaces = getPlaces;



