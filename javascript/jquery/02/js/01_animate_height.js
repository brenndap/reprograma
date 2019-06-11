$(document).ready(function(){
    $('#animate').click(function(){
        $('#content').animate({ "height":"200px"}, "slow"),

        function(){
            $('#content').animate({ "height":"30px"}, "slow");
        }
        
    })

});