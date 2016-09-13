import moment from 'moment';

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
    $scope.date = data['user'].registered['#text'];
    $scope.formatedDate = moment.unix($scope.date).format('MM/DD/YYYY');
  });
}

export { usercardCtrl };
