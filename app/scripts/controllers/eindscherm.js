'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:EindschermCtrl
 * @description
 * # EindschermCtrl
 * Controller of the kidsApp
 */
angular.module('kidsApp')
  .controller('EindschermCtrl', function ($rootScope,$scope,$location,ngDialog,ngAudio) {
  	$rootScope.backgroundMusic.volume = 0.1;
  	$rootScope.backgroundMusic.play();
    var eindeSpelAudio = ngAudio.load('audio/text/eindeSpel.wav');
    eindeSpelAudio.play();
  $scope.startGame1 = function()
  {
  	ngDialog.open({template: "views/checkGame1Start.html"});
  }
  $scope.startGame2 = function()
  {
  	ngDialog.open({template: "views/checkGame2Start.html"});
  }
  
  });
