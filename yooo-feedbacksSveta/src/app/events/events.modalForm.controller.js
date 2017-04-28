export class ModalFormController {
	constructor ($log, $http, event, $uibModalInstance) {
		'ngInject';
    
    this.http = $http;
    this.log = $log;
    this.uibModalInstance = $uibModalInstance;
    this.event = event;
  }

    ok (event) {
        this.uibModalInstance.close(this.event);
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    };
}
