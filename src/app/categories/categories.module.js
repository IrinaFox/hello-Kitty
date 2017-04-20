import { categoriesRouter } from './categories.router';
import { CategoriesController } from './categories.controller';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';
import { ModalInstanceCtrl } from './categories.modalInstance.controller';

var categories = angular.module('categories', ['ui.router', 'ui.bootstrap'])
    .config(categoriesRouter)
    .service('githubContributor', GithubContributorService)
    .controller('ModalInstanceCtrl', ModalInstanceCtrl)
    .controller('CategoriesController', CategoriesController);

export default categories;
