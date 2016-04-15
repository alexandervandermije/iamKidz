'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel2Uitleg3Ctrl
 * @description
 * # Spel2Uitleg3Ctrl
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel2Uitleg3Ctrl', function (ngAudio,$scope) {
  	var ingewikkeldAllemaal = ngAudio.load('audio/text/ingewikkeldAllemaal.wav')
  	ingewikkeldAllemaal.play();
  	$scope.stopText = function()
  	{
  		ingewikkeldAllemaal.stop();
  	}
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
