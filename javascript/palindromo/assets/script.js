function reverse(str){
    return str.split("").reverse().join("");
  }


function palindromo() {
    var palavra = document.getElementById("input").value.toLowerCase();
    var resposta = document.getElementById("resposta");
    var reversePalavra = reverse(palavra);
   
    if(palavra.replace(" ", "") !== reversePalavra.replace(" ", "")){
        resposta.innerHTML = "Não é =("

    }
    else {
        resposta.innerHTML = "Sim! =D"
    }
}

