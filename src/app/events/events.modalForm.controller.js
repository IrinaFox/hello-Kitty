export class ModalFormController {
	constructor ($log, $http, event) {
		'ngInject';
    
    this.http = $http;
    this.log = $log;
    
    this.event = event;
  }
}
