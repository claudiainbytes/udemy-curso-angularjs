//Declaramos nombre modulo, y dependencias vacias o dependencias para pasar un servicio
//Como se esta definendo se pasan las dependencias vacias
angular.module('miModulo', [])

      //El servicio $interval lo cargamos en el controlador
      .controller('IntervalController', function($scope, $interval){

            //$interval  es un servicio  que hace un llamado a una funcion un numero de veces
            //DESPUES DE una cantidad de segundos

            $scope.contador = 0;
            $scope.incrementarContador = function(){
              $scope.contador += 2;
            }

            $interval($scope.incrementarContador, 1000, 5);

      })
      .controller('TimeoutController', function($scope, $timeout){

            //$timeout  es un servicio  que hace un llamado a una funcion solo una vez
            //DESPUES DE una cantidad de segundos

            $scope.contador2 = 0;
            $scope.incrementarContador2 = function(){
              $scope.contador2 += 2;
            }

            $timeout($scope.incrementarContador2, 1000);

      })
      //Esta funcion se encarag de mostrar la visibilidad del contenido de la vista en Angular por medio
      // id=IntervalController y la directiva ng-cloak
      .run(function(){
          $("#IntervalController").css('visibility','visible').hide().fadeIn().removeClass('hidden');
          $("#TimeoutController").css('visibility','visible').hide().fadeIn().removeClass('hidden');
      });
