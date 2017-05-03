angular.module('enrutamiento', ['ngRoute'])
	   //Configurando el enrutamiento
	   //Recibe una funcion con un parametro especial llamado $routeProvider	
      .config(function($routeProvider, $locationProvider){
      		//Cuando algo pase, $routerProvider.when()
      		//Segun la ruta a la que acceda, que template voy a utilizar y que controlador
      		//las Plantillas deben estar en un folder aparte, ejemplo paginas
      		$routeProvider
      		.when('/', {
      			templateUrl:'paginas/inicio.html',
      			controller: 'MainController'
      		})
      		//Por cada ruta, un template y un controlador
      		.when('/contactenos', {
      			templateUrl:'paginas/contactenos.html',
      			controller: 'ContactenosController'
      		})
      		.when('/nosotros', {
      			templateUrl:'paginas/nosotros.html',
      			controller: 'NosotrosController'
      		})
      		//Si no encuentra la ruta, redireccione a la ruta del inicio o home
      		.otherwise({
      			redirectTo:'/'
      		});

      		$locationProvider.html5Mode(true);
      })
      //Definiendo los controladores
      .controller('MainController', function($scope){
      		$scope.texto = "Hola mundo!";
      })
      .controller('ContactenosController', function($scope){
      		$scope.texto = "Hola contactenos!";
      })
      .controller('NosotrosController', function($scope){
      		$scope.texto = "Hola nosotros!";
      });

 