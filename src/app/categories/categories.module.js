import { categoriesRouter } from './categories.router';
import { CategoriesController } from './categories.controller';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';

var categories = angular.module('categories', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
<<<<<<< HEAD
  .constant('malarkey', malarkey)
  .constant('moment', moment)
=======
<<<<<<< HEAD
  .constant('malarkey', malarkey)
  .constant('moment', moment)
=======
>>>>>>> origin/categoriesIra
>>>>>>> 1faa5f67ad9a714ec88fec3f1dfb3c881e9be5d5
  .config(categoriesRouter)
  .service('githubContributor', GithubContributorService)
  .controller('CategoriesController', CategoriesController);

export default categories;
