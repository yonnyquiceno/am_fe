(function() {
        var person = angular.module('mainApp.hotel');
        person.service('hotelsService', function() {
            var hotelsService = {};

            hotelsService.getAll = function() {
                var response = {
                    "hotels": [{
                        "name": "Hotel Emperador",
                        "stars": "3",
                        "price": "1596"
                    }, {
                        "name": "Petit Palace San Bernardo",
                        "stars": "4",
                        "price": "2145"
                    }, {
                        "name": "Hotel Nuevo Boston",
                        "stars": "2",
                        "price": "861"
                    }]
                }
                return response
            };
            return hotelsService;
        });
})();
