var app = angular.module('myApp', []);
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
			console.log(response.data.status);
		});
    }
});