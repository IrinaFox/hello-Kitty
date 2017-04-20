export class ParticipantsController {
  constructor($log, $http, $scope, $uibModal) {
    'ngInject';

    this.http = $http;
    this.log = $log;
    this.scope = $scope;
    this.modal = $uibModal;
    $scope.currentParticipant = {};
    this.MainCtrl=this;

    this.getParticipants();
  }

  getParticipants () {
      this.http.get('/participants')
      .then(response => {
        this.participantsList = response.data;
      });
  }


     save (participant) {
        if (participant.name !== '') {
          this.http.put('/participants/'+participant.id, participant)
              .then(() => {
                  this.getParticipants();
            });
        }
      }

  editPerson (participant) {
      this.currentParticipant = participant;

      let modalEdit = this.modal.open({
        templateUrl: 'app/participants/editForm.html',
        controller: 'ParticipantsController',
        controllerAs: 'participants',
        size: 'md'
      });
  }



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

  removePerson (_id) {
   let id = _id;

   this.http.delete('/participants/'+id)
        .then(() => {
            this.getParticipants();
        });
  }
}
