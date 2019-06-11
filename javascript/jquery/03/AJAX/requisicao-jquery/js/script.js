$(document).ready(function(){
    $.ajax({
        url: "https://localhost:3000",
        type: "GET",
        success: function (photos) {
            $(photos).each( function(){
                let container =$("<div>");
                container.attr("class", "data" + this.id);
                let photoTitle = $("<h2>").text(this.title);
                let photoImg = $("<img>").attr("src", this.url);

                container.append(photoTitle);
                container.append(photoImg);

                $("#root").append(container);
            });

        }, 
        error: function(req){
            $("#root").append($("<img>").attr("src", `https://http.cat/${req.status}`));

        }
    });
});