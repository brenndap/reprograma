function calculaIMC() {
    var altura = document.getElementById("altura").value;
    var peso = document.getElementById("peso").value;
    var calculo = (peso/(altura * altura)).toFixed(2);
    var text;
    var resposta = document.getElementById("resultado");
    var gifContent = document.getElementById("gif-content");
    var gif ;
    var cssClass;

    if(calculo < 18.5) {
        text = "Uma deusa!🎵";
        gif = `<img src="https://media.giphy.com/media/3ornjVEDmHQqVgF0Ri/giphy.gif">`;
        cssClass = "linha1";
        //document.getElementById("resultado").innerHTML = '<img src="https://media.giphy.com/media/3ornjVEDmHQqVgF0Ri/giphy.gif">';
    }
    else if(calculo>=18.5 && calculo<24.9){
        text = "Uma louca!🎵";
        gif = `<img src="https://media.giphy.com/media/l46CdUTy21h8wwrAs/giphy.gif">`;
        cssClass = "linha2";
        //document.getElementById("resultado").innerHTML = '<img src="https://media.giphy.com/media/l46CdUTy21h8wwrAs/giphy.gif">';
    }
    else if(calculo>=24.9 && calculo<29.9) {
        text = "Uma feiticeira!🎵";
        gif = `<img src="https://media.giphy.com/media/l0MYJSF3O2rqzjzCE/giphy.gif">`;
        cssClass = "linha3"
        //document.getElementById("resultado").innerHTML = '<img src="https://media.giphy.com/media/l0MYJSF3O2rqzjzCE/giphy.gif">';
    }
    else if(calculo >=29.9 && calculo < 40){
        text = "Ela é demais!🎵";
        gif = `<img src="https://media.giphy.com/media/l0MYJFQxqd74aKpQk/giphy.gif">`;
        cssClass = "linha4"
        //document.getElementById("resultado").innerHTML = '<img src="https://media.giphy.com/media/l0MYJFQxqd74aKpQk/giphy.gif">';
    }
    else {
        text = "Meu deus, ela é demais🎵";
        gif = `<img src="https://media.giphy.com/media/l46CuZDkPBa7XzI6A/giphy.gif">`
        cssClass = "linha5"
        //document.getElementById("resultado").innerHTML = '<img src="https://media.giphy.com/media/l46CuZDkPBa7XzI6A/giphy.gif">';
 
    }

    resposta.innerHTML = calculo + " - " + text;
    resposta.className = cssClass;
    gifContent.innerHTML = gif;
}



/* <img src="https://media.giphy.com/media/3ornjVEDmHQqVgF0Ri/giphy.gif">
<img src="https://media.giphy.com/media/l46CdUTy21h8wwrAs/giphy.gif" >
<img src="https://media.giphy.com/media/l0MYJSF3O2rqzjzCE/giphy.gif" >
<img src="https://media.giphy.com/media/l0MYJFQxqd74aKpQk/giphy.gif" > */

