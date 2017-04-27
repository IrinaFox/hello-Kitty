describe('CategoriesController', () => {
    let $rootScope, $httpBackend, createController;

    beforeEach(angular.mock.module('categories'));

    beforeEach(inject(($injector) => {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        var $controller = $injector.get('$controller');

        createController = function() {
            return $controller('CategoriesController', {$scope: $rootScope});
        }
    }));

    it('should load categories list from server', () => {
        $httpBackend.expectGET('/categories').respond();
        var controller = createController();
        $httpBackend.flush();
    });
});
