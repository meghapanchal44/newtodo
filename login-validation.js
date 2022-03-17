$(document).ready(function () {
    $('#myform').validate({
        rules: {
            email: {
                required: true
            },
            fname: {
                required: true
            },
            lname: {
                required: true
            },
            checkbox: {
                required: true
            },
            messages: {
                email: {
                    required: "enter valid email"
                }

            }
        }
    })
    $('#submit').click(function () {
        $('#myform').submit()
        if ($('#myform').valid()) {
            window.location = "home_page.html"
            
        }
    });
});
function myFunction() {
    var x = document.getElementById("pswd");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}