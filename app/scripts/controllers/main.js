'use strict';

/**
 * @ngdoc function
 * @name templateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the templateApp
 */
var app = angular.module('templateApp');

app.controller('MainCtrl', ['$scope', function ($scope) {
    //$scope.map = {center: {latitude: 36.4969316, longitude: 126.3351999 }, zoom: 8 };
  $scope.map = {
    center: {latitude: 36.4969316, longitude: 126.3351999 },
    zoom: 8,
      place:{ placeId: 'ChIJ2UxGN-l1ejURJ5hu74ag7hg' }
  };

  $scope.map1 = 36.4969316;
  $scope.toggleNum = function() {
    $scope.map1 = 50;
  };

  }]);
