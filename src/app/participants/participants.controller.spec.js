describe('ParticipantsController', () => {
    let $rootScope, $httpBackend, createController;

    beforeEach(angular.mock.module('participants'));

    beforeEach(inject(($injector) => {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        let $controller = $injector.get('$controller');

        createController = function() {
            return $controller('ParticipantsController', {$scope: $rootScope});
        }
    }));

    it('should send request on serve', () => {
        $httpBackend.expectGET('/participants').respond(200, [
            {name:'name'},
            {name:'name'},
            {name:'name'},
            {name:'name'}
        ]);

        let controller = createController();
        $httpBackend.flush();
    });
});
