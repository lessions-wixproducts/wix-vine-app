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

                    if (value.value) {

                        if ((value.value !== '') && (scope.settings.videoSize !== value.value)) {
                            scope.$apply(function () {
                                scope.settings.videoSize = parseInt(value.value);
                            });
                        }
                    }
                }
            });
        }
    }
}]);

angular.module('vineApp').directive('ngAvatarSize', ['WixService', '$timeout', function (WixService, $timeout) {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, $element, attrs, ngModel) {
            if (!ngModel) return;

            ngModel.$render = function () {
                if (scope.settings.avatarSize) {
                    $timeout(function () {
                        WixService.set('avatarSize', scope.settings.avatarSize)
                    }, 0);
                }
            };

            // The object received is consisted of a value and an index
            WixService.onChange('avatarSize', function (value, key) {
                if (value) {

                    if (value.value) {

                        if ((value.value !== '') && (scope.settings.avatarSize !== value.value)) {
                            scope.$apply(function () {
                                scope.settings.avatarSize = parseInt(value.value);
                            });
                        }
                    }
                }
            });
        }
    }
}]);


angular.module('vineApp').directive('ngResultTextStyle', ['WixService', '$timeout', function (WixService, $timeout) {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, $element, attrs, ngModel) {
            if (!ngModel) return;

            ngModel.$render = function () {
                $timeout(function () {
                    WixService.set('resultTextStyle', scope.settings.resultTextStyle)
                }, 0);
            };

            // The object received is consisted of a value and an index
            WixService.onChange('resultTextStyle', function (value, key) {
                if (value) {

                    if (value.value) {

                        if ((value.value !== '') && (scope.settings.resultTextStyle !== value.value)) {
                            scope.$apply(function () {
                                scope.settings.resultTextStyle = value.value;
                            });
                        }
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


angular.module('vineApp').directive('ngShowSearchButton', ['WixService', '$timeout', function (WixService, $timeout) {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, $element, attrs, ngModel) {
            if (!ngModel) return;

            ngModel.$render = function () {
                $timeout(function () {
                    WixService.set('showSearchButton', scope.settings.showSearchButton)
                }, 0);
            };

            WixService.onChange('showSearchButton', function (value, key) {
                if ((value !== '') && (scope.settings.showSearchButton !== value)) {
                    scope.$apply(function () {
                        scope.settings.showSearchButton = value;
                    });
                }
            });
        }
    }
}]);

angular.module('vineApp').directive('ngShowAvatar', ['WixService', '$timeout', function (WixService, $timeout) {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, $element, attrs, ngModel) {
            if (!ngModel) return;

            ngModel.$render = function () {
                $timeout(function () {
                    WixService.set('showAvatar', scope.settings.showAvatar)
                }, 0);
            };

            WixService.onChange('showAvatar', function (value, key) {
                if ((value !== '') && (scope.settings.showAvatar !== value)) {
                    scope.$apply(function () {
                        scope.settings.showAvatar = value;
                    });
                }
            });
        }
    }
}]);