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


//TODO: the DOM is rending afer the angularJS code is run. We want to run the code after the DOM is fully rendered - https://www.google.co.uk/search?q=angularjs+execute+function+after+render&oq=angularjs+execute+fun&aqs=chrome.2.0j69i57j0l4.12153j0j7&sourceid=chrome&ie=UTF-8

function gpxOnMapController($timeout) {

  this.$onInit = function() {
    var nameWithDots = this.gpxfile;
    var mapId = nameWithDots.replace(".gpx", "gpx");
    console.log("Component: mapId is " + mapId);


    function insertMap() {
      $timeout(function() {

        console.log("insertMap: mapId is " + mapId);
        var map = [];
        map = L.map(document.getElementById(mapId));

        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        // var gpx = 'data/gpx/test.gpx';

        var dataFolder = 'data/gpx/';
        var gpx = dataFolder.concat(nameWithDots); // URL to your GPX file or the GPX itself
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

      });
    };

    $timeout(function() {
      console.log('DOM ready');
    });

    insertMap();

  }
};
