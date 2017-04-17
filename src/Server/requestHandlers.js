'use strict';

var categories = require('./categories'),
    places = require('./places'),
    feedbacks = require('./feedbacks'),
    participants = require('./participants'),
    events = require('./events');

function getStudentList () {
    participants = require('./participants');

function getCategories () {
    var categoriesList = JSON.stringify(categories);
    return categoriesList;
}

function deleteCategory (id) {
    console.log(categories);
    var categoryIndex = findId(categories, id);
    categories.splice(categoryIndex, 1);
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


function getPlaces () {
  var placesList = JSON.stringify(places);
  return placesList;
}

function getParticipants () {
  var participantsList = JSON.stringify(places);
  return participantsList;
}

function getParticipants () {
  var participantsList = JSON.stringify(participants);
  return participantsList;
}

function getFeedbacks () {
  var feedbacksRoster = JSON.stringify(feedbacks);
  return feedbacksRoster;
}

function findId (collection, id) {
  var findItem;

  collection.forEach(function (item, i) {
    if(id === item.id) {
      findItem = i;
    }
  });
  return findItem;
}

exports.getCategories = getCategories;
function getEvents () {
  var eventsList = JSON.stringify(events);
  return eventsList;
}

exports.getPlaces = getPlaces;
exports.getParticipants = getParticipants;
exports.getFeedbacks = getFeedbacks;
exports.getEvents = getEvents;
exports.deleteCategory = deleteCategory;
exports.addCategory = addCategory;
exports.changeCategory = changeCategory;


