$(init);

var showing = false;
var wrapped = false;

function init() {
    $("#contentYC").hide();
    $("#contentTC").hide();
    $("#contentXJ").hide();
    $("#contentXZ").hide();

    $("#toggleXJ").click(toggleXJ);
    $("#toggleXZ").click(toggleXZ);
    $("#slideToggle").click(slideToggle);
    $("#fadeToggle").click(fadeToggle);
}

function toggleXJ() {
    $("#contentXJ").toggle();
    showing = !showing;
}

function toggleXZ() {
    $("#contentXZ").toggle();
    showing = !showing;
}

function slideToggle() {
    $('#contentTC').slideToggle('medium');
    showing = !showing;
}

function fadeToggle() {
    $('#contentYC').fadeToggle('slow');
    showing = !showing;
}