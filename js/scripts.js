function sendMessage() {
    var name = document.getElementById("nameID").value;
    var email = document.getElementById("emailID").value;
    var message = document.getElementById("messageID").value;

    if (name.isEmpty() || email.isEmpty() || message.isEmpty()) {
        alert("There's a missing field!");
    } else if (isInvalidEmail(email)) {
        alert("Your email is invalid!");
    } else {
        console.log("send message");
        alert("Your message was sent!");
    }
    /*
    'https://maker.ifttt.com/trigger/WebsiteMessageSubmit/with/key/dYcZmnn4JQzALBO6_hpQvd?value1='+ NAME from EMAIL +'&value2=' + MESSAGE
    */
}

String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
}

function isInvalidEmail(emailAdress) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) { return false; } else { return true; }
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