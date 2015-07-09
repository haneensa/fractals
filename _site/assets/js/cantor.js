var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
 
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50); 