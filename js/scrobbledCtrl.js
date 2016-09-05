function scrobbledCtrl($scope, $http, lastfmApiFactory) {

  let {
    baseUrl,
    user,
    apiKey
  } = lastfmApiFactory;

  let lastfmApiUrl = `${baseUrl}&method=user.getrecenttracks&user=${user}&api_key${apiKey}`;

  $scope.loading = true;
  $http.get(lastfmApiUrl)
  .success(function(data) {
    $scope.loading = false;
    $scope.tracks = data['recenttracks']['track'];
    $scope.images = data['recenttracks']['track']['images'];
    if (!($scope.images)) {
      document.getElementById('js-track-img').remove();
    }
  });
}

export { scrobbledCtrl };
