'use strict';
var bitcore = require('bitcore');

angular.module('passworkApp')
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

    $scope.encode = function() {
      var thing = $scope.newThing || '';
      var value = bitcore.deps.Buffer(thing);
      var hash = bitcore.crypto.Hash.sha256(value);
      var privateKey = new bitcore.PrivateKey(hash);
      return privateKey.toAddress().toString();
    };

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  });