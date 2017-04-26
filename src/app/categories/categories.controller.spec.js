describe('CategoriesController', () => {
    let controller, scope;

    beforeEach(angular.mock.module('categories'));

    beforeEach(inject(($controller, $rootScope) => {
        scope = $rootScope.$new();
        controller = $controller('CategoriesController', {$scope: scope});
    }));

    it('should load categories list from server', inject($http => {
        $http.get('/categories');
        expect(controller.categoriesList).toEqual(undefined);
    }));
});
