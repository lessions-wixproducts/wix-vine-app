'use strict';

angular.module('vineApp')
  .controller('SettingsCtrl', function ($scope, $window, WixUIService, SettingsService, Settings, WixService) {

        $scope.init = function () {
            WixUIService.init();
            $scope.settings = SettingsService.settings($window);
            $scope.applySettings();
        };

        $scope.applySettings = function () {
            $scope.$watch('settings.numOfVideos', function (val, old) {
                $scope.settings.numOfVideos = parseInt(val);
                if (old && val !== old) {
                    $scope.store();
                }
            });
        };

        $scope.store = function () {
            var compId = WixService.getOrigCompId();
            Settings.save({"compId": compId}, JSON.stringify({settings: JSON.stringify($scope.settings)}),
            function success() {
                WixService.refreshAppByCompIds(compId);
            },
            function err(data) {
                console.log("error: "+ data);
            });
        }

    });
