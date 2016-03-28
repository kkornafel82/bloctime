 (function() {
     function config($stateProvider, $locationProvider, $urlRouterProvider) {
      $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });

      $stateProvider
        .state('landing', {
          url: '/landing',
          controller: 'LandingCtrl as landing',
          templateUrl: '/templates/landing.html'
        });

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/templates/home.html'
        });


       $urlRouterProvider.otherwise("/landing");
     }


     angular
         .module('blocTime', ['ui.router', 'firebase'])
         .config(config);
 })();