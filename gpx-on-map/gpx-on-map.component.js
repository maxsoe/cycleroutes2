angular
  .module('gpxOnMap', [
    'strReplaceFtl'
  ])
  .component('gpxOnMap', {
    // template: 'test template'
    templateUrl: 'gpx-on-map/gpx-on-map.template.html',
    css: 'gpx-on-map/gpx-on-map.css',
    controller: [
      gpxOnMapController
    ],
    controllerAs: 'gpxOnMapCtrl',
    bindings: {
      gpxfile: '<'
    }
  });

function gpxOnMapController() {
  // var vm = this;
  this.$onChanges = function() {
    var nameWithDots = this.gpxfile;
    var mapId = nameWithDots.replace(".gpx", "gpx");


    console.log("mapId is " +mapId);

    // var map = [];
    map = L.map(mapId);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    var gpx = 'data/gpx/test.gpx'; // URL to your GPX file or the GPX itself
    var g = new L.GPX(gpx, {
      async: true,
      marker_options: {
        startIconUrl: 'gpx-on-map/marker/pin-icon-start.png',
        endIconUrl: 'gpx-on-map/marker/pin-icon-end.png',
        shadowUrl: 'gpx-on-map/marker/pin-shadow.png'
      }
    })

    g.on('loaded', function(e) {
      map.fitBounds(e.target.getBounds());
    }).addTo(map);

    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    map.dragging.disable();

  };


};
