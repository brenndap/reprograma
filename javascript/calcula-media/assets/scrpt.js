let botao = document.getElementById("calcular");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n1");
let resultado = document.getElementById("resultado")


botao.addEventListener("click", function(){

    let media = (parseFloat(n1.value) + parseFloat(n2.value)) / 2;
    if (media >= 5.0 && media < 10.0) {
        resultado.innerHTML = "Aprovado!";
    } 
    else if(media == 10.0){
        resultado.innerHTML = "Aprovado com distinção!"
    } else {
        resultado.innerHTML = "Reprovado!"
    }


});