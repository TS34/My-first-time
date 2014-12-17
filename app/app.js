(function(){
    
    // create the angular module
    var app = angular.module('calculator', ['ngRoute']);
    
    
    app.config(function($routeProvider){
       $routeProvider
            .when('/home', {
                templateUrl: 'app/views/home.html'
            })
            .when('/about', {
                templateUrl: 'app/views/about.html'
            })
            .when('/', {
                templateUrl: 'app/views/home.html'
            });
    });
})();