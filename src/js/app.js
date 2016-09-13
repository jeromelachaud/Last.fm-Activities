// Import external librairies
import angular from 'angular';
import angularRouter from 'angular-ui-router';
import GeoPattern from 'geopattern';

// Import components
import { lastfmApiFactory } from './factories/lastfmApiFactory';
import { scrobbledCtrl } from './controllers/scrobbledCtrl';
import { topArtistsCtrl } from './controllers/topArtistsCtrl';
import { usercardCtrl } from './controllers/usercardCtrl';
import { menuCtrl } from './controllers/menuCtrl';
import { chartsCtrl } from './controllers/chartsCtrl';

// Background generation
const pattern = GeoPattern.generate('lastFmActivities', {
  color: '#B90000',
  generator: 'plusSigns'
});
let backgroundImg = pattern.toDataUrl();
document.body.style.backgroundImage = backgroundImg;

// App init
const app = angular.module('lastFmApp', [angularRouter]);
app.factory('lastfmApiFactory', [lastfmApiFactory]);
app.controller('scrobbledCtrl', ['$scope', '$http', 'lastfmApiFactory', scrobbledCtrl]);
app.controller('topArtistsCtrl', ['$scope', '$http', 'lastfmApiFactory', topArtistsCtrl]);
app.controller('usercardCtrl', ['$scope', '$http', 'lastfmApiFactory', usercardCtrl]);
app.controller('menuCtrl', ['$scope', 'lastfmApiFactory', menuCtrl]);
app.controller('chartsCtrl', ['$scope', 'lastfmApiFactory', chartsCtrl]);


// Routes
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
    })
    .state('charts', {
      url: '/charts',
      templateUrl: './templates/charts.html',
      controller: chartsCtrl
    });
});


// Directives
app.directive('menu', function(){
  return {
    restrict: 'E',
    templateUrl:'./templates/menu.html'
  };
});
app.directive('loading', function(){
  return {
    restrict: 'E',
    templateUrl:'./templates/loading.html'
  };
});
