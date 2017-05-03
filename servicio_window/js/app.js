//Declaramos nombre modulo, y dependencias vacias o dependencias para pasar un servicio
//Como se esta definendo se pasan las dependencias vacias
angular.module('miModulo', [])

      //El servicio $window lo cargamos en el controlador
      .controller('WindowController', function($scope, $window){

            //$window es un servicio que permite acceso al objeto ventaa en JS

            $scope.mostrarAlerta = function(mensaje){
              $window.alert(mensaje);
            }

            $scope.mostrarPrompt = function(){
              var nombre = $window.prompt('Cual es tu nombre?');
              $window.alert("Hola, " + nombre);
            }

      })

      //Esta funcion se encarag de mostrar la visibilidad del contenido de la vista en Angular por medio
      // id=WindowController y la directiva ng-cloak
      .run(function(){
          $("#WindowController").css('visibility','visible').hide().fadeIn().removeClass('hidden');
      });
