describe('FeedbacksController', () => {
    let $rootScope, $httpBackend, createController;

    beforeEach(angular.mock.module('feedbacks'));

    beforeEach(inject(($injector) => {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        let $controller = $injector.get('$controller');

        createController = function() {
            return $controller('FeedbacksController', {$scope: $rootScope});
        }
    }));

    it('should send request GET /feedbacks on serve', () => {
        $httpBackend.expectGET('/feedbacks').respond(200, [
            {name:'name'},
            {name:'name'},
            {name:'name'},
            {name:'name'}
        ]);

        let controller = createController();
        $httpBackend.flush();
    });
});
