export class ParticipantsController {
  constructor($http,  $uibModal) {
    'ngInject';

    this.http = $http;

    this.modal = $uibModal;

    this.getParticipants();
  }

    getParticipants () {
        this.http.get('/participants')
        .then(response => {
          this.participantsList = response.data;
        });
    }

    editPerson (participant) {
        let currentParticipant = participant,
            modalInstance = this.modal.open({
            templateUrl: 'app/participants/createForm.html',
            controller: 'ModalWindowCtrl',
            controllerAs: '$modal',
            size: 'lg'
        });

        modalInstance.result.then((participant) => {
         let id = currentParticipant.id;

            this.http.put('/participants/' + id, participant)
            .then(() => {
                this.getParticipants();
            });
        });
    };

    newPerson () {
        let modalWindow = this.modal.open({
            templateUrl: 'app/participants/createForm.html',
            controller: 'ModalWindowCtrl',
            controllerAs: '$modal',
            size: 'lg'
        });

        modalWindow.result.then((participant) => {

            this.http.post('/participants', participant)
            .then(() => {
                this.getParticipants();
            });
        })
    }

    removePerson (id) {

     this.http.delete('/participants/'+id)
          .then(() => {
              this.getParticipants();
          });
    }
}
