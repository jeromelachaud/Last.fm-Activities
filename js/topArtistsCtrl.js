function topArtistsCtrl($scope, $http, lastfmApiFactory) {

  let {
    baseUrl,
    user,
    apiKey
  } = lastfmApiFactory;

  let lastfmApiUrl = `${baseUrl}&method=user.gettopartists&user=${user}&api_key=${apiKey}`;

  $scope.loading = true;
  $http.get(lastfmApiUrl)
  .success(function(data) {
    $scope.loading = false;
    $scope.artists = data['topartists']['artist'];
    $scope.images = data['topartists']['artist']['images'];
    if (!($scope.images)) {
      document.getElementById('js-track-img').remove();
    }
  });
}

export { topArtistsCtrl };
