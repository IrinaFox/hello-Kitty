export class CategoriesController {
    constructor($log, $http, $scope, $uibModal) {
        'ngInject';

        this.http = $http;
        this.log = $log;
        this.scope = $scope;
        this.modal = $uibModal;

        this.scope.newCategory = '';
        this.get();
    }

    create () {
        if (this.scope.newCategory !== '') {
            var newCategory = {name: this.scope.newCategory};

            this.http.post('/categories', newCategory)
                .then(() => {
                    this.closeModal();
                    this.get();
                });

          this.scope.newCategory = '';
        }
    }

    get () {
        this.http.get('/categories')
            .then((response) => {
                this.categoriesList = response.data;
            });
    }

    save (category) {
        if (category.name !== '') {
            this.http.put('/categories/'+category.id, category)
                .then(() => {
                    this.get();
                });
        }
      }

    destroy (id) {
        this.http.delete('/categories/'+id, this.categoriesList[id])
            .then(() => {
                this.get();
            });
    }

    openCreationForm () {
        this.modal.open({
            templateUrl: 'app/categories/categories.createForm.html',
            controller: 'CategoriesController',
            controllerAs: 'categories'
        });
    }

    openEditionForm () {
        this.get();
        this.modal.open({
            templateUrl: 'app/categories/categories.editForm.html',
            controller: 'CategoriesController',
            controllerAs: 'categories'
        });
    }

    closeModal () {
        this.scope.$close(this.get());
    };

    filterEvents (buttonName) {
        this.log.log(buttonName);
    }
}
