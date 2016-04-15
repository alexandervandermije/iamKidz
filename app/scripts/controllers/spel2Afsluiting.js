'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel2Afsluiting
 * @description
 * # Spel2Afsluiting
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel2AfsluitingCtrl', function (ngAudio,$rootScope) {
  	$rootScope.spel2Played = true;
  	var afsluitingSpel = ngAudio.load('audio/text/spelAfsluiting.wav');
  	afsluitingSpel.play();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
