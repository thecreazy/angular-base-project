'use strict';

angular.module('myApp.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'UsersCtrl'
  });
}])

.controller('UsersCtrl', function($scope, Users) {
    Users.getAll(function(data) { 
    	$scope.users = data; 
    }, 
    	function(err) { 
    		alert(err); 
    });
  })
  .factory("Users", function($http) {
    return {
      getAll: function(success, error) {
        $http.get('external/users.json').success(success).error(error);
      }
    };
  });
