app.directive('menu', function(){
	return {
		restrict: 'E',
		templateUrl:"/templates/menu.html"
	};
});

app.directive('loading', function(){
	return {
		restrict: 'E',
		templateUrl:"/templates/loading.html"
	};
});