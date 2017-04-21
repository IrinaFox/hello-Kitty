export function routerPlaces ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('categories.places', {
      url: '/places',
      templateUrl: 'app/places/places.html',
      controller: 'PlacesController',
      controllerAs: 'places'
    });
}
