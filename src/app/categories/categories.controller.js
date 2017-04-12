export class CategoriesController {
  constructor ($log, $http) {
    'ngInject';

    this.categories = [
      {
        "name": "Web UI"
      },

      {
        "name": "Python"
      },

      {
        "name": "Database"
      },

      {
        "name": "Manual Quality"
      }
    ];

    this.sayHi = function () {
      $log.log('hello');
    };

    this.showAll = function () {
      $log.log('showed All events');
    };

    this.editCategories = function () {
      $log.log('Ediiiit');

      $http.get('/students')
          .then(function (response) {
              $log.log(response);
        });
    };
  }
}
