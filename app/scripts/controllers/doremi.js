'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:DoremiCtrl
 * @description
 * # DoremiCtrl
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('DoremiCtrl', function ($scope,ngAudio) {

    $scope.introDoremi = ngAudio.load("audio/text/doremiTextAudio.wav");
    $scope.introDoremi.play();
  	$scope.plaatjeGeklikt = false;
    $scope.doremiAudio = ngAudio.load("../audio/text/doremi2.wav");
  	$scope.checkClicked = function()
  	{
      $scope.introDoremi.stop();
      $scope.doremiAudio.play();
  		$scope.plaatjeGeklikt = true;
  	};
    $scope.doremiStop = function()
    {
      $scope.doremiAudio.stop();
    }
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
