export class ModalWindowCtrl {
    constructor ($uibModalInstance) {
        'ngInject';
        this.uibModalInstance = $uibModalInstance;
    }

    ok (participant) {
       
       if (participant === undefined){
          this.uibModalInstance.dismiss('cancel');
       }

        this.uibModalInstance.close(participant);
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    };
}
