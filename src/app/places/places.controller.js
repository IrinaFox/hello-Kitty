export class PlacesController {
    constructor ($log, $http, $scope, $uibModal) {
        'ngInject';

        this.http = $http;
        this.log = $log;
        this.scope = $scope;
        this.modal = $uibModal;
        this.currentPlace = {};
        this.ctrl = this;

        this.get();
    }

    get () {
        this.http.get('/places')
            .then((response) => {
                this.places = response.data;
            });
    }

    remove (id) {
        this.http.delete('/places/' + id)
            .then(() => {
                this.get();
            });
    }

    openAddForm (size) {
        var modalInstance = this.modal.open({
            templateUrl: 'app/places/addForm.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size
        });

        modalInstance.result.then((place) => {

            this.http.post('/places', place)
            .then(() => {
                this.get();
            });
        })
    }

    openEditForm (size, place) {
        var currentPlace = place,
            modalInstance = this.modal.open({
            templateUrl: 'app/places/editForm.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: '$ctrl',
            size: size
        });

        modalInstance.result.then((place) => {
            var id = currentPlace.id;

            for (var key in currentPlace) {
                if (place[key]) {
                    currentPlace[key] = place[key];
                }
            }

            this.http.put('/places/' + id, currentPlace)
            .then(() => {
                this.get();
            });
        });
    };
}
