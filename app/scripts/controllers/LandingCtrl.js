(function() {
   function LandingCtrl($scope, Tasks) {   
     window.scope = $scope;
     $scope.all = Tasks.all;

     $scope.addTask = function (){
        console.log($scope.task);
        Tasks.all.$add({name: $scope.task, createdAt: Firebase.ServerValue.TIMESTAMP});
        $scope.task = "";
     }

     $scope.removeTask = function(task){
       console.log($scope.task);
       Tasks.all.$remove(task);
     }


}


   angular
       .module('blocTime')
       .controller('LandingCtrl',["$scope", "Tasks", LandingCtrl]);
})();