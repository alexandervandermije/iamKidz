 'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel2Game
 * @description
 * # Spel2Game
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel2ComboIntroCtrl', function ($scope,ngAudio,ngDialog,$rootScope,$location) {

 $scope.horlogeAudio = ngAudio.load('audio/horlogeAudio.wav');
    $scope.normaleKlokAudio = ngAudio.load('audio/normaleKlokAudio.wav');
    $scope.groteKlokAudio = ngAudio.load('audio/groteKlokAudio.mp3');
    
    $scope.playKlokAudio = function(klok)
    {
        if(klok == 'horloge')
        {
            $scope.horlogeAudio.play();
        }
        else if(klok == 'normaleKlok')
        {
            $scope.normaleKlokAudio.play();
        }
        else if(klok == 'groteKlok')
        {
            $scope.groteKlokAudio.play();
        }
    }
     $scope.maatFilled = 0;
    
    $scope.checkClicked = function(note)
    {
        
        if(note == "groteKlok")
        {
            $scope.updateNotenBalk(note);
            $scope.maatFilled += 2;
            $scope.checkMaat();
            console.log("maatFilled:"+ $scope.maatFilled);
            $scope.groteKlokAudio.play();
        }
        else if(note == "halveNoot")
        {
            $scope.updateNotenBalk(note);
            $scope.maatFilled += 2;
            $scope.checkMaat();
            console.log("maatFilled:"+ $scope.maatFilled);
        }
        else if(note == "normaleKlok")
        {
            $scope.updateNotenBalk(note);
            $scope.maatFilled += 1;
            $scope.checkMaat();
            console.log("maatFilled:"+ $scope.maatFilled);
            $scope.normaleKlokAudio.play();
        }
        else if(note == "kwartNoot")
        {
            $scope.updateNotenBalk(note);
            $scope.maatFilled += 1;
            $scope.checkMaat();
            console.log("maatFilled:"+ $scope.maatFilled);
        }
        else if(note == "horloge")
        {
            $scope.updateNotenBalk(note);
            $scope.maatFilled += 0.5;
            $scope.checkMaat();
            console.log("maatFilled:"+ $scope.maatFilled);
            
            $scope.horlogeAudio.play();
        }
        else if(note == "8note")
        {
            $scope.updateNotenBalk(note);
            $scope.maatFilled += 0.5;
            $scope.checkMaat();
            console.log("maatFilled:"+ $scope.maatFilled);
            
        }
    }
    $scope.checkMaat = function()
    {
        if($scope.maatFilled == 4)
        {
            $scope.maatFilled = 0;
            
            $scope.checkRound();
            $scope.updateScore();
            $rootScope.kidsCheering.play();
             ngDialog.open({ template: 'views/spel1GoedGedaanPopUp.html', className: 'ngdialog-theme-default' });
        }
        else if($scope.maatFilled > 4)
        {
            $scope.maatFilled = 0;
            $rootScope.kidsAww.play();
            $scope.checkRound();
            ngDialog.open({ template: 'views/spel2HelaasFout.html', className: 'ngdialog-theme-default' });
        }
    }
    $scope.checkRound = function()
    {
      
        $scope.updateNotenBalk("splitter");
        $rootScope.roundsGame2++;
        console.log("round:"+$rootScope.roundsGame2);
        if($rootScope.roundsGame2 == 1)
        {

        }
        if($rootScope.roundsGame2 == 2)
        {

            $location.path('/spel2gamecombohint');
            var comboHintText = ngAudio.load('audio/text/comboIntroductie.wav');
            comboHintText.play();
        }
        if($rootScope.roundsGame2 == 5)
        {
            $location.path('/spel2notenuitleg1');
        }
        if($rootScope.roundsGame2 == 10)
        {
            $location.path('/spel2afsluiting');
        }
    }
    $scope.updateNotenBalk = function(note)
    {
         $scope.notenBalkBackground = angular.element( document.querySelector( '#notenbalkBackground' ) );
        
        if(note == "groteKlok")
        {
            $scope.newNote = "<img class='klokNotenbalk groteKlokNotenbalk' src='../images/groteKlokLos.png'>";
        }
        else if(note == "halveNoot")
        {
            $scope.newNote = "<img class='notenNotenbalk halveNootNotenbalk' src='../images/halveNootBalk.png'>";
        }
        else if(note == "normaleKlok")
        {
            $scope.newNote = "<img class='klokNotenbalk normaleKlokNotenbalk' src='../images/normaleKlokLos.png'>";
        }
        else if(note == "kwartNoot")
        {
            $scope.newNote = "<img class='notenNotenbalk kwartNootNotenbalk' src='../images/kwartNootBalk.png'>";
        }
        else if(note == "horloge")
        {
            $scope.newNote = "<img class='klokNotenbalk horlogeNotenbalk' src='../images/horlogeLos.png'>";
        }
        else if(note == "8note")
        {
            $scope.newNote = "<img class='notenNotenbalk 8noteNotenbalk' src='../images/8noteBalk.png'>";
        }
        else if(note == "splitter")
        {
            $scope.newNote = "<img src='../images/splitter.png' class='splitterNotenbalk'>";
        }


        $scope.notenBalkBackground.append($scope.newNote);
        $scope.newNote = "";
    }
    $scope.updateScore = function()
    {
        if($rootScope.game2Star1Status == 'empty')
        {
            $rootScope.game2Star1Status = 'half';
        }
        else if($rootScope.game2Star1Status == 'half')
        {
            $rootScope.game2Star1Status = 'full';
            $rootScope.totalPoints++;
        }

        else if($rootScope.game2Star2Status == 'empty')
        {
            $rootScope.game2Star2Status = 'half';
        }
        else if($rootScope.game2Star2Status == 'half')
        {
            $rootScope.game2Star2Status = 'full';
            $rootScope.totalPoints++;
        }

        else if($rootScope.game2Star3Status == 'empty')
        {
            $rootScope.game2Star3Status = 'half';
        }
        else if($rootScope.game2Star3Status == 'half')
        {
            $rootScope.game2Star3Status = 'full';
            $rootScope.totalPoints++;
        }

        else if($rootScope.game2Star4Status == 'empty')
        {
            $rootScope.game2Star4Status = 'half';
        }
        else if($rootScope.game2Star4Status == 'half')
        {
            $rootScope.game2Star4Status = 'full';
            $rootScope.totalPoints++;
        }

        else if($rootScope.game2Star5Status == 'empty')
        {
            $rootScope.game2Star5Status = 'half';
        }
        else if($rootScope.game2Star5Status == 'half')
        {
            $rootScope.game2Star5Status = 'full';
            $rootScope.totalPoints++;
        }
       
       
    }
    });