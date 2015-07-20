var canvas = document.getElementById("triangle");
var ctx = canvas.getContext('2d');
var width = canvas.width;
var height = canvas.height;

/* an equilateral triangle is a triangle with all side of equal lenght */
function triangle(ctx, length) {
    var h = length * (Math.sqrt(3)/2);
    ctx.strokeStyle = "#1EBAAB";
    ctx.fillStyle = "#1EBAAB";
    ctx.beginPath();
    ctx.moveTo(0, -h / 2);
    ctx.lineTo(-length/2, h/2);
    ctx.lineTo(length/2, h/2);
    ctx.lineTo(0, -h/2);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}
function clear(ctx, length) {
    var h = length * (Math.sqrt(3)/2);
    ctx.strokeStyle = "#1EBAAB";
    ctx.fillStyle = "#FFF";
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(length/2, -h/2);
    ctx.lineTo(-length/2, -h/2);
    ctx.lineTo(0, h/2);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}
ctx.translate(width/2, height/2);
triangle(ctx, 400);
ctx.translate(0, 85);
clear(ctx, 200);


function fractal() {
// draw triangle 
// subdivide it into four triangles
// remove the middle one
}
