'use strict';

angular.module('vineApp')
  .controller('ResultsCtrl', function ($scope, $routeParams, $sce, Video, DataService, Search, Settings) {

        Settings.get(function(data) {

            $scope.settings = data;

            $scope.keyword = $routeParams.q + ": getting " + $routeParams.size + " results";
            Search.query({term: $routeParams.q || 'bikini', size: $routeParams.size || 4}, function(data){
                var videos = data;
                _.each(videos, function (video) {
                    video.videoUrl = $sce.trustAsResourceUrl(video.videoUrl);
                    video.avatarUrl = $sce.trustAsResourceUrl(video.avatarUrl);
                });
                $scope.videos = videos;
                DataService.videos = videos;

                $scope.keyword = $routeParams.q + ": showing " + $routeParams.size + " results";

                if ($scope.settings.resultTextStyle == 'short'){
                    $scope.keyword = "#" + $routeParams.q;
                }
                else if($scope.settings.resultTextStyle == 'medium'){
                    $scope.keyword = "#" + $routeParams.q + " (" + $routeParams.size + ")";
                }
                else if($scope.settings.resultTextStyle == 'long'){
                    $scope.keyword = $routeParams.q + ": showing " + $routeParams.size + " results";
                }
            });
        });
  });
