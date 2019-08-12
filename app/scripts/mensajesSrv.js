angular.module('angularSpa')
    .service('mensajesService', function($http, $rootScope){
        
        var urlBase ='http://localhost:8888/'
        this.enviarMensaje = function(mensaje){
          console.log();
          return $http.post(urlBase+'mensajes/'+$rootScope.idAutor+'/'+$rootScope.idUser , mensaje);
        };

        this.getMensajes = function(){
            return $http.get(urlBase + 'mensajes/'+$rootScope.idUser);
        };

        this.obtenerPerfil=function(idPublicacion){

            return $http.get(urlBase +'publicaciones/'+idPublicacion+'/autor');
        };

      
    });
