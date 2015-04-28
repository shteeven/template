'use strict';

/**
 * @ngdoc function
 * @name templateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the templateApp
 */

var app = angular.module('templateApp');

app.directive('swbCarousel', ['$interval', 'DataFactory', function ($interval, DataFactory) {

  return {
    scope:{ swbClass: '@', swbUrl: '@' },
    restrict: 'EA',
    templateUrl: 'views/templates/carousel.html',
    link: function($scope, attrs, elem) {

      // initialize active item
      $scope.itemSelect = function(item) {$scope.item = item};
      $scope.next = function() {
        if ($scope.item === $scope.indexes) {
          $scope.item = 0;
        } else {
          $scope.item = $scope.item+1;
        }
      };
      $scope.prev = function() {
        if ($scope.item === 0) {
          $scope.item = $scope.indexes;
        } else {
          $scope.item = $scope.item-1;
        }
      };

      DataFactory.getData($scope.swbUrl).success(function(data) {
        $scope.images = data;
        $scope.indexes = data.length-1;
        $scope.item = 0;
      }).error(function(err) {console.log(err)});
    }
  };
}]);

