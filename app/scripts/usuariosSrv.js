angular.module('angularSpa')
    .service('usuariosService', function($http){
      //Un servicio es la forma de comunicarse con el exterior.
        
        var urlBase='http://localhost:8888/';

        this.login = function(mail, password){
            return $http.post(urlBase + 'login', {
            	correo: mail,
            	password: password
            });
        };

		this.registro = function(nombre, apellido, run, mail, password,tipo,foto){



            nuevo = {nombres: nombre,
				apellidos: apellido,
				run: run,
				password: password,
				correo: mail,
                tipo:tipo,
                foto:foto};

			console.log(nuevo);
			return $http.post(urlBase + 'usuarios',nuevo);
		}	;

        this.getPerfilAutor = function(idUsuario){
            var result= $http.get(urlBase + 'usuarios/' + idUsuario);
            return result;
        };

    });
