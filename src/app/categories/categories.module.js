import { categoriesRouter } from './categories.router';
import { CategoriesController } from './categories.controller';
import { CategoriesModalWindowController } from './categories.modalWindow.controller';

var categories = angular.module('categories', ['ui.router', 'ui.bootstrap'])
    .config(categoriesRouter)
    .controller('CategoriesModalWindowController', CategoriesModalWindowController)
    .controller('CategoriesController', CategoriesController);

export default categories;
