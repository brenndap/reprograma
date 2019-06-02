const cards = [
    {
        titulo: "Universidade Lovelace",
        frase: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, tempore obcaecati. Totam quam numquam aliquam in maiores nesciunt voluptas vitae odio, non dolores soluta iure quia cumque temporibus.",
        nome: "Aluna reprograma 1",
        cargo: "Engenheira da Nasa"
    },
    {
        titulo: "Universidade Lovelace",
        frase: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, tempore obcaecati. Totam quam numquam aliquam in maiores nesciunt voluptas vitae odio, non dolores soluta iure quia cumque temporibus.",
        nome: "Aluna reprograma 2",
        cargo: "Engenheira da Nasa"
    },
    {
        titulo: "Universidade Lovelace",
        frase: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, tempore obcaecati. Totam quam numquam aliquam in maiores nesciunt voluptas vitae odio, non dolores soluta iure quia cumque temporibus.",
        nome: "Aluna reprograma 3",
        cargo: "Engenheira da Nasa"
    },
    {
        titulo: "Universidade Lovelace",
        frase: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, tempore obcaecati. Totam quam numquam aliquam in maiores nesciunt voluptas vitae odio, non dolores soluta iure quia cumque temporibus.",
        nome: "Aluna reprograma 4",
        cargo: "Engenheira da Nasa"
    },
    {
        titulo: "Universidade Lovelace",
        frase: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, tempore obcaecati. Totam quam numquam aliquam in maiores nesciunt voluptas vitae odio, non dolores soluta iure quia cumque temporibus.",
        nome: "Aluna reprograma 4",
        cargo: "Engenheira da Nasa"
    }

]

function addCard() {
    return cards.map(card => {
        return `
        <article class="depoimentos__alunas">
            <h5 class="universidade">${card.titulo}</h5>
            <blockquote class="frase">${card.frase}</blockquote>
            <h6 class="nome">${card.nome}</h6>
            <p class="cargo">${card.cargo}</p>
        </article>`
    }).join('');
};


document.querySelector('.depoimentos').innerHTML += addCard();
