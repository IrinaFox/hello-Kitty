/*export class PlacesController {
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
    }
}*/

export class PlacesController {
	constructor ($log, $http) {
		'ngInject';
		//var _places;

        this.http = $http; 
        
        this.log = $log; 

        this.places = [];

/*        this.foo = function () {
           //this.log.log('world');
           console.log('participants');
           alert('weeeee')
         }*/


        this.getPlaces();
    }


    getPlaces () {
        this.http.get('/places')
        .then(response => {
            this.places = response.data;
        });  
    }



     foo () {
        $log.log('world')
       /*this.log.log('world');
       console.log('participants');
       alert('weeeee')*/
     } 


    
}
