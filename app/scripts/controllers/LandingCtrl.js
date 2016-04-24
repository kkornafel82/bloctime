(function() {
   function LandingCtrl($scope, Tasks, Metric) {   
     window.scope = $scope;
     $scope.all = Tasks.all;
     Metric.registerPageView();

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
       Metric.registerWorkSessionStart();
     }

     $scope.numberOfSessionsStarted = function() {
       var sessions = Metric.numberOfSessionsStarted();
       return sessions;
     }

}


   angular
       .module('blocTime')
       .controller('LandingCtrl',["$scope", "Tasks", "Metric", LandingCtrl]);
})();
