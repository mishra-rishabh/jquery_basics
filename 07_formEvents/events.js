$(document).ready(function() {
    /*
        myName, myEmail, myCity id wale elements me click krte hi unka background color change ho jayega
    */
    $('#myName, #myEmail, #myCity').focus(function() {
        $(this).css("background", "yellow");
    });

    /*
        myName, myEmail, myCity id wale elements ke bahar click krte hi unka
        background color change ho jayega
    */
    $('#myName, #myEmail, #myCity').blur(function() {
        $(this).css("background", "green");
    });

    /*
        myCity id wale element me jaise hi koi city select karenge to myTestHeading
        wale element ki html change hogi
    */
    $('#myCity').change(function() {
        var cityVal = "I live in " + $('#myCity').val();
        $('#myTestHeading').html(cityVal);
    });

    /*
        #myName, #myEmail id wale elements ka text select karenge to ye
        event trigger hoga aur uska background color change ho jayega
    */
    $('#myName, #myEmail').select(function() {
        $(this).css("background", "purple");
    });

    /*
        form me submit button ko click karenge to ye event trigger hoga
    */
    $('#myForm').submit(function() {
        alert("Your details were submitted successfully");
    });
});