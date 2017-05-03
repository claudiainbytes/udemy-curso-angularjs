//Declaramos nombre modulo, y dependencias vacias o dependencias para pasar un servicio
//Como se esta definendo se pasan las dependencias vacias
angular.module('contactos', [])
      //.service() recibe dos parametros
      //primer parametro: nombre del servicio
      //segundo parametro: funcion del servicio
      //service se usa la palabra this por que estamos retornando una instancia,
      //la funcion en si es un objeto
      //retorna la funcion como tal
      .service('ContactosService', function(){
             //Aqui debemos crear un objeto personalizado

             //id de un contacto
             var numContactos = 1;

             //Inicializando un registro
             var contactos = [{
                id: 1,
                nombre: 'Gabriel Garcia',
                correo: 'gabriel@garcia.com',
                telefono: '300 123 4567'
             }];

             //Retorna todos los contactos
             this.obtenerContactos = function() {
                  return contactos;
             }

             //Asigna el id del contacto y luego lo incrementa para el siguiente
             //Guarda el contacto en un array
             this.guardar = function(contacto) {
               if(contacto.id == null){
                 contacto.id = ++numContactos;
                 contactos.push(contacto);
               }else{
                 //Toma a contacto lo busca en el array y lo guarda
                 for(i in contactos){
                   if(contactos[i].id  == contacto.id ){
                     contactos[i] = contacto;
                   }
                 }
               }
             }

             //Borrar un contacto en particular
             this.borrar = function(id) {
                  for(i in contactos){
                    if(contactos[i].id == id){
                      contactos.splice(i,1);
                    }
                  }
             }

             //Obtener un contacto en particular
             this.obtenerContacto = function(id) {
               for(i in contactos){
                 if(contactos[i].id == id){
                   return contactos[i];
                 }
               }
             }


             //no es necesario retornar el objeto
      })
      //Creando el controlador ContactosController
      //en la funcion pasamos dos argumentos: el scope y el servicio ContactosService
      //ContactosService es el servicio que estamos pasando como dependencia
      //Creamos los metodos en el modelo que nos van apermitir el acceso a los metodos
      //de servicio ContactosService
      .controller('ContactosController', function($scope, ContactosService){

            //En mi scope crear la variable contactos de nuestro servicio
            $scope.contactos = ContactosService.obtenerContactos();

            //Guarda el registro
            $scope.guardarContacto = function(){
              //El parametro se crea con ng-model nuevoContacto se ha definido en la vista
              ContactosService.guardar($scope.nuevoContacto);
              $scope.nuevoContacto = {};
            }

            $scope.borrarContacto = function(id){
              ContactosService.borrar(id);
              if ($scope.nuevoContacto.id == id){
                  $scope.nuevoContacto = {};
              }
            }

            $scope.editarContacto = function(id){
              //Copia los elementos del servicio contactos con el id que pasaron
              $scope.nuevoContacto = angular.copy(ContactosService.obtenerContacto(id));
            }
      })
      //Esta funcion se encarag de mostrar la visibilidad del contenido de la vista en Angular por medio
      // id=ContactosController y la directiva ng-cloak
      .run(function(){
          $("#ContactosController").css('visibility','visible').hide().fadeIn().removeClass('hidden');
      });
