var app = angular.module("movieApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/results', {
        templateUrl: 'partials/results.html',
        controller: 'ResController'
      })
      .when('/movie/:id', {
        templateUrl: 'partials/show.html',
        controller: 'ShowController'
      })
});
