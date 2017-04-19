export class CategoriesController {
    constructor($log, $http, $scope) {
        'ngInject';

        this.http = $http;
        this.log = $log;
        this.scope = $scope;

        this.get();
    }

    create () {
        if (this.scope.creation.newCategory !== "") {
            var newCategory = {name: this.scope.creation.newCategory};

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

    save () {
        this.log.log(this.scope.creation.editedCategory);

        if (this.scope.creation.editedCategory !== "") {
            var newCategory = this.scope.creation.editedCategory;
            console.log(newCategory);
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

}
