(function() {
   function LandingCtrl($scope, $interval) {   
      $scope.counter = 1500;
      $scope.runningInterval = null;

      $scope.onTimeout = function(){
        if ($scope.counter > 0) {
            $scope.counter = $scope.counter-1;
        }
        else {
            alert("Time is up!");
        }
      };

      $scope.myTimeout = function() {
        $scope.runningInterval = $interval($scope.onTimeout,1000, $scope.counter, true);
      };
    
      $scope.reset= function(){
        $interval.cancel($scope.runningInterval);
        $scope.counter = 1500;
        $scope.runningInterval = null;
      };  
}


   angular
       .module('blocTime')
       .controller('LandingCtrl',["$scope", "$interval", LandingCtrl]);
})();