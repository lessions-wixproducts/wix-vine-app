'use strict';

angular
    .module('vineApp', [
        'vineApp.services',
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'chieffancypants.loadingBar',
        'ngAnimate'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/search.html',
                controller: 'MainCtrl'
            })
            .when('/popular/:size', {
                templateUrl: '/views/popular.html',
                controller: 'PopularCtrl'
            })
            .when('/video/:id', {
                templateUrl: '/views/fullPage.html',
                controller: 'VideoCtrl'
            })
            .when('/search/:q/:size', {
                templateUrl: '/views/results.html',
                controller: 'SearchCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
