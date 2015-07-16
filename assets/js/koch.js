
var c = document.getElementById("koch");
var ctx = c.getContext('2d');

for (var x = 0.5; x < 550; x += 10) {
  ctx.moveTo(x, 0);
  ctx.lineTo(x, 450);
}

for (var y = 0.5; y < 450; y += 10) {
  ctx.moveTo(0, y);
  ctx.lineTo(550, y);
}

ctx.strokeStyle = "#eee";
ctx.stroke();
 
function circle(x, y, r) {
	ctx.beginPath();
	ctx.strokeStyle = "#1DBBCB";
	ctx.arc(x,y,r,0,Math.PI*2,true); // Outer circle
	ctx.stroke();
}

function drawcircle(x, y, r) {
	circle(x, y, r);
	if (r > 8) {
		drawcircle(x + r/2, y, r/2);
		drawcircle(x - r/2, y, r/2);
		drawcircle(x , y + r/2, r/2);
		drawcircle(x, y - r/2, r/2);
	}

}  
drawcircle(550/2, 450/2, 200);
 