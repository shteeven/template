var app = angular.module('templateApp');

app.directive('swbGmap', ['DataFactory', function (DataFactory) {

  return {
    scope:{ swbUrl: '@' },
    restrict: 'E',
    template: '<div></div>',
    replace: true,

    link: function($scope, attrs, elem) {
      $scope.mapData = {};
      DataFactory.getData($scope.swbUrl).success(function(data) {
        var myLatLng = new google.maps.LatLng(data.map.lat, data.map.lng);
        $scope.options = { center: myLatLng, zoom: data.map.zoom };

        $scope.mapData = data;
        console.log(data);
      }).error(function(err) {console.log(err)});
      //initialize info window
      var infowindow = null;
      infowindow = new google.maps.InfoWindow();
      // Make position for center map
      var myLatLng = new google.maps.LatLng(39.58108, -105.63535);
      //set option vars
      var options = { center: myLatLng, zoom: 4 };
      //initialize map
      var map = new google.maps.Map(document.getElementById("map-canvas"), options);
      //create map markers
      var sites = [
        ['Mount Evans', 39.58108, -105.63535, 4, 'This is Mount Evans.'],
        ['Irving Homestead', 40.315939, -105.440630, 2, 'This is the Irving Homestead.'],
        ['Badlands National Park', 43.785890, -101.90175, 1, 'This is Badlands National Park'],
        ['Flatirons in the Spring', 39.99948, -105.28370, 3, 'These are the Flatirons in the spring.']
      ];
      var iconA = 'images/icons/map/red/red_MarkerA.png';

      function setMarkers(map, markers) {
        for (var i = 0; i < markers.length; i++) {
          var sites = markers[i];
          var siteLatLng = new google.maps.LatLng(sites[1], sites[2]);
          var marker = new google.maps.Marker({
            position: siteLatLng,
            map: map,
            icon: iconA,
            title: sites[0],
            zIndex: sites[3],
            html: sites[4]
          });

          google.maps.event.addListener(marker, "click", function () {
            infowindow.setContent(this.html);
            infowindow.open(map, this);
          });
        }
      }
      setMarkers(map, sites);

    }
  };
}]);