import { categoriesRouter } from './categories.router';
import { CategoriesController } from './categories.controller';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';

var categories = angular.module('categories', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(categoriesRouter)
  .service('githubContributor', GithubContributorService)
  .controller('CategoriesController', CategoriesController);

export default categories;
