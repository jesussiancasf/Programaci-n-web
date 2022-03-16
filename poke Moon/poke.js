var pizarra = document.getElementById("pizarrita");
var lienzo = pizarra.getContext("2d");

var map = {
    url: "mapa.png",
    cargaOk: false
};
var personaje = {
    url: "principal.png",
    cargaOk: false,
    NOMBRE: "Pikachu",
    vida: 100,
    ATAQUE_A: 25,
    ATAQUE_B: 35,
    atrapado: false
};
var bolba = {
    url: "Bulbasaur.png",
    cargaOk: false,
    NOMBRE: "Bulbasaur",
    vida: 110,
    ATAQUE_A: 20,
    ATAQUE_B: 25,
    atrapado: false
};
var jengar = {
    url: "Gengar.png",
    cargaOk: false,
    NOMBRE: "Gengar",
    vida: 85,
    ATAQUE_A: 35,
    ATAQUE_B: 30,
    atrapado: false
};
var snorlax = {
    url: "Snorlax.png",
    cargaOk: false,
    NOMBRE: "Snorlax",
    vida: 180,
    ATAQUE_A: 10,
    ATAQUE_B: 15,
    atrapado: false
};
var charman = {
    url: "Charmander.png",
    cargaOk: false,
    NOMBRE: "Charmander",
    vida: 110,
    ATAQUE_A: 40,
    ATAQUE_B: 25,
    atrapado: false
};

var pokemones = [];
var posx = [];
var posy = [];
var caminarX = 400;
var caminarY = 400;

var keys = {
    DOWN: 40,
    UP: 38,
    LEFT: 37,
    RIGHT: 39
};

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < aleatorio(1, 5); j++) {
        var a = aleatorio(5, 180) * 5;
        var b = aleatorio(5, 180) * 5;

        switch (i) {

            case 0:
                pokemones.push(bolba.NOMBRE);
                posx.push(a);
                posy.push(b);
                break;
            case 1:
                pokemones.push(jengar.NOMBRE);
                posx.push(a);
                posy.push(b);
                break;
            case 2:
                pokemones.push(snorlax.NOMBRE);
                posx.push(a);
                posy.push(b);
                break;
            case 3:
                pokemones.push(charman.NOMBRE);
                posx.push(a);
                posy.push(b);
                break;
        }
    }

}
console.log(pokemones);
console.log(posx);
console.log(posy);
alert("Hay "+pokemones.length+ " pokemon entre los arbustos. Atrápalos!");


document.addEventListener("keydown", moverPersonaje);


map.imagen = new Image();
map.imagen.src = map.url;
map.imagen.addEventListener("load", cargarFondo);


personaje.imagen = new Image();
personaje.imagen.src = personaje.url;
personaje.imagen.addEventListener("load", cargarPersonaje);

bolba.imagen = new Image();
bolba.imagen.src = bolba.url;
bolba.imagen.addEventListener("load", cargarBolba);

jengar.imagen = new Image();
jengar.imagen.src = jengar.url;
jengar.imagen.addEventListener("load", cargarGengart);

snorlax.imagen = new Image();
snorlax.imagen.src = snorlax.url;
snorlax.imagen.addEventListener("load", cargarSnorlax);

charman.imagen = new Image();
charman.imagen.src = charman.url;
charman.imagen.addEventListener("load", cargarCharman);


function moverPersonaje(evento) {

    lienzo.drawImage(map.imagen, 0, 0);

    switch (evento.keyCode) {

        case keys.LEFT:
            if (map.cargaOk && personaje.cargaOk) {
                //lienzo.drawImage(map.imagen, 0, 0);
                caminarX -= 10;
                lienzo.drawImage(personaje.imagen, caminarX, caminarY);
                pokemonCerca();
            }

            break;
        case keys.RIGHT:
            if (map.cargaOk && personaje.cargaOk) {
                // lienzo.drawImage(map.imagen, 0, 0);
                caminarX += 10;
                lienzo.drawImage(personaje.imagen, caminarX, caminarY);
                pokemonCerca();

            }

            break;
        case keys.UP:
            if (map.cargaOk && personaje.cargaOk) {
                // lienzo.drawImage(map.imagen, 0, 0);
                caminarY -= 10;
                lienzo.drawImage(personaje.imagen, caminarX, caminarY);
                pokemonCerca();

            }

            break;
        case keys.DOWN:
            if (map.cargaOk && personaje.cargaOk) {
                // lienzo.drawImage(map.imagen, 0, 0);
                caminarY += 10;
                lienzo.drawImage(personaje.imagen, caminarX, caminarY);
                pokemonCerca();

            }

            break;
    }

}

function cargarFondo() {
    map.cargaOk = true;
    dibujar();
}
function cargarPersonaje() {
    personaje.cargaOk = true;
    // dibujar();
}
function cargarBolba() {
    bolba.cargaOk = true;
    //dibujar();
}
function cargarGengart() {
    jengar.cargaOk = true;
    // dibujar();
}
function cargarSnorlax() {
    snorlax.cargaOk = true;
    //dibujar();
}
function cargarCharman() {
    charman.cargaOk = true;
    //dibujar();
}


function dibujar() {
    if (map.cargaOk) {
        lienzo.drawImage(map.imagen, 0, 0);
    }
    if (personaje.cargaOk) {
        lienzo.drawImage(personaje.imagen, caminarX, caminarY);
    }

}

function aleatorio(menor, mayor) {
    var resultado = Math.floor(Math.random() * (mayor - menor + 1)) + menor;
    return resultado;
}

function pokemonCerca() {

    for (let i = 0; i < pokemones.length; i++) {
        var aproxX = Math.abs(caminarX - posx[i]);
        var aproxY = Math.abs(caminarY - posy[i]);
        //console.log(aproxX+ " "+aproxY);


        if (aproxX <= 50 && aproxY <= 50) {
            switch (pokemones[i]) {

                case bolba.NOMBRE:
                    lienzo.drawImage(bolba.imagen, posx[i], posy[i]);
                    batallaPokemon(bolba.NOMBRE, bolba.vida, bolba.ATAQUE_A, bolba.ATAQUE_B, i);
                    break;

                case jengar.NOMBRE:
                    lienzo.drawImage(jengar.imagen, posx[i], posy[i]);
                    batallaPokemon(jengar.NOMBRE, jengar.vida, jengar.ATAQUE_A, jengar.ATAQUE_B, i);
                    break;

                case snorlax.NOMBRE:
                    lienzo.drawImage(snorlax.imagen, posx[i], posy[i]);
                    batallaPokemon(snorlax.NOMBRE, snorlax.vida, snorlax.ATAQUE_A, snorlax.ATAQUE_B, i);
                    break;

                case charman.NOMBRE:
                    lienzo.drawImage(charman.imagen, posx[i], posy[i]);
                    batallaPokemon(charman.NOMBRE, charman.vida, charman.ATAQUE_A, charman.ATAQUE_B, i);
                    break;
            }
        }

    }

}

function batallaPokemon(pokemonE, vidap, att1, att2, pos) {
    var vidaPoke = vidap;
    alert("Cuidado! " + pokemonE + " salvaje aparece.");
    var respuesta = prompt("¿Qué quieres hacer? \n1. Batalla Pokemón\n2. Dejarlo ir ");
    if (respuesta == "1") {
        //console.log(respuesta);
        while (personaje.vida > 0 && vidaPoke > 0) {
            respuesta = prompt("Batalla contra " + pokemonE + "- Energía: " + vidaPoke + "!\nUsar Ataque 1 (" + personaje.ATAQUE_A + " pts de ataque)\nUsar Ataque 2 (" + personaje.ATAQUE_B + " pts de ataque)\nTu energia: " + personaje.vida);
            var attAleatorio = aleatorio(1, 2);

            if (attAleatorio == 1 && respuesta == "1") {
                vidaPoke -= personaje.ATAQUE_A;
                personaje.vida -= att1;
                alert("Haz causado " + personaje.ATAQUE_A + " puntos de daño.\nEnergía de " + pokemonE + ": " + vidaPoke + "\n\n" + pokemonE + " usó Ataque " + attAleatorio + " causandote " + att1 + " puntos de daño\nEnergía restante: " + personaje.vida);
            }
            else
            if (attAleatorio == 2 && respuesta == "2") {
                vidaPoke -= personaje.ATAQUE_B;
                personaje.vida -= att2;
                alert("Haz causado " + personaje.ATAQUE_B + " puntos de daño.\nEnergía de " + pokemonE + ": " + vidaPoke + "\n\n" + pokemonE + " usó Ataque " + attAleatorio + " causandote " + att2 + " puntos de daño\nEnergía restante: " + personaje.vida);

            }
            else
            if (attAleatorio == 1 && respuesta == "2") {
                vidaPoke -= personaje.ATAQUE_B;
                personaje.vida -= att1;
                alert("Haz causado " + personaje.ATAQUE_B + " puntos de daño.\nEnergía de " + pokemonE + ": " + vidaPoke + "\n\n" + pokemonE + " usó Ataque " + attAleatorio + " causandote " + att1 + " puntos de daño\nEnergía restante: " + personaje.vida);
            }
            else
            if (attAleatorio == 2 && respuesta == "1") {
                vidaPoke -= personaje.ATAQUE_A;
                personaje.vida -= att2;
                alert("Haz causado " + personaje.ATAQUE_A + " puntos de daño.\nEnergía de " + pokemonE + ": " + vidaPoke + "\n\n" + pokemonE + " usó Ataque " + attAleatorio + " causandote " + att2 + " puntos de daño\nEnergía restante: " + personaje.vida);
            }else{
                personaje.vida-=15;
                alert("Intentaste atacar y te lastimaste -15 puntos. Vida restante "+personaje.vida);
            }
            
        }
        console.log("Vida poke " + vidaPoke + " Vida tuya " + personaje.vida);
        if (vidaPoke <= 0) {
            alert("Felicidades, atrapaste a " + pokemonE);
            pokemones.splice(pos-1,pos);
            posx.splice(pos-1,pos);
            posy.splice(pos-1,pos);

        } else if (personaje.vida <= 0) {
            alert(pokemonE + "te derrotó y huyó, suerte para la próxima.");
            pokemones.splice(pos,1);
            posx.splice(pos,1);
            posy.splice(pos,1);
        } else {
            alert("Te quedaste sin energia y no pudiste atrapar a" + pokemonE + " pero puedes intentarlo nuevamente");
        }
        console.log(pokemones);


    }else{
        alert("El Pokemon ha huido. Ya no podrás volver a atraparlo.")
    }

}