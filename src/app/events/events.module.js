import { eventsRoute } from './events.route';
import { EventsController } from './events.controller';

var events = angular.module('events', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .config(eventsRoute)
  .controller('EventsController', EventsController);

export default events;
