angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  
  $scope.data = {};

  $scope.getLinks = function() {
    Links.get().then(function(resp) {	
  	  $scope.data.links = resp.data;    
    });
  };

  $scope.getLinks();

});
