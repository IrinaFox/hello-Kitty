export function routerParticipants ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('participants', {
      url: '/',
      templateUrl: 'app/participants/participants.html',
      controller: 'ParticipantsController',
      controllerAs: 'participants'
    });
}

