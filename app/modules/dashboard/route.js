'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp').config(function($routeProvider){
    $routeProvider
    .when('/',{
        redirectTo: '/dashboard'
    })
    .when('/dashboard',{
        templateUrl: 'modules/dashboard/dashboard.html'
    })
    .when('/home',{
        templateUrl: 'views/home.html'
    })
    .when('/about',{
        templateUrl: 'views/about.html'
    })
    .when('/bootstrap',{
        templateUrl: 'modules/bootstrapInfo.html'
    })
    .otherwise({
        templateUrl: '404.html'
        //redirectTo: '/'
    });
  });