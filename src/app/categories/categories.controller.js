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

    loadCategoriesList () {
        this.http.get('/categories')
            .then((response) => {
                this.categoriesList = response.data;
            });
    }

    openCreationForm () {
        var modalInstance = this.modal.open({
            templateUrl: 'app/categories/categories.createForm.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl'
        });

        modalInstance.result.then(() => {
            this.loadCategoriesList();
        })
    }

    openEditionForm (categoriesList) {
        var modalInstance = this.modal.open({
            templateUrl: 'app/categories/categories.editForm.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl'
        });

        modalInstance.result.then(() => {
            this.loadCategoriesList();
        })
    }

    filterEvents (buttonName) {
        this.log.log(buttonName);
    }
}
