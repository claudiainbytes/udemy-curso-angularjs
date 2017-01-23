angular.module('miApp', [])
       .run(function($rootScope){

         //run()
         //Corre al principio de la aplicacion como si fuese el main de la aplicacion
         //Accede al root scope o scope raiz
         $rootScope.propiedadRaiz = "Scope Raiz";

       })
       .controller('controladorExterno', function($scope){

        //definir propiedad controlador externo
        $scope.propiedadExterna = "Scope Externo";

      })
      .controller('controladorInterno', function($scope){

        //definir propiedad controlador interno
        $scope.propiedadInterna = "Scope Interno";

        //Definiendo el mensaje que mostrara la propiedad del scope raiz
        $scope.mensaje = "Desde este $scope podemos ver: " + $scope.propiedadRaiz + " y " + $scope.propiedadExterna + " y " +  $scope.propiedadInterna;

      });

//Para obtener un modulo definido previamente, contador
//Retorna un objeto que es el modulo, sin el segundo argumento es decir, sin las dependencias
angular.module('miApp');
