var app = angular.module('myApp', []).config(function ($httpProvider){  
    $httpProvider.interceptors.push(testInterceptor);  
}); 
app.controller('myCtrl', function($scope, $http) {
    $scope.login = function(){
    	var req = {
			 method: 'POST',
			 url: '/login',
			 headers: {
			   'Content-Type': 'application/json'
			 },
			 data: { uname: $scope.uname,pass:$scope.pass }
		};
		$http(req).then(function(response){
			if(response.data.status == 1){
				window.location.replace('/home');
			}
		});
    }
}); 