import { routerParticipants } from './participants.route';
import { ParticipantsController } from './participants.controller';
import { ModalWindowCtrl } from './participants.modalwindow.controller';

var participants = angular.module('participants', ['ui.router', 'ui.bootstrap'])
    .config(routerParticipants)
    .controller('ParticipantsController', ParticipantsController)
    .controller('ModalWindowCtrl', ModalWindowCtrl);

export default participants;
