describe('CategoriesController', () => {
    let $rootScope, $httpBackend, createController;

    beforeEach(angular.mock.module('categories'));

    beforeEach(inject(($injector) => {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        let $controller = $injector.get('$controller');

        createController = function() {
            return $controller('CategoriesController', {$scope: $rootScope});
        }
    }));

    it('should send request GET /categories on serve', () => {
        $httpBackend.expectGET('/categories').respond();
        let controller = createController();
        $httpBackend.flush();
    });
});
