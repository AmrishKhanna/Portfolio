myPortfolio.controller('DataController',function($scope, $http)
{	
   $http({method: 'GET', url: '../../data/myInfo.json'})
   .then(
   function (success){
	   console.log(success);
	   var wrk = [];
	   var edu = [];
	   $scope.name=success.data.name;
	   $scope.position=success.data.position;
	   $scope.employer=success.data.employer;
	   $scope.location=success.data.location;
	   $scope.email=success.data.email;
	   $scope.phno=success.data.phno;
	   $scope.address=success.data.address;
	   $scope.linkedin=success.data.linkedin;
	   $scope.summary=success.data.summary;
	 
	   for(i=0; i < success.data.education.length; i++)
	   {
		   edu.push(success.data.education[i]);
	   }
	   $scope.education=edu;
	   
	   for(j=0; j < success.data.work.length; j++)
	   {
		   wrk.push(success.data.work[j]);
	   }
	   $scope.work=wrk;
   },
   function (error){
	   $scope.name="Error";
   });
});

$(document).ready(function(){
     $(".button-collapse").sideNav();
	 $('.parallax').parallax();
});