export class PlacesController {
    constructor ($log, $http, $scope, $uibModal) {
        'ngInject';

        this.http = $http;
        this.log = $log;
        this.scope = $scope;
        this.modal = $uibModal;
        this.currentPlace = {};
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
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            resolve: {currentPlace: () => this.currentPlace}
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
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size,
            resolve: {currentPlace: () => place}
        });

        modalInstance.result.then((currentPlace) => {
            console.log(currentPlace);
            var id = currentPlace.id;
            
            this.http.put('/places/' + id, currentPlace)
            .then(() => {
                this.getPlacesList();
            });
        });
    };
}