angular.module('angularSpa')
.controller('MensajesCtrl', function($scope, $rootScope, $routeParams,$location, mensajesService){


    $scope.enviarMensaje = function enviarMensaje(){

    var mensaje = { //Aquí deben ingresar las variables del scope, lo que tengan en el html
      descartado:0,

      contenido: $scope.mensajeEnviar, //como aqui por ejemplo
      
      leido: 0};
      

       mensajesService.enviarMensaje(mensaje)
       .success(function(data, status, headers, config) {
       		console.log(data);
           alert("Mensaje enviado.");
          
       		})
       		.error(function(data, status, headers, config) {
       		console.log(data);
           alert("Error al enviar el mensaje.");
       		});
    };

$scope.mensajesRecibidos;
    $scope.mensajesRecibidosParcial;

    function copyArray(origen, desde, hasta){
        var temp = [];
        var len = origen.length;
        var inicio = len - 1;
        var fin = 0
        if(len >= 10){
            inicio = (len - 1) - desde;
            fin = (len - 1) - desde - hasta;
            
        }
        for (var i = inicio; i >= fin; i--) {
            temp.push(origen[i]);
        }
        return temp;
    }

    function getMensajesRecibidos(){
        mensajesService.getMensajes()
        .success(function(data){

            $scope.mensajesRecibidos = data;
            $scope.mensajesRecibidosParcial = copyArray(data, 0, 9);
        })
        .error(function(error){
            $scope.status = 'Error al consultar por sus mensajes';
        });
    };
    getMensajesRecibidos();




    $scope.perfilAutor=function perfilAutor(idPublicacion){

        mensajesService.obtenerPerfil(idPublicacion)
        .success(function(data){
          console.log(data);

            $rootScope.nombreAutor = data[0].nombres;
            $rootScope.apellidoAutor = data[0].apellidos;
            $rootScope.correoAutor=data[0].correo;
            $rootScope.fotoAutor = data[0].foto;
            $rootScope.idAutor=data[0].idUsuario ;         
            $location.path('/perfilAutor');


        })
        .error(function(error){
            $scope.status = 'Error al consultar por autor';
        });




    };

});
