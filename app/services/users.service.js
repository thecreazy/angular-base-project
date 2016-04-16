'use strict';

angular.module('myApp.services')
    .factory("Users", users);

function users($http) {
    return {
        getAll: function(success, error) {
            $http.get('external/users.json').success(success).error(error);
        }
    };
}