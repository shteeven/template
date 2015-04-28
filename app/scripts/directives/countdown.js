'use strict';

/**
 * @ngdoc function
 * @name templateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the templateApp
 */

var app = angular.module('templateApp');

app.directive('swbCountdown', ['$interval', function ($interval) {

  return {
    scope:{ swbClass: '@', swbTime: '@' },
    restrict: 'EA',
    templateUrl: 'views/templates/countdown.html',
    link: function($scope, attrs, elem) {

      // set the date we're counting down to
      //$scope.target_date = new Date($scope.swbTime).getTime();
      var target_date = new Date($scope.swbTime).getTime();

      // variables for time units
      var days, hours, minutes, seconds;


      // update the tag with id "countdown" every 1 second
      $interval(function () {

        // find the amount of "seconds" between now and target
        var current_date = new Date().getTime();
        var seconds_left = (target_date - current_date) / 1000;

        // do some time calculations
        $scope.days = parseInt(seconds_left / 86400);
        seconds_left = seconds_left % 86400;

        $scope.hours = parseInt(seconds_left / 3600);
        seconds_left = seconds_left % 3600;

        $scope.minutes = parseInt(seconds_left / 60);
        $scope.seconds = parseInt(seconds_left % 60);

      }, 1000);

    }
  };
}]);