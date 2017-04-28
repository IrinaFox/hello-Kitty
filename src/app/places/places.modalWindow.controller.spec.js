describe('ModalInstanceCtrlPlaces', () => {
    let $rootScope, $httpBackend, createController, modalInstance;

    beforeEach(angular.mock.module('places'));

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
          return $controller('ModalInstanceCtrlPlaces', {
            $scope: $rootScope,
            $uibModalInstance: modalInstance,
            currentPlace: {}
          });
      }
    }));

    it('should instantiate the controller properly', function () {
        let controller = createController();
        expect(controller).toBeDefined();
    });

    it('should close the modal, when accepted', function () {
        let controller = createController();
        controller.ok();
        expect(modalInstance.close).toHaveBeenCalled();
    });

    it('should dismiss the modal with result "cancel"', function () {
        let controller = createController();
        controller.cancel();
        expect(modalInstance.dismiss).toHaveBeenCalledWith('cancel');
    });
});
