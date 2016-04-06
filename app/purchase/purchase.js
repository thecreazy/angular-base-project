'use strict';

angular.module('myApp.purchase', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/purchase', {
    templateUrl: 'purchase/purchase.html',
    controller: 'PurchaseCtrl'
  });
}])

.controller('PurchaseCtrl', [function() {

}]);