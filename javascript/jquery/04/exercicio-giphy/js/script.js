$(document).ready(function () {
    $("#btn-busca").click(function (e) {
        e.preventDefault();
        $(".area-gif").html("");
        let usuario = $("#campo-busca").val();
        const token = "syi5BZ0A3UPhO2nA3bPDZkDv1KhPDtk0";
        $.ajax({
            url: `http://api.giphy.com/v1/gifs/search?q=${usuario}&api_key=${token}&limit=60&`,
            type: "GET",
            success: function(gifs){
                $(gifs.data).each(function(){
                    $(".area-gif").append($("<img>").attr("src", this.images.fixed_width.url));

                });
                
            }, 
            error: function(req){
                $("body").append($("<img>").attr("src", `https://http.cat/${req.status}`));
                
            }
        });
  
    });
});



//liatoralesp2603@gmail.com 

