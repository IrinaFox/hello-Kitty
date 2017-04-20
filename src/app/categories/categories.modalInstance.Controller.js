export class ModalInstanceCtrl {
    constructor ($uibModalInstance, $scope, $http) {
        'ngInject';
        this.uibModalInstance = $uibModalInstance;
        this.ctrl = this;
        this.scope = $scope;
        this.http = $http;

        this.scope.newCategory = '';

        this.loadCategoriesList();
    }

    loadCategoriesList () {
      this.http.get('/categories')
        .then((response) => {
            this.categoriesList = response.data;
        });
    }

    create () {
      if (this.scope.newCategory !== '') {
        var newCategory = {name: this.scope.newCategory};

        this.http.post('/categories', newCategory)
          .then(() => {
              this.ok();
          });

        this.scope.newCategory = '';
      }
    }

    destroy (id) {
        this.http.delete('/categories/'+id)
            .then(() => {
                this.loadCategoriesList();
          });
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
