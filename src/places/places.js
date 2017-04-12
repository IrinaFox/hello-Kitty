(function () {
	var app = angular.module('allPlaces', []);

	app.controller('placesController', function () {
        this.places = _places;
	});

	app.directive('places', function () {
		return {
            restrict: 'E',
            templateUrl: 'places/all-places.html'
		};
	});
})();