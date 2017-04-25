describe('CategoriesController', () => {
    let vm, $httpBackend;

    beforeEach(angular.mock.module('categories'));

    beforeEach(inject(($controller) => {
        vm = $controller('CategoriesController');
    }));

    it('should load categories list from server', inject($http => {
        $http.get('/categories');
        expect(vm.categoriesList).toEqual(undefined);
    }));
});