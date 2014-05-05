'use strict';

angular.module('vineApp')
    .controller('MainCtrl', function ($scope, Wixservice) {
        $scope.search = function(q){
            Wixservice.navigate(q + '/6', function(error){
                console.log("error: " + error);

            });
        };
});