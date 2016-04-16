'use strict';

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/users', {
        templateUrl: 'users/users.html',
        controller: 'UsersCtrl'
    });
}])

.controller('UsersCtrl', function($scope) {
    $scope.users = [
        { fullName: "Paolo Rossi", email: "primo@thecreazy.it" },
        { fullName: "Francesco Rossi", email: "secondo@thecreazy.it" },
        { fullName: "Gianni Rossi", email: "terzo@thecreazy.it" }
    ];
});
