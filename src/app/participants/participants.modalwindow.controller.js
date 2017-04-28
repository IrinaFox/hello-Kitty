export class ModalWindowCtrl {
    constructor ($uibModalInstance) {
        'ngInject';
        this.uibModalInstance = $uibModalInstance;
    }

    ok (participant) {
       
        this.uibModalInstance.close(participant);
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    };
}
