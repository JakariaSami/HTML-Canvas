var canvas = document.querySelector('.draw');
var colorInput = document.querySelector('.color');
var lineInput = document.querySelector('.line');

var line = lineInput.value;
var color = colorInput.value;

var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = color;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = line;


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
    if(!isDrawing) return; // Stop the function from running when they are not moused down.

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    lastX= e.offsetX;
    lastY= e.offsetY;
    hue++;
    if(hue >= 360) {
        hue=0;
    }
}

canvas.addEventListener('mousedown', (e)=> {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
    draw(e)
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=> isDrawing = false);
canvas.addEventListener('mouseout', ()=> isDrawing = false);


// Change Line-Width
function updateLineWidth() {
    line = this.value;
    ctx.lineWidth = line;
}
lineInput.addEventListener('change', updateLineWidth);


// Change Line-Color
function updateColor() {
    color = this.value;
    ctx.strokeStyle = color;
}
colorInput.addEventListener('change', updateColor);