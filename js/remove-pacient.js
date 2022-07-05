
var tabela = document.querySelector("table");

tabela.addEventListener("click",function(event){

    event.target.parentNode.classList.add("fade");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);
    
});

