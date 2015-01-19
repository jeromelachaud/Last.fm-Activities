'use strict';

/* App */
var app = angular.module('lastFmApp', [
	'ui.router',
	'Menu',
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

/* Constants*/
app.constant('settings', {
    User: 'PatBateman75',
    apiKey: '5fac3e93c05bc557b45e4ab4843b7882'
});

/* Modules */
var Menu = angular.module('Menu', []);
var scrobbledTracks = angular.module('scrobbledTracks', []);
var topArtists = angular.module('topArtists', []);





