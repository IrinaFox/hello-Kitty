'use strict';

var categories = require('./categories'),
    places = require('./places'),
    participants = require('./participants');

function getStudentList () {
    var categoriesList = JSON.stringify(categories);
    return categoriesList;
}

function getPlaces () {
  var placesList = JSON.stringify(places);
  return placesList;
}

function getParticipants () {
  var participantsList = JSON.stringify(places);
  return participantsList;
}

exports.getStudentList = getStudentList;
exports.getPlaces = getPlaces;
exports.getParticipants = getParticipants;
