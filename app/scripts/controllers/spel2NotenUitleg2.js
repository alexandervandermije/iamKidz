'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel2Uitleg1Ctrl
 * @description
 * # Spel2Uitleg1Ctrl
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel2NotenUitleg2Ctrl', function (ngAudio) {
   var notenUitleg2Audio = ngAudio.load('audio/text/toonDuur.wav');
   notenUitleg2Audio.play();

  });
