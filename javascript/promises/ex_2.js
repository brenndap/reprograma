function isAnOdd(number) {
    return number % 2 == 0 ? `POXA! ${number} não é ímpar!` : `AÊÊEEEEEE! ${number} é ímpar!`;
};

function isANumber(number) {
    return new Promise(
        function (resolve, reject) {
            if (isNaN(number)) {
                const error = new Error(`Deu ruim! ${number} não é um numero!`);
                reject(error);
            } else {
                resolve(isAnOdd(number));
            };
        }
    );
};

const userInput = document.getElementById('input');
const verifica = document.getElementById('verifica');
const resultado = document.getElementById('result2');

function verifyNumber(number) {
    isANumber(number)
        .then(function (success) {
            resultado.innerHTML = "verificando...";
            setTimeout(() => { resultado.innerHTML = success }, 3000);
        })

        .catch(function (error) {
            resultado.innerHTML = "verificando...";
            setTimeout(() => {  resultado.innerHTML = error.message }, 3000);
        })
};

verifica.addEventListener('click', function () {
    verifyNumber(userInput.value);
}); 

