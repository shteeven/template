'use strict';

/**
 * @ngdoc overview
 * @name templateApp
 * @description
 * # templateApp
 *
 * Main module of the application.
 */
angular.module('templateApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'templateApp.DataFactory',
    'angular-carousel',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/tickets', {
        templateUrl: 'views/tickets.html',
        controller: 'TicketsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
