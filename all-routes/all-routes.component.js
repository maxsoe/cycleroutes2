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
    this.gpxFile = [];
    // this.gpxFile[0] = this.routes[0].gpx;

    for (i = 0; i < this.routes.length; i++) {
      this.gpxFile[i] = this.routes[i].gpx;
      console.log(this.gpxFile[i]);
    }

    // angular.forEach(this.routes, function(value, key) {
    //   // console.log(value.gpx);
    //   this.gpxFile = value.gpx;
    //   console.log(this.gpxFile);
    //   // processThisGpx(value.gpx);
    // });
  });

};
