//http://processingjs.org/learning/topic/koch/
function Koch() {
	this.depth = 4;
	this.count = 0;
	this.canvas = null;
	this.context = null;
	this.init = function() {
		this.canvas = document.getElementById("koch");
		if (this.canvas && this.canvas.getContext("2d")) {
			this.context = this.canvas.getContext('2d');
			var width = this.canvas.width;
			var height = this.canvas.height;
			var $this = this;
			this.canvas.addEventListener("mousemove", function() {
				$this.count++; // to slow down the change
				if ($this.count%10 == 0)
					$this.depth++;
				$this.depth %= 6;
				$this.draw(width, height, $this.context);
			}, false);
			this.draw(width, height, this.context);
		}
	}

	this.draw = function(w, h, ctx) {
		ctx.clearRect(0, 0, w, h);
		this.background(w, h, ctx);
		ctx.beginPath();
		ctx.stroke();
		ctx.closePath();
		this.koch([50,150], [500,150], this.depth, ctx);
		this.koch([270,490], [50,150], this.depth, ctx);
		this.koch([500,150],[270,490], this.depth, ctx);
	}

	this.background = function(w, h, ctx) {
		for (var x = 0; x < w; x += 10) {
			ctx.moveTo(x, 0);
			ctx.lineTo(x, h);
		}

		for (var y = 0; y < h; y += 10) {
			ctx.moveTo(0, y);
			ctx.lineTo(w, y);
		}

		ctx.strokeStyle = "#eee";
		ctx.stroke();
	}

	this.koch = function(A, B, depth, ctx){
		if (depth < 0){
			return null;
		}
		// compute points
		var C = this.divide(this.add(this.multiply(A, 2), B), 3);
		var D = this.divide(this.add(this.multiply(B, 2), A), 3);
		var F = this.divide(this.add(A, B), 2);

		var V1 = this.divide(this.minus(F, A), this.length(F, A));
		var V2 = [V1[1], -V1[0]];

		// The tip of the new triangle
		var E = this.add(this.multiply(V2, Math.sqrt(3)/6 * this.length(B, A)), F);

		this.drawLine(A, B, "#1EBAAB", ctx);

		if (depth !=0){
			for (var i=0;i<10;i++)
				this.drawLine(C, D, "white", ctx);
		}

		this.koch(A, C, depth-1, ctx);
		this.koch(C, E, depth-1, ctx);
		this.koch(E, D, depth-1, ctx);
		this.koch(D, B, depth-1, ctx);
	}

	this.drawLine = function(a, b, color, ctx){
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.moveTo(a[0], a[1]);
		ctx.lineTo(b[0], b[1]);
		ctx.stroke();
		ctx.closePath();
	}

	this.multiply = function(v, num){
			return [v[0]*num, v[1]*num];
	}

	this.divide = function(v, num){
			return [v[0]/num, v[1]/num];
	}
 
	this.add = function(a, b){
			return [a[0]+b[0], a[1]+b[1]];
	}

	this.minus = function(a, b){
			return [a[0]-b[0], a[1]-b[1]];
	}

	this.length = function(a, b){
			return Math.sqrt(Math.pow(a[0] - b[0],2) + Math.pow(a[1] - b[1],2));
	}
}

var koch = new Koch();
koch.init();
