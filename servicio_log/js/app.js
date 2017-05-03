//Declaramos nombre modulo, y dependencias vacias o dependencias para pasar un servicio
//Como se esta definendo se pasan las dependencias vacias
angular.module('miModulo', [])

      //El servicio $log lo cargamos en el controlador
      .controller('LogController', function($scope, $log){

            //$log es un servicio muy util para mostrar mensajes en consola en el navegador o
            //mostrar un debug del código.

            //Puede mostrar diferentes mensajes en la consola del navegador como
            $log.log("Este es un mensaje LOG");
            $log.error("Este es un mensaje ERROR");
            $log.warn("Este es un mensaje WARNING");
            $log.info("Este es un mensaje INFORMACION");
            $log.debug("Este es un mensaje DEBUG");

      })
      //Esta funcion se encarag de mostrar la visibilidad del contenido de la vista en Angular por medio
      // id=LogController y la directiva ng-cloak
      .run(function(){
         $("#LogController").css('visibility','visible').hide().fadeIn().removeClass('hidden');
      });
