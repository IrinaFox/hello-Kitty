export class PlacesController {
    constructor ($log, $http, $scope, $uibModal) {
        'ngInject';

        this.http = $http;
        this.log = $log;
        this.scope = $scope;
        this.modal = $uibModal;
        this.newPlace = {};
        this.ctrl = this;
                
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
        var modalInstance = this.modal.open({
            templateUrl: 'app/places/addForm.html',
            controller: 'ModalInstanceCtrlPlaces',
            controllerAs: '$ctrl',
            size: size,
            resolve: {currentPlace: () => this.newPlace}
        });

        modalInstance.result.then((place) => {   

            this.http.post('/places', place)
            .then(() => {
                this.getPlacesList();
            });
        });
    }

    openEditForm (size, place) {
        var modalInstance = this.modal.open({
            templateUrl: 'app/places/addForm.html',
            controller: 'ModalInstanceCtrlPlaces',
            controllerAs: '$ctrl',
            size: size,
            resolve: {currentPlace: () => place}
        });

        modalInstance.result.then((currentPlace) => {
            var id = place.id;
            
            this.http.put('/places/' + id, currentPlace)
            .then(() => {
                this.getPlacesList();
            });
        });
    };
}