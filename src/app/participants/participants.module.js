import { routerParticipants } from './participants.route';
import { ParticipantsController } from './participants.controller';

var participants = angular.module('participants', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
    .config(routerParticipants)
    .controller('ParticipantsController', ParticipantsController);

export default participants;
