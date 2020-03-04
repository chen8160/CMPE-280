$(init);

function init() {

    $(".dragMe").draggable();
    $("#target").droppable();

    $("#target").bind("drop", highlightTarget);
    $("#target").bind("dropout", resetTarget);
}

function highlightTarget(event, ui) {
    $("#target").addClass("ui-state-highlight")
        .html("Dropped ")
        .append(ui.draggable.text());
}

function resetTarget(event, ui) {
    $("#target").removeClass("ui-state-highlight")
        .html("Drop on me");
}