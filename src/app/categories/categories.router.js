export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/categories/templates/categories.html',
      controller: 'CategoriesController',
      controllerAs: 'categories'
    });

  $urlRouterProvider.otherwise('/');
}
