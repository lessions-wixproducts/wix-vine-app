'use strict';

angular.module('vineApp')
  .service('Wixservice', function Wixservice() {
        return {
          navigate: function(state, callback){
              Wix.Utils.navigateToSection(state, callback);
          },
          pushState: function(state){
              Wix.pushState(state);
          }
        };
  });
