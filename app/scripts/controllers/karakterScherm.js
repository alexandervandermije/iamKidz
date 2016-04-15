'use strict';

/**
 * @ngdoc function
 * @name kidsApp.controller:KarakterScherm
 * @description
 * # KarakterScherm
 * Controller of the kidsApp
 */
 angular.module('kidsApp')
  .controller('KarakterSchermCtrl', function (ngAudio, $scope,$rootScope,$location) {
  	var kiesPoppetje = ngAudio.load("audio/text/kiesPoppetje.wav")
  	
  	var backgroundKeuze = "";
  	console.log($rootScope.totalPoints)
    var nieuwPoppetje = ngAudio.load("audio/text/nieuwPoppetje.wav");

    if($rootScope.totalPoints >= 4)
    {
      nieuwPoppetje.play();
    }
    else
    {
      kiesPoppetje.play();
    }
  	$scope.karakterKeuze = function(character) 
  	{
  		 $scope.background = angular.element( document.querySelector( '#mainBackground' ) );
  		 
  		if(character === 1)
  		{
  			$scope.background.addClass("background1");
  			$scope.background.removeClass("background2 background3 background4 background5 background6 background7 background8 background9 background10 background11 background12 background13 background14 background15");	
  		}
  		else if(character === 2)
  		{
  			$scope.background.addClass("background2");
  			$scope.background.removeClass("background1 background3 background4 background5 background6 background7 background8 background9 background10 background11 background12 background13 background14 background15");	
  		}
  		else if(character === 3)
  		{
  			$scope.background.addClass("background3");
  			$scope.background.removeClass("background1 background2 background4 background5 background6 background7 background8 background9 background10 background11 background12 background13 background14 background15");	
  		}
  		else if(character === 4)
  		{
  			$scope.background.addClass("background4");
  			$scope.background.removeClass("background1 background2 background3 background5 background6 background7 background8 background9 background10 background11 background12 background13 background14 background15");	
  		}
  		else if(character === 5)
  		{
  			$scope.background.addClass("background5");
  			$scope.background.removeClass("background1 background2 background3 background4 background6 background7 background8 background9 background10 background11 background12 background13 background14 background15");	
  		}
  		else if(character === 6)
  		{
  			$scope.background.addClass("background6");
  			$scope.background.removeClass("background1 background2 background3 background4 background5 background7 background8 background9 background10 background11 background12 background13 background14 background15");	
  		}
  		else if(character === 7)
  		{
  			$scope.background.addClass("background7");
  			$scope.background.removeClass("background1 background2 background3 background4 background5 background6 background8 background9 background10 background11 background12 background13 background14 background15");		
  		}
  		else if(character === 8)
  		{
  			$scope.background.addClass("background8");
  			$scope.background.removeClass("background1 background2 background3 background4 background5 background6 background7 background9 background10 background11 background12 background13 background14 background15");		
  		}
  		else if(character === 9)
  		{
  			$scope.background.addClass("background9");
  			$scope.background.removeClass("background1 background2 background3 background4 background5 background6 background7 background8 background10 background11 background12 background13 background14 background15");		
  		}
  		else if(character === 10)
  		{
  			$scope.background.addClass("background10");
  			$scope.background.removeClass("background1 background2 background3 background4 background5 background6 background7 background8 background9 background11 background12 background13 background14 background15");		
  		}
  		else if(character === 11)
  		{
  			$scope.background.addClass("background11");
  			$scope.background.removeClass("background1 background2 background3 background4 background5 background6 background7 background8 background9 background10 background12 background13 background14 background15");		
  		}
  		else if(character === 12)
  		{
  			$scope.background.addClass("background12");
  			$scope.background.removeClass("background1 background2 background3 background4 background5 background6 background7 background8 background9 background10 background11 background13 background14 background15");		
  		}
  		else if(character === 13)
  		{
  			$scope.background.addClass("background13");
  			$scope.background.removeClass("background1 background2 background3 background4 background5 background6 background7 background8 background9 background10 background11 background12 background14 background15");		
  		}
  		else if(character === 14)
  		{
  			$scope.background.addClass("background14");
  			$scope.background.removeClass("background1 background2 background3 background4 background5 background6 background7 background8 background9 background10 background11 background12 background13 background15");		
  		}
  		else if(character === 15)
  		{
  			$scope.background.addClass("background15");
  			$scope.background.removeClass("background1 background2 background3 background4 background5 background6 background7 background8 background9 background10 background11 background12 background13 background14");		
  		}
  		
      if($rootScope.spel2Played == false)
      {
        $location.path('/spelOverzicht');
      }
  		else
      {
        $location.path('/eindscherm');
      }
  	}

  	
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
