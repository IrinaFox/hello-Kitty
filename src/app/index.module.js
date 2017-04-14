
import { config } from './index.config';
import { routerConfig } from './index.route';
import { participants } from '../app/participants/participants.module';

angular.module('server', ['participants','ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .config(config)
  .config(routerConfig)



