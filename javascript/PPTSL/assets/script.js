window.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('name');
    const submitName = document.getElementById('submit-name');
    const userBox = document.getElementById('user-content');
    const gameBox = document.getElementById('game-content');
    const submit = document.getElementById('submit');
    const result = document.getElementById('result');
    const user = document.getElementById('user-input');
    const symbolOptions = ["pedra", "papel", "tesoura", "lagarto", "spock"];

    const symbols = [];
    symbols["pedra"] = [];
    symbols["pedra"]["wins"] = ["lagarto", "tesoura"];
    symbols["papel"] = [];
    symbols["papel"]["wins"] = ["pedra", "spock"];
    symbols["tesoura"] = [];
    symbols["tesoura"]["wins"] = ["papel", "lagarto"];
    symbols["lagarto"] = [];
    symbols["lagarto"]["wins"] = ["papel", "spock"];
    symbols["spock"] = [];
    symbols["spock"]["wins"] = ["pedra", "tesoura"];
    

        
    submitName.addEventListener("click", function(){
        if(name.value){
            gameBox.style.display = "block";
            userBox.style.display = "none";
        } else {
            alert("Por favor, preencha seu nome! 😄")
        }
    })

    submit.addEventListener("click", function(){
        let computer = symbolOptions[Math.floor(Math.random() * symbolOptions.length)];
        let img = document.createElement("img");
        console.log(computer);
            

        if(computer == user.value){ //empate
            result.innerHTML = `Empate! Joque novamente! </br>`;
            img.src = "https://media.giphy.com/media/l4Ep4U19zwmUfWH72/giphy.gif";
            result.appendChild(img);
            
        } else if (symbols[computer]["wins"].includes(user.value)) { //user loses
            result.innerHTML = `${name.value} você perdeu! O computador escolheu ${computer} </br>`;
            img.src = "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif";
            result.appendChild(img);

        } else { //user wins
            result.innerHTML = `${name.value} você ganhou! O computador escolheu ${computer} </br>`
            img.src = "https://media.giphy.com/media/DmzQ4iPMyUScw/giphy.gif";
            result.appendChild(img);
        }
       
        
        
        
    
    });
});


