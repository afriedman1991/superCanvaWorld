class Enemy {
	constructor(c, { position, velocity }) {
		// location on the canvas
		this.position = {
			x: position.x,
			y: position.y
		}

		// physics variables
		this.velocity = {
			x: velocity.x,
			y: velocity.y
		};

		// enemy dimensions and sides
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

		// update the location of the sides of this image
		this.sides.bottom = this.position.y + this.height;
		this.sides.right = this.position.x + this.width;
		this.sides.left = this.position.x;

		// apply gravity
		if (this.position.y + this.height + this.velocity.y <= canvas.height) {
			this.velocity.y += this.gravity;
		}
	}
}

export default Enemy;
