
var c = document.getElementById("triangle");
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
 