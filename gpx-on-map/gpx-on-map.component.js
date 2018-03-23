angular
  .module('gpxOnMap', [
    'leaflet-directive'
  ])
  .component('gpxOnMap', {
    // template: 'test template'
    templateUrl: 'gpx-on-map/gpx-on-map.template.html',
    css: 'gpx-on-map/gpx-on-map.css',
    controller: gpxOnMapController,
    controllerAs: 'gpxOnMapCtrl'
  });

function gpxOnMapController() {
  var map = L.map('map');
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  var gpx = 'data/gpx/test.gpx'; // URL to your GPX file or the GPX itself
  new L.GPX(gpx, {
    async: true,
    marker_options: {
    startIconUrl: 'gpx-on-map/marker/pin-icon-start.png',
    endIconUrl: 'gpx-on-map/marker/pin-icon-end.png',
    shadowUrl: 'gpx-on-map/marker/pin-shadow.png'
  }
  }).on('loaded', function(e) {
    map.fitBounds(e.target.getBounds());
  }).addTo(map);
};
