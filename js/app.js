'use strict';

/* App */
var app = angular.module('lastFmApp', [
	'ngRoute',
	'Menu',
	'scrobbledTracks',
	'topArtists'
	]);

/* Routes */
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'templates/recenttracks.html', controller:'scrobbledCtrl'})
		.when('/recenttracks', {templateUrl: 'templates/recenttracks.html', controller:'scrobbledCtrl'})
		.when('/topartists', {templateUrl: 'templates/topartists.html', controller:'topArtistsCtrl'})
		.otherwise({redirectTo: '/'})
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





