//http://processingjs.org/learning/topic/koch/
var c = document.getElementById("koch");
var context = c.getContext('2d');

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

var depth = 0;



function init(){
    context.clearRect(0, 0, 500, 550);
    background(500, 550, context);
    context.beginPath();
    context.stroke();
    context.closePath();
    fractal([50,150], [500,150], depth);
    fractal([270,490], [50,150], depth);
    fractal([500,150],[270,490], depth);
};

c.addEventListener("mousemove", update, false);

function update(e){
    depth++ ;
    depth %= 6;
    init();
}

init();
function fractal(A, B, depth){
    if (depth < 0){
        return null;                
    }
    var C = divide(add(multiply(A, 2), B), 3);
    var D = divide(add(multiply(B, 2), A), 3);
    var F = divide(add(A, B), 2);

    var V1 = divide(minus(F, A), length(F, A));
    var V2 = [V1[1], -V1[0]];

    var E = add(multiply(V2, Math.sqrt(3)/6 * length(B, A)), F);

    DrawLine(A, B, "#1EBAAB");

    if (depth !=0){
        for (var i=0;i<10;i++)
            DrawLine(C, D, "white");
    };

    fractal(A, C, depth-1);
    fractal(C, E, depth-1);
    fractal(E, D, depth-1);
    fractal(D, B, depth-1);
};

function multiply(v, num){
        return [v[0]*num, v[1]*num];
};

function divide(v, num){
        return [v[0]/num, v[1]/num];
};
 
function add(a, b){
        return [a[0]+b[0], a[1]+b[1]];
};

function minus(a, b){
        return [a[0]-b[0], a[1]-b[1]];
};

function length(a, b){
        return Math.sqrt(Math.pow(a[0] - b[0],2) + 
                                     Math.pow(a[1] - b[1],2));
};

function DrawLine(a, b, c){
    context.beginPath();
    context.strokeStyle = c;
    context.moveTo(a[0], a[1]);
    context.lineTo(b[0], b[1]);
    context.stroke();
    context.closePath();
};

