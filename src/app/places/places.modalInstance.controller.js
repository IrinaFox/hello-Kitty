export class ModalInstanceCtrl {
    constructor ($uibModalInstance, currentPlace) {
        'ngInject';
        this.uibModalInstance = $uibModalInstance;
        this.ctrl = this;
        this.currentPlace = currentPlace;
    }

    ok (place) {
        this.currentPlace.name = place.name || this.currentPlace.name;
        this.currentPlace.adress = place.adress || this.currentPlace.adress;
        this.currentPlace.coords = place.coords || this.currentPlace.coords;
        this.uibModalInstance.close(this.currentPlace);
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    };
}