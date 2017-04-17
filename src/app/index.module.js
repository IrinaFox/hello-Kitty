/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
import { categories } from '../app/categories/categories.module';
import { places } from '../app/places/places.module';
import { participants } from '../app/participants/participants.module';
import { feedbacks } from '../app/feedbacks/feedbacks.module';
<<<<<<< HEAD
import { events } from '../app/events/events.module';

angular.module('server', ['feedbacks', 'participants', 'places', 'categories', 'events',  'ui.router', 'ui.bootstrap'])
=======
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
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService);



