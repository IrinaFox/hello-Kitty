import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { categories } from '../app/categories/categories.module';
import { places } from '../app/places/places.module';
import { participants } from '../app/participants/participants.module';
import { feedbacks } from '../app/feedbacks/feedbacks.module';

angular.module('server', ['feedbacks', 'participants', 'places', 'categories', 'ui.router', 'ui.bootstrap'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService);
