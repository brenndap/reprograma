window.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('name');
    const submitName = document.getElementById('submit-name');
    const userBox = document.getElementById('user-content');
    const gameBox = document.getElementById('game-content');
    const submit = document.getElementById('submit');
    const result = document.getElementById('result');
    const user = document.getElementById('user-input');
    const gameOptions = ["pedra", "papel", "tesoura", "lagarto", "spock"];
        
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
        const game = [];
        game["pedra"] = []
        game["pedra"]["wins"] = ["lagarto", "tesoura"];
        game["pedra"]["loses"] = ["papel", "spock"];
        game["papel"] = [];
        game["papel"]["wins"] = ["pedra", "spock"];
        game["papel"]["loses"] = ["lagarto", "tesoura"];
        game["tesoura"] = [];
        game["tesoura"]["wins"] = ["papel", "lagarto"];
        game["tesoura"]["loses"] = ["pedra", "spock"];
        game["lagarto"] = [];
        game["lagarto"]["wins"] = ["papel", "spock"];
        game["lagarto"]["loses"] = ["pedra", "tesoura"];
        game["spock"] = [];
        game["spock"]["wins"] = ["pedra", "tesoura"];
        game["spock"]["loses"] = ["lagarto", "papel"];


        if(computer == user.value){ //empate
            result.innerHTML = `Empate! Joque novamente! </br>`;
            img.src = "https://media.giphy.com/media/l4Ep4U19zwmUfWH72/giphy.gif";
            result.appendChild(img);
           
        } else if (game[computer]["wins"].includes(user.value)) { //usuário ganha
            result.innerHTML = `${name.value} você perdeu! O computador escolheu ${computer} </br>`;
            img.src = "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif";
            result.appendChild(img);

        } else { //usuário ganhou
            result.innerHTML = `${name.value} você ganhou! O computador escolheu ${computer} </br>`
            img.src = "https://media.giphy.com/media/DmzQ4iPMyUScw/giphy.gif";
            result.appendChild(img);
        }
    
    });

});


