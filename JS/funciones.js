/*funcion para mostrar el contenido del div, como parametro el ID*/
function mostrar(clave){
    var nombre= clave;
    document.getElementById(nombre).style.display="block";
    alert("mostrar" + nombre);
}

/*funcion para ocultar el contenido del div, como parametro el ID*/
function ocultar(clave){
    var nombre=clave;
    document.getElementById(nombre).style.display="none";
    alert("ocultar" + nombre);
}

/*funcion para comprobar todos los divs de la misma clase y comprobar id por id cual es el correcto para mostrar. los demas se ocultan*/
function accion(palabra){
    var idDiv=palabra;
    claseFid = document.querySelectorAll('.fiddle');
    
    for(var i=0;i<claseFid.length;i++){
        alert("id actual del array" + claseFid[i].id);
     if (claseFid[i].id == idDiv){
         mostrar(idDiv);
     }else{
        ocultar(claseFid[i].id);
         
     }           
 
 }
}
