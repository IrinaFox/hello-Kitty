export function categoriesRouter ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('categories', {
      url: '/',
      templateUrl: 'app/categories/templates/categories.html',
      controller: 'CategoriesController',
      controllerAs: 'categories'
    });
}
