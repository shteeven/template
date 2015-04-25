'use strict';

/**
 * @ngdoc function
 * @name templateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the templateApp
 */

var app = angular.module('templateApp');

app.directive('swbNewsFeed', ['DataFactory', function (DataFactory) {

    return {
      scope:{ swbClass: '@' },
      restrict: 'EA',
      templateUrl: 'views/templates/news-feed.html',
      link: function($scope, attrs, elem) {

        $scope.schedules = [{title: 'loading'}];

        DataFactory.getData('data/schedules.json').success(function(data) {
          $scope.schedules = data;
        }).error(function(err) {console.log(err)});
      }
    };
  }]);
