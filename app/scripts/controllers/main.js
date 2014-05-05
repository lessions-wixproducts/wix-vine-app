'use strict';

angular.module('vineApp')
  .controller('MainCtrl', function ($scope, Wixservice, $routeParams, $location, mySettings) {
    $scope.search = function (q) {
      if(mySettings.standAlone){
        $location.path('search/' + q + '/6');
      } else {
        Wixservice.navigate(q + '/6', function (error) {
          console.log("error: " + error);
        });
      }
    };
  });