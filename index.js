import angular from 'angular';
import angularRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import { lastfmApiFactory } from './js/lastfmApiFactory';
import { scrobbledCtrl } from './js/scrobbledCtrl';
import { topArtistsCtrl } from './js/topArtistsCtrl';
import { usercardCtrl } from './js/usercardCtrl';
import { MenuCtrl } from './js/MenuCtrl';

const app = angular.module('lastFmApp', [angularRouter]);

app.factory('lastfmApiFactory', [lastfmApiFactory]);
app.controller('scrobbledCtrl', ['$scope', '$http', 'lastfmApiFactory', scrobbledCtrl]);
app.controller('topArtistsCtrl', ['$scope', '$http', 'lastfmApiFactory', topArtistsCtrl]);
app.controller('usercardCtrl', ['$scope', '$http', 'lastfmApiFactory', usercardCtrl]);
app.controller('MenuCtrl', ['$scope', 'lastfmApiFactory', MenuCtrl]);


/* Routes */
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/recenttracks');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './templates/recenttracks.html',
      controller: scrobbledCtrl
    })
    .state('recenttracks', {
      url: '/recenttracks',
      templateUrl: './templates/recenttracks.html',
      controller: scrobbledCtrl
    })
    .state('topartists', {
      url: '/topartists',
      templateUrl: './templates/topartists.html',
      controller: topArtistsCtrl
    });
});
