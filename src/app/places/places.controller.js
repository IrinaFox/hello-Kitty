export class PlacesController {
	constructor ($log, $http) {
		'ngInject';
		var _places;
        this.getPlaces = function () {
        	$http.get('/places')
        	    .then(function (response) {
        	    	_places = response.data;
        	    });
        	    this.places = _places;
        };
        
        $log.log(this.places);
    }
};