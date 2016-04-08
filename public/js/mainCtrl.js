(function(){
	angular.module('toyPulse')
		.controller('MainController', MainController)

	MainController.$inject = ['userService', '$state', '$http', '$window', 'auth']
  // $httpProvider.interceptors.push('authInterceptor')

	function MainController(userService, $state, $http, $window, auth){
		var vm = this
		vm.title = "Angular is working on the backend"
		vm.newUser = {} // create new user data placeholder

		userService.index().success(function(results){
			vm.users = results
		})

		vm.create = function(){
			// run the userService create method here.
			userService.create(vm.newUser).success(function(response){
				$state.go('listing', {id: response.user._id})
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
		vm.choosePhoto = function(photo){
			console.log(photo)
			vm.chosen= photo.thumbnailUrl
			var img_url = vm.chosen
			$window.localStorage.setItem('img_url', img_url)
		}
		vm.gotoComment = function(){
			$state.go('star')
			// Load the img in localStorage to the next page: add_star.html
			// window.onload = function() {
			// 	var picutre = localStorage.getItem('img_url')
			// 	var image = document.createElement('img');
			// 	image.src = pictures;
			// 	document.body.appendChild(image)
			// }
		}

		vm.loadTempPhoto = function(){
			$window.localStorage.getItem('img_url');
			   var picture = localStorage.getItem('img_url');
			   var image = document.createElement('img');
			   image.src = picture;
			   document.body.appendChild(image);
				 $window.localStorage.setItem('img_url', null)
		}

	vm.toyReview = {
		img_url: vm.img_url,
	  toy_name: vm.toy_name,
	  reviewer: vm.reviewer,     // This is child's name as the kid is the user
	  date: vm.date,
	  comment: vm.comment
	}


	vm.createReview = function(){
		console.log("TESTIIIIII")
		console.log(vm.toy_name)
		console.log(vm.toyReview)
		userService.review({
			img_url: vm.img_url,
			toy_name: vm.toy_name,
			reviewer: vm.reviewer,     // This is child's name as the kid is the user
			date: vm.date,
			comment: vm.comment
		}).success(function(results){
			vm.review = results
		})
	}

	}
})()
