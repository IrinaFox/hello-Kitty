export class FeedbacksController {
	constructor ($log, $http) {
		'ngInject';
        this.http =  $http;
    this.getFeedbacks();
	}	
    
    getFeedbacks () {
        this.http.get('/feedbacks')
    	    .then((response) => {
    	    	this.feedbacks = response.data;       
    	});
    }; 
}

