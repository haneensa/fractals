function SierpinskiTriangle() {
	this.canvas = null;
	this.ctx = null;
	this.w = 0;
	this.h = 0;
	this.depth = 5;
	this.depthMax = 7;
	this.count = 0;

	this.init = function() {
		this.canvas = document.getElementById("triangle");
		if (this.canvas && this.canvas.getContext('2d')) {
			$this = this;
			this.ctx = this.canvas.getContext('2d');
			this.w = this.canvas.width;
			this.h = this.canvas.height;
			this.canvas.addEventListener("mousemove", function() {
				$this.count++; // to slow down the change
				if ($this.count%10 == 0 )
					$this.depth++;
				$this.depth %= $this.depthMax;
				$this.draw($this.w, $this.h, $this.context);
			}, false);
			this.draw();
		}
	}

	// Draw background outline
	this.background = function() {
		for (var x = 0; x < this.w; x += 10) {
			this.ctx.moveTo(x, 0);
			this.ctx.lineTo(x, this.h);
		}

		for (var y = 0; y < this.h; y += 10) {
			this.ctx.moveTo(0, y);
			this.ctx.lineTo(this.w, y);
		}

		this.ctx.strokeStyle = "#eee";
		this.ctx.stroke();
	}

	this.draw = function() {
		this.ctx.clearRect(0, 0, this.w, this.h);
		this.background();
		var length = 400;
		var h = length * (Math.sqrt(3)/2);
		cx = this.w/2;
		cy = this.h/2;
		var a = [cx, cy - h/2];
		var b = [cx - length/2, cy + h/2];
		var c = [cx + length/2, cy + h/2];
		var depth = this.depth;
		this.sierpinski(a, b, c, depth);
	}

	this.sierpinski = function(a, b, c, depth) {
		if (depth < 0)
			return null;

		this.triangle(a, b, c, "#1EBAAB", depth);
		this.triangle(this.getMid(b, c), this.getMid(c, a), this.getMid(a, b), "white", depth);
		if (depth > 0) {
			this.sierpinski(a, this.getMid(a, b), this.getMid(a, c), depth-1);
			this.sierpinski(b, this.getMid(a, b), this.getMid(b, c), depth-1);
			this.sierpinski(c, this.getMid(c, b), this.getMid(a, c), depth-1);
		}
	}

	/* an equilateral triangle is a triangle with all side of equal lenght */
	this.triangle = function(a, b, c, color, depth) {
		this.ctx.strokeStyle = color;
		this.ctx.fillStyle = color;
		this.ctx.beginPath();
		this.ctx.moveTo(a[0], a[1]);
		this.ctx.lineTo(b[0], b[1]);
		this.ctx.lineTo(c[0], c[1]);
		this.ctx.lineTo(a[0], a[1]);
		this.ctx.closePath();
		this.ctx.stroke();
		this.ctx.fill();
	}

	this.getMid = function(p1, p2) {
		var midPoint = [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
		return midPoint;
	}

}

var striangle = new SierpinskiTriangle();
striangle.init();
