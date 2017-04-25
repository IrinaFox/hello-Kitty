export class PlacesController {
    constructor ($http, $uibModal) {
        'ngInject';

        this.http = $http;
        this.modal = $uibModal;
                
        this.getPlacesList();
    }

    getPlacesList () {
        this.http.get('/places')
            .then((response) => {
                this.places = response.data;
            });
    }

    removePlace (id) {
        this.http.delete('/places/' + id)
            .then(() => {
                this.getPlacesList();
            });
    }

    openAddForm (size) {
        let newPlace = {},
            modalInstance = this.modal.open({
                templateUrl: 'app/places/addForm.html',
                controller: 'ModalInstanceCtrlPlaces',
                controllerAs: '$ctrl',
                size: size,
                resolve: {currentPlace: () => newPlace}
            });

        modalInstance.result.then((place) => {   

            this.http.post('/places', place)
            .then(() => {
                this.getPlacesList();
            });
        });
    }

    openEditForm (size, place) {
        let modalInstance = this.modal.open({
                templateUrl: 'app/places/addForm.html',
                controller: 'ModalInstanceCtrlPlaces',
                controllerAs: '$ctrl',
                size: size,
                resolve: {currentPlace: () => place}
            });

        modalInstance.result.then((currentPlace) => {
            let id = place.id;
            
            this.http.put('/places/' + id, currentPlace)
            .then(() => {
                this.getPlacesList();
            });
        });
    };
}