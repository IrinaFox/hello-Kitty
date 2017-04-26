export function eventRouter ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('categories.event', {
      url: 'event',
      templateUrl: 'app/event/event.html',
      controller: 'EventController',
      controllerAs: 'event'
    });
}
