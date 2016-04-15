'use strict';
/**
 * @ngdoc function
 * @name kidsApp.controller:FlesjesCtrl
 * @description
 * # FlesjesCtrl
 * Controller of the kidsApp
 */
angular.module('kidsApp')
  .controller('FlesjesCtrl', function ($scope,$rootScope, ngAudio) {
    var wistJeDat = ngAudio.load("audio/text/flesjesAudio.wav");
    wistJeDat.play();
    $scope.clicked = [];
    $scope.allesGeklikt = false;
    $scope.recordStarted = false;
    $scope.recordFlesjes = [];
    $scope.currentPlaying = "";
    $scope.currentLoop = 0;
    $scope.soundPlayed = true;
    var countClicks = 0;

    $scope.recordFlesjesStart = function()
    {

      $scope.recordFlesjes = [];
       $scope.currentLoop = 0;
     
      if($scope.recordStarted === false)
      {
        $scope.recordStarted = true;
      }

    };
     $scope.recordFlesjesStop = function()
    {
      $scope.recordStarted = false;
    };
      
    $scope.playRecording = function()
    {

      if($scope.soundPlayed === true)
      {
          $scope.soundPlayed = false;
          $scope.currentPlaying = ngAudio.load($scope.recordFlesjes[$scope.currentLoop]);
          $scope.currentPlaying.play();
          

      }
    };
    var intervalID = window.setInterval(checkSoundPlaying, 1000);
    function checkSoundPlaying() {
      if($scope.currentLoop < $scope.recordFlesjes.length)
      {
        console.log($scope.currentPlaying.progress);
        if($scope.currentPlaying.progress > 0.4)
        {
          $scope.soundPlayed = true;
          $scope.currentLoop++;
          $scope.playRecording();
        }
      }
    }



    $scope.playAudio = function(tone,index) {
      $rootScope.backgroundMusic.volume = 0.05;
      countClicks++
      if(countClicks >= 3)
      {
        $scope.allesGeklikt = true ;
      }
      var file;
      if(tone === 'a')
      {
       file = "../audio/a.wav";
      }
      else if(tone === 'b')
      {
       file = "../audio/b.wav";
      }
       else if(tone === 'c')
      {
       file = "../audio/c.wav";
      }
       else if(tone === 'd')
      {
       file = "../audio/d.wav";
      }
       else if(tone === 'e')
      {
       file = "../audio/e.wav";
      }
       else if(tone === 'f')
      {
        file = "../audio/f.wav";
      }
       else if(tone === 'g')
      {
       file = "../audio/g.wav";
      }

      var audio = new Audio(file);
      audio.play();

      if($scope.recordStarted === true)
      {
        $scope.recordFlesjes.push(file);
      }

      if($scope.clicked.indexOf(index) === -1) {
        $scope.clicked.push(index);

        if($scope.clicked.length === 7) {
          $scope.allesGeklikt = true ;
        }
      }
    };

  });
