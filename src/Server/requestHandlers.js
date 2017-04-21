'use strict';

var categories = require('./categories'),
    categoriesLength = categories.length,
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

function deleteParticipant (id) {
	var numberId = Number(id),
		number;
		
  participants.forEach(function(item, index){
    if (item.id === numberId){
      number = index;
    }
  });

  participants.splice(number, 1);
}

function addPerson(person) {
  var personJSON = JSON.parse(person);
		personJSON.id = newIndex(participants);
		participants.push(personJSON);
		
  return JSON.stringify(personJSON);
}

function changeParticipant(id, partisipant) {

  var newPartisipant = JSON.parse(partisipant),
      numberId = Number(id),      
      changedParticipant = findParticipant(participants, numberId);
      changedParticipant.name = newPartisipant.name;
      changedParticipant.lastname = newPartisipant.lastname;
}

function findParticipant (collection, id) {
	var element;
	  collection.forEach(function (item) {
		if(id === item.id) {
		  element = item;
		}
	  });
	return element;
}

function getFeedbacks () {
    var feedbacksRoster = JSON.stringify(feedbacks);
    return feedbacksRoster;
}

function findElement (collection, id) {
    var element;

    collection.forEach(function (item) {
        if(id == item.id) {
            element = item;
        }
    });

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

exports.getCategories = getCategories;
exports.deleteCategory = deleteCategory;
exports.addCategory = addCategory;
exports.changeCategory = changeCategory;

exports.getEvents = getEvents;

exports.getPlaces = getPlaces;

exports.getParticipants = getParticipants;
exports.deleteParticipant = deleteParticipant;
exports.addPerson = addPerson;
exports.changeParticipant = changeParticipant;

exports.getFeedbacks = getFeedbacks;

