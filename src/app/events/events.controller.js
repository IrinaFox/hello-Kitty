export class EventsController {
	constructor ($log, $http, $stateParams, $uibModal) {
		'ngInject';
    
    this.http = $http;
    this.log = $log;
    this.stateParams = $stateParams;
    this.uibModal = $uibModal;
    
    this.allEvents = [];
    this.events = [];
    this.places = [];
    this.participants = [];
    
    this.loadList(this.stateParams.category);
  }
    
  loadList (categoryID) {
    this.http.get('/events')
      .then(response => {
        this.allEvents = response.data;
        this.events = this.allEvents;
        if (categoryID) {
          this.events = this.allEvents.filter(event => event.categoryID == categoryID);
        }
        
        this.http.get('/places')
            .then((response) => {
                this.places = response.data;
                
                this.events.forEach(event => {
                  this.places.forEach(place => {
                    if(event.placeID == place.id) {
                      event.place = place;
                    }
                  });
                });
            });
        
        this.http.get('/participants')
            .then((response) => {
                this.participants = response.data;
                
                this.events.forEach(event => {
                  event.participants = [];
                  
                  event.participantIDs.forEach(id => {
                    this.participants.forEach(participant => {
                      if(id == participant.id) {
                        event.participants.push(participant);
                      }
                    });
                  });
                });
            });
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
    this.http.delete('/events/' + event.id)
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
