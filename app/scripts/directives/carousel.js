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
    scope:{ swbClass: '@' },
    restrict: 'EA',
    templateUrl: 'views/templates/carousel.html',
    link: function($scope, attrs, elem) {

      // initialize active item
      $scope.item = 0;
      $scope.itemSelect = function(item) {$scope.item = item};
      $scope.next = function() { $scope.item = $scope.item+1; };
      $scope.prev = function() { $scope.item = $scope.item-1; };

      
      $scope.images = [
        {
          title: 'Example headline.1',
          body: 'Note:  URL, the "next" and "prd/display properly due to web browser security rules.',
          btnText: 'bite me',
          btnAction: '/signup',
          img:'images/yeoman1.jpg',
          id: 0
        },
        {
          title: 'Example headline.2',
          body: 'Note:  URL, the "next" and "prd/display properly due to web browser security rules.',
          btnText: 'Sign up tomorrow',
          btnAction: '/signup',
          img:'images/yeoman1.jpg',
          id: 1
        },
        {
          title: 'Example headline.3',
          body: 'Note:  URL, the "next" and "prd/display properly due to web browser security rules.',
          btnText: 'Sign up today',
          btnAction: '/signup',
          img:'images/yeoman.png',
          id: 2
        },
        {
          title: 'Example headline.4',
          body: 'Note:  URL, the "next" and "prd/display properly due to web browser security rules.',
          btnText: 'Who am I?',
          btnAction: '/signup',
          img:'images/yeoman.png',
          id: 3
        },
        {
          title: 'Example headline.5',
          body: 'Note:  URL, the "next" and "prd/display properly due to web browser security rules.',
          btnText: 'What what!?!',
          btnAction: '/signup',
          img:'images/yeoman.png',
          id: 4
        }
      ];
    }
  };
}]);

