
var estado = 0;
        var urlPagina = '';


window.addEventListener("load", () => {
    estado = 0;
    var element = document.getElementsByClassName('cubreIn')[0];
    setTimeout(() => {
        element.classList.add("cubreIn-cambia");
    }, 50);

});

function navega(pagina) {
    urlPagina = pagina;
    estado = 1;
    var contecubre = document.getElementById('contenedor-cubre');

    var cubre = document.createElement('div');
    cubre.classList.add('cubreOut');

    contecubre.appendChild(cubre);

    setTimeout(() => {
        cubre.classList.add("cubreOut-cambia");
    }, 50);

}

window.addEventListener("transitionend", (event) => {
    if (estado === 0) { // load
        var contecubre = document.getElementById('contenedor-cubre');
        contecubre.innerHTML = '';
    } else { // navegar
        window.location.assign(urlPagina);
    }
    estado = 0;
});
