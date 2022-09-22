document.getElementById("intro").innerHTML='<object type="text/html" data="./description.html" ></object>';
/*funcion para mostrar el contenido del div, como parametro el ID*/
function mostrar(clave){
    var nombre= clave;
    document.getElementById(nombre).style.display="block";
}

/*funcion para ocultar el contenido del div, como parametro el ID*/
function ocultar(clave){
    var nombre=clave;
    document.getElementById(nombre).style.display="none";
 }

/*funcion para comprobar todos los divs de la misma clase y comprobar id por id cual es el correcto para mostrar. los demas se ocultan*/
function accion(palabra){
    var idDiv=palabra;
    claseFid = document.querySelectorAll('.fiddle');
    
    for(var i=0;i<claseFid.length;i++){ 
     if (claseFid[i].id == idDiv){
         mostrar(idDiv);
     }else{
        ocultar(claseFid[i].id);
         
     } 
 }
}
/*Cargar descripción personal desde otro HTML debajo de nav en un div*/
function load_home() {
    document.getElementById("intro").innerHTML='<object type="text/html" data="h./description.html" ></object>';
}
