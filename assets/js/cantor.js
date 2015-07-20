var canvas = document.getElementById("cantor");
var context = null;

function init() {
    if (canvas && canvas.getContext('2d') ) {
        context = canvas.getContext('2d');
        draw();
    }
}

function draw() {
        context.clearRect(0, 0, context.width, context.height);
        background(500, 550, context);
        cantor(context, 10, 200, 530);

}

init();

function background(width, height, ctx) {
    for (var x = 0.5; x < height; x += 10) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, width);
    }

    for (var y = 0.5; y < width; y += 10) {
        ctx.moveTo(0, y);
        ctx.lineTo(height, y);
    }

    ctx.strokeStyle = "#eee";
    ctx.stroke();
}

function line(ctx, x, y, len) {
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.moveTo(x, y);
 	ctx.lineTo(x + len, y);
 	ctx.strokeStyle = "#1EBAAB";
 	ctx.stroke();
}
 
function cantor(ctx, x, y, len) {
	if (len < 1) {
	    return null
    }

    line(ctx, x, y, len);
    y += 20;

    cantor(ctx, x, y, len/3);
    cantor(ctx, x+len*2/3, y, len/3);
}
