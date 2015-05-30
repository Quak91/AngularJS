var app = angular.module('myApp',['ngRoute','AppControllers']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/page/:page', {templateUrl: 'movies-list.html', controller: 'MoviesListController'})
	.when('/view/:id', {templateUrl: 'movie.html', controller: 'MovieController'})
	.otherwise({redirectTo: '/page/1'});
});
