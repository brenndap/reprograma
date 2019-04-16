window.addEventListener('DOMContentLoaded', function() {
        
    let pais = document.getElementById("pais");
    let resposta = document.getElementById("resposta");
    let cidade = document.getElementById("cidade");
    let respostaBrasil = document.getElementById("resposta-brasil");
    

    pais.addEventListener("change", function(){
        if (pais.value == "bra"){
            resposta.innerHTML = "";
            document.getElementById("conteudo-brasil").setAttribute("style", "display: block;");
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
            document.getElementById("conteudo-brasil").setAttribute("style", "display: none;");
            resposta.innerHTML = "🍫 Happy Easter! 🍫";
            cidade.value = "";
            respostaBrasil.innerHTML = "";
        } else if(pais.value == "ale"){
            document.getElementById("conteudo-brasil").setAttribute("style", "display: none;");
            resposta.innerHTML = "🍫 Guten Ostern 🍫";
            cidade.value = "";
            respostaBrasil.innerHTML = "";
        } else if(pais.value == "fra"){
            document.getElementById("conteudo-brasil").setAttribute("style", "display: none;");
            resposta.innerHTML = "🍫 Joyeuses Pâques! 🍫";
            cidade.value = "";
            respostaBrasil.innerHTML = "";
        } else {
            document.getElementById("conteudo-brasil").setAttribute("style", "display: none;");
            resposta.innerHTML = "";
            cidade.value = "";
            respostaBrasil.innerHTML = "";
        }
    })
        
    
});

