(function() {
  function Metric($rootScope) {
    $rootScope.workSessions = [];

    return {
      // Function that records a metric object by pushing it to the $rootScope array
      registerWorkSession: function(session) {
        // Add time to event register
        session['startedAt'] = new Date();
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
    .service('Metric', ['$rootScope', Metric]);
})();