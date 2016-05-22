function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ username }}</span>',
			'</div>'
		].join(''),
		restrict: 'E', 
		controller: function($scope){
			var oldName=$scope.username
			$scope.username = oldName.toLowerCase()
		},
		controllerAs: 'ctrl',
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);