var app = angular.module('templateApp');

app.directive('swbGmap', ['DataFactory', function (DataFactory) {

  return {
    scope:{ swbUrl: '@' },
    restrict: 'E',
    template: '<div></div>',
    replace: true,

    link: function($scope, attrs, elem) {

      DataFactory.getData($scope.swbUrl).success(function(data) {
        var myLatLng = new google.maps.LatLng(data.map.lat, data.map.lng);
        //set option vars
        var options = { center: myLatLng, zoom: data.map.zoom, scrollwheel: data.map.scrollwheel };
        //initialize map
        var map = new google.maps.Map(document.getElementById("map-canvas"), options);
        setMarkers(map, data.sites);
      }).error(function(err) {console.log(err)});

      //initialize info window
      var infowindow = null;
      infowindow = new google.maps.InfoWindow();

      function setMarkers(map, markers) {
        for (var i = 0; i < markers.length; i++) {
          var site = markers[i];
          var siteLatLng = new google.maps.LatLng(site.lat, site.lng);
          var marker = new google.maps.Marker({
            position: siteLatLng,
            map: map,
            icon: site.icon,
            title: site.title,
            zIndex: site.zIndex,
            html: site.html
          });
          google.maps.event.addListener(marker, "click", function () {
            infowindow.setContent(this.html);
            infowindow.open(map, this);
          });
        }
      }
    }
  };
}]);