function usercardCtrl($scope, $http, lastfmApiFactory) {

  let {
    baseUrl,
    user,
    apiKey
  } = lastfmApiFactory;

  let lastfmApiUrl = `${baseUrl}&method=user.getinfo&user=${user}&api_key=${apiKey}`;

  $scope.loading = true;
  $http.get(lastfmApiUrl)
  .success(function(data) {
    $scope.loading = false;
    $scope.user = data['user'];
    $scope.image = data['image'];
  });
}

export { usercardCtrl };
