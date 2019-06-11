window.addEventListener('DOMContentLoaded', function () {
    const houses = [
        {
            name: "Grifinória",
            items: ["frances", "suico", "rosbife", "mostarda", "tostado"],
            score: 0,
            gif: 'https://media.giphy.com/media/40KXzKllSl6ve/giphy.gif'
        },

        {
            name: "Sonserina",
            items: ["italiano", "mussarela", "presunto", "maionese", "frio"],
            score: 0,
            gif: 'https://media.giphy.com/media/4E1Yw7cA5DYwU/giphy.gif'
        },

        {
            name: "Lufa-Lufa",
            items: ["integral", "cheddar", "jaca", "barbecue", "tostado"],
            score: 0,
            gif: 'https://media.giphy.com/media/1UAIoVWRhtjhe/giphy.gif'
        },

        {
            name: "Corvinal",
            items: ["granola", "vegano", "atum", "parmesao", "frio"],
            score: 0,
            gif: 'https://media.giphy.com/media/BxYmEq7Ksqlbi/giphy.gif'
        }

    ];

    const submit = document.getElementById('submit');
    const bread = document.getElementsByName("bread");
    const cheese = document.getElementsByName("cheese");
    const protein = document.getElementsByName("protein");
    const sauce = document.getElementsByName("sauce");
    const type = document.getElementsByName('type');
    const finalResult = document.getElementById("result");
    let userItemsList = [];

    function getRadioValue(radioGroup) {
        Array.from(radioGroup).map(group => {
            if (group.checked) {
                userItemsList.push(group.value);
            };
        });
    };

    function score(userItemsList) {
        userItemsList.map(item => {
            houses.map(house => {
                if (house.items.includes(item)) {
                    house.score += 1;
                };
            });
        });
    };

    function getMaxScoreHouse() {
        let scoreList = houses.map(house => { return house.score });
        let maxScore = scoreList.reduce(function (a, b) { return Math.max(a, b)});
        
        for (key in houses) {
            if (houses[key].score == maxScore) {
                return houses[key].name;
            };
        };
    };

    function setGif() {
        return houses.map(house => {
            if (getMaxScoreHouse() == house.name) {
                return `<img src=${house.gif}>`
                         
            };
        }).join('');

    };

    submit.addEventListener("click", function () {
        getRadioValue(bread)
        getRadioValue(cheese)
        getRadioValue(protein)
        getRadioValue(sauce)
        getRadioValue(type);
        score(userItemsList);
        finalResult.innerHTML = getMaxScoreHouse();
        finalResult.innerHTML += setGif();
        userItemsList = []

    });
});

