export class CategoriesController {
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
}
