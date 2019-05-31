const name = document.getElementById('name');
const submitName = document.getElementById('submit-name');
const userBox = document.getElementById('user-content');
const gameBox = document.getElementById('game-content');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const symbols = [
    {
        name: "pedra",
        wins: ["lagarto", "tesoura"],
    },
    {
        name: "papel",
        wins: ["pedra", "spock"]
    },
    {
        name: "tesoura",
        wins: ["papel", "lagarto"]
    },
    {
        name: "lagarto",
        wins: ["papel", "spock"]
    },
    {
        name: "spock",
        wins: ["pedra", "tesoura"]
    }
];

function game() {
    const user = document.getElementById('user-input');
    const symbolOptions = ["pedra", "papel", "tesoura", "lagarto", "spock"];
    let computer = symbolOptions[Math.floor(Math.random() * symbolOptions.length)];
    console.log(computer)
    if (computer == user.value) { //empate
        return `
            
            <p>Empate! Joque novamente!</p>
            <img src="https://media.giphy.com/media/l4Ep4U19zwmUfWH72/giphy.gif">
            
        `
    } else {
        return symbols.map(symbol => {
            if (computer == symbol.name) {
                if (symbol.wins.includes(user.value)) {
                    return `
                        <p>você perdeu! O computador escolheu ${computer}</p>
                        <img src="https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif">
                    `
                } else {
                    return `
                        <p>você ganhou! O computador escolheu ${computer}</p>
                        <img src="https://media.giphy.com/media/DmzQ4iPMyUScw/giphy.gif">
                    
                    `
                }
            }
        }).join('');
        
    }


};



window.addEventListener('keypress', function (event) {
    if (event.key == "Enter") {
        document.querySelector(".result").innerHTML = game()
    };
});



window.addEventListener(onload, function () {
    submit.addEventListener("click", function () {
        document.querySelector(".result").innerHTML = game()
    });

});