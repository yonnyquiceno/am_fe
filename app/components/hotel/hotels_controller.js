'use strict';
(function() {
    var hotel = angular.module('mainApp.hotel');
    hotel.controller('hotelsController', function($scope, $http, $location, hotelsService) {
        $scope.search_query = {
            "location": "Buenos Aires",
            "guests": "2",
            "arrival": "2016-06-01",
            "departure": "2016-06-04",
        }
        $scope.hotels = listHotels();
        function listHotels() {
            return hotelsService.getAll()
        }
    });
})();
