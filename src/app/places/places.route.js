export function routerPlaces ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('places', {
      url: '/places',
      templateUrl: 'app/places/places.html',
      controller: 'PlacesController',
      controllerAs: 'places'
    });

  $urlRouterProvider.otherwise('/');
}
