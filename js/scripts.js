function sendMessage() {
    var name = document.getElementById("nameID").value;
    var email = document.getElementById("emailID").value;
    var message = document.getElementById("messageID").value;

    console.log(name);
    console.log(email);
    console.log(message);

    console.log("Check to see if fields are filled correctly, then send message.");

    alert("Your message was sent!");
    /*
    'https://maker.ifttt.com/trigger/WebsiteMessageSubmit/with/key/dYcZmnn4JQzALBO6_hpQvd?value1='+ NAME from EMAIL +'&value2=' + MESSAGE
    */
}
/* Navigation bar scripts */
function loadNavBar() {
    $("#nav-placeholder").load("navbar.html");
}

$(window).scroll(function() {
    if (!$("#mainListDiv").hasClass("show_list")) {
        if ($(document).scrollTop() > 50) {
            $('.nav').addClass('affix');
            console.log("OK");
        } else {
            $('.nav').removeClass('affix');
        }
    }
});