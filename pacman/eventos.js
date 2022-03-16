var teclas = {
    DOWN: 40,
    UP: 38,
    LEFT: 37,
    RIGHT: 39
};

var d = document.getElementById("pizarra");
lienzo = d.getContext("2d");
boton = document.getElementById("botoncito");


document.addEventListener("keydown", dibujarPacman);
boton.addEventListener("click", dibujarInicio);

var pix = 20; //posición inicial x del pacman
var piy = 20;//posicion inicial y del pacman
var estado = false;
//variable booleana para saber si ya se inició el juego


function dibujarArcos(px, py, ax, ay) {
    lienzo.beginPath();
    lienzo.strokeStyle = "red";//color del borde
    lienzo.fillStyle = "yellow";//color del relleno
    lienzo.arc(px, py, 19, ax * Math.PI, ay * Math.PI)//arco
    lienzo.fill();//rellenar arco con el color
    lienzo.stroke();//pintar borde
    lienzo.closePath();
}

//dibuja posición inicial
function dibujarInicio() {
    estado = true;
    dibujarArcos(pix, piy, 0.25, 1.25);
    dibujarArcos(pix, piy, 0.75, 1.75);
}

function dibujarPacman(evento) {

    var movimiento=10;

    if (estado == true) {

        switch (evento.keyCode) {

            case teclas.LEFT:
                lienzo.clearRect(0, 0, d.width, d.height);
                /*Elimina una región del dibujo
                En este caso se eliminó desde el punto (0;0) 
                hasta el ancho y alto del contenedor */
                dibujarArcos(pix, piy, 1.75, 0.75);
                dibujarArcos(pix, piy, 1.25, 0.25);
                pix -= movimiento;
                break;

            case teclas.RIGHT:
                lienzo.clearRect(0, 0, d.width, d.height);
                dibujarArcos(pix, piy, 0.25, 1.25);
                dibujarArcos(pix, piy, 0.75, 1.75);
                pix += movimiento;
                break;

            case teclas.UP:
                lienzo.clearRect(0, 0, d.width, d.height);
                dibujarArcos(pix, piy, 0.25, 1.25);
                dibujarArcos(pix, piy, 1.75, 0.75);
                piy -= movimiento;
                break;

            case teclas.DOWN:
                lienzo.clearRect(0, 0, d.width, d.height);
                dibujarArcos(pix, piy, 0.75, 1.75);
                dibujarArcos(pix, piy, 1.25, 0.25);
                piy += movimiento;
                break;

            default:
                alert("Pacman se murió");
                lienzo.clearRect(0, 0, d.width, d.height);
                estado = false;
        }

    } else {
        alert("Necesita iniciar el juego");
    }

}