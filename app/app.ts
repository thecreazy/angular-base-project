(function() {
    'use strict';
    // Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'myApp.services',
        'myApp.users',
        'myApp.purchase'
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/users' });
    }]);


})();
