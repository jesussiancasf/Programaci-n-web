var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var texto1 = document.getElementById("cajaT")
var button = document.getElementById("botoncito");
var cButton = document.getElementById("cajaC");

button.addEventListener("click", hacerClick);


function dibujarLinea(color, xini, yini, xfin, yfin) {

    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xini, yini);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujarArco(lineas, colores) {
    var ancho = d.width;
    for (var l = 0; l < lineas; l += 1) {
        dibujarLinea(colores, 0, 150 - (150 / lineas) * l, (150 / lineas) * (l + 1), 0);
        dibujarLinea(colores, 0, 150 + (150 / lineas) * l, (150 / lineas) * (l + 1), 300);
        dibujarLinea(colores, 300, 150 - (150 / lineas) * l, 300 - (150 / lineas) * (l + 1), 0);
        dibujarLinea(colores, 300, 150 + (150 / lineas) * l, 300 - (150 / lineas) * (l + 1), 300);
        dibujarLinea(colores, 300, (300 / lineas) * l, 300 - (300 / lineas) * (l + 1), 300);

    }
}

function hacerClick() {
    lienzo.clearRect(0, 0, d.width, d.height);
    var x = parseInt(texto1.value);
    var y= cButton.value;
    console.log(y);
    console.log(x);
    dibujarArco(x,y);


}
