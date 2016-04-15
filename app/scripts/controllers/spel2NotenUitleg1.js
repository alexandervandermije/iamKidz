'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel2Uitleg1Ctrl
 * @description
 * # Spel2Uitleg1Ctrl
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel2NotenUitleg1Ctrl', function (ngAudio) {
   var notenUitleg1Audio = ngAudio.load('audio/text/klokkenNoten.wav');
   notenUitleg1Audio.play();

  });
