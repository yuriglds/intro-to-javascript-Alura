
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValidate = wightValidate(peso);
    var alturaValidate = hightValidate(altura);

    if(!pesoValidate){
        pesoValidate = false;
        tdImc.textContent = "peso invalido";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValidate){
        alturaValidate = false;
        tdImc.textContent = "altura invalida";
        paciente.classList.add("paciente-invalido");

    }

    if(alturaValidate && pesoValidate) {
        var imc = Imc(peso,altura);
        tdImc.textContent = imc;
    }
}

function wightValidate(peso) {
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function hightValidate(altura) {
    if(altura >=0 && altura <= 3.0) {
        return true;
    }else {
        return false;
    }
}

function Imc(peso,altura) {
    var imc = 0
    var imc = peso/(altura*altura);
    return imc.toFixed(2);
}

