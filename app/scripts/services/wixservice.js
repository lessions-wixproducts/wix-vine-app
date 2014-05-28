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
            createPopupWindow: function() {
                return Wix.UI.create({ctrl: 'Popup',
                    options: {buttonSet: 'okCancel', fixed:true}});
            },
            createModalWindow: function() {
                return Wix.UI.create({ctrl: 'Popup',
                    options: {modal:true, buttonSet: 'okCancel', fixed:true}});
            }
        };
  });
