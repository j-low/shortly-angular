angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(link) {
    $scope.loading = true;
  	Links.post(link).then(function(){	
      $scope.loading = false;
  	})
  };
});
