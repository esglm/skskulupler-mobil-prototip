angular.module('starter.controllers', [])


.controller('AppCtrl', function($scope) {
  $scope.mainData = {};

  $scope.exitMyApp = function(){
  	ionic.Platform.exitApp(); 
  };

})

.controller('MainCtrl', function($scope , getData) {
	getData.getActivities(function(data){
		$scope.activitiesData = data;
	})
	getData.getNews(function(data){
		$scope.newsData = data;
	})
	getData.getNotices(function(data){
		$scope.noticesData = data;
	})
	getData.getClubs(function(data){
		$scope.clubsData = data;
	})



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

.controller('ActivitieCtrl', function($scope , $stateParams , getData){
	getData.getActivities(function(data){
		$scope.activitiesData = data;
	})
	getData.getClubs(function(data){
		$scope.clubsData = data;
	})

	$scope.activitieId = $stateParams.Id - 1;

})

.controller('NewsCtrl', function($scope , getData){
	getData.getNews(function(data){
		$scope.newsData = data;
	})

})

.controller('NewsItemCtrl', function($scope , $stateParams , getData){
	getData.getNews(function(data){
		$scope.newsData = data;
	})

	$scope.newsItemId = $stateParams.Id - 1;

})

.controller('NoticesCtrl', function($scope , getData){
	getData.getNotices(function(data){
		$scope.noticesData = data;
	})

	getData.getClubs(function(data){
		$scope.clubsData = data;
	})


})

.controller('NoticeCtrl', function($scope , $stateParams , getData){
	getData.getNotices(function(data){
		$scope.noticesData = data;
	})

	getData.getClubs(function(data){
		$scope.clubsData = data;
	})

	$scope.noticeId = $stateParams.Id - 1;

})







;

