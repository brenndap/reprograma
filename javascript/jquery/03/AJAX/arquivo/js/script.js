function cardLoad(){
    $.getJSON("tarot.json", changeCard);
}

function changeCard(cards, status){
    if (status == "success"){
        let randomNumber = Math.floor(Math.random() * cards.length);
        let card = cards[randomNumber];
        $(".titulo").text(card.nome);
        $(".image").attr("src", card.imagem);
        $(".tipo").text(card.tipo);
        $(".descricao").text(card.descricao);
        $(".saiba-mais").attr("href", card.link);
    } else {
        $(".mensagem").text("Não foi possível carregar a carta!");
    }
}

$(document).ready(function(){
    cardLoad();
    $("#novaCarta").click(cardLoad);
});