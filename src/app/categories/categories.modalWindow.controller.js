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
        let inputCategoryName = document.querySelector('.edit_' + category.id),
            buttonSave = document.querySelector('.buttonSave_' + category.id),
            buttonDelete = document.querySelector('.buttonDelete_' + category.id);

        inputCategoryName.disabled = true;
        buttonSave.disabled = true;
        buttonDelete.disabled = true;

        category.name = 'Deleted';

        if (!category.del) {
            category.del = true;
            this.http.delete('/categories/' + category.id);
        }
    }

    save (category) {
        if (category.name !== '' && !category.del) {
            this.http.put('/categories/'+category.id, category);
        } else if (category.del) {
            category.name = 'Deleted';
        }
    }

    ok () {
        this.uibModalInstance.close();
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    }
}
