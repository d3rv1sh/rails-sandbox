
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

    si = $("#header_menu_sign_in");
    so = $("#header_menu_sign_out");
    if (signed){
        si.hide();
        so.show();
    } else {
        so.hide();
        si.show();
    }
});
