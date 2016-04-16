(function() {
    'use strict';

    angular.module('myApp.users', [])

    .config(configFunction);

    function configFunction($routeProvider) {
        $routeProvider.when('/users', {
            templateUrl: 'users/users.html',
            controller: 'UsersCtrl'
        });
    }
})();
