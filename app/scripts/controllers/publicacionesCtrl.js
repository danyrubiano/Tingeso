angular.module('angularSpa')
.controller('PublicacionesCtrl', function($scope, $rootScope, $routeParams,$filter,$location, publicacionesService){



// $scope.date = $filter('date')(new Date(), 'yyyy-MM-dd');//fecha actual



$scope.tipos=[
{clasificacion:"Investigador",valor:1 },
{clasificacion:"Empresa",valor:2}
];

$scope.categorias=[
{clasificacion:"Quimica y Biologia",valor:1},
{clasificacion:"Finanzas",valor:2},
{clasificacion:"Tecnologia",valor:3},
{clasificacion:"Sustentabilidad",valor:4}
];


    $scope.crearPublicacion = function crearPublicacion(){

    var publicacion = { //Aquí deben ingresar las variables del scope, lo que tengan en el html
      nombre:$scope.nombre,

      brief: $scope.descripcion, //como aqui por ejemplo
      //fecha: $scope.date,
      publica: 1};
      id=$scope.categoriaCrearPublicacion.valor;

       publicacionesService.crearPublicacion(publicacion,id)
       .success(function(data, status, headers, config) {
       		console.log(data);
           alert("Publicacion creada.");
                    $location.path('/MisPublicaciones');
       		})
       		.error(function(data, status, headers, config) {
       		console.log(data);
           alert("Error en la publicacion.");
       		});
    };

$scope.misPublicaciones;
    $scope.misPublicacionesParcial;

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

    function getMisPublicaciones(){
        publicacionesService.getMisPublicaciones()
        .success(function(data){
            console.log(data);
            $scope.misPublicaciones = data;
            $scope.misPublicacionesParcial = copyArray(data, 0, 9);
        })
        .error(function(error){
            $scope.status = 'Error al consultar por sus publicaciones';
        });
    };
    getMisPublicaciones();




$scope.publicaciones;

function getPublicaciones(){
        publicacionesService.getPublicaciones()
        .success(function(data){
            console.log(data);
            $scope.publicaciones = data;

        })
        .error(function(error){
            $scope.status = 'Error al consultar por publicaciones';
        });

    };

    getPublicaciones();


$scope.publicacionesFiltro;

$scope.getPublicacionesFiltro=function getPublicacionesFiltro(){
idArea=$scope.categoriaEscogida.valor;

        publicacionesService.getPublicacionesFiltro(idArea)
        .success(function(data){
          console.log(data);
            $scope.publicacionesFiltro = data;
      
        })
        .error(function(error){
            $scope.status = 'Error al consultar por publicaciones con filtro';
        });
    };

    //getPublicacionesFiltro();//


$scope.VisibilidadFiltros=false;//antes de registrarse debe leer terminos
    $scope.MostrarFiltros=function(){
 
  if($scope.VisibilidadFiltros){
    $scope.VisibilidadFiltros=false;
  }
  else{
   $scope.VisibilidadFiltros=true;
}
}





});
