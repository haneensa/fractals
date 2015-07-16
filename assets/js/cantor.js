// fillRect(x, y, width, height)
// strokeRect(x, y, width, height)
// clearRect(x, y, width, height)
// arc(x, y, r, sAngle, eAngle, counterclockwise)
// moveTo(x, y) moves the pencil to the specified starting point
// lineTo(x, y) draws a line to the specified ending point
// fillText('text', x, y)
// double buffering
function layout(ctx) {
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
} 

function line(ctx, x, y, len) {
	ctx.beginPath();
	ctx.moveTo(x, y);
 	ctx.lineTo(x + len, y);
 	ctx.strokeStyle = "#1EBAAB";
 	ctx.stroke();
}
 
function cantor(ctx, x, y, len) {
	if (len >= 1) {
		line(ctx, x, y, len);
		y += 20;

		cantor(ctx, x, y, len/3);
		cantor(ctx, x+len*2/3, y, len/3);
	}
}


var canvas = document.getElementById("cantor");
var context = null;

if (canvas && canvas.getContext('2d') ){
	context = canvas.getContext('2d');
	layout(context);
	cantor(context, 10, 200, 530);
}

