window.addEventListener('DOMContentLoaded', function () {
    const houseOptions = [];
    // popular os radios no HTML pelo JS - innerText
    houseOptions["gryffindor"] = [];
    houseOptions["gryffindor"]["name"] = "Grifinória";
    houseOptions["gryffindor"]["items"] = ["frances", "suico", "rosbife", "mostarda", "tostado"];
    houseOptions["gryffindor"]["score"] = 0;
    houseOptions["gryffindor"]["gif"] = 'https://media.giphy.com/media/40KXzKllSl6ve/giphy.gif';
    houseOptions["slytherin"] = [];
    houseOptions["slytherin"]["name"] = "Sonserina";    
    houseOptions["slytherin"]["items"] = ["italiano", "mussarela", "presunto", "maionese", "frio"];
    houseOptions["slytherin"]["score"] = 0;
    houseOptions["slytherin"]["gif"] = 'https://media.giphy.com/media/4E1Yw7cA5DYwU/giphy.gif';
    houseOptions["hufflepuff"] = [];
    houseOptions["hufflepuff"]["name"] = "Lufa-lufa";
    houseOptions["hufflepuff"]["items"] = ["integral", "cheddar", "jaca", "barbecue", "tostado"];
    houseOptions["hufflepuff"]["score"] = 0;
    houseOptions["hufflepuff"]["gif"] = 'https://media.giphy.com/media/1UAIoVWRhtjhe/giphy.gif';
    houseOptions["ravenclaw"] = [];
    houseOptions["ravenclaw"]["name"] = "Corvinal";
    houseOptions["ravenclaw"]["items"] = ["granola", "vegano", "atum", "parmesao", "frio"];
    houseOptions["ravenclaw"]["score"] = 0;
    houseOptions["ravenclaw"]["gif"] = 'https://media.giphy.com/media/BxYmEq7Ksqlbi/giphy.gif';
    const submit = document.getElementById('submit');
    const bread = document.getElementsByName("bread"); 
    const cheese = document.getElementsByName("chesse");
    const protein = document.getElementsByName("protein");
    const sauce = document.getElementsByName("sauce");
    const type = document.getElementsByName('type');
    const finalResult = document.getElementById("result");
    const img = document.createElement('img');
    let itemsList = [];

    function getRadioValue(radioGroup){
        for(let i = 0; i < radioGroup.length; i++ ){
            if(radioGroup[i].checked){
                itemsList.push(radioGroup[i].value);
            }
        }
        
    };

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
                return key;
            }
        };
    };
    
    submit.addEventListener("click", function(){

        getRadioValue(bread, cheese, protein, sauce, type);
        addScore(itemsList);
        let winnerHouse = getMaxScoreHouse()
        finalResult.innerHTML = houseOptions[winnerHouse]["name"];
        img.src = houseOptions[winnerHouse]["gif"];
        finalResult.append(img);
   

    });

});

