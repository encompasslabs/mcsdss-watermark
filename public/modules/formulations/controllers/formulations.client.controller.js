(function() {
	'use strict';

	// Formulations controller
	angular
		.module('formulations')
		.controller('FormulationsController', FormulationsController);

	FormulationsController.$inject = ['$scope', '$state', '$stateParams', '$location', 'Authentication', 'Formulations'];

	function FormulationsController($scope, $state, $stateParams, $location, Authentication, Formulations) {
		$scope.authentication = Authentication;
		$scope.currentRoute = 'Formulations';
		$scope.currentUser = Authentication.user;
		$scope.create = create;
		$scope.remove = remove;
		$scope.update = update;
		$scope.find = find;
		$scope.findOne = findOne;
    // console.log($scope.currentRoute);

		// Create new Formulation
		function create() {
			// Create new Formulation object
			var formulation = new Formulations ({
				name: this.name
			});

			// Redirect after save
			formulation.$save(function(response) {
				// $location.path('formulations/' + response._id);
				$state.go('formulations', {}, {reload: true});

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}

		// Remove existing Formulation
		function remove(formulation) {
			if ( formulation ) {
				formulation.$remove();

				for (var i in $scope.formulations) {
					if ($scope.formulations [i] === formulation) {
						$scope.formulations.splice(i, 1);
					}
				}
			} else {
				$scope.formulation.$remove(function() {
					// $location.path('formulations');
					$state.go('formulations', {}, {reload: true});
				});
			}
		}

		// Update existing Formulation
		function update() {
			var formulation = $scope.formulation;

			formulation.$update(function() {
				// $location.path('formulations/' + formulation._id);
				$state.go('formulations.list', {}, {reload: true});
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}

		// Find a list of Formulations
		// $scope.find = function() {
		// 	$scope.formulations = Formulations.query();
		// };

		// Find a list of Formulations belonging to the current user.
		function find(user) {
			Formulations.query(function(formulations) {
				$scope.formulations = user ? formulations.filter(function(formulation) {
					return formulation.user._id === user._id;
				}) : formulations;
			});
		}

		// Find existing Formulation
		function findOne() {
			$scope.formulation = Formulations.get({
				formulationId: $stateParams.formulationId
			});
		}
	}
})();