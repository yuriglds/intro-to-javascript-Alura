var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener("click", function(event){

    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");
    var paciente = formGetPacient(form);
    var erros = validatePacient(paciente);

    if(erros.length > 0){
        showErro(erros);
        return;
    }

    addPacient(paciente)

    form.reset();

    var msg = document.querySelector("#mensagem-erro");
    msg.innerHTML = "";

    });

function showErro(erros) {
    var ul = document.querySelector("#mensagem-erro");

    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
  
}

function addPacient(paciente){
    var pacienteTr = buildTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function formGetPacient(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: Imc(form.peso.value,form.altura.value)
    }

    return paciente;
}

function buildTr(paciente) {
    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(buildTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(buildTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(buildTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(buildTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(buildTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function buildTd(dado,classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}


function validatePacient(paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("O nome nao pode ser vazio");
    }

    if(!wightValidate(paciente.peso)) {
        erros.push("Peso invalido");
    }

    if(!hightValidate(paciente.altura)) {
        erros.push("Altura invalida");
    }

    if(paciente.gordura.length == 0){
        erros.push("a gordura nao pode ser vazia");
    }

    if(paciente.peso.length == 0) {
        erros.push("o peso nao pode ser vazio");
    }

    if(paciente.altura.length == 0) {
        erros.push("a altura nao pode ser vazia");
    }

    return erros;

}