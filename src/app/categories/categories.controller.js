export class CategoriesController {
  constructor ($log, $http) {
    'ngInject';

    var _categories;

    this.getCategories = function () {
       $http.get('/categories')
        .then((response) => {
          _categories = response.data;
          //$log.log(response.data);
        });
      this.categories = _categories;
      $log.log(this.categories)
    };

    $log.log(this.places);

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
