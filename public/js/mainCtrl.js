(function(){
	angular.module('toyPulse')
		.controller('MainController', MainController)

	MainController.$inject = ['userService', '$state', '$http', '$window', 'auth', '$stateParams']
  // $httpProvider.interceptors.push('authInterceptor')

	function MainController(userService, $state, $http, $window, auth, $stateParams){
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

      // $http({
      //     url: "https://bingapis.azure-api.net/api/v5/images/search?q="+query+"&count=12&offset=0&mkt=en-us&safeSearch=Moderate",
      //     headers:{"Ocp-Apim-Subscription-Key": "55b49e7ae0a746b6815daf77e691d04e"},
      //     type: "GET"
      // })

			$http({
					url: "https://api.cognitive.microsoft.com/bing/v5.0/images/search?q="+query+"&count=12&offset=0&mkt=en-us&safeSearch=Moderate",
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
		// vm.gotoComment = function(){
		// 	$state.go('review')
		// 	// Load the img in localStorage to the next page: add_star.html
		// 	// window.onload = function() {
		// 	// 	var picutre = localStorage.getItem('img_url')
		// 	// 	var image = document.createElement('img');
		// 	// 	image.src = pictures;
		// 	// 	document.body.appendChild(image)
		// 	// }
		// }

		// vm.loadTempPhoto = function(){
		// 	$window.localStorage.getItem('img_url');
		//    var picture = localStorage.getItem('img_url');
		//    var image = document.createElement('img');
		//    image.src = picture;
		//    document.body.appendChild(image);
		// 	//  localStorage.clear();
		// }

	vm.createReview = function(){
		vm.review = {
			img_url: $window.localStorage.getItem('img_url'),
		  toy_name: vm.toy_name,
		  reviewer: vm.reviewer,     // This is child's name as the kid is the user
		  date: vm.date,
		  comment: vm.comment,
			boogerlist: vm.isBooger
		}
		console.log("TESTIIIIII")
		console.log(vm.toy_name)
		console.log(vm.review)
		userService.review(vm.review).success(function(results){
			console.log(results)

				$state.go('listing')
		})
		//
		// // $state.reload()
		// window.location.href = $state.href('state.name', {param: 'value'});
		// console.log("pass the window.location.href")
		// // reload the page
		// window.location.reload();

	  localStorage.clear();
	}

	vm.destroyReview = function(id, index){
		console.log("pass destroy review")
		userService.destroy(id).success(function(response){
			console.log(response)
			vm.reviews.splice(index, 1)
		})
		console.log(id)

	}


	}
})()
