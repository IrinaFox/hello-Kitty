export function eventRouter ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('categories.event', {
      url: 'events/:eventID',
      templateUrl: 'app/event/event.html',
      controller: 'EventController',
      controllerAs: 'event'
    });
}
