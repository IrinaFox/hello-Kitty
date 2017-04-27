describe('PlacesController', () => {
    let $rootScope, $httpBackend, createController;

    beforeEach(angular.mock.module('places'));

    beforeEach(inject(($injector) => {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        let $controller = $injector.get('$controller');

        createController = function() {
            return $controller('PlacesController', {$scope: $rootScope});
        }
    }));

    it('should send request on serve', () => {
        $httpBackend.expectGET('/places').respond(200, [
            {name:'name'},
            {name:'name'},
            {name:'name'},
            {name:'name'}
        ]);

        let controller = createController();
        $httpBackend.flush();
    });
});
