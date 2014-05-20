'use strict';

angular.module('vineApp').factory('Settings', ['$resource', function ($resource) {
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    var updateSettingsUrl = '/app/settingsUpdate?instance=' + getParameterByName('instance') + "&compId=:compId";

    return $resource(updateSettingsUrl);
}]);

angular.module('vineApp').factory("SettingsService", function () {
    return {
        settings: function ($window) {
            var settings = $.extend(
                {
                    'numOfVideos': 7
                },
                $window.settings);
            return settings;
        }
    };
});