myPortfolio.controller('ProjectController',function($scope, $http)
{	
   $http({method: 'GET', url: '../../data/projects.json'})
   .then(
   function (success){
	   console.log(success);
	   $scope.projects = success.data;
   },
   function (error){
	   $scope.name="Error";
   });
});
