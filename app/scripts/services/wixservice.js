'use strict';

angular.module('vineApp')
  .service('Wixservice', function Wixservice() {
        return {
          navigate: function(state, callback){
              Wix.Utils.navigateToSection(state, callback);
          },
          pushState: function(state){
              Wix.pushState(state);
          },
          uiLibInit: function (obj) {
              Wix.UI.initialize(obj);
          },
          addEventListener: function (name, callback) {
              Wix.addEventListener(name, callback);
          }
        };
  });
