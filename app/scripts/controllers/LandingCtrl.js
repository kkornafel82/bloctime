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
      $scope.data = Metric.analytics.pageViews;
     });

     $scope.options = {
        chart: {
            type: 'cumulativeLineChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 50,
                left: 65
            },
            // [[1,2], [3,4]]
            x: function(d){ return d[0]; },
            y: function(d){ return d[1]/100; },
            average: function(d) { return d.mean/100; },

            color: d3.scale.category10().range(),
            duration: 300,
            useInteractiveGuideline: true,
            clipVoronoi: false,

            xAxis: {
                axisLabel: 'X Axis',
                tickFormat: function(d) {
                    return d3.time.format('%m/%d/%y')(new Date(d))
                },
                showMaxMin: false,
                staggerLabels: true
            },

            yAxis: {
                axisLabel: 'Y Axis',
                tickFormat: function(d){
                    return d3.format(',.1%')(d);
                },
                axisLabelDistance: 0
           }
        }
      }

    }  


   angular
       .module('blocTime')
       .controller('LandingCtrl',["$scope", "Tasks", "Metric", LandingCtrl]);
})();
