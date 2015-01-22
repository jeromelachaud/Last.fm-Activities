/* Controleur du module 'Menu' */
Menu.controller('MenuCtrl', ['settings', '$scope',
	function (settings, $scope) {
		$scope.user = settings.User;
	 	$scope.visible = true;
	 	$scope.toggle = function() {
			$scope.visible = !$scope.visible;
		};

	}
]);

/* Controleur du module 'userInfos' */
userCard.controller('usercardCtrl', ['settings', '$scope', '$http',
	function (settings, $scope, $http) {
		$http.get('http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user='+settings.User+'&api_key='+settings.apiKey+'&format=json').success(function(data) {
				$scope.user = data['user'];
				$scope.image = data['image'];
    		});
	}
]);

/* Controleur du module 'scrobbledTracks' */
scrobbledTracks.controller('scrobbledCtrl', ['settings', '$scope', '$http',
	function (settings, $scope, $http) {
		$scope.loading = true;
		$http.get('http://ws.audioscrobbler.com/2.0/?format=json&method=user.getrecenttracks&user='+settings.User+'&api_key='+settings.apiKey+'').success(function(data) {
				$scope.loading = false;
				$scope.tracks = data['recenttracks']['track'];
	    		$scope.images = data['recenttracks']['track']['images'];
	    		if (!($scope.images)) $('.js-track-img').remove();
    		});
	}
]);

/* Controleur du module 'topArtists' */
topArtists.controller('topArtistsCtrl', ['settings', '$scope', '$http',
	function (settings, $scope, $http) {
		$scope.loading = true;
		$http.get('http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user='+settings.User+'&api_key='+settings.apiKey+'&format=json').success(function(data) {
				$scope.loading = false;
		    	$scope.artists = data['topartists']['artist'];
	    		$scope.images = data['topartists']['artist']['images'];
	    		if (!($scope.images)) $('.js-track-img').remove();
    		});
	}
]);