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

//Participants
function getParticipants () {
  var participantsList = JSON.stringify(participants);
  return participantsList;
}

function deleteParticipant (id) {

		var number;		
	        participants.forEach(function(item, index){	
	       		if (item.id==id){
	       			 number = index;
	       		}
	       });

	       participants.splice(number, 1);
}

function addPerson(person) {
    var personJSON = JSON.parse(person);
	console.log(personJSON);
    personJSON.id = newIndex(participants);
    participants.push(personJSON);
    return JSON.stringify(personJSON);
}

function changeParticipant(id, partisipant) {
	
   var newPartisipant = JSON.parse(partisipant),
		changedPartisipant = findParticipant(participants, id);
		changedPartisipant.name = newPartisipant.name;
		changedPartisipant.lastname = newPartisipant.lastname;
}
function findParticipant (collection, id) {
    var element;

    collection.forEach(function (item) {
        if(id == item.id) {
            element = item;
        }
    });
	return element;
}

//Feddbacks
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
   // console.log(element);
    return element;
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


function newIndex (collection) {
    var maxIndex = 0;

    collection.forEach(function (item) {
        if (item.id > maxIndex) {
            maxIndex = item.id;
        }
    });

    return maxIndex + 1;
}

exports.getCategories = getCategories;
exports.deleteCategory = deleteCategory;
exports.addCategory = addCategory;
exports.changeCategory = changeCategory;

exports.getPlaces = getPlaces;
exports.removePlace = removePlace;
exports.addPlace = addPlace;

exports.getParticipants = getParticipants;
exports.deleteParticipant = deleteParticipant;
exports.addPerson = addPerson;
exports.changeParticipant = changeParticipant;


exports.getFeedbacks = getFeedbacks;
