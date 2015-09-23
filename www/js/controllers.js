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

.controller('ActivitiesCtrl', function($scope , getData){
	getData.getActivities(function(data){
		$scope.activitiesData = data;
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

})





;

