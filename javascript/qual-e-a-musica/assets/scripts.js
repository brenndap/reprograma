window.addEventListener('DOMContentLoaded', function () {
    const start = document.getElementById("start");
    const tips = document.getElementById("tips");
    const img = document.createElement('img');
    const result = document.getElementById("result")
    const gifs = []
    gifs["gilmore-girls"] = "https://media.giphy.com/media/PphAYpCHITPiM/giphy.gif";
    gifs["friends"] = "https://media.giphy.com/media/oaEcH0gKPJ2wM/giphy.gif";
    gifs["mr-robot"] = "https://media.giphy.com/media/26BREubCKxCMTGNcQ/giphy.gif";

    const series = ["Gilmore Girls", "Friends", "Mr. Robot"];

    

    start.addEventListener("click", function () {
        //mostra os gifs
        setTimeout(function () {
            img.src = gifs["gilmore-girls"];
        }, 0);
        tips.appendChild(img);
        setTimeout(function () {
            img.src = gifs["friends"];
        }, 1500);
        tips.appendChild(img);
        setTimeout(function () {
            img.src = gifs["mr-robot"];
        }, 4000);
        tips.appendChild(img);
        
        //mostra o resultado
        setTimeout(function() {
            tips.style.display = "none";    
            series.forEach(function(serie){
                result.innerHTML += `${serie} </br>`;
            });
            result.style.display = "block";
        }, 8000);
    });
});

