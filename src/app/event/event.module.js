import { eventRouter } from './event.router';
import { EventController } from './event.controller';

var event = angular.module('event', ['ui.router', 'ui.bootstrap'])
  .config(eventRouter)
  .controller('EventsController', EventController);
  
export default event;
