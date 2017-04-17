export function routerPlaces ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('events', {
      url: '/events',
      templateUrl: 'app/events/events.html',
      controller: 'EventsController',
      controllerAs: 'events'
    });
}