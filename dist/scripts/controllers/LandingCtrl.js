(function() {
   function LandingCtrl($scope, Tasks, Metric) {   
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

     $scope.timestampFor = function(task){
       return moment(task.createdAt).fromNow();
     }

     $scope.addWorkSession = function() {
       Metric.registerWorkSession();
       var noOfSessions = Metric.numberOfSessions();
       console.log(noOfSessions);
     }

}


   angular
       .module('blocTime')
       .controller('LandingCtrl',["$scope", "Tasks", "Metric", LandingCtrl]);
})();
