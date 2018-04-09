// Get the list of routes
angular
  .module('getRoutesListSvc', [])
  .service('getRoutesListSvc', function($http) {
    var routes;
    this.routes = routes;

    this.getPosts = getPosts;

    function getPosts() {
      routes = $http.get('data/all-routes.json');
      return routes;
    };

    return {
      getPosts: getPosts
    };

  });
