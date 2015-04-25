'use strict';

/**
 * @ngdoc function
 * @name templateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the templateApp
 */

angular.module('templateApp')
  .controller('UpdatesCtrl', ['$scope', 'DataFactory', function ($scope, DataFactory) {

    $scope.updates = [{title:'loading'}];

    DataFactory.getData('data/updates.json').success(function(data) {
      $scope.updates = data;
    }).error(function(err) {console.log(err)});

  }]);