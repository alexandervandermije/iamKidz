'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:Spel2Uitleg1Ctrl
 * @description
 * # Spel2Uitleg1Ctrl
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('Spel2Uitleg1Ctrl', function ($rootScope,$scope,$location, ngAudio, ngDialog) {
    $rootScope.backgroundMusic.volume = 0.05;
    $scope.maat3 = ngAudio.load("audio/3maat.mp3");
    $scope.horlogeAudio = ngAudio.load('audio/horlogeAudio.wav');
    $scope.normaleKlokAudio = ngAudio.load('audio/normaleKlokAudio.wav');
    $scope.groteKlokAudio = ngAudio.load('audio/groteKlokAudio.mp3');
 
    $scope.maat3.volume = 0.4;

    $scope.maat3Played = false;
    $scope.maat4Played = false;
    var spelUitleg1Audio = ngAudio.load('audio/text/muziekKleineStukjes.wav');
    var uitleg1Played = false;
    if(uitleg1Played === false)
    {
        uitleg1Played = true;
        spelUitleg1Audio.play();
    }
    


    $scope.playMaat3 = function()
    {
        spelUitleg1Audio.stop();
        $scope.maat3.play();
        $scope.maat3Played = true;
    }
    $scope.goToUitleg2 = function()
    {
        $scope.maat3.pause();
        
    }
   
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
    $scope.toTheGame = function()
    {
        $location.path("/spel2notenuitleg2");
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
             ngDialog.open({ template: 'spel1GoedGedaanPopUp.html', className: 'ngdialog-theme-default' });
    	}
    	else if($scope.maatFilled > 4)
    	{
    		$scope.maatFilled = 0;
            $rootScope.kidsAww.play();
            $scope.checkRound();
            ngDialog.open({ template: 'spel2HelaasFout.html', className: 'ngdialog-theme-default' });
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
        }

        else if($rootScope.game2Star2Status == 'empty')
        {
            $rootScope.game2Star2Status = 'half';
        }
        else if($rootScope.game2Star2Status == 'half')
        {
            $rootScope.game2Star2Status = 'full';
        }

        else if($rootScope.game2Star3Status == 'empty')
        {
            $rootScope.game2Star3Status = 'half';
        }
        else if($rootScope.game2Star3Status == 'half')
        {
            $rootScope.game2Star3Status = 'full';
        }

        else if($rootScope.game2Star4Status == 'empty')
        {
            $rootScope.game2Star4Status = 'half';
        }
        else if($rootScope.game2Star4Status == 'half')
        {
            $rootScope.game2Star4Status = 'full';
        }

        else if($rootScope.game2Star5Status == 'empty')
        {
            $rootScope.game2Star5Status = 'half';
        }
        else if($rootScope.game2Star5Status == 'half')
        {
            $rootScope.game2Star5Status = 'full';
        }
       
       
    }
  });
