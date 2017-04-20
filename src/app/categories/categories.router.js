export function categoriesRouter ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('categories', {
      url: '/',
      templateUrl: 'app/categories/categories.html',
      controller: 'CategoriesController',
      controllerAs: 'categories'
    });
}
