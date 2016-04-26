(function() {
  function Metric($firebaseObject) {
    
    workSessions = [];
    
    var ref = new Firebase("https://scorching-heat-2362.firebaseio.com/analytics");
    var analytics = $firebaseObject(ref);
    window.analytics = analytics;
    

    return {
      
      registerPageView: function() { 
      analytics.$loaded().then(function(){
        console.log("Page views: " + analytics.pageViews);
        if (isNaN(analytics.pageViews)) {analytics.pageViews = 0;}
        analytics.pageViews++;
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
