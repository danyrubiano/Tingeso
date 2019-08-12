angular.module('angularSpa')
    .service('publicacionesService', function($http, $rootScope){
        
        var urlBase ='http://localhost:8888/'
        this.crearPublicacion = function(publicacion,id){
          console.log();
          return $http.post(urlBase + 'publicaciones/' +$rootScope.idUser +"/"+id, publicacion);
        };

        this.getPublicaciones = function(){
            return $http.get(urlBase + 'publicaciones');
        };

      this.getPublicacionesFiltro = function(area){
            return $http.get(urlBase + 'publicaciones/area/'+area);
        };

        this.getMisPublicaciones = function(){
            var result= $http.get(urlBase + 'usuarios/' + $rootScope.idUser + '/publicaciones');
            return result;
        };
    });
