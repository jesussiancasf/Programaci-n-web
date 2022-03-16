var express=require("express");
const { appendFile } = require("fs");
var aplication=express();

aplication.get("/", inicio);
aplication.get("/cursos", cursos);

function inicio(peticion, resultado){
resultado.send("este es el <strong>Home</strong>");
}

function cursos(peticion, resultado){
    resultado.send("Estos son los <strong>Cursos</strong>");
    }

    aplication.listen(8989);