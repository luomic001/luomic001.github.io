//CONSTANTS
var CANVAS_WIDTH = 800, CANVAS_HEIGHT = 600, NANONAUT_WIDTH = 181, NANONAUT_HEIGHT = 229, GROUND_Y = 540;
//SETUP
var canvas = document.createElement('canvas');
var c = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
document.body.appendChild(canvas);

var square = newImage();
square.src = 'square.jpg'

var nanonautX = 50;
var nanonautY = 40;

window.addEventListener('load', start);

function start() {
    window.requestAnimationFrame(mainLoop);
}
//MAIN LOOP
function mainLoop() {
    update();
    draw();
    window.requestAnimationFrame(mainLoop);
}
//PLAYER INPUT
//UPDATING
function update() {

}
//DRAWING
function draw() {
    c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    c.drawImage(nanonautImage, nanonautX, nanonautY);
}