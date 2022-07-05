var botao = document.querySelector("#buscar-paciente");

botao.addEventListener("click", function(){
   var xhr = new XMLHttpRequest();

   xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

   xhr.addEventListener("load", function() {

    var erro = document.querySelector("#erro-ajax");

    if(xhr.status == 200){
        erro.classList.add("fade");
       var resposta = xhr.responseText;
       var pacientes = JSON.parse(resposta);

       pacientes.forEach(function(paciente) {
            addPacient(paciente);
       });
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        erro.classList.remove("fade");
    }
   });

   xhr.send();
});