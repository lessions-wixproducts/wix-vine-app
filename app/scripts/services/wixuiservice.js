'use strict';

angular.module('vineApp')
  .service('WixUIService', function WixUIService() {
        return {
          init: function(){
              Wix.UI.initialize({});
          }
        };
  });
