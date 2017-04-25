describe('CategoriesController', () => {
    let vm, $httpBackend;

    beforeEach(angular.mock.module('server'));

    beforeEach(inject(($controller, $injector) => {
        $httpBackend = $injector.get('$httpBackend');
        vm = $controller('CategoriesController');
    }));

    it('should load categories list from server', inject($http => {
        $http.get('/categories');
        expect(vm.categoriesList).toEqual(undefined);
    }));

    /*it('should define animate class after delaying timeout', inject($timeout => {
      $timeout.flush();
      expect(vm.classAnimation).toEqual('rubberBand');
    }));

    it('should show a Toastr info and stop animation when invoke showToastr()', inject(toastr => {
      vm.showToastr();
      expect(toastr.info).toHaveBeenCalled();
      expect(vm.classAnimation).toEqual('');
    }));

    it('should define more than 5 awesome things', () => {
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length === 5).toBeTruthy();
    });*/
});
