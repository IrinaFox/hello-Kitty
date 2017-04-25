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
});
