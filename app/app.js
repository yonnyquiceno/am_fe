'use strict';
angular.module('mainApp', [
  'ngRoute',
  'mainApp.hotel',
  'mainApp.version',
  'mainApp.carousel',
  'ngAnimate',
  'rzModule'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/hotel_results'});

  $routeProvider.when('/hotel_results', {
      templateUrl: 'components/hotel/views/hotel_results.html',
      controller: 'hotelsController'
  });
}]);
