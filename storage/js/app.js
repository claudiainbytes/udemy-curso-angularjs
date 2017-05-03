//Declaramos nombre modulo, y dependencias vacias o dependencias para pasar un servicio
//Como estamos trabajando con localStorage y sessionStorage invocamos ngStorage
angular.module('localStorage', ['ngStorage'])

      .controller('miControlador', function($scope, $localStorage){

            //$localStorage se define en el controlador
            //Almacena en el navegador como un recurso o dato local que esta permanente

            $scope.grabar = function(){
              $localStorage.texto = $scope.texto;
            }

            $scope.cargar = function(){
              $scope.texto = $localStorage.texto;
            }

      })
      .controller('miControlador2', function($scope, $sessionStorage){

            //$sessionStorage se define en el controlador
            //Almacena en el navegador como un recurso o dato local que esta dentro
            //del tiempo que dura la sesion

            $scope.grabar2 = function(){
              $sessionStorage.texto2 = $scope.texto2;
            }

            $scope.cargar2 = function(){
              $scope.texto2 = $sessionStorage.texto2;
            }

      })
      //Esta funcion se encarag de mostrar la visibilidad del contenido de la vista en Angular por medio
      // id=miControlador y la directiva ng-cloak
      .run(function(){
          $("#miControlador").css('visibility','visible').hide().fadeIn().removeClass('hidden');
          $("#miControlador2").css('visibility','visible').hide().fadeIn().removeClass('hidden');
      });
