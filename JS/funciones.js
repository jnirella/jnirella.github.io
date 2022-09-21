function mostrar(clave){
    var nombre= clave;
    document.getElementById(nombre).style.display="block";
    alert(nombre);
    /* Se declara variable donde se almacenaran todos los DIV con la class="fiddle"*/
    
    /*var claseFid = document.querySelectorAll('.fiddle');*/
    
    /* Se comprueba si el ID del DIV cuadra y se muestra su contenido, sino se oculta el contenido*/
    
   /* for(var i=0;i<claseFid.length;i++){
        var idClaseComillas='"'+claseFid[i].id+'"';
     if (claseFid[i].id == nombre){
         alert("se ha mostrado " + idClaseComillas);
         document.getElementById(idClaseComillas).style.display = "block";  
     }else{
        document.getElementById(idClaseComillas).style.display = "none";
         alert("se ha borrado"+ idClaseComillas);
     }           
          }
}
*/

/*prueva para recorrer todos los divs con la clase fiddle y comprobar si su id es la que se entra como parametro en la función se muestra el contenido del div, sino,
los demas divs se ocultan:*/
