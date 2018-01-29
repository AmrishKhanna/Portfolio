var myPortfolio = angular.module('Portfolio', ['ngRoute']);

myPortfolio.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl:"views/home.html",
		controller: 'DataController'
	})
	.when("/skills", {
		templateUrl:"views/skills.html",
		controller: 'SkillController'
	})
	.when("/projects", {
		templateUrl:"views/projects.html",
		controller: 'ProjectController'
	})
	.when("/contact", {
		templateUrl:"views/contact.html"
	})
	.otherwise({redirectTo:'/'});	
});

//myPortfolio.get('views/:name', function(request, response) {
//var name = request.params.name;
////response.render('views/' + name);
//});
