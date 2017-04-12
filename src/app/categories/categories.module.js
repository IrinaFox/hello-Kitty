import { categoriesRouter } from './categories.router';
import { CategoriesController } from './templates/categories.controller';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../components/navbar/navbar.directive';
import { MalarkeyDirective } from '../components/malarkey/malarkey.directive';

var categories = angular.module('categories', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(categoriesRouter)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('CategoriesController', CategoriesController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('acmeMalarkey', MalarkeyDirective);

export default categories;
