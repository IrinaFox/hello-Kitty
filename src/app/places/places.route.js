export function routerPlaces ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('places', {
      url: '/places',
      templateUrl: 'app/places/places.html',
      controller: 'PlacesController',
      controllerAs: 'places'
    });
}
