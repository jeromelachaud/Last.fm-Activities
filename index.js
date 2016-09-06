import angular from 'angular';
import angularRouter from 'angular-ui-router';
import Trianglify from 'Trianglify';

import { lastfmApiFactory } from './js/lastfmApiFactory';
import { scrobbledCtrl } from './js/scrobbledCtrl';
import { topArtistsCtrl } from './js/topArtistsCtrl';
import { usercardCtrl } from './js/usercardCtrl';
import { MenuCtrl } from './js/MenuCtrl';

const pattern = Trianglify({
  width: window.innerWidth,
  height: 25000,
  cell_size: 75,
  x_colors: 'YlOrRd'
});

let backgroundImg = pattern.png();
document.body.style.backgroundImage = 'url("'+backgroundImg+'")';

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

// Directives
app.directive('menu', function(){
  return {
    restrict: 'E',
    templateUrl:'/templates/menu.html'
  };
});

app.directive('loading', function(){
  return {
    restrict: 'E',
    templateUrl:'/templates/loading.html'
  };
});
