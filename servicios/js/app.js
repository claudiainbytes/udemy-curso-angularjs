angular.module('enrutamiento', ['ngRoute'])
      //.factory() recibe dos parametros
      //primer parametro: nombre del servicio
      //segundo parametro: funcion del servicio
      //factory siempre debe retornar un objeto para que sea usado como mi servicio
      .factory('servicio', function(){
            //Aqui debemos crear un objeto personalizado
             var usuarios = ['hugo', 'paco', 'luis'];
             var miObjeto = {};
             miObjeto.getUsuarios = function() {
                  return usuarios;
             }
             return miObjeto;     
      });
      //.service() recibe dos parametros
      //primer parametro: nombre del servicio
      //segundo parametro: funcion del servicio
      //service se usa la palabra this por que estamos retornando una instancia, 
      //la funcion en si es un objeto
      //retorna la funcion como tal
      .service('servicio', function(){
            //Aqui debemos crear un objeto personalizado
             var usuarios = ['hugo', 'paco', 'luis'];
             this.miObjeto = {};
             this.getUsuarios = function() {
                  return usuarios;
             }
             //no es necesario retornar el objeto     
      });



 