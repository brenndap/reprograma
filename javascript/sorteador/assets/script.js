var imagens = []; 

//imagens[0] = new Image();
imagens[0].src = "./img/rachel.jpg";

//imagens[1] = new Image();
imagens[1].src = "./img/chandler.png";

//imagens[2] = new Image();
imagens[2].src = "./img/monica.jpg";

//imagens[3] = new Image();
imagens[3].src = "./img/phoebe.jpg";

//imagens[4] = new Image();
imagens[4].src = "./img/ross.jpg";

//imagens[5] = new Image();
imagens[5].src = "./img/joey.jpeg";

var nomes = ["Rachel", "Chandler", "Mônica", "Phoebe", "Ross", "Joey"]


function friends() {
    var randomFriends = Math.floor(Math.random()*6);
    document.getElementById('imagem').src = imagens[randomFriends].src;
    document.getElementById('nome').innerHTML = nomes[randomFriends];
}

