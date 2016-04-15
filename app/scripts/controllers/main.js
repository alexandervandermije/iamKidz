'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kidsApp
 */
angular.module('kidsApp')
  .controller('MainCtrl', function ($rootScope, ngAudio) {
    
    $rootScope.backgroundMusic = ngAudio.load('audio/Sour_Tennessee_Red.mp3');
    $rootScope.kidsCheering = ngAudio.load('audio/kidsCheering.mp3');
    $rootScope.kidsAww = ngAudio.load('audio/kidsAww.mp3');
     $rootScope.horlogeAudio = ngAudio.load('audio/horlogeAudio.wav');
    $rootScope.normaleKlokAudio = ngAudio.load('audio/normaleKlokAudio.wav');
    $rootScope.groteKlokAudio = ngAudio.load('audio/groteKlokAudio.mp3');

    $rootScope.points = 0; // Stel punten in op 0 zodra de applicatie wordt geladen
    $rootScope.roundsGame2 = 0;
    $rootScope.totalPoints = 0;
    $rootScope.spel2Played = false;

    $rootScope.game1Star1Status = 'empty';
    $rootScope.game1Star2Status = 'empty';
    $rootScope.game1Star3Status = 'empty';
    $rootScope.game1Star4Status = 'empty';
    $rootScope.game1Star5Status = 'empty';

    $rootScope.game2Star1Status = 'empty';
    $rootScope.game2Star2Status = 'empty';
    $rootScope.game2Star3Status = 'empty';
    $rootScope.game2Star4Status = 'empty';
    $rootScope.game2Star5Status = 'empty';
  });
