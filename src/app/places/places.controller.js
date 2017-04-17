export class PlacesController {
	constructor ($log, $http) {
		'ngInject';
<<<<<<< HEAD
		var _places;
        this.getPlaces = function () {
        	$http.get('/places')
        	    .then(function (response) {
        	    	_places = response.data;
        	    });
        	    this.places = _places;
        };
=======
        this.getPlaces = function () {
        	$http.get('/places')
        	    .then((response) => {
        	    	this.places = response.data;
        	    });
        };

        this.getPlaces();
>>>>>>> origin/categoriesIra
    }
}
