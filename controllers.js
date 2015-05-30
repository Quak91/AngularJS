var appControllers = angular.module('AppControllers',[]);

appControllers.controller('MoviesListController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('http://api.themoviedb.org/3/discover/movie?page='+$routeParams.page+'&sort_by=vote_average.desc&vote_count.gte=100&language=pl&api_key=58aa31b7945dbe8cb06c4558a0406796')
		.success(function(data) {
			$scope.data = data; // po odebraniu danych, lista filmów ma być dostępna w movie-list.html
		});
}]);

appControllers.controller('MovieController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	//$routeParams.id; //numer id filmu (z adresu w przeglądarce)
	// tu trzeba pobrać dane pojedynczego filmu z id=$routeParams.id
}]);