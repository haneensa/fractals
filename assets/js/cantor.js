// fillRect(x, y, width, height)
// strokeRect(x, y, width, height)
// clearRect(x, y, width, height)
// arc(x, y, r, sAngle, eAngle, counterclockwise)
// moveTo(x, y) moves the pencil to the specified starting point
// lineTo(x, y) draws a line to the specified ending point

/*
function draw() {
	var c = document.getElementById("cantor");
  var ctx = c.getContext('2d');
for (var i=0;i<6;i++){
      for (var j=0;j<6;j++){
        ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + 
                         Math.floor(255-42.5*j) + ')';
        ctx.beginPath();
        ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
        ctx.stroke();
      }
    }
}
*/

var c = document.getElementById("cantor");
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
 

function drawcircle(x, y, r) {
	ctx.beginPath();
	ctx.strokeStyle = "#1DBBCB";
	ctx.arc(x,y,r,0,Math.PI*2,true); // Outer circle
	ctx.stroke();
	if (r > 2) {
		drawcircle(x + r/2, y, r/2);
	}

}  
//drawcircle(200, 100, 100);
 
function line(x, y, len) {
	ctx.beginPath();
	ctx.moveTo(x, y);
 	ctx.lineTo(x + len, y);
 	ctx.strokeStyle = "#1EBAAB";
 	ctx.stroke();
}
 
function cantor(x, y, len) {
	if (len >= 1) {
		line(x, y, len);
		y += 20;

		cantor(x, y, len/3);
		cantor(x+len*2/3, y, len/3);
	}
}

cantor(10, 200, 530);
