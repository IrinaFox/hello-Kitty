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
    categoryJSON.id = categoriesLength++;
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

function getEvents (categoryID) {
    var eventsOfCategory = events;
    if (categoryID !== 'all') {
      eventsOfCategory = eventsOfCategory.filter(event => event.categoryID === categoryID);
    }
    return JSON.stringify(eventsOfCategory);
}

exports.getCategories = getCategories;
exports.deleteCategory = deleteCategory;
exports.addCategory = addCategory;
exports.changeCategory = changeCategory;

exports.getEvents = getEvents;

exports.getPlaces = getPlaces;

exports.getParticipants = getParticipants;

exports.getFeedbacks = getFeedbacks;

