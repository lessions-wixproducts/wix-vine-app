'use strict';

angular.module('vineApp')
  .controller('SearchCtrl', function ($scope, $routeParams, $sce, Video, DataService, Search, WixUIService) {

        WixUIService.init();

        $scope.keyword = $routeParams.q + ": getting " + $routeParams.size + " results";
        Search.query({term: $routeParams.q || 'bikini', size: $routeParams.size || 4}, function(data){
            var videos = data;
            _.each(videos, function (video) {
                video.videoUrl = $sce.trustAsResourceUrl(video.videoUrl);
                video.avatarUrl = $sce.trustAsResourceUrl(video.avatarUrl);
            })
            $scope.videos = videos;
            DataService.videos = videos;
            $scope.keyword = $routeParams.q + ": showing " + $routeParams.size + " results";
        });
  });
