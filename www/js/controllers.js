angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.mainData = {};
})

.controller('MainCtrl', function($scope) {


})

.controller('ClubsCtrl', function($scope , getData) {
	getData.getClubs(function(data){
		$scope.clubsData = data;
	})

})

.controller('ClubCtrl', function($scope , $stateParams , getData) {
	getData.getClubs(function(data){
		$scope.clubsData = data;
	})

	getData.getNotices(function(data){
	$scope.noticesData = data;
	})

	getData.getActivities(function(data){
		$scope.activitiesData = data;
	})

	$scope.clubId = $stateParams.Id - 1;

})

.controller('ActivitiesCtrl', function($scope , getData){
	getData.getActivities(function(data){
		$scope.activitiesData = data;
	})
	getData.getClubs(function(data){
		$scope.clubsData = data;
	})

})

.controller('NewsCtrl', function($scope , getData){
	getData.getNews(function(data){
		$scope.newsData = data;
	})

})

.controller('NoticesCtrl', function($scope , getData){
	getData.getNotices(function(data){
		$scope.noticesData = data;
	})

	getData.getClubs(function(data){
		$scope.clubsData = data;
	})


})





;

