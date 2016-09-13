function menuCtrl($scope, lastfmApiFactory) {

  let {
    user
  } = lastfmApiFactory;

  $scope.user = user;
  $scope.visible = true;
  $scope.toggle = function() {
    $scope.visible = !$scope.visible;
  };
}

export { menuCtrl };
