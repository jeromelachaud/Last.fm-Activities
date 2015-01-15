'use strict';

/* App */
var app = angular.module('lastFmApp', [
	'scrobbledTracks'
	]);

/* Constants*/
app.constant('config', {
    User: 'PatBateman75',
    apiKey: '5fac3e93c05bc557b45e4ab4843b7882'
});

/* Module */
var scrobbledTracks = angular.module('scrobbledTracks', []);

/* Controler du module 'scrobbledTracks' */
scrobbledTracks.controller('scrobbledCtrl', ['config', '$scope', '$http',
	function (config, $scope, $http) {
		$scope.loading = true;
		$http.get('http://ws.audioscrobbler.com/2.0/?format=json&method=user.getrecenttracks&user='+config.User+'&api_key='+config.apiKey+'').success(function(data) {
				$scope.loading = false;
				$scope.user = config.User;
		    	$scope.tracks = data['recenttracks']['track'];
	    		$scope.images = data['recenttracks']['track']['images'];
	    		if (!($scope.images)) $('.js-track-img').remove();
    		});
	}
]);