'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel2Uitleg4HorlogeCtrl
 * @description
 * # Spel2Uitleg4HorlogeCtrl
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel2HorlogeCtrl', function ($scope, ngAudio) {
  	$scope.horlogeAudio = ngAudio.load('audio/horlogeAudio.wav');
  	$scope.horlogeNotenbalkAudio = ngAudio.load('audio/horlogeNotenbalk.wav')
  	
  	$scope.horlogeAudio.play();
    var horlogeTextAudio = ngAudio.load('audio/text/horloges.wav');
    horlogeTextAudio.play();
    $scope.stopText = function()
    {
      horlogeTextAudio.stop();
    }
  	$scope.horlogeNotenbalkClicked = function()
  	{
  		$scope.horlogeNotenbalkAudio.play();
  		
  	}
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
