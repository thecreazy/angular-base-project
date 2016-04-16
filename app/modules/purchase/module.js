(function() {
    'use strict';

    angular.module('myApp.purchase', [])

    .config(configFunction);

    function configFunction($routeProvider) {
        $routeProvider.when('/purchase', {
            templateUrl: 'modules/purchase/purchase.html',
            controller: 'PurchaseCtrl'
        });
    }
})();
