import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { categories } from '../app/categories/categories.module';
import { places } from '../app/places/places.module';
import { participants } from '../app/participants/participants.module';

angular.module('server', ['participants', 'places', 'categories', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService);
