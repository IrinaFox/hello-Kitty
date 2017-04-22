export class CategoriesModalWindow {
    constructor ($uibModalInstance, $scope, $http, categoriesList) {
        'ngInject';
        this.uibModalInstance = $uibModalInstance;
        this.scope = $scope;
        this.http = $http;
        this.categoriesList = angular.copy(categoriesList);

        this.scope.newCategory = '';
    }

    create () {
        if (this.scope.newCategory !== '') {
            let newCategory = {name: this.scope.newCategory};

            this.http.post('/categories', newCategory)
                .then(() => {
                    this.ok();
                });

            this.scope.newCategory = '';
        }
    }

    destroy (id) {
        this.http.delete('/categories/'+id);
    }

    save (category) {
        if (category.name !== '') {
            this.http.put('/categories/'+category.id, category);
        }
    }

    ok () {
        this.uibModalInstance.close();
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    };
}
