<<<<<<< HEAD
export class FeedbacksController {
	constructor ($log, $http) {
		'ngInject';
        this.$http =  $http;
    this.get();
	}	
    getFeedbacks () {
        this.$http.get('/feedbacks')
    	    .then((response) =>{
    	    	this.feedback = response.data;       
    	});
    };
    
}
=======
<<<<<<< HEAD
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
=======
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
>>>>>>> origin/feedbacksSveta
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
