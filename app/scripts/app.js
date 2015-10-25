/**
 * Created by George Ruan on October 25, 2015.
 *
 * Defines the routing behavior for the web application.
 */

(function() {
  'use strict';

  angular
    .module('lisa', ['ngRoute'])    // Set up app dependencies
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/appleWatch.html',
          controller: 'appleWatchCtrl'
        })
        .when('/applewatch', {
          templateUrl: 'views/appleWatch.html',
          controller: 'appleWatchCtrl'
        })
        .when('/404', {
          templateUrl: '404.html'
        })
        .otherwise({
          redirectTo: '/404'
        });
    });
})();
