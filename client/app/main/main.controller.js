'use strict';
var bitcore = require('bitcore');

angular.module('passworkApp')
  .filter('brainAddress', function() {
    return function(text) {
      var thing = text || '';
      var value = bitcore.deps.Buffer(thing);
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
    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if ($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', {
        name: $scope.newThing
      });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  });