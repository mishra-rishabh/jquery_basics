$(document).ready(function() {
    /*
        it will display the width and height of the window when it is resized
    */
    $(window).resize(function() {
        var width = window.outerWidth;
        var height = window.outerHeight;
        var displayText = "Window width: " + width + ", Window height: " + height;
        
        $('#myHeading').html(displayText);
    });

    
    /*
        it will display the number of times the box is scrolled when element of id box1 is scrolled,
        and then element with id testHeading will change
    */
    var x = 0;

    $('#box1').scroll(function() {
        x += 1;
        let displayText = "Box is scrolled: " + x + " times";
        $('#testHeading').html(displayText);
    });
});