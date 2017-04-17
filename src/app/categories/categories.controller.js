export class CategoriesController {
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
    constructor($log, $http, $scope) {
        'ngInject';


        this.http = $http;
        this.log = $log;
        this.scope = $scope;

        this.get();
    }

    create () {
        if (this.scope.newCategory !== "") {
            var newCategory = {name: this.scope.newCategory};

            this.http.post('/categories', newCategory)
                .then(() => {
                    this.get();
                });
        }
    }

    get () {
        this.http.get('/categories')
            .then((response) => {
                this.categoriesList = response.data;
            });
    }

    save (category) {
        this.log.log(category);
        if (category.name !== "") {
            this.http.put('/categories/'+category.id, category)
                .then(() => {
                    this.get();
              })
        }
      }

    destroy (_id) {
        this.log.log(_id);
        var id = _id;
        this.log.log(this.categoriesList[id]);
        this.http.delete('/categories/'+id, this.categoriesList[id])
            .then(() => {
                this.get();
            });
    }

    filterEvents (buttonName) {
        this.log.log(buttonName);
    }

    clearInput () {
        this.scope.newCategory = "";
    }
<<<<<<< HEAD
=======

>>>>>>> origin/categoriesIra
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
}
