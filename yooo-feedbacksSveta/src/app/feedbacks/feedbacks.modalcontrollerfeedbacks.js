export class ModalControllerFeedbacks {
    constructor ($uibModalInstance, $scope, newFeedbacks) {
        'ngInject';
        this.uibModalInstance = $uibModalInstance;
        this.feedback = angular.copy(newFeedbacks);
    }

    save (feedback) {
        this.uibModalInstance.close(this.feedback);
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    };
}