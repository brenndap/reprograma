window.addEventListener('DOMContentLoaded', function() {
    const dogs = ["Dakota", "Arizona", "Gloria", "Rex", "Bolinha"];
    
    document.getElementById('title').innerHTML = `O array dogs tem ${dogs.length} itens`;
    let names = document.getElementById("names");
    
    dogs.forEach(function(dog){
        //names.innerHTML =  names.innerHTML + `${dog}` + `</br>`;
        names.innerHTML += `${dog}` + `</br>`;
    })


});
