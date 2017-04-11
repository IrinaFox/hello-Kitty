export class CategoriesController {
  constructor (webDevTec) {
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
      alert('hello');
    };

    this.showAll = function () {
      console.log('showed All events');
    };

    this.editCategories = function () {
      console.log('Ediiiit');
    };
  }
}
