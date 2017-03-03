'use strict';
(function() {
    var hotel = angular.module('mainApp.hotel');
    hotel.controller('hotelsController', function($scope, hotelsService) {
        stfilterInit();
        $scope.search_query = {
            "location": "Buenos Aires",
            "guests": "2",
            "arrival": "14/6/16",
            "departure": "15/6/16",
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

        $scope.filtersInit = function() {
            stfilterInit();
            $scope.slider.min = $scope.minprice
            $scope.slider.max = $scope.maxprice
            document.getElementById("hotel-name-input").value = "";
            $scope.nmfilter = "";
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

        function getStars() {
            var stars = [];
            $scope.hotels.hotels.map(function(hotel) {
                stars.push(hotel.stars);
            })
            return stars
        }

        $scope.starsCount = function countStars(amount, arr = getStars()) {
            var count = 0
            arr.forEach(function(stn) {
                if (stn == amount) {
                    count += 1
                }
            });
            return count
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

        angular.element('input.st-filter-as').click(function() {
            this.disabled = true;
            angular.element('input.st-filter').each(function() {
                stfilterInit();
            });
        });
        angular.element('input.st-filter').click(function() {
            $scope.stfilter.as = false;
            angular.element('input.st-filter-as').prop("disabled", false);
        });
        angular.element('.expand').click(function() {
            var target_num = angular.element(this).attr('id').split('-')[1];
            var content_id = '#expandable-'.concat(target_num);
            angular.element(content_id).slideToggle('fast');
        });
        angular.element('.expand-5').each(function(){
          angular.element(this).click(function(){
            angular.element('#expandable-5').slideToggle('fast');
            angular.element('#search-terms').hide('fast');
          });
        });
        angular.element('.date-input').each(function(){
           angular.element(this).focusin(function(){
             this.type='date';
           });
           angular.element(this).focusout(function(){
             if(this.value==''){this.type='text'}
           });
        });
        angular.element('#btn-new-search').click(function(){
          angular.element('#search-terms').show('fast');
          angular.element('.search-modify').hide('fast');
        });
    });
})();
