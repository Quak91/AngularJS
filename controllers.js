var appControllers = angular.module('AppControllers',[]);

appControllers.controller('MoviesListController', ['$scope', '$routeParams', '$http', '$q', function($scope, $routeParams, $http, $q) {
	$scope.dataTmp = $http.get('http://api.themoviedb.org/3/discover/movie?page='+$routeParams.page+'&sort_by=vote_average.desc&vote_count.gte=100&language=pl&api_key=58aa31b7945dbe8cb06c4558a0406796', {cache: false});
	$scope.genresTmp = $http.get('http://api.themoviedb.org/3/genre/movie/list?language=pl&api_key=58aa31b7945dbe8cb06c4558a0406796', {cache: false});
	$q.all([$scope.dataTmp, $scope.genresTmp]).then(function(values) {
		$scope.data = values[0].data;
		$scope.genres = values[1].data.genres;
	});
}]);

appControllers.controller('MovieController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	//$routeParams.id; //numer id filmu (z adresu w przeglądarce)
	// tu trzeba pobrać dane pojedynczego filmu z id=$routeParams.id
}]);