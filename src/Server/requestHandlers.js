'use strict';

var categories = require('./categories'),
    places = require('./places'),
    feedbacks = require('./feedbacks'),
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
  var participantsList = JSON.stringify(participants);
  return participantsList;
}

function getFeedbacks () {
  var feedbacksRoster = JSON.stringify(feedbacks);
  return feedbacksRoster;
}

exports.getStudentList = getStudentList;
exports.getPlaces = getPlaces;
exports.getParticipants = getParticipants;
exports.getFeedbacks = getFeedbacks;
