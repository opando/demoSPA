var app = angular.module("personaWebApp", []);

app.controller("personaController",['$scope','$http',
	function($scope,$http){

		$scope.crearPersona = function(persona){

		$http.post('/personas',persona)
		.success(function(data, status, headers, config){
			$scope.todos.push(data);

		})	
		.error(function(data,status,headers,config){

			   console.log("ERROR!!");
	      console.log("data : " +data);
	      console.log("status :" + status);
	      console.log("headers :" + headers);

		});
			$scope.persona={}


		}

		$scope.MostrarPersonas = function(){

		$http.get('/personas')
		.success(function(data, status, headers, config){
			$scope.personalista = data;
		})	
		.error(function(data,status,headers,config){

			   console.log("ERROR!!");
	      console.log("data : " +data);
	      console.log("status :" + status);
	      console.log("headers :" + headers);

		});



		}




$scope.todos = [{
        text: 'Manuel'
    } ];

   





$scope.opteneropcion = function(){
							
								var taboptionsin="in active"
							$scope.taboptions =taboptionsin;


					}






}]);