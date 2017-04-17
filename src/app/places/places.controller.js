export class PlacesController {
	constructor ($log, $http) {
		'ngInject';
<<<<<<< HEAD
        
=======
<<<<<<< HEAD
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
		var _places;
        this.getPlaces = function () {
        	$http.get('/places')
        	    .then(function (response) {
        	    	_places = response.data;
        	    });
        	    this.places = _places;
        };
<<<<<<< HEAD

=======
=======
        this.getPlaces = function () {
        	$http.get('/places')
        	    .then((response) => {
        	    	this.places = response.data;
        	    });
        };

        this.getPlaces();
>>>>>>> origin/categoriesIra
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
    }
}
