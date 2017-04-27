export class PlacesController {
    constructor ($http, $uibModal, $scope) {
        'ngInject';
        this.http = $http;
        this.modal = $uibModal;
        this.scope = $scope;
        this.getPlacesList();
    }

    getPlacesList () {
        this.http.get('/places')
            .then((response) => {
                this.places = response.data;

                this.scope.totalItems = this.places.length;
                this.scope.itemsPerPage = 3;
                this.scope.currentPage = 1;

                this.pageChanged = function() {
                    let firstPlace = (this.scope.currentPage - 1) * this.scope.itemsPerPage,
                        lastPlace = this.scope.currentPage * this.scope.itemsPerPage;
                    this.currentPage = this.places.slice(firstPlace, lastPlace);
                };
                this.pageChanged();
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
            const id = place.id;

            this.http.put('/places/' + id, currentPlace)
            .then(() => {
                this.getPlacesList();
            });
        });
    };
}
