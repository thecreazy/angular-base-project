(function() {
    'use strict';

    angular.module('myApp.users')

    .controller('UsersCtrl', UsersCtrl);

    function UsersCtrl($scope, Users) {
        Users.getAll(function(data) {
                $scope.users = data;
            },
            function(err) {
                alert(err);
            });
    }
})();
