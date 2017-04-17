<<<<<<< HEAD
=======
<<<<<<< HEAD
import { FeedbacksRouter } from './feedbacks.router';
import { FeedbacksController } from './feedbacks.controller';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';
=======
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
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
  .service('webDevTec', WebDevTecService)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
=======
<<<<<<< HEAD
=======
  .service('webDevTec', WebDevTecService)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
>>>>>>> origin/feedbacksSveta
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
  .config(FeedbacksRouter)
  .controller('FeedbacksController', FeedbacksController);

export default feedbacks;
