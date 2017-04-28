import { GithubContributorService } from '../components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../components/navbar/navbar.directive';
import { MalarkeyDirective } from '../components/malarkey/malarkey.directive';
import {routerPlaces} from './places.route';
import {PlacesController} from './places.controller';
import {ModalInstanceCtrlPlaces} from './places.modalInstance.controller';

var places = angular.module('places', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .config(routerPlaces)
  .controller('PlacesController', PlacesController)
  .controller('ModalInstanceCtrlPlaces', ModalInstanceCtrlPlaces);

export default places;


