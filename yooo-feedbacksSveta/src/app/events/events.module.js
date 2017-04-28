import { eventsRoute } from './events.route';
import { EventsController } from './events.controller';
import { ModalFormController } from './events.modalForm.controller';

var events = angular.module('events', ['ui.router', 'ui.bootstrap'])
  .config(eventsRoute)
  .controller('ModalFormController', ModalFormController)
  //.controller('EventsController', ['$log', '$http', '$stateParams', '$uibModal', EventsController]);
  .controller('EventsController', EventsController);
  
export default events;
