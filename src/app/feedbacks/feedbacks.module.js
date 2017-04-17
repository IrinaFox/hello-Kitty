import { FeedbacksRouter } from './feedbacks.router';
import { FeedbacksController } from './feedbacks.controller';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../components/navbar/navbar.directive';
import { MalarkeyDirective } from '../components/malarkey/malarkey.directive';



var feedbacks = angular.module('feedbacks', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .config(FeedbacksRouter)
  .controller('FeedbacksController', FeedbacksController);

export default feedbacks;