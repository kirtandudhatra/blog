var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {

	var req = {
			 method: 'GET',
			 url: '/posts',
		};
		$http(req).then(function(response){
			$scope.posts = response.data;
			//console.log($scope.posts);
		});

	$scope.createPost = function(){
		var req = {
			 method: 'POST',
			 url: '/createpost',
			 headers: {
			   'Content-Type': 'application/json'
			 },
			 data: { title: $scope.t,body:$scope.b }
		};
		$http(req).then(function(response){
			if(response.data.status == 0){
				window.location.replace('/home');
			}
		});
	}

});