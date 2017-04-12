export function categoriesRouter ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('categories', {
      url: '/',
      templateUrl: 'app/categories/categories.html',
      controller: 'CategoriesController',
      controllerAs: 'categories'
    });
}
