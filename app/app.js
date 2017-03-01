'use strict';

// Declare app level module which depends on views, and components
angular.module('mainApp', [
  'ngRoute',
  'mainApp.hotel',
  'mainApp.version',
  'mainApp.carousel',
  'ngAnimate',
  'rzModule'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo: '/hotel_results/'});

  $routeProvider.when('/hotel_results/', {
      templateUrl: 'components/hotel/views/hotel_results.html',
      controller: 'hotelsController'
  });
}]);
