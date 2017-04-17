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

<<<<<<< HEAD
=======
exports.getCategories = getCategories;
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
function getEvents () {
  var eventsList = JSON.stringify(events);
  return eventsList;
}

<<<<<<< HEAD
exports.getCategories = getCategories;
=======
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
exports.getPlaces = getPlaces;
exports.getParticipants = getParticipants;
exports.getFeedbacks = getFeedbacks;
exports.getEvents = getEvents;
exports.deleteCategory = deleteCategory;
exports.addCategory = addCategory;
exports.changeCategory = changeCategory;


