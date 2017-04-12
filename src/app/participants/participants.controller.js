export class ParticipantsController {
  constructor($http) {
    'ngInject';
    this.participants = participants;

    var participants;

    this.getParticipants = function () {
      $http.get('/participants')
        .then(function (response) {
          participants = response.data;
        });

      this.participants = participants;
    };
  }
}
