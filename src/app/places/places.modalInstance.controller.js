export class ModalInstanceCtrlPlaces {
    constructor ($uibModalInstance, currentPlace) {
        'ngInject';
        this.uibModalInstance = $uibModalInstance;
        this.ctrl = this;
        this.place = currentPlace;
    }

    ok (place) {
       /* this.place.name = place.name;
        this.place.adress = place.adress;
        this.place.coords = place.coords;*/
        this.uibModalInstance.close(this.place);
    }

    cancel () {
        this.uibModalInstance.dismiss('cancel');
    };
}