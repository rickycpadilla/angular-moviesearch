var app = angular.module("movieApp", ['ngRoute']);

app.controller("TopController", function($scope, $http){
  $scope.Form = {};
  $scope.submitMov = function(input){
    var movie = $scope.Form.movie;
    $http.get('http://www.omdbapi.com/?s=' + movie).then(function(data){
      // $scope.view.zenData = data;
      console.log(data.data.Search);
  });
};
})

// app.config(function($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'partials/projects.html',
//         controller: 'ProjController'
//       })
//       .when('/bio', {
//         templateUrl: 'partials/bio.html',
//         controller: 'BioController'
//       })
//       .when('/resume', {
//         templateUrl: 'partials/home.html',
//         controller: 'ResController'
//       })
// });

app.controller('BioController', function($scope){
  $scope.view = {};
  $scope.view.message = "bio!"
});

app.controller('ProjController', function($scope){
  $scope.view = {};
  $scope.view.message = "projects!"
});

app.controller('ResController', function($scope){
  $scope.view = {};
  $scope.view.message = "resume!"
});

// http://www.omdbapi.com/?s=ricky
