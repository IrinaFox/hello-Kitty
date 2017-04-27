export class EventController {
	constructor ($log, $http, $scope, $stateParams) {
		'ngInject';
    this.log = $log;
    this.http = $http;
    this.scope = $scope;
    $scope.event = false;

   angular.forEach(Events, (event, key) =>{
      if (event.ID==$stateParams.id) {
         $scope.event = event;
      }
   });
}
    

  
 