const trueBtn = document.getElementById('true');
const falseBtn = document.getElementById('false');
const result = document.getElementById('result');

let isMomHappy;
    
// função que cria a promisse    
function willIGetNewPhone() {
   return new Promise(
        function (resolve, reject) {
            if (isMomHappy) {
                const phone = {
                    brand: 'Motorola',
                    color: 'gray'
                };
                resolve(`Você ganhou um ${phone.brand} da cor ${phone.color}`); //fulfilled - vai rolar o celular novo
            } else {
                const reason = new Error('Não rolou!');
                reject(reason); //catch - não vai rolar
            };
        }
    );
};
// função que consome a promise 
let askMom = function () {

    willIGetNewPhone()
        .then(function (fulfilled){
            result.innerHTML = fulfilled
            console.log(fulfilled);
        })
        .catch(function(error) {
            result.innerHTML = error.message
            console.log(error.message)
        });
};


trueBtn.addEventListener('click', function(){
    isMomHappy = true;
    // cobrando a promessa
    askMom()
    
});

falseBtn.addEventListener('click', function(){
    isMomHappy = false;
    askMom()
});

