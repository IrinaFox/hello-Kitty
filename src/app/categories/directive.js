(function () {
    'use strict';

    angular
        .module('categories')
        .directive('categoriesDirective', categoriesDirective);

    function categoriesDirective () {
        return {
            restrict: 'E',
            templates: 'templates/categories.html',
            controller: 'categoriesController'
        };
    }
})();
