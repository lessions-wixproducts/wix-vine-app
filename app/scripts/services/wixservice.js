'use strict';

angular.module('vineApp')
  .service('WixService', function WixService() {
        return {
            navigate: function(state, callback){
                Wix.Utils.navigateToSection(state, callback);
            },
            pushState: function(state){
                Wix.pushState(state);
            },
            onChange: function (key, callback) {
                return Wix.UI.onChange(key, callback);
            },
            set: function (key, value) {
                return Wix.UI.set(key, value);
            },
            getOrigCompId: function () {
                return Wix.Utils.getOrigCompId();
            },
            refreshAppByCompIds: function (compId) {
                return Wix.Settings.refreshAppByCompIds(compId);
            },
            getInstanceId: function() {
                return Wix.Utils.getInstanceId();
            }
        };
  });
