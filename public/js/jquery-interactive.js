// $(init);

// function init() {
//     tabs();
//     dragdrop();
// }

// function tabs() {
// // export function tabs() {
//     console.log('running tabs')
//     $("#tabs").tabs();
// }

// function dragdrop() {
//     console.log('running dragdrop')
//     // cloneDragMe();

//     $(".dragMe").draggable();
//     $("#target").droppable();

//     $("#target").bind("drop", highlightTarget);
//     $("#target").bind("dropout", resetTarget);
// }

// // function cloneDragMe() {
// //     for (i = 1; i <= 4; i++) {
// //         zValue = 101 + i;
// //         xPos = 20 * i;
// //         yPos = 80 + 20 * i + "px";
// //         // $("div:first").clone()
// //         $(".dragdrop").clone()
// //             .insertAfter("div:first")
// //             .css("left", xPos)
// //             .css("top", yPos)
// //             .css("zIndex", zValue)
// //             .append(" #" + i);
// //     }
// // }

// function highlightTarget(event, ui) {
//     $("#target").addClass("ui-state-highlight")
//         .html("Dropped ")
//         .append(ui.draggable.text());
// }

// function resetTarget(event, ui) {
//     $("#target").removeClass("ui-state-highlight")
//         .html("Drop on me");
// }