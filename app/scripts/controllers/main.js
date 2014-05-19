'use strict';

angular.module('vineApp')
    .controller('MainCtrl', function ($scope, $window, $routeParams, $location, WixService, mySettings, WixUIService, SettingsService) {

        $scope.init = function () {
            WixUIService.init();
            $scope.settings = SettingsService.settings($window);
        };

        $scope.search = function (q) {

            if(mySettings.standAlone){
                $location.path('search/' + q + '/' + $scope.settings.numOfVideos);
            } else {
                WixService.navigate('search/' + q + '/' + $scope.settings.numOfVideos, function (error) {
                    console.log("error: " + error);
                });
            }
        };
    });