var elogios = [
    "diva sem defeitos",
    "Não é github, mas é gatinho",
    "Máquina de vencer",
    "Ícone incompreendido",
    "Responsivo",
    "Fada sensata", 
    "Cristal sensato",
    "Maravigold",
    "Jóia rara", 
    "Bombozinho",
    "Um pão"   

]

function elogiar() {
    var random = Math.floor(Math.random() * elogios.length);
    document.getElementById("titulo").innerHTML = elogios[random];
}
