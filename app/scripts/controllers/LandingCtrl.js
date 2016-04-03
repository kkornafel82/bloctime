(function() {
   function LandingCtrl($scope, $interval) {   
      $scope.counter = 10;
      $scope.runningInterval = null;
      $scope.onBreak = false;
      $scope.noOfSessions = 0;

      $scope.onTimeout = function(){
        if ($scope.counter > 0) {
            $scope.counter = $scope.counter-1;
        }
        else if ($scope.counter < 1) {
            $scope.runningInterval = null;
            $scope.onBreak = true;
            $scope.noOfSessions = $scope.noOfSessions+1;
            
            if ($scope.noOfSessions === 4) {
             $scope.counter = 15;
             alert("Take a long break!");
             $scope.noOfSessions === 0;
            } else{
            $scope.counter = 5;
            alert("Take a break!");
          };
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
        
        if ($scope.onBreak && $scope.noOfSessions !== 4) {
          $scope.counter = 5;
        }else if ($scope.onBreak && $scope.noOfSessions === 4){
          $scope.counter = 15;
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