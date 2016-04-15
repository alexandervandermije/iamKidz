'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel2Uitleg2Ctrl
 * @description
 * # Spel2Uitleg2Ctrl
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel2Uitleg2Ctrl', function ($scope,ngAudio) {
  	var spel2Uitleg2Audio = ngAudio.load('audio/text/spel2uitleg2.wav');
  	spel2Uitleg2Audio.play();
      $scope.maat4 = ngAudio.load('audio/vaderJacob.wav');
    $scope.maat4.volume = 1;
   $scope.playMaat4 = function()
    {
      spel2Uitleg2Audio.stop();
        $scope.maat4.play();
        $scope.maat4Played = true;
    }
    $scope.stopMaat4 = function()
    {
        $scope.maat4.stop();
    }
  });
