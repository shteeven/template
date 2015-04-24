'use strict';

/**
 * @ngdoc function
 * @name templateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the templateApp
 */
angular.module('templateApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
