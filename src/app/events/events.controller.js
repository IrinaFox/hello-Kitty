export class EventsController {
	constructor ($log, $http, $stateParams, $uibModal) {
		'ngInject';
    
    this.http = $http;
    this.log = $log;
    this.stateParams = $stateParams;
    this.uibModal = $uibModal;
    
    this.events = [];
    
    this.loadList(this.stateParams.category);
  }
    
  loadList (categoryID) {
    this.log.log(categoryID);
    this.http.get('/events/' + (categoryID || 'all'))
      .then(response => {
        this.events = response.data;
      });
  }
  
  openModalForm (event) {
    let modalInstance = this.uibModal.open({
      templateUrl: 'app/events/events.modalForm.html',
      controller: 'ModalFormController',
      controllerAs: 'modalForm',
      resolve: {
        event: function () {
          return event;
        }
      }
    });
    
    modalInstance.result.then(() => {
      //this.loadCategoriesList();
    })
  }
  
  remove (event) {
    this.http.delete('/categories/' + event.id)
        .then(() => {
          let index = this.events.indexOf(event);
          this.events.splice(index, 1);
        });
  }

  openShowuibModal (eventId) {
        let modals = this.uibModal.open({
                templateUrl: 'app/event/event.html',
                controller: 'ModalFormController',
                controllerAs: 'modalForm',
                resolve: {Event: () => event}
            });

            modals.result.then((Event) => {
            let id = event.id;

            this.http.get('/events/' + id, Event)
            .then(() => {
                    this.loadList(categoryID);
                });
            });
        };
}
