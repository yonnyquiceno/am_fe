'use strict';
(function() {
    var hotel = angular.module('mainApp.hotel');
    hotel.controller('hotelsController', function($scope, $http, $location, hotelsService) {
        stfilterInit();
        $scope.filtersInit = function() {
            stfilterInit();
            $scope.slider.min = $scope.minprice
            $scope.slider.max = $scope.maxprice
            document.getElementById("hotel-name-input").value = "";
            $scope.nmfilter = "";
        }
        $scope.search_query = {
            "location": "Buenos Aires",
            "guests": "2",
            "arrival": "2016-06-01",
            "departure": "2016-06-04",
        }
        $scope.hotels = listHotels();
        $scope.minprice = getMinPrice() - 1;
        $scope.maxprice = getMaxPrice() + 1;
        $scope.slider = {
            min: $scope.minprice,
            max: $scope.maxprice,
            options: {
                floor: $scope.minprice - 20,
                ceil: $scope.maxprice + 5,
                translate: function(value) {
                    return '$' + value;
                }
            }
        };

        $scope.priceRangeFilter = function(val) {
            return (val.price > $scope.slider.min && val.price < $scope.slider.max);
        };

        $scope.starsFilter = function(val) {
            return ((val.stars == $scope.stfilter.cb5 ||
                val.stars == $scope.stfilter.cb4 ||
                val.stars == $scope.stfilter.cb3 ||
                val.stars == $scope.stfilter.cb2 ||
                val.stars == $scope.stfilter.cb1) || $scope.stfilter.as == true);
        };

        $scope.genStarsArray = function(stars) {
            return new Array(parseInt(stars));
        }

        function listHotels() {
            return hotelsService.getAll()
        }

        function getPrices() {
            var prices = [];
            $scope.hotels.hotels.map(function(hotel) {
                prices.push(hotel.price);
            })
            return prices
        }

        function getMaxPrice(numArray = getPrices()) {
            return Math.max.apply(null, numArray);
        }

        function getMinPrice(numArray = getPrices()) {
            return Math.min.apply(null, numArray);
        }

        function stfilterInit() {
            $scope.stfilter = {
                as: true,
                cb5: false,
                cb4: false,
                cb3: false,
                cb2: false,
                cb1: false
            }
        }
        //Jquery Code
        $('input.st-filter-as').click(function() {
            this.disabled = true;
            $('input.st-filter').each(function() {
                stfilterInit();
            });
        });
        $('input.st-filter').click(function() {
            $scope.stfilter.as = false;
            $('input.st-filter-as').prop("disabled", false);
        });
    });
})();
