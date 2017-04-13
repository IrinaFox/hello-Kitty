export function routerPlaces ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('places', {
      url: '/',
      templateUrl: 'app/places/places.html',
      controller: 'PlacesController',
      controllerAs: 'places'
    });
}
