'use strict';

/* App */
var app = angular.module('lastFmApp', [
	'ngRoute',
	'scrobbledTracks',
	'topArtists'
	]);

/* Routes */
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/recenttracks.html', controller:'scrobbledCtrl'})
		.when('/recenttracks', {templateUrl: 'partials/recenttracks.html', controller:'scrobbledCtrl'})
		.when('/topartists', {templateUrl: 'partials/topartists.html', controller:'topArtistsCtrl'})
		.otherwise('/', {redirectTo: '/'});
});

/* Constants*/
app.constant('settings', {
    User: 'PatBateman75',
    apiKey: '5fac3e93c05bc557b45e4ab4843b7882'
});

/* Modules */
var scrobbledTracks = angular.module('scrobbledTracks', []);
var topArtists = angular.module('topArtists', []);

/* Controler du module 'scrobbledTracks' */
scrobbledTracks.controller('scrobbledCtrl', ['settings', '$scope', '$http',
	function (settings, $scope, $http) {
		$scope.loading = true;
		$http.get('http://ws.audioscrobbler.com/2.0/?format=json&method=user.getrecenttracks&user='+settings.User+'&api_key='+settings.apiKey+'').success(function(data) {
				$scope.loading = false;
				$scope.user = data.User;
		    	$scope.tracks = data['recenttracks']['track'];
	    		$scope.images = data['recenttracks']['track']['images'];
	    		if (!($scope.images)) $('.js-track-img').remove();
    		});
	}
]);

/* Controler du module 'topArtists' */
topArtists.controller('topArtistsCtrl', ['settings', '$scope', '$http',
	function (settings, $scope, $http) {
		$scope.loading = true;
		$http.get('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user='+settings.User+'&api_key='+settings.apiKey+'&format=json').success(function(data) {
				$scope.loading = false;
				$scope.user = data.User;
		    	$scope.artists = data['topartists']['artist'];
	    		$scope.images = data['topartists']['artist']['images'];
	    		if (!($scope.images)) $('.js-track-img').remove();
    		});
	}
]);





