<<<<<<< HEAD
import { FeedbacksRouter } from './feedbacks.router';
import { FeedbacksController } from './feedbacks.controller';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';
=======
import {FeedbacksRouter} from './feedbacks.router';
import {FeedbacksController} from './feedbacks.controller';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../components/navbar/navbar.directive';
import { MalarkeyDirective } from '../components/malarkey/malarkey.directive';

>>>>>>> origin/feedbacksSveta

var feedbacks = angular.module('feedbacks', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .service('githubContributor', GithubContributorService)
<<<<<<< HEAD
=======
  .service('webDevTec', WebDevTecService)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
>>>>>>> origin/feedbacksSveta
  .config(FeedbacksRouter)
  .controller('FeedbacksController', FeedbacksController);

export default feedbacks;
