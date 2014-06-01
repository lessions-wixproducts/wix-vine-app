'use strict';

angular.module('vineApp')
    .controller('MainCtrl', function ($scope, $window, $routeParams, $location, WixService, mySettings, Settings) {

        $scope.init = function () {
            Settings.get(function(data) {
                $scope.settings = data;
            });
        };

        $scope.search = function (q) {

            if(mySettings.standAlone){
                $location.path('search/' + q + '/' + $scope.settings.numOfVideos);
            } else {

                if (!q) {
                    q = $scope.settings.defaultSearchTerm;
                }

                WixService.navigate('search/' + q + '/' + $scope.settings.numOfVideos, function (error) {
                    console.log("error: " + error);
                });
            }
        };
    });