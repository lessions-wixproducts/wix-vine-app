'use strict';

angular.module('vineApp')
  .controller('VideoCtrl', function ($scope, $routeParams, $sce, Video, DataService, Wixservice, mySettings, WixUIService) {

    WixUIService.init();

    if(!mySettings.standAlone){
      Wixservice.pushState('video/' + $routeParams.id);
    }

    $scope.video = _.find(DataService.videos, function (video) {
      return video.id === $routeParams.id
    });

    if (_.isUndefined($scope.video)) {
      Video.get({videoId: $routeParams.id}, function (video) {
        video.videoUrl = $sce.trustAsResourceUrl(video.videoUrl);
        video.avatarUrl = $sce.trustAsResourceUrl(video.avatarUrl);
        $scope.video = video;
      });
    }
  });