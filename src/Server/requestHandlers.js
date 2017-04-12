'use strict';

var categories = require('./categories'),
    places = require('./places');


function getStudentList () {
    var categoriesList = JSON.stringify(categories);
    return categoriesList;
}

function getPlaces () {
  var placesList = JSON.stringify(places);
  return placesList;
}

exports.getStudentList = getStudentList;
exports.getPlaces = getPlaces;



