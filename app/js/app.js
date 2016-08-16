var app = angular.module("movieApp", ['ngRoute']);

var movies = {};

app.controller("TopController", function($scope, $route, $http, $window){
  $scope.Form = {};
  // $scope.movies = {};
  $scope.submitMov = function(input){
    var movie = $scope.Form.movie;
    $http.get('http://www.omdbapi.com/?s=' + movie).then(function(data){
      // $scope.view.zenData = data;
      // console.log(data.data.Search); // the array of results
      movies.list = data.data.Search;
      // console.log(movies.list);
      $route.reload()
      $window.location.href = '/#/results'
  });
};
})

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
      // .when('/resume', {
      //   templateUrl: 'partials/home.html',
      //   controller: 'ResController'
      // })
});

app.controller('ResController', function($scope){
  $scope.results = {};
  $scope.results.list = movies.list
  // console.log($scope.results.list);
});

app.controller('ShowController', function($scope, $http, $routeParams){
  var movieID = $routeParams.id;
  $scope.movieInfo = {};
  $http.get('http://www.omdbapi.com/?i=' + movieID + '&plot=short&r=json').then(function(data){
    console.log(data.data); // the array of results
    $scope.movieInfo.info = data.data

});
});
//
// app.controller('ResController', function($scope){
//   $scope.view = {};
//   $scope.view.message = "resume!"
// });

// http://www.omdbapi.com/?s=ricky

// http://www.omdbapi.com/?i=tt0371746&plot=short&r=json
// longer request
