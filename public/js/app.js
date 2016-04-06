(function(){
  angular.module('toyPulse',['ui.router'])
    .factory('authInterceptor', authInterceptor)
    .service('user', userService)
    .service('auth', authService)

    .config(function($httpProvider, $stateProvider, $urlRouterProvider){


      $urlRouterProvider.otherwise('/')

      // my established routes
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'partials/home.html'
        })
        .state('newUser', {
          url: '/new',
          templateUrl: 'partials/new.html',
          controller: 'MainController as main'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'partials/login.html',
          controller: 'MainController as main'
        })
        .state('profile', {
          url: '/users/:id',
          templateUrl: 'partials/profile.html',
          controller: 'DetailController as detail'
        })
      })
})()
