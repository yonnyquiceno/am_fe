(function() {
    var person = angular.module('mainApp.hotel');
    person.service('hotelsService', function() {
        var hotelsService = {};

        hotelsService.getAll = function() {
            var response = {
                "hotels": [{
                    "name": "Hotel Emperador",
                    "stars": "3",
                    "price": "1596",
                    "images": [{
                      "img": "http://images.almundo.com/201/1000000/10000/1000/915/915_241_b.jpg"
                    }, {
                      "img": "http://images.almundo.com/201/1000000/10000/1000/915/915_276_b.jpg"
                    }, {
                      "img": "http://images.almundo.com/201/1000000/10000/1000/915/915_208_b.jpg"
                    }]
                }, {
                    "name": "Petit Palace San Bernardo",
                    "stars": "4",
                    "price": "2145",
                    "images": [{
                      "img": "http://images.almundo.com/201/2000000/1470000/1466600/1466559/1466559_113_b.jpg"
                    }, {
                      "img": "http://images.almundo.com/201/1000000/10000/1000/915/915_276_b.jpg"
                    }, {
                      "img": "http://images.almundo.com/201/1000000/10000/1000/915/915_208_b.jpg"
                    }]
                }, {
                    "name": "Hotel Nuevo Boston",
                    "stars": "2",
                    "price": "861",
                    "images": [{
                      "img": "http://images.almundo.com/201/2000000/1470000/1466600/1466559/1466559_113_b.jpg"
                    }, {
                      "img": "http://images.almundo.com/201/1000000/10000/1000/915/915_276_b.jpg"
                    }, {
                      "img": "http://images.almundo.com/201/1000000/10000/1000/915/915_208_b.jpg"
                    }]
                }]
            }
            return response
        };
        return hotelsService;
    });
})();
