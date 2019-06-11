// mudar o texto das li
// let lis = document.querySelectorAll("li");
// for(let i = 0; i < lis.lenght; i++){
//    lis[i].textContent = "batatinhas";
// }

// $("li").text("batatinhas");

// mudar o texto dos botões
// let btn = document.querySelectorAll("button");
// for(let i = 0; i < btn.length; i++){
//     btn[i].textContent = "batatinhas"
// };

// $("button").text("batatonas");
// $("div").text("div batatinhas");
// $(".lista1").find(".botao").text("lista 1");
// $(".lista2").find(".botao").text("lista 2");

function textChange(selector, newText){
    $(selector).text(newText);
};

function findTextChange(selector, find, newText ){
    $(selector).find(find).text(newText);
};

$(document).ready(function(){
    textChange("li", "li mudei pela function");
    textChange("button", "button mudei pela function");
    textChange("div", "div mudei pela function")
    findTextChange(".lista1", ".botao", "mudei pela findTextChange");
    
});
