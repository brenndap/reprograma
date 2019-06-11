$(document).ready(function(){
//function cardLoad(){
    // $.get("http://localhost:3000/cartas", changeCard);
    $.ajax({
        url: "https://localhost:3000/cartas",
        type: "GET",
        success: function (cards){
            // if (status == "success"){
                let randomNumber = Math.floor(Math.random() * cards.length);
                let card = cards[randomNumber];
                $(".titulo").text(card.nome);
                $(".image").attr("src", card.imagem);
                $(".tipo").text(card.tipo);
                $(".descricao").text(card.descricao);
                $(".saiba-mais").attr("href", card.link);
            //} else {
            //     $(".mensagem").text("Não foi possível carregar a carta!");
            // };
        },
        error: function(req){
            $("#root").append($("<img>").attr("src", `https://http.cat/${req.status}`));}
    });
});

// function changeCard(cards, status){
//     // if (status == "success"){
//         let randomNumber = Math.floor(Math.random() * cards.length);
//         let card = cards[randomNumber];
//         $(".titulo").text(card.nome);
//         $(".image").attr("src", card.imagem);
//         $(".tipo").text(card.tipo);
//         $(".descricao").text(card.descricao);
//         $(".saiba-mais").attr("href", card.link);
//     //} else {
//     //     $(".mensagem").text("Não foi possível carregar a carta!");
//     // };
// };

// $(document).ready(function(){
//     cardLoad();
//     $("#novaCarta").click(cardLoad);
// });


// $(document).ready(function(){
//     $.ajax({
//         url: "https://localhost:3000",
//         type: "GET",
//         success: function (photos) {
//             $(photos).each( function(){
//                 let container =$("<div>");
//                 container.attr("class", "data" + this.id);
//                 let photoTitle = $("<h2>").text(this.title);
//                 let photoImg = $("<img>").attr("src", this.url);

//                 container.append(photoTitle);
//                 container.append(photoImg);

//                 $("#root").append(container);
//             });

//         }, 
//         error: function(req){
//             $("#root").append($("<img>").attr("src", `https://http.cat/${req.status}`));

//         }
//     });
// });