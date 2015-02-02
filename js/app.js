'use strict';

/* App */
var app = angular.module('lastFmApp', ['ui.router']);

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