window.addEventListener('DOMContentLoaded', function() {
    let name = document.getElementById('name');
    let submitName = document.getElementById('submit-name');
    let userBox = document.getElementById('user-content');
    let gameBox = document.getElementById('game-content');
    let submit = document.getElementById('submit');
    let result = document.getElementById('result');
    let user = document.getElementById('user-input');
    let gameOptions = ["pedra", "papel", "tesoura", "lagarto", "spock"];
        
    submitName.addEventListener("click", function(){
        if(name.value){
            gameBox.style.display = "block";
            userBox.style.display = "none";
        } else {
            alert("Por favor, preencha seu nome! 😄")
        }
    })

    submit.addEventListener("click", function(){
        let computer = gameOptions[Math.floor(Math.random() * gameOptions.length)];
        let img = document.createElement("img");
        let game = [];
        game["pedra"] = [["lagarto", "tesoura"], ["papel", "spock"]];
        game["papel"] = [["pedra", "spock"], ["lagarto", "tesoura"]];
        game["tesoura"] = [["papel", "lagarto"], ["pedra", "spock"]];
        game["lagarto"] = [["papel", "spock"], ["pedra", "tesoura"]];
        game["spock"] = [["pedra", "tesoura"], ["lagarto", "papel"]];

        if(computer == user.value){
            result.innerHTML = `Empate! Joque novamente! </br>`;
            img.src = "https://media.giphy.com/media/l4Ep4U19zwmUfWH72/giphy.gif";
            result.appendChild(img);
           
        } else if (game[computer][0].includes(user.value)) { 
            result.innerHTML = `${name.value} você perdeu! O computador escolheu ${computer} </br>`;
            img.src = "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif";
            result.appendChild(img);

        } else {
            result.innerHTML = `${name.value} você ganhou! O computador escolheu ${computer} </br>`
            img.src = "https://media.giphy.com/media/DmzQ4iPMyUScw/giphy.gif";
            result.appendChild(img);
        }
    
    });

});

