// Register `allRoutes` component, along with its associated controller and template
angular
  .module('leafletEx', [
    'leaflet-directive'
  ])
  .component('leafletEx', {
    // template: 'test template'
    templateUrl: 'leaflet-ex/leaflet-ex.template.html',
    css: 'leaflet-ex/leaflet-ex.css',
    controller: leafletExController,
    controllerAs: 'leafletExCtrl'
  });

function leafletExController() {
};
