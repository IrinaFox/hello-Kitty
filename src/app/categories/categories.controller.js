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

    onlyForTest () {
        this.testNumber = 10;
    }

    loadCategoriesList () {
        this.http.get('/categories')
            .then((response) => {
                this.categoriesList = response.data;
            });
    }

    openCreationForm () {
        const modalInstance = this.modal.open({
            templateUrl: 'app/categories/categories.createForm.html',
            controller: 'CategoriesModalWindowController',
            controllerAs: '$ctrl',
            resolve: {categoriesList: () => this.categoriesList}
        });

        modalInstance.result.then(() => {
            this.loadCategoriesList();
        })
    }

    openEditionForm () {
        const modalInstance = this.modal.open({
            templateUrl: 'app/categories/categories.editForm.html',
            controller: 'CategoriesModalWindowController',
            controllerAs: '$ctrl',
            resolve: {categoriesList: () => this.categoriesList}
        });

        modalInstance.result.then(() => {
            this.loadCategoriesList();
        })
    }

    filterEvents (buttonName) {
        this.log.log(buttonName);
    }
}
