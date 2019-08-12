(function(){

    angular.module('angularSpa', [
    'ngRoute','naif.base64'
    ])
    

    .config(function($routeProvider){
        $routeProvider

        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'UsuariosCtrl'
        })

        .when('/perfil', {
            templateUrl: 'views/perfil.html',
            controller: 'UsuariosCtrl'
        })

        .when('/perfilAutor', {
            templateUrl:'views/perfilPublicador.html',
            controller:'MensajesCtrl'
        })

        .when('/contacto', {
            templateUrl: 'views/contacto.html',
            controller: 'UsuariosCtrl'
        })

        .when('/acerca_de', {
            templateUrl: 'views/acerca_de.html',
            controller: 'UsuariosCtrl'
        })

        .when('/registro', {
            templateUrl:"views/registro.html",
            controller:"UsuariosCtrl"
        })

        
        .when('/publicar', {
            templateUrl:'views/crearPublicacion.html',
            controller:'PublicacionesCtrl'
        })
        
        .when('/MisPublicaciones', {
            templateUrl:'views/MisPublicaciones.html',
            controller:'PublicacionesCtrl'
        })

                .when('/mensajesRecibidos', {
            templateUrl:'views/mensajesRecibidos.html',
            controller:'MensajesCtrl'
        })
        
        .when('/publicaciones', {
            templateUrl:'views/verPublicaciones.html',
            controller:'PublicacionesCtrl'})



        .otherwise({
            redirectTo: '/home'
          });
    });//fin enrutaciones

})();
