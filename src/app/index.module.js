import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
<<<<<<< HEAD
import { categories } from '../app/categories/categories.module';
import { places } from '../app/places/places.module';
import { participants } from '../app/participants/participants.module';
import { feedbacks } from '../app/feedbacks/feedbacks.module';
<<<<<<< HEAD
import { events } from '../app/events/events.module';

angular.module('server', ['feedbacks', 'participants', 'places', 'categories', 'events', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
=======
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { feedbacks } from '../app/feedbacks/feedbacks.module';
angular.module('server', ['feedbacks','ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
>>>>>>> origin/feedbacksSveta
  .constant('malarkey', malarkey)
  .constant('moment', moment)
=======

angular.module('server', ['feedbacks', 'participants', 'places', 'categories', 'ui.router', 'ui.bootstrap'])
>>>>>>> origin/categoriesIra
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService);
