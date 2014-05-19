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




