export class CategoriesModalWindowController {
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

    destroy (category) {
        category.name = 'Deleted';
        if (category.name !== '' && !category.del) {
            category.del = true;
            this.http.delete('/categories/' + category.id);
        }
    }

    save (category) {
        if (category.name !== '' && !category.del) {
            this.http.put('/categories/'+category.id, category);
        }
    }

    ok () {
        this.uibModalInstance.close();
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    }
}
