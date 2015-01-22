'use strict';

/* App */
var app = angular.module('lastFmApp', [
	'ui.router',
	'Menu',
	"userCard",
	'scrobbledTracks',
	'topArtists'
	]);

/* Routes */
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/recenttracks");
  	$stateProvider
    	.state('home', {
	     	url: "/",
	      	templateUrl: "templates/recenttracks.html",
	      	controller:'scrobbledCtrl'
    	})
    	.state('recenttracks', {
	      	url: "/recenttracks",
	      	templateUrl: "templates/recenttracks.html",
      		controller:'scrobbledCtrl'
    	})
	    .state('topartists', {
		    url: "/topartists",
		    templateUrl: "templates/topartists.html",
		    controller:'topArtistsCtrl'
    	})
});

/* Modules */
var Menu = angular.module('Menu', []);
var userCard = angular.module('userCard', []);
var scrobbledTracks = angular.module('scrobbledTracks', []);
var topArtists = angular.module('topArtists', []);




