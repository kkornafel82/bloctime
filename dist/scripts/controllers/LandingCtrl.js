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

     Metric.analytics.$loaded().then(function() {
     var values = [];
     var keys = Object.keys(Metric.analytics.pageViews);
     for (i=0; i < Object.keys(Metric.analytics.pageViews).length; i++ ) {
       values.push([keys[i], Metric.analytics.pageViews[keys[i]]]);
     }
    $scope.data = [ {
        key: "pageViews",
        values: values
    }]
     });


     $scope.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 50,
                left: 65
            },
            // [[1,2], [3,4]]
            x: function(d){ return d[0]; },
            y: function(d){ return d[1]; },


            useInteractiveGuideline: true,


            xAxis: {
                axisLabel: 'X Axis',
                showMaxMin: false,
                staggerLabels: true
            },

            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: 0
           }
        }
      }



    }  


   angular
       .module('blocTime')
       .controller('LandingCtrl',["$scope", "Tasks", "Metric", LandingCtrl]);
})();
