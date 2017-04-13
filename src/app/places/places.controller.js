export class PlacesController {
	constructor () {
		'ngInject';
        this.places = _places;
        this.editPlaces = function () {
        	console.log(1);
        }
    }
};