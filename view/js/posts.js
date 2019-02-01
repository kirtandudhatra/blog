var app = angular.module('myApp', []).config(function ($httpProvider){  
    $httpProvider.interceptors.push(testInterceptor);  
}); 
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
			if(response.data.status == 1){
				window.location.replace('/home');
			}
		});
	}

	$scope.logout = function(){
		var req = {
			 method: 'GET',
			 url: '/logout',
		};
		$http(req).then(function(response){
			if(response.data.status == 1){
				window.location.replace('/');
			}
		});
	}

});