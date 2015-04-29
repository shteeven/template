var app = angular.module('templateApp');

app.directive('swbGmap', function ($log, $timeout) {

  return {
    scope:{ swbClass: '@', swbMap: '=' },
    restrict: 'EA',
    /*template: '<ui-gmap-google-map center="swbMap.center" options="options" zoom="swbMap.zoom" ng-mouseleave="left()" ng-click="clicked()" ng-style="style">' +
    +'<ui-gmap-markers idkey="marker.id" coords="marker.coords" icon="icon"></ui-gmap-markers>'+
    '</ui-gmap-google-map>',*/
    templateUrl: 'views/templates/gmap.html',

    link: function($scope, attrs, elem) {

      /*$scope.swbMap = {
        center: {latitude: 36.4969316, longitude: 126.3351999 },
        zoom: 8,
        place:{ placeId: 'ChIJ2UxGN-l1ejURJ5hu74ag7hg'}
      };*/
      $scope.options = {scrollwheel: false};
      //$scope.dynamicMoveCtr = 0;
      $scope.marker = {
        id: 0,
        idKey: 0,
        coords: $scope.swbMap.center,
        options: { place: {
          location: {lat:$scope.swbMap.center.latitude, lng:$scope.swbMap.center.longitude, noWrap:false},
          placeId: $scope.swbMap.place.placeId

        }
        }
      };


      $scope.marker2 = {
        id:1,
        idKey: 0,
        coords: $scope.swbMap.center,
        latitude:$scope.swbMap.center.longitude,
        longitude:$scope.swbMap.center.latitude,
        showWindow:true,
        options:{
          labelContent:"Markers id 1",
          labelAnchor:"22 0",
          labelClass:"marker-labels"
        }
      };

      console.log($scope.marker);
    }
  };
});