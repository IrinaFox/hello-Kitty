'use strict';

var categories = require('./categories'),
    places = require('./places'),
    feedbacks = require('./feedbacks'),
    participants = require('./participants'),
    idCounter = places.length;

//Categories
function getCategories () {
    var categoriesList = JSON.stringify(categories);
    return categoriesList;
}

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
function getPlaces () {
  var placesList = JSON.stringify(places);
  return placesList;
}

function removePlace (id) {
  var item = findId(places, id);
  places.splice(item, 1);
}

function addPlace (place) {
  var placeId;
  idCounter++;
  placeId = String(idCounter);
  place.id = placeId;
  places.push(place);
  
  return place;
}

function changePlace (id, data) {
    var item = findId(places, id),
        placeData = JSON.parse(data);
    
    places.splice(item, 1, placeData);
  return JSON.stringify(placeData);
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
  console.log(collection);
  console.log(id);
  var findedItem;
  collection.forEach(function (item, i) {
    if(id === item.id) {
      findedItem = i;      
    }
  })
  return findedItem;
}

exports.findId = findId;

exports.getCategories = getCategories;
exports.deleteCategory = deleteCategory;
exports.addCategory = addCategory;
exports.changeCategory = changeCategory;

exports.getPlaces = getPlaces;
exports.removePlace = removePlace;
exports.addPlace = addPlace;

exports.getParticipants = getParticipants;

exports.getFeedbacks = getFeedbacks;
