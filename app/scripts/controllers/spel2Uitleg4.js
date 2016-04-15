'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel2Uitleg4Ctrl
 * @description
 * # Spel2Uitleg4Ctrl
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel2Uitleg4Ctrl', function (ngAudio) {
  	var klikKlokken = ngAudio.load('audio/text/klikOpKlokken.wav');
  	klikKlokken.play();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
