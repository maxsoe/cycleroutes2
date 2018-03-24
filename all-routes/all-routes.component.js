// Register `allRoutes` component, along with its associated controller and template
angular
  .module('allRoutes', [])
  .component('allRoutes', {
    // template: 'test template'
    templateUrl: 'all-routes/all-routes.template.html',
    css: 'all-routes/all-routes.css',
    controller: allRoutesController,
    controllerAs: 'allRoutesCtrl'
  });

function allRoutesController(getRoutesListSvc) {
  getRoutesListSvc.getPosts().then(response => {
    this.routes = response.data;
    // this.gpxFile = this.routes[0].name;
    this.gpxFile = "spawn";
    console.log(this.gpxFile);
    // angular.forEach(this.routes, function(value, key) {
    //   // console.log(value.gpx);
    //   // processThisGpx(value.gpx);
    // });
  });

};
