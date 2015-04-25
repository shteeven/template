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
      scope:{ swbClass: '@', swbLimit: '@' },
      restrict: 'EA',
      templateUrl: 'views/templates/news-feed.html',
      link: function($scope, attrs, elem) {

        $scope.updates = [{title:'loading'}];

        DataFactory.getData('data/updates.json').success(function(data) {
          $scope.updates = data;
        }).error(function(err) {console.log(err)});

      }
    };
  }]);
