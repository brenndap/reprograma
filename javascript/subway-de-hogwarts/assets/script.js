window.addEventListener('DOMContentLoaded', function () {
    const houseOptions = [];
    /*
    Não sei se você já viu, mas talvez inserir as casas em Objetos deixe o código mais fácil de navegar. O que eu pensei foi fazer um objeto pra cada casa, como o exemplo abaixo:

    grifinoriaHouse = {
        items: ["frances", "suico", "rosbife", "mostarda", "tostado"],
        score: 0,
        gif: 'https://media.giphy.com/media/40KXzKllSl6ve/giphy.gif'
    }
    */
    houseOptions["Grifinória"] = [];
    houseOptions["Grifinória"]["items"] = ["frances", "suico", "rosbife", "mostarda", "tostado"];
    houseOptions["Grifinória"]["score"] = 0;
    houseOptions["Grifinória"]["gif"] = 'https://media.giphy.com/media/40KXzKllSl6ve/giphy.gif';
    houseOptions["Sonserina"] = [];
    houseOptions["Sonserina"]["items"] = ["italiano", "mussarela", "presunto", "maionese", "frio"];
    houseOptions["Sonserina"]["score"] = 0;
    houseOptions["Sonserina"]["gif"] = 'https://media.giphy.com/media/4E1Yw7cA5DYwU/giphy.gif';
    houseOptions["Lufa-lufa"] = [];
    houseOptions["Lufa-lufa"]["items"] = ["integral", "cheddar", "jaca", "barbecue", "tostado"];
    houseOptions["Lufa-lufa"]["score"] = 0;
    houseOptions["Lufa-lufa"]["gif"] = 'https://media.giphy.com/media/1UAIoVWRhtjhe/giphy.gif';
    houseOptions["Corvinal"] = [];
    houseOptions["Corvinal"]["items"] = ["granola", "vegano", "atum", "parmesao", "frio"];
    houseOptions["Corvinal"]["score"] = 0;
    houseOptions["Corvinal"]["gif"] = 'https://media.giphy.com/media/BxYmEq7Ksqlbi/giphy.gif';
    const submit = document.getElementById('submit');
    const bread = document.getElementsByName("pao"); 
    const cheese = document.getElementsByName("queijo");
    const protein = document.getElementsByName("proteina");
    const sauce = document.getElementsByName("molho");
    const type = document.getElementsByName('tipo');
    const finalResult = document.getElementById("resultado");
    const img = document.createElement('img');
    let itemsList = [];

    function getRadioValue(radioGroup){
        for(let i = 0; i < radioGroup.length; i++ ){
            if(radioGroup[i].checked){
                /* return não é necessário aqui. Usamos o return quando precisamos usar o valor que a função cria, em outro lugar */
                return itemsList.push(radioGroup[i].value);
            }
        }
        
    }

    function addScore(itemsList){
        for(let i = 0; i < itemsList.length; i++ ){
            for(let key in houseOptions){
                if(houseOptions[key]["items"].includes(itemsList[i])){
                    houseOptions[key]["score"] += 1;
                }
            }
        };
   
    };

    function getMaxScoreHouse(){
        let scoreList = [];
        for(let key in houseOptions){
            scoreList.push(houseOptions[key]["score"]);
        }
        let maxScore = scoreList.reduce(function(a, b) {
            return Math.max(a, b);
        });
        for(let key in houseOptions){
            if(houseOptions[key]["score"] == maxScore){
                /* aqui é um bom exemplo do uso do return! O valor que o getMaxScoreHouse() gera é usado e guardado na variável let winnerHouse, por isso o return aqui é necessário */
                return key;
            }
        };
    }
    
    submit.addEventListener("click", function(){
        /* talvez exista uma maneira de reduzir e otimizar essa parte do getRadioValue */
        getRadioValue(bread);
        getRadioValue(cheese);
        getRadioValue(protein);
        getRadioValue(sauce);
        getRadioValue(type);
        addScore(itemsList);
        let winnerHouse = getMaxScoreHouse()
        finalResult.innerHTML = winnerHouse;
        img.src = houseOptions[winnerHouse]["gif"];
        finalResult.append(img);
    });

});

