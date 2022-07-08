let calculadora = document.querySelector(".calculadora");
calculadora.style.border = "thick solid #0000FF";
calculadora.style.width = "250px";
calculadora.style.textAlign = "center";
calculadora.style.backgroundColor = "";

var botones = document.querySelectorAll("input[type=button]");

for (var i = 0; i < botones.length; i++) {
    botones[i].style.width = "35px";

}

var botoneslargos = document.querySelectorAll(".largo");

for (var i = 0; i < botoneslargos.length; i++) {
    botoneslargos[i].style.color = "red";
    botoneslargos[i].style.width = "60px";
}

document.addEventListener('DOMContentLoaded', init, false);

//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //Eventos de click
    asignarfunciones();
   
    function asignarfunciones(){
        uno.onclick = () => {
            resultado.textContent = resultado.textContent  + "1";
        }
        dos.onclick = () => {
            resultado.textContent = resultado.textContent  + "2";
        }
        tres.onclick = () => {
            resultado.textContent = resultado.textContent  + "3";
        }
        cuatro.onclick = () => {
            resultado.textContent = resultado.textContent  + "4";
        }
        cinco.onclick = () => {
            resultado.textContent = resultado.textContent  + "5";
        }
        seis.onclick = () => {
            resultado.textContent = resultado.textContent  + "6";
        }
        siete.onclick = () => {
            resultado.textContent = resultado.textContent  + "7";
        }
        ocho.onclick = () => {
            resultado.textContent = resultado.textContent  + "8";
        }
        nueve.onclick = () => {
            resultado.textContent = resultado.textContent  + "9";
        }
        cero.onclick = () => {
            resultado.textContent = resultado.textContent  + "0";
        }
        reset.onclick = () => {
            resetear();
        }
        suma.onclick = () => {
            operandoa = resultado.textContent;
            operacion = "+";
            limpiar();
        }
        resta.onclick = () => {
            operandoa = resultado.textContent;
            operacion = "-";
            limpiar();
        }
        multiplicacion.onclick = () => {
            operandoa = resultado.textContent;
            operacion = "*";
            limpiar();
        }
        division.onclick = () => {
            operandoa = resultado.textContent;
            operacion = "/";
            limpiar();
        }
        igual.onclick = () => {
            operandob = resultado.textContent;
            resolver();
        }
    }

    function resolver(){
        var res = 0;
        switch(operacion){
          case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
          case "-":
              res = parseFloat(operandoa) - parseFloat(operandob);
              break;
          case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
          case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
        }
        resetear();
        resultado.textContent = res;
    }

    function limpiar(){
        resultado.textContent = "";
    }
    
    function resetear(){
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }  

  }