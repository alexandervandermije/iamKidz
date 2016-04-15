'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel1Afsluiting
 * @description
 * # Spel1Afsluiting
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel1AfsluitingCtrl', function (ngAudio, $rootScope) {
  	$rootScope.spel1Played = true;
  	var afsluitingSpel = ngAudio.load('audio/text/spelAfsluiting.wav');
  	afsluitingSpel.play();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
