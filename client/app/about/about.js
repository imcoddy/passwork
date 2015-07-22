'use strict';

angular.module('passworkApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('About', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutCtrl'
      });
  });
