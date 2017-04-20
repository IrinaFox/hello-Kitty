export function routerParticipants ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('categories.participants', {
      url: 'participants',
      templateUrl: 'app/participants/participants.html',
      controller: 'ParticipantsController',
      controllerAs: 'participants'
    });
}
