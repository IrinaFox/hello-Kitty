export class ModalWindowCtrl {
    constructor ($uibModalInstance) {
        'ngInject';
        this.uibModalInstance = $uibModalInstance;
        this.ctrl = this;
    }

    sign (place) {
        this.uibModalInstance.close(place);
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    };
}