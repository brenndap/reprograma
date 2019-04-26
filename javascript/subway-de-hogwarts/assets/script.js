window.addEventListener('DOMContentLoaded', function () {
    class House {
        constructor(name, items, score, gif) {
            this.name = name;
            this.items = items;
            this.score = score;
            this.gif = gif;
        }
        addScore() {
            this.score += 1
        }
    }
    const houses = [
        new House("Grifinória", ["frances", "suico", "rosbife", "mostarda", "tostado"], 0, 'https://media.giphy.com/media/40KXzKllSl6ve/giphy.gif'),
        new House("Sonserina", ["italiano", "mussarela", "presunto", "maionese", "frio"], 0, 'https://media.giphy.com/media/4E1Yw7cA5DYwU/giphy.gif'),
        new House("Lufa-Lufa", ["integral", "cheddar", "jaca", "barbecue", "tostado"], 0, 'https://media.giphy.com/media/1UAIoVWRhtjhe/giphy.gif'),
        new House("Corvinal", ["granola", "vegano", "atum", "parmesao", "frio"], 0, 'https://media.giphy.com/media/BxYmEq7Ksqlbi/giphy.gif')
    ]

    const submit = document.getElementById('submit');
    const bread = document.getElementsByName("bread");
    const cheese = document.getElementsByName("cheese");
    const protein = document.getElementsByName("protein");
    const sauce = document.getElementsByName("sauce");
    const type = document.getElementsByName('type');
    const finalResult = document.getElementById("result");
    const img = document.createElement('img');
    let itemsList = [];
    
    function getRadioValue(radioGroup) {
        for(let i = 0; i < arguments.length; i++){
            for (let i = 0; i < radioGroup.length; i++) {
                if (radioGroup[i].checked) {
                    itemsList.push(radioGroup[i].value);
                }
            }
        }
    };

    function score(itemsList) {

        for (let i = 0; i < itemsList.length; i++) {
            for(key in houses){
                if (houses[key].items.includes(itemsList[i])) {
                    houses[key].addScore();
                    
                }
            }
            
        };


    };

    function getMaxScoreHouse() {
        let scoreList = [];
        for (let i = 0; i < houses.length; i++) {
            scoreList.push(houses[i].score);
        }
        
        let maxScore = scoreList.reduce(function (a, b) { return Math.max(a, b); });

        for (let i = 0; i < houses.length; i++) {
            if (houses[i].score == maxScore) {
                return houses[i].name;
                
            }
        };
        
    };

    function setGif(){
        for(let i = 0; i < houses.length; i++){
            if(getMaxScoreHouse() == houses[i].name){
                return houses[i].gif;
            }
        }
    }

    submit.addEventListener("click", function () {
        getRadioValue(bread, cheese, protein, sauce, type);
        score(itemsList);
        finalResult.innerHTML = getMaxScoreHouse();
        img.src = setGif();
        finalResult.append(img);
        
    });
});


