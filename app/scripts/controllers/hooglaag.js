'use strict';
var alert;

/**
 * @ngdoc function
 * @name kidsApp.controller:HooglaagCtrl
 * @description
 * # HooglaagCtrl
 * Controller of the kidsApp
 */
angular.module('kidsApp')
  .controller('HooglaagCtrl', function ($rootScope, $scope, $location, ngAudio, ngDialog) {
    $scope.columnLeft = true;
    var order = ['a','b','c','d','e','f','g']; // Volgorde van laag naar hoog
    var hoogLaagIntro = ngAudio.load('audio/text/nuOefenenHoogste.wav');

    hoogLaagIntro.play();
    $scope.checkLeftMargin = function()
    {
      if($scope.index === 6)
      {
        $scope.columnLeft = false;
      }
    }
    $scope.introText = angular.element( document.querySelector( '#introText' ) );
    $scope.introText.append('" Nu gaan we Oefenen! "');
    $scope.gameplay = [

      { // Dit is een ronde
        
        notes: ['a','g'], // Hier geef je de noten aan
        choose: 'highest', // highest voor hoogste, lowest voor laagste
        description: 'Kies de hoogste noot',
        image: '../images/hoogLaagNotenbalk.png'
      },

      { 
        notes: ['f','b'], // Hier geef je de noten aan
        choose: 'highest', // highest voor hoogste, lowest voor laagste
        description: 'Kies de hoogste noot',
        image: '../images/spel1Notenbalk1.png',
        sound: 'audio/text/kiesHoogsteNoot.wav'
      },
       { // Dit is een ronde
        notes: ['d','g'], // Hier geef je de noten aan
        choose: 'highest', // highest voor hoogste, lowest voor laagste
        description: 'Kies de hoogste noot',
        image: '../images/spel1Notenbalk2.png',
        sound: 'audio/text/kiesHoogsteNoot.wav'
      },

      { // Dit is een ronde
        notes: ['e','a'], // Hier geef je de noten aan
        choose: 'lowest', // highest voor hoogste, lowest voor laagste
        description: 'Kies de laagste noot',
        image: '../images/spel1Notenbalk3.png',
        sound: 'audio/text/kiesLaagsteNoot.wav'
      },
       { // Dit is een ronde
        notes: ['g','b'], // Hier geef je de noten aan
        choose: 'highest', // highest voor hoogste, lowest voor laagste WAT gebeurt hier?
        description: 'Kies de hoogste noot',
        image: '../images/spel1Notenbalk4.png',
        sound: 'audio/text/kiesHoogsteNoot.wav'
      },
       { // Dit is een ronde
        notes: ['b','f'], // Hier geef je de noten aan
        choose: 'highest', // highest voor hoogste, lowest voor laagste
        description: 'Kies de hoogste noot',
        image: '../images/spel1Notenbalk5.png',
        sound: 'audio/text/kiesHoogsteNoot.wav'
      },

      { // Dit is een ronde
        notes: ['a','b','g'], // Hier geef je de noten aan
        choose: 'highest', // highest voor hoogste, lowest voor laagste
        description: 'Kies de hoogste noot',
        image: '../images/spel1Notenbalk6.png',
        sound: 'audio/text/kiesHoogsteNoot.wav'
      },
        { // Dit is een ronde
        notes: ['a','c','f'], // Hier geef je de noten aan
        choose: 'lowest', // highest voor hoogste, lowest voor laagste
        description: 'Kies de laagste noot',
        image: '../images/spel1Notenbalk7.png',
        sound: 'audio/text/kiesLaagsteNoot.wav'
      },
        { // Dit is een ronde
        notes: ['f','b','d'], // Hier geef je de noten aan
        choose: 'highest', // highest voor hoogste, lowest voor laagste
        description: 'Kies de hoogste noot',
        image: '../images/spel1Notenbalk8.png',
        sound: 'audio/text/kiesHoogsteNoot.wav'
      },
        { // Dit is een ronde
        notes: ['e','c','f'], // Hier geef je de noten aan
        choose: 'highest', // highest voor hoogste, lowest voor laagste
        description: 'Kies de hoogste noot',
        image: '../images/spel1Notenbalk9.png',
        sound: 'audio/text/kiesHoogsteNoot.wav'
      }

    ];

    $scope.index = 0;

    $scope.$watch('index',function() { // Laad de juiste ronde in als de index wordt aangepast

      if($scope.index < $scope.gameplay.length) {
        $scope.round = $scope.gameplay[$scope.index];
      } else {
        $location.path('/spel1afsluiting');
      }
      var kiesNootAudio = ngAudio.load($scope.round.sound);
      kiesNootAudio.play();

    });

    $scope.playTone = function(tone) { // Speel een toon af
      var audio = new Audio('audio/' + tone + '.wav');
      audio.play();
    };
    $scope.checkTonePopUp = function(tone)
    {
      ngDialog.open({template: "checkTonePopUp.html"});
    }
    $scope.checkTone = function(tone) { // Controleer of een toon klopt

      var highest = $scope.round.notes.reduce(function(highest,row) { // Op welke plek in de array staat de hoogste toon van de ronde

        if(order.indexOf(row) > highest) {
          highest = order.indexOf(row);
        }

        return highest;

      },0);

      var lowest = $scope.round.notes.reduce(function(lowest,row) {// Op welke plek in de array staat de laagste toon van de ronde

        if(order.indexOf(row) < lowest && order.indexOf(row) !== -1) {
          lowest = order.indexOf(row);
        }

        return lowest;

      },0);

      var correct = false;

      if($scope.round.choose === 'highest') { // Gaat het om hoogst
        if(highest === order.indexOf(tone)) { // Controleer of het klopt
          correct = true;
        }
      } else { // Gaat het om laagst
        if(lowest === order.indexOf(tone)) { // Controleer of het klopt
          correct = true;
        }
      }

      if(correct) { // Het klopt tel punten op
        $scope.introText.empty();
        $scope.updateScore();
        $scope.index++;
        $scope.checkLeftMargin();
        $rootScope.kidsCheering.play();
        $scope.introText.append('" Goed gedaan! Blijf opletten! "');
        ngDialog.open({ template: 'views/spel1GoedGedaanPopUp.html', className: 'ngdialog-theme-default' });
      } else { // Helaas fout
        $scope.introText.empty();
        $rootScope.kidsAww.play();
        $scope.index++;
        $scope.checkLeftMargin();
        $scope.introText.append('" Helaas! Dat is fout! Blijf Proberen! "');
        ngDialog.open({ template: 'views/spel1HelaasFout.html', className: 'ngdialog-theme-default' });
      }
     
    };
    $scope.updateScore = function()
    {
        if($rootScope.game1Star1Status === 'empty')
        {
            $rootScope.game1Star1Status = 'half';
        }
        else if($rootScope.game1Star1Status === 'half')
        {
            $rootScope.game1Star1Status = 'full';
            $rootScope.totalPoints++;
        }

        else if($rootScope.game1Star2Status === 'empty')
        {
            $rootScope.game1Star2Status = 'half';
        }
        else if($rootScope.game1Star2Status === 'half')
        {
            $rootScope.game1Star2Status = 'full';
            $rootScope.totalPoints++;
        }

        else if($rootScope.game1Star3Status === 'empty')
        {
            $rootScope.game1Star3Status = 'half';
        }
        else if($rootScope.game1Star3Status === 'half')
        {
            $rootScope.game1Star3Status = 'full';
            $rootScope.totalPoints++;
        }

        else if($rootScope.game1Star4Status === 'empty')
        {
            $rootScope.game1Star4Status = 'half';
        }
        else if($rootScope.game1Star4Status === 'half')
        {
            $rootScope.game1Star4Status = 'full';
            $rootScope.totalPoints++;
        }

        else if($rootScope.game1Star5Status === 'empty')
        {
            $rootScope.game1Star5Status = 'half';
        }
        else if($rootScope.game1Star5Status === 'half')
        {
            $rootScope.game1Star5Status = 'full';
            $rootScope.totalPoints++;
        }
       
    }
    
  });
