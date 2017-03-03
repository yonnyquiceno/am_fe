var carousel = angular.module('mainApp.carousel', ['ui.bootstrap', 'ngAnimate'])

carousel.controller('carouselController', function ($scope) {
  $scope.myInterval = 0;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slideimgs = $scope.hotel.images;
  var imgscount = slideimgs.length;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function(idx) {
    slides.push({
      image: slideimgs[idx].img,
      id: currIndex++
    });
  };
  
  for (var i = 0; i < imgscount; i++) {
    $scope.addSlide(i);
  }

});
