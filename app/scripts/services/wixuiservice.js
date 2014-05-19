'use strict';

angular.module('vineApp')
  .service('WixUIService', function () {
        return {
          init: function(){
              Wix.UI.initialize({});
          }
        };
  });
