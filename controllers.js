var appControllers = angular.module('AppControllers',[]);

appControllers.controller('MoviesListController', ['$scope', '$routeParams', function($scope, $routeParams) {
	// tu trzeba pobrać listę filmów (wyciągnąć :page), żeby była dostępna w movies-list.html
	$scope.page = $routeParams.page;
}]);

appControllers.controller('MovieController', ['$scope', '$routeParams', function($scope, $routeParams) {
	// tu trzeba pobrać film z id= :id, żeby był dostępny w movie.html
	$scope.id = $routeParams.id;
}]);