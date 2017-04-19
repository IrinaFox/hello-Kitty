export class ModalInstanceCtrl {
    constructor ($uibModalInstance) {
        'ngInject';
        this.uibModalInstance = $uibModalInstance;
        this.ctrl = this;
    }

    ok (place) {
        this.uibModalInstance.close(place);
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    };
}