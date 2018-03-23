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

function leafletExController($scope) {
  angular.extend($scope, {
    london: {
      lat: 51.505,
      lng: -0.09,
      zoom: 9
    },
    center: {
      autoDiscover: true
    },
    defaults: {
      tileLayer: "http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png",
      zoomControlPosition: 'topright',
      tileLayerOptions: {
        opacity: 0.9,
        detectRetina: true,
        reuseTiles: true,
      },
      scrollWheelZoom: false
    }
  });
};
