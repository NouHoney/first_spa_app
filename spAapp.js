var spa = angular.module('myApp', ['ngRoute']);

/*For each route, we need to specify templateUrl and controller.
If user will try to go to the route that does not exist, 
redirect user to the “/” route*/

spa.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});

//Build controllers for every route

spa.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

spa.controller('BlogController', function($scope) {
  $scope.message = 'Hello from BlogController';
});

spa.controller('AboutController', function($scope) {
  $scope.message = 'Hello from AboutController';
});