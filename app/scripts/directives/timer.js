(function() {
  function timer($interval) {
    return {
      templateUrl: '/templates/directives/timer.html',
      replace: true,
      restrict: 'E',
      scope: { },
      link: function(scope, element, attributes) {
      scope.counter = 1500;
      scope.runningInterval = null;
      scope.onBreak = false;
      scope.noOfSessions = 0;

      var mySound = new buzz.sound( "/assets/sounds/gas-bell.mp3", {
         preload: true
      });

      scope.$watch('counter', function() {
        if (scope.counter === 0) {
          mySound.play();
        };
      });

      scope.onTimeout = function(){
        if (scope.counter > 0) {
            scope.counter = scope.counter-1;
        }
        else if (scope.counter < 1) {
            scope.runningInterval = null;
            scope.onBreak = true;
            scope.noOfSessions = scope.noOfSessions+1;
            
            if (scope.noOfSessions === 4) {
             scope.counter = 1800;
             /*mySound.play();*/
             scope.noOfSessions === 0;
            } else{
            scope.counter = 300;
            /*mySound.play();*/
          };
        }
      };

      scope.newBreak = function(){
          if (scope.counter > 0) {
            scope.counter = scope.counter-1;
          }
          else if (scope.counter < 1) {
            /*mySound.play();*/
            scope.onBreak = false;
            scope.counter = 10;
            scope.runningInterval = null;
        }
      };

      scope.myTimeout = function() {
        scope.runningInterval = $interval(scope.onTimeout,1000, scope.counter+1, true);
      };

      scope.myBreak = function() {
        scope.runningInterval = $interval(scope.newBreak,1000, scope.counter+1, true);
      };     
    
      scope.reset= function(){
        $interval.cancel(scope.runningInterval);
        
        if (scope.onBreak && scope.noOfSessions !== 4) {
          scope.counter = 300;
        }else if (scope.onBreak && scope.noOfSessions === 4){
          scope.counter = 1800;
        }else {
          scope.counter = 1500;
        };

        scope.runningInterval = null;
        
      };

      }
    };
  }
  
  angular
    .module('blocTime')
    .directive('timer',['$interval', timer]);

})();