(function() {
  function Metric($firebaseObject) {
    
    workSessions = [];
    
    var ref = new Firebase("https://scorching-heat-2362.firebaseio.com/analytics");
    var analytics = $firebaseObject(ref);
      

    return {

      analytics: analytics,
      
      registerPageView: function() { 
      analytics.$loaded().then(function(){
        console.log("Page views: " + analytics.pageViews);
        if ((analytics.pageViews === undefined)) {analytics.pageViews = {};}

        //analytics.pageViews++;
        var date = new Date();
        date.setHours(9);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        var seconds = date.getTime();
        if ((analytics.pageViews[seconds] === undefined)) {analytics.pageViews[seconds] = 0}
        analytics.pageViews[seconds] += 1;
        var results = [];
        results.push([analytics.pageViews, analytics.pageViews[seconds]]);
        console.log(results[1]);
        analytics.$save();

      }) 
      },

      registerWorkSessionStart: function() {
        var session = new Date();
        workSessions.push(session);
        if (isNaN(analytics.worksessionsStarted)) {analytics.worksessionsStarted = 0;}
        analytics.worksessionsStarted++;
        analytics.$save();
      },

      numberOfSessionsStarted: function() {
        return workSessions.length;
      }

    };
  }

  angular
    .module('blocTime')
    .factory('Metric', ['$firebaseObject', Metric]);
})();
