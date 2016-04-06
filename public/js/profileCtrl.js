(function(){
	angular.module('toyPulse')
		.controller('ProfileController', ProfileController)

	ProfileController.$inject = ['userService', '$stateParams']

	function ProfileController(userService, $stateParams){
		var vm = this
		vm.title = "This is the PROFILE controller"

		userService.show($stateParams.id).success(function(results){
			vm.user = results
			console.log(vm.user)
		})

		vm.edit = function(){
			vm.editing = true
			vm.editingUser = {
        email: vm.user.email,
        parent_name: vm.user.parent_name,
        child: vm.user.child,
        password: vm.user.password
			}
		}

		vm.update = function(){
			// patch request will go here.
			userService.update($stateParams.id, vm.editingUser).success(function(response){
				vm.editing = false
				vm.user = response.user
			})
		}
	}
})()
