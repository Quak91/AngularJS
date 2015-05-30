var appControllers = angular.module('AppControllers',[]);

appControllers.controller('MoviesListController', ['$scope', function($scope) {
	// tu trzeba pobrać listę filmów (wyciągnąć :page), żeby była dostępna w movies-list.html
}]);

appControllers.controller('MovieController', ['$scope', function($scope) {
	// tu trzeba pobrać film z id= :id, żeby był dostępny w movie.html
}]);