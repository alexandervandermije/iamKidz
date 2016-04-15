'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel2Uitleg4GroteKlokCtrl
 * @description
 * # Spel2Uitleg4GroteKlokCtrl
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel2GroteKlokCtrl', function ($rootScope, ngAudio, $scope) {
  	$rootScope.groteKlokAudio.play();
  	$scope.groteKlokNotenbalkAudio = ngAudio.load("audio/groteKlokAudio.mp3");
    var groteKlokTextAudio = ngAudio.load('audio/text/2GroteKlokken.wav');
    groteKlokTextAudio.play();
  	$scope.groteKlokNotenbalkAudio.loop = 5;
  	$scope.groteKlokNotenbalkClicked = function()
  	{
  		$scope.groteKlokNotenbalkAudio.play();
  	}
   
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
