export class ParticipantsController {
  constructor($http,  $uibModal, $scope) {
    'ngInject';

    this.http = $http;
    this.modal = $uibModal;
    this.getParticipants();
    this.scope = $scope;
    this.newParticipant = {};
    //this.orderProp = 'name'
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
            templateUrl: 'app/participants/UnicForm.html',
            controller: 'ModalWindowCtrl',
            controllerAs: '$modal',
            size: 'md',
            resolve: {currentParticipant: () => participant}
        });

        modalInstance.result.then((currentParticipant) => {
            let id = participant.id;
            
            this.http.put('/participants/' + id, currentParticipant)
            .then(() => {
                this.getParticipants();
            });
        });
    };

    newPerson () {
        let modalWindow = this.modal.open({
            templateUrl: 'app/participants/UnicForm.html',
            controller: 'ModalWindowCtrl',
            controllerAs: '$modal',
            size: 'md',
            resolve: {currentParticipant: () => this.newParticipant}
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
