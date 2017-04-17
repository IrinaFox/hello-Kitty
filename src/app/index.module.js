import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { categories } from '../app/categories/categories.module';
import { places } from '../app/places/places.module';
import { participants } from '../app/participants/participants.module';
import { feedbacks } from '../app/feedbacks/feedbacks.module';
<<<<<<< HEAD
import { events } from '../app/events/events.module';

angular.module('server', ['feedbacks', 'participants', 'places', 'categories', 'events', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
=======

angular.module('server', ['feedbacks', 'participants', 'places', 'categories', 'ui.router', 'ui.bootstrap'])
>>>>>>> origin/categoriesIra
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService);
