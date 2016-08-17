var movies = {};

app.controller("TopController", function($scope, $route, $http, $window){
  $scope.Form = {};
  $scope.submitMov = function(input){
    var movie = $scope.Form.movie;
    $http.get('http://www.omdbapi.com/?s=' + movie).then(function(data){
      movies.list = data.data.Search;
      $window.location.href = '/#/results'
      $route.reload()
    });
  };
})

app.controller('ResController', function($scope){
  $scope.results = {};
  $scope.results.list = movies.list
});

app.controller('ShowController', function($scope, $http, $routeParams){
  var movieID = $routeParams.id;
  $scope.movieInfo = {};
  $http.get('http://www.omdbapi.com/?i=' + movieID + '&plot=short&r=json').then(function(data){
    $scope.movieInfo.info = data.data

  });
});
