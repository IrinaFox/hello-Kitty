export class CategoriesController {
    constructor($log, $http) {
        'ngInject';

        this.http = $http;
        this.log = $log;

        this.get();
    }

    edit () {
        this.log.log('showed All events');
          this.categories.push({
              "name": "New category",
              "id": "5"
        });
    }

    get () {
        this.http.get('/categories')
            .then((response) => {
                this.categories = response.data;
            });
    }

    filterEvents (buttonName) {
        this.log.log(buttonName);
    }
}
