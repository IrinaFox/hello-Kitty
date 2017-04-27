describe('CategoriesModalWindowController', () => {
    let $rootScope, $httpBackend, createController, modalInstance;

    beforeEach(angular.mock.module('categories'));

    beforeEach(inject(($injector) => {
        let $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');

     modalInstance = {
          close: jasmine.createSpy('modalInstance.close'),
          dismiss: jasmine.createSpy('modalInstance.dismiss'),
          result: {
            then: jasmine.createSpy('modalInstance.result.then')
          }
      };

      createController = function() {
          return $controller('CategoriesModalWindowController', {
            $scope: $rootScope,
            $uibModalInstance: modalInstance,
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

    it('should close the modal with result "true" when accepted', function () {
        let controller = createController();
        controller.ok();
        expect(modalInstance.close).toHaveBeenCalledWith(true);
    });

    it('should dismiss the modal with result "cancel"', function () {
        let controller = createController();
        controller.cancel();
        expect(modalInstance.dismiss).toHaveBeenCalledWith('cancel');
    });
});
