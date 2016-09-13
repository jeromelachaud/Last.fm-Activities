import angular from 'angular';
import angularRouter from 'angular-ui-router';
import GeoPattern from 'GeoPattern';

import { lastfmApiFactory } from './lastfmApiFactory';
import { scrobbledCtrl } from './scrobbledCtrl';
import { topArtistsCtrl } from './topArtistsCtrl';
import { usercardCtrl } from './usercardCtrl';
import { MenuCtrl } from './MenuCtrl';

//Background generation
const pattern = GeoPattern.generate('lastFmActivities', {
  color: '#B90000',
  generator: 'plusSigns'
});
let backgroundImg = pattern.toDataUrl();
document.body.style.backgroundImage = backgroundImg;

const app = angular.module('lastFmApp', [angularRouter]);

app.factory('lastfmApiFactory', [lastfmApiFactory]);
app.controller('scrobbledCtrl', ['$scope', '$http', 'lastfmApiFactory', scrobbledCtrl]);
app.controller('topArtistsCtrl', ['$scope', '$http', 'lastfmApiFactory', topArtistsCtrl]);
app.controller('usercardCtrl', ['$scope', '$http', 'lastfmApiFactory', usercardCtrl]);
app.controller('MenuCtrl', ['$scope', 'lastfmApiFactory', MenuCtrl]);


/* Routes */
app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('recenttracks');
  $stateProvider
    .state('home', {
      url: '/#',
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
    templateUrl:'/dist/templates/menu.html'
  };
});

app.directive('loading', function(){
  return {
    restrict: 'E',
    templateUrl:'/dist/templates/loading.html'
  };
});
