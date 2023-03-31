class Enemy {
	constructor(c, { position, velocity }) {
		this.position = {
			x: position.x,
			y: position.y
		}

		this.velocity = {
			x: velocity.x,
			y: velocity.y
		};

		this.width = 30;
		this.height = 30;
		this.gravity = 1;
		
		this.sides = {
			bottom: this.position.y + this.height,
			right: this.position.x + this.width,
			left: this.position.x,
		}

		// canvas context
		this.c = c;
	}
	
	draw() {
		// draw a red square
		this.c.fillStyle = 'red';
		this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		this.draw();
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
		if (this.position.y + this.height + this.velocity.y <= canvas.height) {
			this.velocity.y += this.gravity;
		}
	}
}

export default Enemy;
