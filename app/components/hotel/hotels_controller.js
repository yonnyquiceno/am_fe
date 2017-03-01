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

        $scope.genStarsArray = function(stars) {
            return new Array(parseInt(stars));
        }
        $scope.slider = {
            min: 100,
            max: 180,
            options: {
                floor: 0,
                ceil: 450
            }
        };
        $scope.$on("slideEnded", function() {
          alert("i get that")
        });

        function listHotels() {
            return hotelsService.getAll()
        }

    });
})();
