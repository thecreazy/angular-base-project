'use strict';

angular.module('myApp.purchase', [])

.config(configFunction);

function configFunction($routeProvider) {
    $routeProvider.when('/purchase', {
        templateUrl: 'purchase/purchase.html',
        controller: 'PurchaseCtrl'
    });
}
