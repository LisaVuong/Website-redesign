/**
 * Created by George Ruan on Ovtober 25, 2015.
 *
 * lisaNavBar defines the topmost page and navigation bar appearance and functionality.
 *
 * To use: Put the directive into the html file.
 *
 * Ex. <lisa-nav-bar></lisa-nav-bar>
 */

(function() {
  'use strict';

  angular.module('lisa')
    .directive('lisaNavBar', navBar);

  navBar.$inject = ['$timeout'];

  function navBar($timeout) {
    var directive;
    directive = {
      link: link,
      templateUrl: 'scripts/directives/lisaNavBar/lisaNavBar.html',
      restrict: 'E',
    };

    return directive;

    function link(scope) {
      
    }
  }
})();
