class Billete {
    constructor(nombre,valor, cantidad) {
        this.valor = valor;
        this.cantidad = cantidad;
        this.nombre=nombre;
        this.imagen=new Image();
        this.imagen.src=this.nombre;
    }
}


var boton = document.getElementById("botoncito");
boton.addEventListener("click", darBilletes);

var cajaRes= document.getElementById("resultado");

var billetesCaja = [];
var billetesEntregados = [];

billetesCaja.push(new Billete("100.jpg",100, 10));
billetesCaja.push(new Billete("50.jpg",50, 2));
billetesCaja.push(new Billete("20.jpg",20, 10));
billetesCaja.push(new Billete("10.jpg",10, 5));


var billetesPapel = 0;
var cociente = 0;
var dinero;

////////
var cantidadTotal = 0;




function darBilletes() {
    var caja = document.getElementById("cajita");
    
    dinero = parseInt(caja.value);

    for (var i of billetesCaja) {
        if (dinero > 0) {

            cociente = Math.floor(dinero / i.valor);

            if (cociente > i.cantidad) {

                billetesPapel = i.cantidad
                
            } else {

                billetesPapel = cociente;
                
            }
            billetesEntregados.push(new Billete(i.valor+".jpg",i.valor, billetesPapel));
            dinero = dinero - (i.valor * billetesPapel);

        } 
    }
    if (dinero > 0) {

            if(dinero%10!=0){
                cajaRes.innerHTML="El cajero solo puede ingresar montos de 10,20, 50 y 100";
                
            }else{
                cajaRes.innerHTML="El cajero no puede cubrir el monto requerido";
            }
            billetesEntregados.splice(0,billetesEntregados.length);
        
        //document.write(;
    }
    else {
        for (var iterator of billetesEntregados) {
            if (iterator.cantidad>0) {
                cajaRes.innerHTML+=iterator.cantidad + " billetes de " + iterator.valor + "<br>";
            }
            
        }

    }
    console.log(billetesEntregados);
}







