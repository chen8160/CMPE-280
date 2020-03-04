$(init);

function init() {
    $("#tabs").tabs();
    $("#datePicker").datepicker();
    $("#slider").slider().bind("slide", reportSlider);
    $("#selectable").selectable();
    $("#sortable").sortable();
    $("#rateButton").click(showResult);
}

function reportSlider() {
    var sliderVal = $("#slider").slider("value");
    $("#sliderOutput").html(sliderVal);
}

function showResult() {
    alert('Thank you for rating us 100 points!')
}