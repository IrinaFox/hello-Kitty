import { categoriesRouter } from './categories.router';
import { CategoriesController } from './categories.controller';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';
import { CategoriesModalWindow } from './categories.modalEdition.controller';

var categories = angular.module('categories', ['ui.router', 'ui.bootstrap'])
    .config(categoriesRouter)
    .service('githubContributor', GithubContributorService)
    .controller('CategoriesModalWindow', CategoriesModalWindow)
    .controller('CategoriesController', CategoriesController);

export default categories;
