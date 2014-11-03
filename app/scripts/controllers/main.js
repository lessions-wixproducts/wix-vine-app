'use strict';

angular.module('vineApp')
  .controller('MainCtrl', function ($scope, Wixservice, $routeParams, $location, config) {
    $scope.search = function (q) {
      if(config.standAlone){
        $location.path('search/' + q + '/6');
      } else {
        Wixservice.navigate('#/search/' + q + '/6', function (error) {
          console.log("error: " + error);
        });
      }
    };
  });
