
function calculadora() {
    var n1 = parseInt(prompt("Digite um número: "));
    var n2 = parseInt(prompt("Digite outro número: "));
    var operador = prompt("Digite a operação escolhida: ");
    var resultado;

    if(operador == "+") {
        resultado = n1 + n2
        return alert("O resultado é " + resultado);
    }
    else if(operador == "-") {
        resultado = n1 - n2
        return alert("O resultado é " + resultado);
    } 
    else if(operador == "*") {
        resultado = n1 * n2
        return alert("O resultado é " + resultado);
    }
    else if(operador == "/") {
        resultado = n1 / n2
        return alert("O resultado é " + resultado);
    }
    else {
        alert("Operador inválido, tente novamente!")
        return calculadora()
        

    }
}

