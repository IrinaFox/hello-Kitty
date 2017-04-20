import { categoriesRouter } from './categories.router';
import { CategoriesController } from './categories.controller';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';
import { ModalInstanceCtrl } from './categories.modalInstance.controller';

var categories = angular.module('categories', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ui.bootstrap', 'toastr'])
    .config(categoriesRouter)
    .service('githubContributor', GithubContributorService)
    .controller('ModalInstanceCtrl', ModalInstanceCtrl)
    .controller('CategoriesController', CategoriesController);

export default categories;
