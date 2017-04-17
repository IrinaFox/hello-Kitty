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
