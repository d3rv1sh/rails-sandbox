
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
    $("#header_menu_" + chapter).addClass('current');
});
