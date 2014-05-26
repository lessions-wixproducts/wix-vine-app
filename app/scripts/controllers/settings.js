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

            $scope.$watch('settings.videoSize', function (val, old) {
                $scope.settings.videoSize = parseInt(val);
                if (old && val !== old) {
                    $scope.store();
                }
            });

            $scope.$watch('settings.defaultSearchTerm', function (val, old) {
                $scope.settings.defaultSearchTerm = val;
                if (val !== old) {
                    $scope.store();
                }
            });
        };

        $scope.store = function () {
            var compId = WixService.getOrigCompId();
            Settings.save({"compId": compId}, {settings: JSON.stringify($scope.settings)},
                function success() {
                    WixService.refreshAppByCompIds(compId);
                },
                function err(data) {
                    console.log("error: "+ data);
                }
            );
        }

    });
