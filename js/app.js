var cargarPagina = function(){
    setTimeout(redirecion, 3000);
};

var redirecion = function(){
    window.location.href= "views/home.html";
}


$(document).ready(cargarPagina);