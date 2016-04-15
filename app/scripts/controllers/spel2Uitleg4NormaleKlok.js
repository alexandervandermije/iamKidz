'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel2Uitleg4NormaleKlokCtrl
 * @description
 * # Spel2Uitleg4NormaleKlokCtrl
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel2NormaleKlokCtrl', function (ngAudio,$scope, $rootScope) {
  $rootScope.normaleKlokAudio.play();
  var normaleKlokText = ngAudio.load('audio/text/normaleKlokken.wav');
  normaleKlokText.play();
  $scope.stopText = function()
  {
  	normaleKlokText.stop();
  }
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
