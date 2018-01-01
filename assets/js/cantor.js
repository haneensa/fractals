function CantorSet() {
	this.canvas = null;
	this.context = null;
	this.depth = 10;
	this.depthMax = 10;
	this.count = 0;
	this.init = function() {
		this.canvas = document.getElementById("cantor");
		if (this.canvas && this.canvas.getContext('2d') ) {
			this.context = this.canvas.getContext('2d');
			var width = this.canvas.width;
			var height = this.canvas.height;
			var $this = this;
			this.canvas.addEventListener("mousemove", function() {
				$this.count++; // to slow down the change
				if ($this.count%10 == 0)
					$this.depth++;
				$this.depth %= $this.depthMax;
				$this.draw(width, height, $this.context);
			}, false);
			this.draw(width, height, this.context);
		}
	}

	this.draw = function(w, h, ctx) {
		ctx.clearRect(0, 0, w, h);
		this.background(w, h, ctx);
		this.cantor(ctx, 5, h/3, w-10, this.depth);
	}

	// Draw background outline
	this.background = function(w, h, ctx) {
		for (var x = 0; x < w; x += 10) {
			ctx.moveTo(x, 0);
			ctx.lineTo(x, h);
		}

		for (var y = 0; y < h; y += 10) {
			ctx.moveTo(0, y);
			ctx.lineTo(w, y);
		}

		ctx.strokeStyle = "#f2f2f2";
		ctx.stroke();
	}

	// Draw a line starting at (x, y) and ending at (x+2, y)
	this.line = function(ctx, x, y, len) {
		ctx.beginPath();
		ctx.lineWidth = 2;
		ctx.moveTo(x, y);
		ctx.lineTo(x + len, y);
		ctx.strokeStyle = "#1EBAAB";
		ctx.stroke();
	}

	this.cantor = function(ctx, x, y, len, depth) {
		if (depth < 0) {
			return null
		}

		this.line(ctx, x, y, len);
		y += 20; // offset between each cantor set

		this.cantor(ctx, x, y, len/3, depth-1);
		this.cantor(ctx, x+len*2/3, y, len/3, depth-1);
	}
}

var cantorset = new CantorSet();
cantorset.init();

