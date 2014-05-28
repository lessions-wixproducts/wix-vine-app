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
                if (val !== old) {
                    $scope.store();
                }
            });

            $scope.$watch('settings.videoSize', function (val, old) {
                $scope.settings.videoSize = parseInt(val);
                if (val !== old) {
                    $scope.store();
                }
            });

            $scope.$watch('settings.avatarSize', function (val, old) {
                $scope.settings.avatarSize = parseInt(val);
                if (val !== old) {
                    $scope.store();
                }
            });

            $scope.$watch('settings.resultTextStyle', function (val, old) {
                $scope.settings.resultTextStyle = val;
                if (val !== old) {
                    $scope.store();
                }
            });

            $scope.$watch('settings.showAvatar', function (val, old) {
                $scope.settings.showAvatar = val;
                if (val !== old) {
                    $scope.store();
                }
            });

            $scope.$watch('settings.showSearchButton', function (val, old) {
                $scope.settings.showSearchButton = val;
                if (val !== old) {
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
        };

        $scope.modal = WixService.createModalWindow();

        $scope.modalOpen = function(event) {
            event.stopPropagation();
            $scope.modal.getCtrl().open();
        };

        $scope.popup = WixService.createPopupWindow();

        $scope.popupOpen = function(event) {
            event.stopPropagation();
            $scope.popup.getCtrl().open();
        };
    });
