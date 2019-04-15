function palindromo() {
    var palavra = document.getElementById("input").value.toLowerCase();
    var resposta = document.getElementById("resposta");

    for(var i = 0; i < palavra.length; i++){
        if(palavra !== palavra.slice(-1)){
            resposta.innerHTML = "Não é =("

        }
        else {
            resposta.innerHTML = "Sim! =D"
        }
    }
}
