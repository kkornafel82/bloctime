(function() {
  function Metric($rootScope, $fireBaseObject) {
    $rootScope.workSessions = [];
    var ref = new $fireBaseObject(scorching-heat-2362.firebaseIO.com)
    var analytics = 


    return {
      // Function that records a metric object by pushing it to the $rootScope array
      registerWorkSession: function() {
        // Add time to event register
        var session = new Date();
        $rootScope.workSessions.push(session);
      },
      numberOfSessions: function() {
        var sessions = [];
        angular.forEach($rootScope.workSessions, function() {
            sessions.push("1");
        });
        return sessions.length;
      }


    };
  }

  angular
    .module('blocTime')
    .factory('Metric', ['$rootScope','fireBaseObject', Metric]);
})();