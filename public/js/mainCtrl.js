(function(){
	angular.module('toyPulse')
		.controller('MainController', MainController)

	MainController.$inject = ['userService', '$state', '$http']
  // $httpProvider.interceptors.push('authInterceptor')

	function MainController(userService, $state, $http, auth){
		var vm = this
		vm.title = "Angular is working on the backend"
		vm.newUser = {} // create new user data placeholder

		userService.index().success(function(results){
			vm.users = results
		})

		vm.create = function(){
			// run the userService create method here.
			userService.create(vm.newUser).success(function(response){
				$state.go('profile', {id: response.user._id})
			})
		}

		vm.destroy = function(id, index){
			userService.destroy(id).success(function(response){
				console.log(response)
				vm.users.splice(index, 1)
			})
		}

    vm.getPhotos = function(){
      console.log("let's get photos")

      $http({
          url: "https://bingapis.azure-api.net/api/v5/images/search?q=cats&count=9&offset=0&mkt=en-us&safeSearch=Moderate",
          headers:{"Ocp-Apim-Subscription-Key": "55b49e7ae0a746b6815daf77e691d04e"},
          type: "GET"
      })
      .then(function(result) {
          console.log(result.data);
					vm.photos = result.data
      })
    }

	}
})()


  function handleRequest(res){
    var token = res.data ? res.data.token : null;
    if (token){
      console.log('JWT:', token);
      // auth.saveToken(token);
    }
    self.message = res.data.message;
  }

  self.login = function() {
    user.login(self.email, self.password)
      .then(handleRequest, handleRequest)
  }

	



function userService($http){
  var self = this;

  self.login = function(name, password){
    return $http.post('api/authenticate', {
      name: name,
      password: password
    })
  }
}

function authService($window){
  var self = this;
  self.saveToken = function(token){
    $window.localStorage['jwtToken'] = token;
  }
}

function authInterceptor(auth){
  return {
    response: function(res){
      if(res.data.token){auth.saveToken(res.data.token)};
      return res;
    }
  }
}
