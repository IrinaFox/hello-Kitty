export class CategoriesController {
    constructor($log, $http, $scope) {
        'ngInject';

        this.http = $http;
        this.log = $log;
        this.scope = $scope;

        this.get();
    }

    save () {
        this.log.log('Edit works');
    }

    get () {
        this.http.get('/categories')
            .then((response) => {
                this.categoriesList = response.data;
            });
    }

    filterEvents (buttonName) {
        this.log.log(buttonName);
    }

    create () {
        var newCategory = {name: this.scope.creation.newCategory};

        this.http.post('/categories', newCategory)
            .then((response) => {
                this.categoriesList.push(response.data);
            });
    }
}
