export class EventController {
	constructor ($log, $http, $scope) {
		'ngInject';
    this.log = $log;
    this.http = $http;
    this.scope = $scope;
    showMore(this.id);
  }
    showMore (event.id) {
    this.log.log(event.id);
    this.http.get('/events/' + event.id )
      .then(response => {
        this.events = response.data;
      });
  }
 