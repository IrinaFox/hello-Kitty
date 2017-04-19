'use strict';

var categories = require('./categories'),
    places = require('./places'),
    feedbacks = require('./feedbacks'),
    participants = require('./participants'),
    events = require('./events');

function getCategories () {
    var categoriesList = JSON.stringify(categories);
    return categoriesList;
}

function deleteCategory (id) {
    var category= findElement(categories, id),
        categoryIndex = categories.indexOf(category);
    categories.splice(categoryIndex, 1);
}

function addCategory (category) {
    var categoryJSON = JSON.parse(category);
    categoryJSON.id = newIndex(categories);
    categories.push(categoryJSON);
    return JSON.stringify(categoryJSON);
}

function changeCategory (id, category) {
    var newCategory = JSON.parse(category),
        changedCategory = findElement(categories, id);
    console.log(changedCategory);
    changedCategory.name = newCategory.name;
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

function findElement (collection, id) {
    var element;

    collection.forEach(function (item, i) {
        if(id === item.id) {
            element = item;
        }
    });
    console.log(element);
    return element;
}

function newIndex (collection) {
    var maxIndex = 0;

    collection.forEach(function (item) {
        if (item.id > maxIndex) {
            maxIndex = item.id;
        }
    });

    return maxIndex + 1;
}

function getEvents () {
  var eventsList = JSON.stringify(events);
  return eventsList;
}
exports.getEvents = getEvents;
exports.getCategories = getCategories;
exports.getPlaces = getPlaces;
exports.getParticipants = getParticipants;
exports.getFeedbacks = getFeedbacks;
exports.deleteCategory = deleteCategory;
exports.addCategory = addCategory;
exports.changeCategory = changeCategory;
