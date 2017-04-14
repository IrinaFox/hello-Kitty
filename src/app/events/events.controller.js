export class EventsController {
	constructor ($log, $http) {
		'ngInject';
    
    this.events = [];
    
    this.getPlaces();
  }
    
  getPlaces () {
    $http.get('/events')
      .then(response => {
        this.events = response.data;
      });
  }
}
