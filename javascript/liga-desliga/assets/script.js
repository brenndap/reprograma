function mudaFundo() {
    var fundo = document.getElementById("fundo");

    if(fundo.style.backgroundColor == "white"){
        fundo.style.backgroundColor = "black";
    }
    else {
        fundo.style.backgroundColor = "white";
    }
}

function mostraFundo() {
    var fundo = document.getElementById("fundo");
    console.log(fundo.style.backgroundColor)
}


