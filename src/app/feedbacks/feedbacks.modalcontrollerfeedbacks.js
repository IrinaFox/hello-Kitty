export class ModalControllerFeedbacks {
    constructor ($uibModalInstance, $scope, newFeedbacks) {
        'ngInject';
        this.uibModalInstance = $uibModalInstance;
        this.newFeedbacks = newFeedbacks;
    }

    save (feedback) {
        this.newFeedbacks.raiting = feedback.raiting || this.newFeedbacks.raiting;
        this.newFeedbacks.comment = feedback.comment || this.newFeedbacks.comment;
        this.newFeedbacks.author = feedback.author || this.newFeedbacks.author;
        this.uibModalInstance.close(this.newFeedbacks);
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    };
}