export function eventsRoute ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('categories.events', {
      url: 'events/:category',
      templateUrl: 'app/events/events.html',
      controller: 'EventsController',
      controllerAs: 'events'
    });
}
