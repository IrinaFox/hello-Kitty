describe('CategoriesModalWindowController', () => {
    let $rootScope, $httpBackend, createController;

    beforeEach(angular.mock.module('categories'));

    beforeEach(inject(($injector) => {
        let $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');

      createController = function() {
          return $controller('CategoriesModalWindowController', {
            $scope: $rootScope,
            $uibModalInstance: {},
            categoriesList: {}
          });
      }
    }));

    it('should send request PUT /categories/1 to the server', () => {
        $httpBackend.expectPUT('/categories/1').respond();
        let controller = createController();
        controller.save({name: 'name', id: 1});
        $httpBackend.flush();
    });

    it('should send request DELETE /categories/1 to the server', () => {
        $httpBackend.expectDELETE('/categories/1').respond();
        let controller = createController();
        controller.destroy({name: 'name', id: 1});
        $httpBackend.flush();
    });
});
