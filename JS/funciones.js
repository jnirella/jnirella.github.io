document.getElementsByClassName('fiddle').style.display="none"; 
function mostrar(clave){
    var nombre= clave;
    document.getElementsByClassName("fiddle").style.display="none"; 
    document.getElementById(nombre).style.display="block";
}
function mostrarSimple(){
    document.getElementById("fiddle").innerHTML= '<script async src="//jsfiddle.net/jnirella/muagxnse/73/embed/js,html,css,result/dark/">';
}
