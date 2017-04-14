export class FeedbacksController {
	constructor ($log, $http) {
		'ngInject';
		var _feedback;
        this.getFeedbacks = function () {
        	$http.get('/feedbacks')
        	    .then(function (response) {
        	    	_feedback = response.data;
        	    });
        	    this.feedbacks = _feedback;
        };
    }
}
