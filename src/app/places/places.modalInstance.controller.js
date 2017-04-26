export class ModalInstanceCtrlPlaces {
    constructor ($uibModalInstance, currentPlace) {
        'ngInject';
        this.uibModalInstance = $uibModalInstance;
        this.place = angular.copy(currentPlace);
    }

    ok (place) {
            this.uibModalInstance.close(this.place);
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    };
}