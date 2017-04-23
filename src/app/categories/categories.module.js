import { categoriesRouter } from './categories.router';
import { CategoriesController } from './categories.controller';
import { GithubContributorService } from '../components/githubContributor/githubContributor.service';
import { CategoriesModalWindowController } from './categories.modalEdition.controller';

var categories = angular.module('categories', ['ui.router', 'ui.bootstrap'])
    .config(categoriesRouter)
    .service('githubContributor', GithubContributorService)
    .controller('CategoriesModalWindowController', CategoriesModalWindowController)
    .controller('CategoriesController', CategoriesController);

export default categories;
