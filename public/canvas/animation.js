// set up initial variables
function init1() {

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 200);
    ctx.stroke();

    function drawCircle(x1) {
        ctx.beginPath();
        // ctx.arc(x, 100, 10, 0, 2 * Math.PI);
        ctx.font = "30px Arial";
        ctx.fillText("Welcome!", x1, 50);
        // ctx.fillStyle = "red";
        // ctx.fill();
    }

    var x1 = 0;
    setInterval(function () {
        ctx.clearRect(0, 0, 200, 200);
        drawCircle((x1 % 350) - 150);
        x1++;
    }, 25);

}


const CANVAS_W = 200;
const CANVAS_H = 200;
const IMAGE_W = 50;
const IMAGE_H = 50;
const RIGHT = CANVAS_W - IMAGE_W;
const BOTTOM = CANVAS_H - IMAGE_H;

var con;
var image;

var x = 0;
var y = 0;
var dx = 10;
var dy = 7;

function init2() {
    con = document.getElementById("canvas")
        .getContext("2d");
    con.strokeStyle = "black";
    con.fillStyle = "white";

    image = new Image();
    image.src = "images/dog.jpg";

    setInterval(draw, 50);
}

function draw() {
    con.fillRect(0, 0, CANVAS_W, CANVAS_H);
    con.strokeRect(0, 0, CANVAS_W, CANVAS_H);

    con.drawImage(image, x, y, IMAGE_W, IMAGE_H);

    x += dx;
    y += dy;

    // Bounce off a wall
    if ((x < 0) || (x > RIGHT)) dx = -dx;
    if ((y < 0) || (y > BOTTOM)) dy = -dy;
}


function initDouble() {
    init1();
    init2();
}