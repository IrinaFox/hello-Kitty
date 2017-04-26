describe('CategoriesController', () => {
    var $rootScope, $httpBackend, createController, authRequestHandler;

    beforeEach(angular.mock.module('categories'));

    beforeEach(inject(( $injector) => {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        var $controller = $injector.get('$controller');

        authRequestHandler = $httpBackend.when('GET', '/categories')
            .respond();

        createController = function() {
            return $controller('CategoriesController', {$scope: $rootScope});
        }
    }));

    it('should load categories list from server', () => {
        authRequestHandler.respond(401, '');

        $httpBackend.expectGET('/categories').respond(401,{});
        var controller = createController();
        $httpBackend.flush();
    });

});
