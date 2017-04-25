describe('CategoriesController', () => {
    let controller, scope;

    beforeEach(module('categories'));

    beforeEach(inject(($controller, $rootScope) => {
        scope = $rootScope.$new();
        controller = $controller('CategoriesController', {$scope: scope});
    }));

    it('should load categories list from server', inject($http => {
        $http.get('/categories');
        expect(controller.categoriesList).toEqual(undefined);
    }));

    it('the test number must be 10', () => {
        controller.onlyForTest();
        expect(controller.testNumber).toEqual(10);
    });
});
