// =========================================
// CONTADOR DE TIEMPO
// =========================================

const fechaInicio = new Date("2020-08-01T00:00:00");

function actualizarContador() {
    const ahora = new Date();
    let diferencia = ahora - fechaInicio;

    let segundos = Math.floor(diferencia / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    let anos = Math.floor(dias / 365);
    let meses = Math.floor((dias % 365) / 30);
    dias = dias % 30;

    document.getElementById("anos").textContent = anos;
    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = String(horas).padStart(2, "0");
    document.getElementById("minutos").textContent = String(minutos).padStart(2, "0");
    document.getElementById("segundos").textContent = String(segundos).padStart(2, "0");
}

setInterval(actualizarContador, 1000);
actualizarContador();


// =========================================
// CAMBIAR DE SECCIÓN
// =========================================

function mostrarRecuerdos() {
    document.getElementById("inicio").classList.remove("activa");
    document.getElementById("carta").classList.remove("activa");
    document.getElementById("recuerdos").classList.add("activa");
}

function mostrarCarta() {
    document.getElementById("inicio").classList.remove("activa");
    document.getElementById("recuerdos").classList.remove("activa");
    document.getElementById("carta").classList.add("activa");
}

function volverInicio() {
    document.getElementById("recuerdos").classList.remove("activa");
    document.getElementById("carta").classList.remove("activa");
    document.getElementById("inicio").classList.add("activa");
}


// =========================================
// CORAZONES FLOTANTES
// =========================================

function crearCorazon() {
    const contenedor = document.getElementById("corazones");

    const corazon = document.createElement("div");

    corazon.className = "corazon";
    corazon.innerHTML = "♥";

    corazon.style.left = Math.random() * 100 + "%";
    corazon.style.fontSize = (15 + Math.random() * 35) + "px";
    corazon.style.animationDuration = (4 + Math.random() * 5) + "s";

    contenedor.appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 9000);
}

setInterval(crearCorazon, 400);


// =========================================
// MÚSICA
// =========================================

function reproducirMusica() {
    const musica = document.getElementById("musicaFondo");
    const boton = document.getElementById("botonMusica");
    const texto = document.getElementById("textoMusica");
    const icono = boton.querySelector(".icono-musica");
    const disco = document.querySelector(".disco");

    if (musica.paused) {

        musica.play();

        texto.textContent = "PAUSAR MÚSICA";
        icono.textContent = "Ⅱ";

        disco.classList.add("girando");

    } else {

        musica.pause();

        texto.textContent = "REPRODUCIR MÚSICA";
        icono.textContent = "▶";

        disco.classList.remove("girando");
    }
}


// =========================================
// GALERÍA DE 20 FOTOS
// =========================================

const fotos = [
    "img/foto1.jpg",
    "img/foto2.jpg",
    "img/foto3.jpg",
    "img/foto4.jpg",
    "img/foto5.jpg",
    "img/foto6.jpg",
    "img/foto7.jpg",
    "img/foto8.jpg",
    "img/foto9.jpg",
    "img/foto10.jpg",
    "img/foto11.jpg",
    "img/foto12.jpg",
    "img/foto13.jpg",
    "img/foto14.jpg",
    "img/foto15.jpg",
    "img/foto16.jpg",
    "img/foto17.jpg",
    "img/foto18.jpg",
    "img/foto19.jpg",
    "img/foto20.jpg"
];

let fotoActual = 0;


// =========================================
// ABRIR FOTO
// =========================================

function abrirFoto(numero) {

    fotoActual = numero;

    const visor = document.getElementById("visorFotos");

    visor.classList.add("activo");

    mostrarFoto();

    document.body.style.overflow = "hidden";
}


// =========================================
// MOSTRAR FOTO
// =========================================

function mostrarFoto() {

    const imagen = document.getElementById("imagenGrande");
    const numero = document.getElementById("numeroFoto");

    imagen.src = fotos[fotoActual];

    numero.textContent = (fotoActual + 1) + " / " + fotos.length;
}


// =========================================
// FOTO SIGUIENTE
// =========================================

function fotoSiguiente() {

    fotoActual++;

    if (fotoActual >= fotos.length) {
        fotoActual = 0;
    }

    mostrarFoto();
}


// =========================================
// FOTO ANTERIOR
// =========================================

function fotoAnterior() {

    fotoActual--;

    if (fotoActual < 0) {
        fotoActual = fotos.length - 1;
    }

    mostrarFoto();
}


// =========================================
// CERRAR FOTO
// =========================================

function cerrarFoto() {

    const visor = document.getElementById("visorFotos");

    visor.classList.remove("activo");

    document.body.style.overflow = "";
}


// =========================================
// TECLADO
// =========================================

document.addEventListener("keydown", function(event) {

    const visor = document.getElementById("visorFotos");

    if (!visor.classList.contains("activo")) {
        return;
    }

    if (event.key === "ArrowRight") {
        fotoSiguiente();
    }

    if (event.key === "ArrowLeft") {
        fotoAnterior();
    }

    if (event.key === "Escape") {
        cerrarFoto();
    }
});