function calculaIMC() {
    var altura = prompt("Altura: ");
    var peso = prompt("Peso: ");
    var calculo = (peso/(altura * altura)).toFixed(2);

    if(calculo<18.5) {
        alert("Você está abaixo do peso. Seu IMC é: " + calculo);
    }
    else if(calculo>=18.5 && calculo<24.9){
        alert("Seu peso está normal. Seu IMC é: " + calculo);
    }
    else if(calculo>=25 && calculo<29.9) {
        alert("Você está com sobrepeso. Seu IMC é: " + calculo);
    }
    else {
        alert("Você está com obesidade. Seu IMC é: " + calculo);
    }
}

