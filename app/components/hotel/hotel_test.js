'use strict';

describe('myApp.hotel module', function() {

  beforeEach(module('myApp.hotel'));

  describe('hotel controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var hotelsController = $controller('hotelsController');
      expect(hotelsController).toBeDefined();
    }));

  });
});
