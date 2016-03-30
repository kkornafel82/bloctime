(function() {
   function LandingCtrl($scope, $interval) {   
      $scope.counter = 10;
      $scope.runningInterval = null;
      $scope.onBreak = false;

      $scope.onTimeout = function(){
        if ($scope.counter > 0) {
            $scope.counter = $scope.counter-1;
        }
        else if ($scope.counter < 1) {
            $scope.runningInterval = null;
            alert("Take a break!");
            $scope.onBreak = true;
            $scope.counter = 5;
        }
      };

      $scope.newBreak = function(){
          if ($scope.counter > 0) {
            $scope.counter = $scope.counter-1;
          }
          else if ($scope.counter < 1) {
            alert("Back to work!");
            $scope.onBreak = false;
            $scope.counter = 10;
            $scope.runningInterval = null;
        }
      };

      $scope.myTimeout = function() {
        $scope.runningInterval = $interval($scope.onTimeout,1000, $scope.counter+1, true);
      };

      $scope.myBreak = function() {
        $scope.runningInterval = $interval($scope.newBreak,1000, $scope.counter+1, true);
      };     
    
      $scope.reset= function(){
        $interval.cancel($scope.runningInterval);
        
        if ($scope.onBreak) {
          $scope.counter = 5;
        }else {
          $scope.counter = 10;
        };

        $scope.runningInterval = null;
        
      };


}


   angular
       .module('blocTime')
       .controller('LandingCtrl',["$scope", "$interval", LandingCtrl]);
})();