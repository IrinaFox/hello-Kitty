export class CategoriesController {
  constructor ($log, $http) {
    'ngInject';

    //var _categories;

    this.categories = [
      {
        "name": "Web UI",
        "id": "0"
      },

      {
        "name": "Python",
        "id": "1"
      },

      {
        "name": "Database",
        "id": "2"
      },

      {
        "name": "Manual Quality",
        "id": "3"
      }
    ];

    this.getCategories = function () {
      $log.log('Ediiiit');

      $http.get('/categories')
        .then((response) => {
          //_categories = response.data;
          $log.log(response.data);
        });
      //this.categories = _categories;
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
