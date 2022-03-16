var pizarra=document.getElementById("pizarrita");
var lienzo=pizarra.getContext("2d");

var map={
    url:"tile.webp",
    cargaOk:false
};

var pig={
    url:"cerdo.webp",
    cargaOk:false
};
var chicken=
{
    url:"pollo.webp",
    cargaOk:false
};

var nCerdos=aleatorio(0,50);
var nPollos=aleatorio(0,50);

map.imagen=new Image();
map.imagen.src=map.url;
map.imagen.addEventListener("load",cargarFondo);

pig.imagen=new Image();
pig.imagen.src=pig.url;
pig.imagen.addEventListener("load",cargarCerdo);

chicken.imagen= new Image();
chicken.imagen.src=chicken.url;
chicken.imagen.addEventListener("load",cargarPollo);

function cargarFondo(){
    map.cargaOk=true;
    dibujar();
}
function cargarCerdo(){
    pig.cargaOk=true;
    dibujar();
}
function cargarPollo(){
    chicken.cargaOk=true;
    dibujar();
}

function dibujar(){
    if(map.cargaOk){
        lienzo.drawImage(map.imagen,0,0);
    }
    if(pig.cargaOk){

        for (var v = 0; v < nCerdos; v++) {
            var xc=aleatorio(0,7);
            var yc=aleatorio(0,7);
            xc=xc*60;
            yc=yc*60;
            lienzo.drawImage(pig.imagen,xc,yc);
        }
        
    }
    if(chicken.cargaOk){

        for (var v = 0; v < nCerdos; v++) {
            var xp=aleatorio(0,7);
            var yp=aleatorio(0,7);
            xp=xp*60;
            yp=yp*60;
            lienzo.drawImage(chicken.imagen,xp,yp);
        }
       
    }
}


function aleatorio(min, max) {
    var resultado;
    resultado= Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}