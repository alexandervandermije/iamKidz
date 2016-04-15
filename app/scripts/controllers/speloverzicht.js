'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:SpeloverzichtCtrl
 * @description
 * # SpeloverzichtCtrl
 * Controller of the kidsApp
 */
angular.module('kidsApp')
  .controller('SpeloverzichtCtrl', function ($rootScope,$scope,$location,ngDialog, ngAudio) {
  	var spelOverzichtAudio = ngAudio.load('audio/text/spelOverzicht.wav');
  	spelOverzichtAudio.play();
  	var weetJeZeker = ngAudio.load('audio/text/weetJeZekerSpelen.wav');

     $scope.startGame1 = function()
  {
  	ngDialog.open({template: "views/checkGame1Start.html"});
  	weetJeZeker.play();
  }
  $scope.startGame2 = function()
  {
  	ngDialog.open({template: "views/checkGame2Start.html"});
  	weetJeZeker.play();
  }
  });
