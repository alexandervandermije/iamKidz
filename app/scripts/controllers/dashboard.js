'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the kidsApp
 */
angular.module('kidsApp')
  .controller('DashboardCtrl', function ($rootScope, ngAudio, $scope) {
  	var welcomeMessage = ngAudio.load("../audio/text/startSpel.wav");
  	welcomeMessage.volume = 0.5;
  	welcomeMessage.play();
  	$rootScope.backgroundMusic.volume = 0.15;
    $rootScope.backgroundMusic.loop = true;
  	$rootScope.backgroundMusic.play();

  	$scope.stopText = function()
  	{
  		welcomeMessage.stop();
  	}
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
