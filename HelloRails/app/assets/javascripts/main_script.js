
$(document).ready(function() {
    try {
        $('#slider').s3Slider({
            timeOut: 8000       // slider timeout setting
        });
    }
    catch (err){
        // No slider
    }

    //underline current button
    var current = $("#header_menu_" + chapter);
    current.addClass('current');

     $("#sign_form").hide();
     $('#header_menu_sign_in').click(function () {
         $("#sign_form").show();
    });
});
