var pessoa = {
    nome: "Brennda",
    idade: 24,
    anoDeNascimento: function() {
        var data = new Date();
        var anoAtual = data.getFullYear();
        return anoAtual - pessoa.idade;

    }
}


var converter = function (){
    var bitcoin = prompt("Quantos bitcoins você quer converter?");
    var cotacao = prompt("Quantos reais vale 1 bitcoin hoje?");

    var resultado = bitcoin * cotacao;
    alert("Você teria " + resultado);
}


function mediaDeNotas(n1, n2, n3) {
    var mediaNotas = (n1 + n2 + n3) / 3;
    
    if (mediaNotas >= 5.0) {
        return "Você foi aprovado";
    } else {
        return "Você foi reprovado";
    };
}


