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
                        "regime": "Cama y desayuno",
                        "recommended": "true",
                        "discount": {
                            "assert": "true",
                            "amount": "15%"
                        },
                        "images": [{
                            "img": "http://images.almundo.com/201/1000000/10000/1000/915/915_241_b.jpg"
                        }, {
                            "img": "http://images.almundo.com/201/1000000/10000/1000/915/915_276_b.jpg"
                        }, {
                            "img": "http://images.almundo.com/201/1000000/10000/1000/915/915_208_b.jpg"
                        }]
                    }, {
                        "name": "Hotel Intur Palacio San Martin",
                        "stars": "4",
                        "price": "2714",
                        "regime": "Desayuno Completo",
                        "recommended": "true",
                        "discount": {
                            "assert": "false",
                            "amount": "15%"
                        },
                        "images": [{
                            "img": "https://images.almundo.com/201/4000000/3480000/3472200/3472151/3472151_202_b.jpg"
                        }, {
                            "img": "https://images.almundo.com/201/4000000/3480000/3472200/3472151/3472151_150_b.jpg"
                        }, {
                            "img": "https://images.almundo.com/201/4000000/3480000/3472200/3472151/3472151_108_b.jpg"
                        }]
                    }, {
                        "name": "Hotel Nuevo Boston",
                        "stars": "2",
                        "price": "861",
                        "regime": "Sólo la habitación",
                        "recommended": "false",
                        "discount": {
                            "assert": "false",
                            "amount": "15%"
                        },
                        "images": [{
                            "img": "https://images.almundo.com/201/3000000/2470000/2466900/2466861/2466861_151_b.jpg"
                        }, {
                            "img": "https://images.almundo.com/201/3000000/2470000/2466900/2466861/2466861_111_b.jpg"
                        }, {
                            "img": "https://images.almundo.com/201/3000000/2470000/2466900/2466861/2466861_112_b.jpg"
                        }]
                    }, {
                        "name": "Madrid SmartRentals Chueca",
                        "stars": "3",
                        "price": "4017",
                        "regime": "Cama y desayuno",
                        "recommended": "true",
                        "discount": {
                            "assert": "true",
                            "amount": "25%"
                        },
                        "images": [{
                            "img": "http://images.almundo.com/201/6000000/5510000/5503300/5503222/5503222_51_b.jpg"
                        }, {
                            "img": "http://images.almundo.com/201/6000000/5510000/5503300/5503222/5503222_78_b.jpg"
                        }, {
                            "img": "http://images.almundo.com/201/6000000/5510000/5503300/5503222/5503222_21_b.jpg"
                        }]
                    }, {
                        "name": "Hotel Victoria 4",
                        "stars": "3",
                        "price": "4084",
                        "regime": "Sólo la habitación",
                        "recommended": "false",
                        "discount": {
                            "assert": "true",
                            "amount": "5%"
                        },
                        "images": [{
                            "img": "http://images.almundo.com/201/2000000/1330000/1327100/1327068/1327068_119_b.jpg"
                        }, {
                            "img": "http://images.almundo.com/201/2000000/1330000/1327100/1327068/1327068_64_b.jpg"
                        }, {
                            "img": "http://images.almundo.com/201/2000000/1330000/1327100/1327068/1327068_111_b.jpg"
                        }]
                    }]
                }
                // parsea los precios a float para que el filtro de ordenamiento por precio funcione correctamente
            angular.forEach(response.hotels, function(hotel) {
                hotel.price = parseFloat(hotel.price);
            });

            return response
        };
        return hotelsService;
    });
})();
