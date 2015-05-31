var appControllers = angular.module('AppControllers',[]);

appControllers.controller('MoviesListController', ['$scope', '$routeParams', '$http', '$q', function($scope, $routeParams, $http, $q) {
	$scope.dataTmp = $http.get('http://api.themoviedb.org/3/discover/movie?page='+$routeParams.page+'&sort_by=vote_average.desc&vote_count.gte=100&language=pl&api_key=58aa31b7945dbe8cb06c4558a0406796');
	$scope.genresTmp = $http.get('http://api.themoviedb.org/3/genre/movie/list?language=pl&api_key=58aa31b7945dbe8cb06c4558a0406796');
	$q.all([$scope.dataTmp, $scope.genresTmp]).then(function(values) {
		$scope.data = values[0].data;
		$scope.genresList = values[1].data.genres;
	});
}]);

appControllers.controller('MovieController', ['$scope', '$routeParams', '$http', '$q', function($scope, $routeParams, $http, $q) {
	$scope.dataPlTmp = $http.get('http://api.themoviedb.org/3/movie/'+$routeParams.id+'?api_key=58aa31b7945dbe8cb06c4558a0406796&language=pl');
	$scope.dataEnTmp = $http.get('http://api.themoviedb.org/3/movie/'+$routeParams.id+'?api_key=58aa31b7945dbe8cb06c4558a0406796&language=en');
	$q.all([$scope.dataPlTmp, $scope.dataEnTmp]).then(function(values) {
		var moviePl = values[0].data;
		var movieEn = values[1].data;
		if(moviePl.overview != null) {
			$scope.movie = moviePl;
		} else {
			$scope.movie = movieEn;
		}
	});
	$scope.previousPage = $routeParams.prev;
}]);