// Adding the toggle effect.
$(document).ready(function() {
    $(".icon2").click(function() {
        $("p.DEVELOPMENT").fadeToggle();
        $(".icon2").hide();
    });
    $("p.DEVELOPMENT").click(function() {
        $(".icon2").fadeToggle();
        $("p.DEVELOPMENT").hide();
    });
});
$(document).ready(function() {
    $(".icon3").click(function() {
        $("p.PRODUCT-MANAGEMENT").fadeToggle();
        $(".icon3").hide();
    });
    $("p.PRODUCT-MANAGEMENT").click(function() {
        $(".icon3").fadeToggle();
        $("p.PRODUCT-MANAGEMENT").hide();
    });
});
$(document).ready(function() {
    $(".icon1").click(function() {
        $("p.DESIGN").fadeToggle();
        $(".icon1").hide();
    });
    $("p.DESIGN").click(function() {
        $(".icon1").fadeToggle();
        $("p.DESIGN").hide();
    });
});
// working the form

function submitForm(event) {

    var form = new FormData(event.target);
    var name = $("input#name").val();
    var email = $("input#email").val();
    var comment = $("textarea#message").val();
        if($("input#name").val() && $("input#email").val()) {
            alert(name +" "+ "we have received your message. Thankyou for reaching out to us");
        }else {
            alert("please enter your name and email");
        }

        event.preventDefault();
} 
// Adding the hover effect.
$(document).ready(function() {
    $(".work4").hover(function() {
        $(".ptag").fadeToggle(2500);
    })
})