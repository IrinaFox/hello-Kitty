'use strict';

var categories = require('./categories'),
    places = require('./places'),
    feedbacks = require('./feedbacks'),
    participants = require('./participants');

//Categories
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
    console.log(id, category);
    var newCategory = JSON.parse(category);
    categories[id] = newCategory;
}


//Places
function getPlaces () {
  var placesList = JSON.stringify(places);
  return placesList;
}


//Participants
function getParticipants () {
  var participantsList = JSON.stringify(participants);
  return participantsList;
}


//Feddbacks
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
exports.deleteCategory = deleteCategory;
exports.addCategory = addCategory;
exports.changeCategory = changeCategory;

exports.getPlaces = getPlaces;

exports.getParticipants = getParticipants;

exports.getFeedbacks = getFeedbacks;
