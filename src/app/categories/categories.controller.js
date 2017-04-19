export class CategoriesController {
    constructor($log, $http, $scope, $uibModal) {
        'ngInject';

        this.http = $http;
        this.log = $log;
        this.scope = $scope;
        this.modal = $uibModal;

        this.scope.newCategory = '';
        this.loadCategoriesList();
    }

    create () {
        if (this.scope.newCategory !== '') {
            var newCategory = {name: this.scope.newCategory};

            this.http.post('/categories', newCategory)
                .then(() => {
                    this.closeModal();
                });

          this.scope.newCategory = '';
        }
    }

    loadCategoriesList () {
        this.http.get('/categories')
            .then((response) => {
                this.categoriesList = response.data;
            });
    }

    save (category) {
        if (category.name !== '') {
            this.http.put('/categories/'+category.id, category)
                .then(() => {
                    this.loadCategoriesList();
                });
        }
      }

    destroy (id) {
        this.http.delete('/categories/'+id)
            .then(() => {
                this.loadCategoriesList();
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
        this.loadCategoriesList();
        this.modal.open({
            templateUrl: 'app/categories/categories.editForm.html',
            controller: 'CategoriesController',
            controllerAs: 'categories'
        });
    }

    closeModal () {
        this.scope.$close();
    };

    filterEvents (buttonName) {
        this.log.log(buttonName);
    }
}
