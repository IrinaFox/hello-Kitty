export class FeedbacksController {
	constructor ($log, $http, $scope, $uibModal) {
		'ngInject';
        this.log = $log;
        this.http = $http;
        this.scope = $scope;
        this.uibModal = $uibModal;
        this.newFeedback = {};

    this.getFeedbacks();
	}	
    
    getFeedbacks () {
        this.http.get('/feedbacks')
    	    .then((response) => {
    	    	this.feedbacks = response.data;       
    	     });
    }; 

    deleteFeedback (id) {
        this.http.delete('/feedbacks/' + id, this.feedbacks[id])
            .then(() => {
                this.getFeedbacks();
            });
    }

   openAdduibModal () {
         let modals = this.uibModal.open({
            templateUrl: 'app/feedbacks/Addeditfeedbacks.html',
            controller: 'ModalControllerFeedbacks',
            controllerAs: 'modal', 
            resolve: {newFeedbacks: () => this.newFeedback}
        });

        modals.result.then((feedback) => {
            this.http.post('/feedbacks', feedback)
                .then(() => {
                    this.getFeedbacks();
                });
            });
        }
    

    openEdituibModal (feedback) {
        let modals = this.uibModal.open({
                templateUrl: 'app/feedbacks/Addeditfeedbacks.html',
                controller: 'ModalControllerFeedbacks',
                controllerAs: 'modal',
                resolve: {newFeedbacks: () => feedback}
            });

            modals.result.then((newFeedbacks) => {
            let id = feedback.id;

            this.http.put('/feedbacks/' + id, newFeedbacks)
                .then(() => {
                    this.getFeedbacks();
                });
            });
        };
}
