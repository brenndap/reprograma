const radioGroups = [
    {
        fieldTitle: "Escolha um tipo pão:",
        value: ["frances", "italiano", "integral", "granola"],
        title: ["Francês", "Italiano", "Integral", "Granola Salgada"],
        name: "bread"
    },
    {
        fieldTitle: "Escolha um tipo de queijo:",
        value: ["suico", "mussarela", "cheddar", "vegano"],
        title: ["Suíço", "Mussarela", "Cheddar", "Queijo vegano"],
        name: "cheese"
    },
    {
        fieldTitle: "Escolha um tipo de proteína:",
        value: ["rosbife", "presunto", "jaca", "atum"],
        title: ["Rosbife", "Presunto", "Jaca", "Atum"],
        name: "protein"
    },
    {
        fieldTitle: "Escolha um tipo de molho:",
        value: ["mostarda", "maionese", "barbecue", "parmesao"],
        title: ["Mostarda e mel", "Maionese", "Barbecue", "Parmesão"],
        name: "sauce"
    },
    {
        fieldTitle: "Como você quer seu sanduíche:",
        value: ["tostado", "frio"],
        title: ["Tostado", "Frio"],
        name: "type"
    }

]


function addField() {
    return radioGroups.map(radio => {
        return `
        <div class="input-container" id="${radio.name}">
            <h2>${radio.fieldTitle}</h2>
            <fieldset class="fieldset">

            </fieldset>
        </div>
        `
    });
};

function addInput() {
    return radioGroups.map(radio => radio.value.map(value => {
        return `
            
            'radio.title'
            `
    })
    )};

document.querySelector(".container").innerHTML += addField();
document.querySelector(".input-container").innerHTML += addInput();

// <input  type="radio" name="" value="${value}">${radio.title} <br>