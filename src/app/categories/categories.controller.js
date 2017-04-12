export class CategoriesController {
  constructor ($log, $http) {
    'ngInject';
    var _categories = [];

    this.categories = _categories;

    $log.log(this.categories);

    this.editCategories = function () {
      $log.log('Ediiiit');

      $http.get('/categories')
        .then((response) => {
          _categories = response.data;
          $log.log(_categories);
        });
    };

    this.sayHi = function () {
      $log.log('hello');
    };

    this.showAll = function () {
      $log.log('showed All events');

      $http.get('/places')
        .then(function (response) {
          $log.log(response);
        });
    };
  }
}
