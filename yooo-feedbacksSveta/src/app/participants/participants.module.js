import { routerParticipants } from './participants.route';
import { ParticipantsController } from './participants.controller';
import { ModalWindowCtrl } from './participants.modalwindow.controller';

var participants = angular.module('participants', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
    .config(routerParticipants)
    .controller('ParticipantsController', ParticipantsController)
    .controller('ModalWindowCtrl', ModalWindowCtrl);

export default participants;
