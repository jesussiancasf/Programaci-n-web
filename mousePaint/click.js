//CONSTANTES
var colores = document.getElementById("colorcito");
var numero = document.getElementById("numerito");
var borrador = document.getElementById("borradorcito");
var numeroBorador = document.getElementById("borradorcitoTamaño");
var d = document.getElementById("pizarrita");
lienzo = d.getContext("2d");

//VAIABLES
var borrar = false;
var presionado = false;
var color = "black";
var tamanio = 10;
var borrarTamanio=1;

//EVENTOS
document.addEventListener("mousemove", moverMouse);
document.addEventListener("mousedown", clickOnMouse);
document.addEventListener("mouseup", clickOffMouse);

//Funciones
function dibujarLinea(colorLinea, LineSize, xini, yini) {

    lienzo.beginPath();
    lienzo.strokeStyle = colorLinea;
    lienzo.lineWidth = LineSize;
    lienzo.moveTo(xini, yini);
    lienzo.lineTo(xini, yini + 1 * LineSize / 1.5);
    lienzo.stroke();
    lienzo.closePath();
}

function moverMouse(event) {
    if (presionado == true && borrador.checked == false) {
        dibujarLinea(color, tamanio, event.offsetX, event.offsetY);
    }
    if (presionado == true && borrador.checked == true) {
        lienzo.clearRect(event.offsetX, event.offsetY, borrarTamanio, borrarTamanio);
    }
}

function clickOnMouse() {
    presionado = true;
    color = colores.value;
    tamanio = numero.value;
    borrarTamanio=numeroBorador.value;
}
function clickOffMouse() {
    presionado = false;
}