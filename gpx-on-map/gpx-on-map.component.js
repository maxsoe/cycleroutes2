angular
  .module('gpxOnMap', [])
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
  this.$onInit = function() {
    console.log('loaded on init');
    console.log("name of gpxfile is " +this.gpxfile);

    var map = [];
    map[0] = L.map('this.gpxfile');
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map[0]);
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
      map[0].fitBounds(e.target.getBounds());
    }).addTo(map[0]);

    map[0].touchZoom.disable();
    map[0].doubleClickZoom.disable();
    map[0].scrollWheelZoom.disable();
    map[0].boxZoom.disable();
    map[0].keyboard.disable();
    map[0].dragging.disable();

  };


};
