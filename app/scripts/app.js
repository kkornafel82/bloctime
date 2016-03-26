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
          controller: 'LandingController as landing',
          templateUrl: '/templates/landing.html'
        });


       $urlRouterProvider.otherwise("/landing");
     }


     angular
         .module('blocTime', ['ui.router', 'firebase'])
         .config(config);
 })();