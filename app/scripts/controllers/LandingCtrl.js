(function() {
   function LandingCtrl($scope, Tasks) {   
     window.scope = $scope;
     $scope.all = Tasks.all;

     $scope.addTask = function (){
        console.log($scope.task);
        Tasks.all.$add({name: $scope.task});
        $scope.task = "";
     }


}


   angular
       .module('blocTime')
       .controller('LandingCtrl',["$scope", "Tasks", LandingCtrl]);
})();