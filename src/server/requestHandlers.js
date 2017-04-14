var feedbacks = require('./feedbacks');

function getFeedbacks () {
    var feedbacksRoster = JSON.stringify(feedbacks);
    return feedbacksRoster;   
}

function removeFeedback (id) {
     delete feedbacks[id];
}

function changeFeedback (id, data) {
    var newFeedback = JSON.parse(data);
    feedbacks[id] = newFeedback;
}

function addFeedback (student) {
    var feedbacksJSON = JSON.parse(feedbacks);
    feedbacksJSON.id = feedbacks.length + 1;
    feedbacks.push(feedbacksJSON);
    return JSON.stringify(feedbacksJSON);
}

exports.getFeedbacks = getFeedbacks;
exports.removeFeedback = removeFeedback;
exports.changeFeedback = changeFeedback;
exports.addFeedback = addFeedback;