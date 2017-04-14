export class ControllerFeedbacks {
	constructor ($log, $http) {
		'ngInject';
		var feedback;
        this.getFeedbacks = function () {
        	$http.get('/feedbacks')
        	    .then(function (response) {
        	    	feedback = response.data;
        	    });
        	    this.feedbacks = feedback;
        };
        
        $log.log(this.feedbacks);
    }
};