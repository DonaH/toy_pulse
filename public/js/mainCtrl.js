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

			var query = document.getElementById("search_term").value
			console.log(query)

      $http({
          url: "https://bingapis.azure-api.net/api/v5/images/search?q="+query+"&count=9&offset=0&mkt=en-us&safeSearch=Moderate",
          headers:{"Ocp-Apim-Subscription-Key": "55b49e7ae0a746b6815daf77e691d04e"},
          type: "GET"
      })
      .then(function(result) {
          console.log(result.data.value);
					vm.photos = result.data.value
      })
			var query = ""
    }


	}
})()
