angular
  .module('gpxOnMap', [
    'strReplaceFtl'
  ])
  .component('gpxOnMap', {
    // template: 'test template'
    templateUrl: 'gpx-on-map/gpx-on-map.template.html',
    css: 'gpx-on-map/gpx-on-map.css',
    controller: [
      '$timeout',
      gpxOnMapController
    ],
    controllerAs: 'gpxOnMapCtrl',
    bindings: {
      gpxfile: '<'
    }
  });

function gpxOnMapController($timeout) {



  this.$onInit = function() {
    var nameWithDots = this.gpxfile;
    var mapId = nameWithDots.replace(".gpx", "gpx");
    // console.log("Component: mapId is " + mapId);

    function insertMap() {
      // console.log("insertMap: mapId is " + mapId);
      var map = [];
      map = L.map(document.getElementById(mapId));
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      var dataFolder = 'data/gpx/';
      var gpx = dataFolder.concat(nameWithDots); // URL to your GPX file or the GPX itself

      var gpxLayer = new L.GPX(gpx, {
        async: true,
        marker_options: {
          startIconUrl: 'gpx-on-map/marker/pin-icon-start.png',
          endIconUrl: 'gpx-on-map/marker/pin-icon-end.png',
          shadowUrl: 'gpx-on-map/marker/pin-shadow.png'
        }
      })

      gpxLayer.on('loaded', function(e) {
        var fileInfo = e.target;
        map.fitBounds(fileInfo.getBounds());
        // console.log(fileInfo.get_name());
      }).addTo(map);

      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();
      map.dragging.disable();
    };

    // $timeout(function() {
    //   console.log('DOM ready');
    // });

    $timeout (function() {
        insertMap();
    });


  }
};
