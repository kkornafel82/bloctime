 (function() {
     function config($stateProvider, $locationProvider) {
      $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });

      $stateProvider
        .state('chat', {
          url: '/',
          controller: 'chatCtrl as chat',
          templateUrl: '/templates/chat.html'
        })
     }

     angular
         .module('blocTime', ['ui.router', 'firebase'])
         .config(config);
 })();