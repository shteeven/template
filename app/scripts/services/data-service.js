/**
 * Created by Shtav on 4/24/15.
 */

var app = angular.module('templateApp.DataFactory', []);

app.factory('DataFactory', ['$http', function($http){
  return {
    getData: function(dataUrl) {
      return $http({method:'GET', url: dataUrl});
    }
  };

}]);