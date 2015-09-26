angular.module('starter', ['ionic', 'starter.controllers'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {


    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if (window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    cordova.plugins.Keyboard.disableScroll(true);

  }
  if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.factory("getData", function($http) {
    var clubsUrl      = 'jsonfortest/clubs.json',
        activitiesUrl = 'jsonfortest/activities.json',
        newsUrl       = 'jsonfortest/news.json',
        noticesUrl    = 'jsonfortest/notices.json';

    return {
        getClubs: function(success) {
            $http({
                url: clubsUrl,
                method: "GET"
            })
                .success(function(data) {
                    success(data);
                });
        },

        getActivities: function(success) {
            $http({
                url: activitiesUrl,
                method: "GET"
            })
                .success(function(data) {
                    success(data);
                });
        },

        getNews: function(success) {
            $http({
                url: newsUrl,
                method: "GET"
            })
                .success(function(data) {
                    success(data);
                });
        },

        getNotices: function(success) {
            $http({
                url: noticesUrl,
                method: "GET"
            })
                .success(function(data) {
                    success(data);
                });
        } 

    }
})

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
  
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.main', {
    url: '/main',
    views: {
      'menuContent': {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
      }
    }
  })

  .state('app.clubs', {
    url: '/clubs',
    views: {
      'menuContent': {
        templateUrl: 'templates/clubs.html',
        controller: 'ClubsCtrl'
      }
    }
  })

  .state('app.club', {
    url: '/clubs/:Id',
    views: {
      'menuContent': {
        templateUrl: 'templates/club.html',
        controller: 'ClubCtrl'
      }
    }
  })

  .state('app.activities', {
    url: '/activities',
    views: {
      'menuContent': {
        templateUrl: 'templates/activities.html',
        controller: 'ActivitiesCtrl'
      }
    }
  })

  .state('app.news', {
  url: '/news',
  views: {
    'menuContent': {
      templateUrl: 'templates/news.html',
      controller: 'NewsCtrl'
    }
  }
  })

  .state('app.notices', {
  url: '/notices',
  views: {
    'menuContent': {
      templateUrl: 'templates/notices.html',
      controller: 'NoticesCtrl'
    }
  }
  })

  .state('app.about', {
  url: '/about',
  views: {
    'menuContent': {
      templateUrl: 'templates/about.html'
    }
  }
  })
  
  .state('app.login', {
  url: '/login',
  views: {
    'menuContent': {
      templateUrl: 'templates/login.html'
    }
  }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');

})

.config(function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');

});
