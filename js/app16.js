angular.module('filtros', [])
       .controller('FiltrosController', function($scope){
        //definir propiedad
        $scope.hoy = new Date();

        $scope.planetas = ['mercurio','venus','tierra','marte','jupiter','urano','neptuno','pluton'];
      
        $scope.personas = [
                            {'nombre':'Ana', 'edad':20, 'pais':'Colombia'},
                            {'nombre':'Pedro', 'edad':26, 'pais':'España'},
                            {'nombre':'Jose', 'edad':14, 'pais':'Colombia'}
                          ];
      })
       //defino el nombre del filtro como suspensivos
       // Parametro 1. nombre del filtro
       // Parametro 2. funcion, lo que retornara el filtro
       .filter('suspensivos', function(){
          return function(palabra){
            return palabra + "...";
          }
       })
       .filter('primeraMayusculas', function(){
          return function(palabra){
            return palabra[0].toUpperCase() + palabra.slice(1);
          }
       });
      

//Para obtener un modulo definido previamente, contador
//Retorna un objeto que es el modulo, sin el segundo argumento es decir, sin las dependencias
angular.module('filtros');
