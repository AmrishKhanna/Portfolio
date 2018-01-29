myPortfolio.controller('SkillController',function($scope, $http)
{	
   $http({method: 'GET', url: '../../data/skills.json'})
   .then(
   function (success){
	   console.log(success);
	   $scope.certi = success.data.certi;
	   $scope.skills = success.data.skills;
   },
   function (error){
	   $scope.name="Error";
   });
});
