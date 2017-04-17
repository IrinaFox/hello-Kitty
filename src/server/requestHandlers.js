'use strict';

var categories = require('./categories'),
    places = require('./places'),
    feedbacks = require('./feedbacks'),
<<<<<<< HEAD
    participants = require('./participants'),
    events = require('./events');

function getStudentList () {
=======
    participants = require('./participants');

//Categories
function getCategories () {
>>>>>>> origin/categoriesIra
    var categoriesList = JSON.stringify(categories);
    return categoriesList;
}

<<<<<<< HEAD
=======
function deleteCategory (id) {
    console.log(categories);
    delete categories[id];
}

function addCategory (category) {
    var categoryJSON = JSON.parse(category);
    categoryJSON.id = categories.length + 1;

    categories.push(categoryJSON);

    return JSON.stringify(categoryJSON);
}

function changeCategory (id, category) {
    var newCategory = JSON.parse(category);
    categories[id] = newCategory;
}


//Places
>>>>>>> origin/categoriesIra
function getPlaces () {
  var placesList = JSON.stringify(places);
  return placesList;
}

<<<<<<< HEAD
function getParticipants () {
  var participantsList = JSON.stringify(places);
  return participantsList;
}

=======

//Participants
function getParticipants () {
  var participantsList = JSON.stringify(participants);
  return participantsList;
}


//Feddbacks
>>>>>>> origin/categoriesIra
function getFeedbacks () {
  var feedbacksRoster = JSON.stringify(feedbacks);
  return feedbacksRoster;
}

<<<<<<< HEAD
function getEvents () {
  var eventsList = JSON.stringify(events);
  return eventsList;
}

exports.getStudentList = getStudentList;
exports.getPlaces = getPlaces;
exports.getParticipants = getParticipants;
exports.getFeedbacks = getFeedbacks;
exports.getEvents = getEvents;
=======
exports.getCategories = getCategories;
exports.deleteCategory = deleteCategory;
exports.addCategory = addCategory;
exports.changeCategory = changeCategory;

exports.getPlaces = getPlaces;

exports.getParticipants = getParticipants;

exports.getFeedbacks = getFeedbacks;
>>>>>>> origin/categoriesIra
