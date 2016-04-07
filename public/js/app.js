(function(){
  angular.module('toyPulse',['ui.router'])

    .config(function($httpProvider, $stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/')

      // my established routes
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../partials/home.html'
        })
        .state('newUser', {
          url: '/new',
          templateUrl: '../partials/new.html',
          controller: 'MainController as main'
        })
        .state('login', {
          url: '/login',
          templateUrl: '../partials/login.html',
          controller: 'MainController as main'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: '../partials/profile.html',
          controller: 'MainController as main'
        })
        .state('review', {
          url: '/review',
          templateUrl: '../partials/add_review.html',
          controller: 'MainController as main'
        })
        .state('star', {
          url: '/star',
          templateUrl: '../partials/add_star.html',
          controller: 'MainController as main'
        })
        .state('booger', {
          url: '/booger',
          templateUrl: '../partials/add_booger.html',
          controller: 'MainController as main'
        })
        .state('listing', {
          url: '/listing',
          templateUrl: '../partials/listing.html',
          controller: 'MainController as main'
        })
        .state('logoff', {
          url: '/logoff',
          templateUrl: '../partials/logoff.html',
          controller: 'MainController as main'
        })
        .state('yourreview', {
          url: '/yourreview',
          templateUrl: '../partials/your_review.html',
          controller: 'MainController as main'
        })
      })
})()
