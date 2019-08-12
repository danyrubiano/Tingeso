angular.module('angularSpa')
.controller('UsuariosCtrl', function($scope, $location, $rootScope, $routeParams, usuariosService){
    //Se define SIEMPRE un controlador por entidad/funcionalidad...

    $scope.VisibilidadBotonRegistrar=false;//antes de registrarse debe leer terminos
	$scope.MostrarBotonRegistrar=function(){
 
  if($scope.VisibilidadBotonRegistrar){
    $scope.VisibilidadBotonRegistrar=false;
  }
  else{
   $scope.VisibilidadBotonRegistrar=true;
}
}


    $scope.VisibilidadIngreso=false;//visibilidad de secciones solo para usuarios ingresados
	$scope.MostrarIngresado=function(){
 
  if($scope.VisibilidadIngreso){
    $scope.VisibilidadIngreso=false;
  }
  else{
   $scope.VisibilidadIngreso=true;
}
}


$scope.tipos=[
{clasificacion:"Investigador",valor:1 },
{clasificacion:"Empresa",valor:2}
];

    $scope.loginUsuario = function loginUsuario(){//login


		mail = $scope.userMail;
		password = $scope.password;

		usuariosService.login(mail, password)
		.success(function(data, status, headers, config) {
			    $scope.MostrarIngresado();
			    
				console.log(data);
		    alert("Ingreso correcto.");
		    $rootScope.idUser=data.idUsuario; //Rootscope guarda variables globales
		    $rootScope.correoIngresado=data.correo;
		    $rootScope.nombresIngresado=data.nombres;
		    $rootScope.apellidosIngresado=data.apellidos;
		    $rootScope.fotoIngresado=data.foto;
		    
		    $location.path('/home');
				})
				.error(function(data, status, headers, config) {

				console.log(data);
		    alert("Error en el ingreso.");
		    				$location.path('/login');
				});

    };


        $scope.logoutUsuario = function(){//logout
        	$rootScope.idUser=null; //Rootscope guarda variables globales
		    $rootScope.correoIngresado=null;
		    $rootScope.nombresIngresado=null;
		    $rootScope.apellidosIngresado=null;
		    $rootScope.fotoIngresado=null;
    		$scope.userMail=null;
    		$scope.password=null;

    	$scope.MostrarIngresado();


    };


    $scope.registroUsuario = function registroUsuario(){//registro

    	if($scope.confirmacionEmailUsuario==$scope.mailUsuario && $scope.password==$scope.confirmarPassword)//confirmar pass
{


		nombre = $scope.nombreUsuario;
		apellido = $scope.apellidoUsuario;
		run = $scope.runUsuario;
		mail = $scope.mailUsuario;
		password = $scope.password;

		tipo=$scope.tipoUsuario.valor;
		console.log($scope.myfile);
		foto=$scope.myfile.base64;
		

		usuariosService.registro(nombre, apellido, run, mail, password,tipo,foto)
		.success(function(data, status, headers, config) {
			    $location.path('/home');
				console.log(data);
		    alert("Usuario creado correctamente.");
				})
				.error(function(data, status, headers, config) {
				console.log(data);
		    alert("Error al registrarse. Verificar formato datos ingresados");
			});}

		if($scope.password!=$scope.confirmarPassword){
				alert("Las dos claves son distintas...") ;
			}
		if($scope.mailUsuario!=$scope.confirmacionEmailUsuario){
				alert("Los dos correos son distintos...") ;
			}



    };


    function getPerfil(){
    	usuariosService.getPerfilAutor(idUsuario)
        .success(function(data, status, headers, config) {
			console.log(data);
		    $scope.usuario = data;
		})
		.error(function(data, status, headers, config) {
			console.log(data);
		    alert("Error al consultar por el perfil del autor.");
		    $location.path('/publicaciones');
		});
    };
    getPerfil();







});
