const app = document.getElementById("root");
const container = document.createElement("div");
app.appendChild(container);

let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
request.onload = function () {
    let photos = JSON.parse(this.response);
    console.log(photos);
    if (request.status >= 200 && request.status < 400) {
        photos.forEach(function (photo) {
            const content = document.createElement("div");
            content.setAttribute("class", photo.id);

            const h2 = document.createElement("h2");
            h2.textContent = photo.title;

            const img = document.createElement("img");
            img.setAttribute("src", photo.url);


            container.appendChild(content);
            content.appendChild(h2);
            content.appendChild(img);});


    } else {
        const errorMessage = document.createElement('img');
        errorMessage.setAttribute("src", "http://http.cat/" + request.status);
        app.appendChild(errorMessage);
    }
};
request.send(); //executa a requisição

