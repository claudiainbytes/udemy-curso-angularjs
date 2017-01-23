angular.module('miModulo', [])
       .controller('PadreController', function($scope){
        //definir propiedad
        $scope.nombre = "Claudia";
      })
      .controller('HijoController', function($scope){
        //definir propiedad
        $scope.nombre = "Liliana";
      })
      .controller('PadreaController', function($scope){
       //definir propiedad
       //ya no es necesario pasar el scope
       //accedemos a la variable del controlador por medio de la palabra this
       this.nombre = "Liliana";
      })
      .controller('HijoaController', function($scope){
        //definir propiedad
        //ya no es necesario pasar el scope
        //accedemos a la variable del controlador por medio de la palabra this
       this.nombre = "Claudia";
      });

//Para obtener un modulo definido previamente, contador
//Retorna un objeto que es el modulo, sin el segundo argumento es decir, sin las dependencias
angular.module('miModulo');
