'use strict';
var bitcore = require('bitcore');

angular.module('passworkApp')
  .filter('brainAddress', function() {
    return function(text) {
      if (!text || text === '') {
        return '';
      }
      var value = bitcore.deps.Buffer(text);
      var hash = bitcore.crypto.Hash.sha256(value);
      var privateKey = new bitcore.PrivateKey(hash);
      return privateKey.toAddress().toString();
    };
  })
  .filter('substring', function() {
    return function(str, start, end) {
      return str.substring(start, end);
    };
  })
  .controller('MainCtrl', function($scope, $http, socket) {
    $scope.privateInfoType = 'password';
    $scope.siteInfoType = 'password';

    $scope.togglePrivateInfo = function() {
      $scope.privateInfoType = ($scope.privateInfoType === 'text' ? 'password' : 'text');
    };
    $scope.toggleSiteInfo = function() {
      $scope.siteInfoType = ($scope.siteInfoType === 'text' ? 'password' : 'text');
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });

    $scope.onTextClick = function($event) {
      $event.target.select();
    };
  });