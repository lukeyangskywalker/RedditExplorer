(function(){
var app = angular.module('RedditExplorer', ['ionic'])

app.controller('RedditCtrl', function($http, $scope){

	$scope.stories = [];
	$http.get('https://www.reddit.com/r/android/new/.json')
	.success(function(response) {
		angular.forEach(response.data.children, function(child){
			$scope.stories.push(child.data);
		});
	});
});
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
}());