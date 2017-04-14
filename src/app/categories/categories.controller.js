export class CategoriesController {
  constructor($log, $http) {
    'ngInject';

    var _categories;

    this.getCategories = function () {
      $http.get('/categories')
        .then((response) => {
          _categories = response.data;
        });
      this.categories = _categories;
    };

    this.sayHi = function () {
      $log.log('hello');
    };

    this.showAll = function () {
      $log.log('showed All events');
      _categories.push({
        "name": "New category",
        "id": "5"
      })
    };
  }
}
