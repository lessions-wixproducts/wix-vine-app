'use strict';

angular.module('vineApp').directive('ngNumOfVideos', ['WixService', '$timeout', function (WixService, $timeout) {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, $element, attrs, ngModel) {
            if (!ngModel) return;

            ngModel.$render = function () {
                $timeout(function () {
                    WixService.set('numOfVideos', scope.settings.numOfVideos)
                }, 0);
            };

            WixService.onChange('numOfVideos', function (value, key) {
                if ((value !== '') && (scope.settings.numOfVideos !== value)) {
                    scope.$apply(function () {
                        scope.settings.numOfVideos = value;
                    });
                }
            });
        }
    }
}]);


angular.module('vineApp').directive('ngVideoSize', ['WixService', '$timeout', function (WixService, $timeout) {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, $element, attrs, ngModel) {
            if (!ngModel) return;

            ngModel.$render = function () {
                $timeout(function () {
                    WixService.set('videoSize', scope.settings.videoSize)
                }, 0);
            };

            // The object received is consisted of a value and an index
            WixService.onChange('videoSize', function (value, key) {
                if (value) {

                    if ((value.value !== '') && (scope.settings.videoSize !== value.value)) {
                        scope.$apply(function () {
                            scope.settings.videoSize = value.value;
                        });
                    }
                }
            });
        }
    }
}]);


angular.module('vineApp').directive('ngDefaultSearchTerm', ['WixService', '$timeout', function (WixService, $timeout) {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, $element, attrs, ngModel) {
            if (!ngModel) return;

            ngModel.$render = function () {
                $timeout(function () {
                    WixService.set('defaultSearchTerm', scope.settings.defaultSearchTerm)
                }, 0);
            };

            // The object received is consisted of a value and an index
            WixService.onChange('defaultSearchTerm', function (value, key) {
                if ((value !== '') && (scope.settings.defaultSearchTerm !== value)) {
                    scope.$apply(function () {
                        scope.settings.defaultSearchTerm = value;
                    });
                }
            });
        }
    }
}]);
