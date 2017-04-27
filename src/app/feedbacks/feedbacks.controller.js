export class FeedbacksController {
	constructor ($log, $http, $scope, $uibModal) {
		'ngInject';
        this.log = $log;
        this.http = $http;
        this.scope = $scope;
        this.uibModal = $uibModal;
    
    this.getFeedbacks();
	}	
    
    getFeedbacks () {
        this.http.get('/feedbacks')
    	    .then((response) => {
    	    	this.feedbacks = response.data;  
                this.scope.totalItems = this.feedbacks.length;
                this.scope.itemsPerPage = 4;
                this.scope.currentPage = 1;

                this.pageChanged = function() {
                    let firstPageFeedbacks = (this.scope.currentPage - 1) * this.scope.itemsPerPage,
                        lastPageFeedbacks = this.scope.currentPage * this.scope.itemsPerPage;
                    this.currentPage = this.feedbacks.slice(firstPageFeedbacks, lastPageFeedbacks);
                };
                this.pageChanged();               
            });     
    }; 

    deleteFeedback (id) {
        this.http.delete('/feedbacks/' + id, this.feedbacks[id])
            .then(() => {
                this.getFeedbacks();
            });
    }

   openAdduibModal () {
         const newFeedback = {};
         let modals = this.uibModal.open({
            templateUrl: 'app/feedbacks/Addeditfeedbacks.html',
            controller: 'ModalControllerFeedbacks',
            controllerAs: 'modal', 
            resolve: {newFeedbacks: () => newFeedback}
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
