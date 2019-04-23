window.addEventListener('DOMContentLoaded', function() {
        
    let pais = document.getElementById("pais");
    let resposta = document.getElementById("resposta");
    let cidade = document.getElementById("cidade");
    let respostaBrasil = document.getElementById("resposta-brasil");
    let conteudoBrasil = document.getElementById("conteudo-brasil");
  
    pais.addEventListener("change", function(){
        conteudoBrasil.style.display = "none";
        respostaBrasil.innerHTML = "";
        if (pais.value == "bra"){
            cidade.value = "";
            resposta.innerHTML = "";
            conteudoBrasil.style.display = "block";
            cidade.addEventListener("change", function(){
                if(cidade.value == "bel"){
                    respostaBrasil.innerHTML = "🍫 Feliz Páscoa, maninho! 🍫";
                } else if(cidade.value == "man"){
                    respostaBrasil.innerHTML = "🍫 Tenha uma Páscoa chibata! 🍫";
                } else if(cidade.value == "sal"){
                    respostaBrasil.innerHTML = "🍫 Feliz Páscoa, man! 🍫";
                } else{
                    respostaBrasil.innerHTML = "";
                }
            })
        } else if(pais.value == "eng"){
            resposta.innerHTML = "🍫 Happy Easter! 🍫";
            
        } else if(pais.value == "ale"){
            resposta.innerHTML = "🍫 Guten Ostern 🍫";
           
        } else if(pais.value == "fra"){
            resposta.innerHTML = "🍫 Joyeuses Pâques! 🍫";
            
        } else {
            resposta.innerHTML = "";
        }
    })
});

