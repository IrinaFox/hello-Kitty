export class PlacesController {
	constructor ($log, $http) {
		'ngInject';

        this.getPlaces = function () {
        	$http.get('/places')
        	    .then((response) => {
        	    	this.places = response.data;
        	    });
        };

        this.getPlaces();
    }
}
