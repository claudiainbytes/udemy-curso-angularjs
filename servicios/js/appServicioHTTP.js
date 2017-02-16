//Declaramos nombre modulo, y dependencias vacias o dependencias para pasar
angular.module('usuarios', [])
      //Creando el controlador UsuariosController
      //en la funcion pasamos dos argumentos: el scope y $http
      //$http es el servicio que estamos pasando como dependencia
      .controller('UsuariosController', function($scope, $http){
            //$http.get()accede al contenido del servicio por medio de una url donde estan los usuarios
            //Cuando haya leido el contenido, el contenido se almacena
            //en la variable scope.usuarios
            $http.get('https://jsonplaceholder.typicode.com/users')
                  .then(function(respuesta) {
                        $scope.usuarios = respuesta.data;
                  })     
      })
      .run(function(){        
          $("#UsuariosController").css('visibility','visible').hide().fadeIn().removeClass('hidden'); 
      });




 