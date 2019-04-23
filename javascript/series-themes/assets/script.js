window.addEventListener('DOMContentLoaded', function() {
    let musica;
    let play = document.getElementById("play");
    let stop = document.getElementById("stop");
    let pause = document.getElementById("pause");
    let previous = document.getElementById("previous");
    

    play.addEventListener('click', function(){
        musica = document.getElementById("audio");
        musica.play();
        document.getElementById("botao").src = "./assets/pause-button.png";
        document.getElementById("botao").setAttribute("onclick","pauseMusic()");
    })
        
    pause.addEventListener('click', function(){
        musica = document.getElementById("audio");
        musica.pause();
        document.getElementById("botao").src = "./assets/play-button.png";
        document.getElementById("botao").setAttribute("onclick","playMusic()");
    })    
    
    
    function stopMusic() {
        musica = document.getElementById("audio");
        musica.load();
        musica.pause();
        document.getElementById("botao").src = "./assets/play-button.png";
        document.getElementById("botao").setAttribute("onclick","playMusic()");
    }

    let musicasList = [
        "./assets/brooklyn-nine-nine.mp3",
        "./assets/friends.mp3",
        "./assets/stranger-things.mp3",
        "./assets/game-of-thrones.mp3"
    ]

    let wallpaperList = [
        "./assets/brooklin-nine-nine.jpg",
        "./assets/friends.jpg",
        "./assets/stranger-things.png",
        "./assets/game-of-thrones.jpg"
    ]

    function achaMusica() {
        musica = document.getElementById("audio").getAttribute("src");
        console.log(musica);
        return musicasList.indexOf(musica);
    }

    function nextMusic() {
        stopMusic();
        index = achaMusica();
        musica = document.getElementById("audio");
        musica.src =  musicasList[index + 1];
        document.getElementById("wallpaper").src = wallpaperList[index + 1];
        musica.play();
        document.getElementById("botao").src = "./assets/pause-button.png";
        document.getElementById("botao").setAttribute("onclick","pauseMusic()");

    }

    function previousMusic() {
        stopMusic();
        index = achaMusica();
        musica = document.getElementById("audio");
        musica.src =  musicasList[index - 1];
        document.getElementById("wallpaper").src = wallpaperList[index - 1];
        console.log(document.getElementById("wallpaper").src = wallpaperList[index - 1]);
        musica.play();
        document.getElementById("botao").src = "./assets/pause-button.png";
        document.getElementById("botao").setAttribute("onclick","pauseMusic()");
    }
});




