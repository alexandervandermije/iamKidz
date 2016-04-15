'use strict';

/**
 * @ngdoc overview
 * @name kidsApp
 * @description
 * # kidsApp
 *
 * Main module of the application.
 */
angular
  .module('kidsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAudio',
    'ngDialog'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/flesjes', {
        templateUrl: 'views/flesjes.html',
        controller: 'FlesjesCtrl',
        controllerAs: 'flesjes'
      })
      .when('/hoog-laag', {
        templateUrl: 'views/hooglaag.html',
        controller: 'HooglaagCtrl',
        controllerAs: 'hoogLaag'
      })
      .when('/doremi', {
        templateUrl: 'views/doremi.html',
        controller: 'DoremiCtrl',
        controllerAs: 'doremi'
      })
      .when('/spel2uitleg1', {
        templateUrl: 'views/spel2Uitleg1.html',
        controller: 'Spel2Uitleg1Ctrl',
        controllerAS: 'spel2uitleg1'
      })
      .when('/spel2uitleg2', {
        templateUrl: 'views/spel2Uitleg2.html',
        controller: 'Spel2Uitleg2Ctrl',
        controllerAS: 'spel2uitleg2'
      })
      .when('/spel2uitleg3', {
        templateUrl: 'views/spel2Uitleg3.html',
        controller: 'Spel2Uitleg3Ctrl',
        controllerAS: 'spel2uitleg3'
      })
      .when('/spel2uitleg4', {
        templateUrl: 'views/spel2Uitleg4.html',
        controller: 'Spel2Uitleg4Ctrl',
        controllerAS: 'spel2uitleg4'
      })
      .when('/spel2uitleg4horloge', {
        templateUrl: 'views/spel2Uitleg4Horloge.html',
        controller: 'Spel2HorlogeCtrl',
        controllerAS: 'spel2horloge'
      })
       .when('/spel2uitleg4normaleklok', {
        templateUrl: 'views/spel2Uitleg4NormaleKlok.html',
        controller: 'Spel2NormaleKlokCtrl',
        controllerAS: 'spel2normaleklok'
      })
      .when('/spel2uitleg4groteklok', {
        templateUrl: 'views/spel2Uitleg4GroteKlok.html',
        controller: 'Spel2GroteKlokCtrl',
        controllerAS: 'spel2groteklok'
      })
      .when('/spel2game', {
        templateUrl: 'views/spel2Game.html',
        controller: 'Spel2GameCtrl',
        controllerAS: 'spel2game'
      })
      .when('/spel2gamecombohint', {
        templateUrl: 'views/spel2GameComboHint.html',
        controller: 'Spel2ComboIntroCtrl',
        controllerAS: 'spel2combointro'
      })
      .when('/spel2notenuitleg1', {
        templateUrl: 'views/spel2NotenUitleg1.html',
        controller: 'Spel2NotenUitleg1Ctrl',
        controllerAS: 'spel2notenuitleg1'
      })
      .when('/spel2notenuitleg2', {
        templateUrl: 'views/spel2NotenUitleg2.html',
        controller: 'Spel2NotenUitleg2Ctrl',
        controllerAS: 'spel2notenuitleg2'
      })
      .when('/spel2gamenoten', {
        templateUrl: 'views/spel2GameNoten.html',
        controller: 'Spel2gamenotenCtrl',
        controllerAS: 'spel2gamenotenctrl'
      })
      .when('/spel1afsluiting', {
        templateUrl: 'views/spel1Afsluiting.html',
        controller: 'Spel1AfsluitingCtrl',
        controllerAS: 'spel1afsluiting'
      })
      .when('/karakterscreen', {
        templateUrl: 'views/karakterScreen.html',
        controller: 'KarakterSchermCtrl',
        controllerAS: 'karakterscreen'
      })
      .when('/spel2afsluiting', {
        templateUrl: 'views/spel2Afsluiting.html',
        controller: 'Spel2AfsluitingCtrl',
        controllerAS: 'spel2afsluiting'
      })
      .when('/eindscherm', {
        templateUrl: 'views/eindscherm.html',
        controller: 'EindschermCtrl',
        controllerAs: 'eindscherm'
      })
      .when('/spel2GameNoten', {
        templateUrl: 'views/spel2gamenoten.html',
        controller: 'Spel2gamenotenCtrl',
        controllerAs: 'spel2GameNoten'
      })
      .when('/spelOverzicht', {
        templateUrl: 'views/speloverzicht.html',
        controller: 'SpeloverzichtCtrl',
        controllerAs: 'spelOverzicht'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
