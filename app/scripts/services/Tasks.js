(function() {
  function Tasks($firebaseArray) {
    var ref = new Firebase("https://scorching-heat-2362.firebaseIO.com/tasks");

    // download tasks into a synchronized array
    var tasks = $firebaseArray(ref);

    return {
      all: tasks,
      
    };
  }

  angular
    .module('blocTime')
    .factory('Tasks', ['$firebaseArray', Tasks]);
})();
