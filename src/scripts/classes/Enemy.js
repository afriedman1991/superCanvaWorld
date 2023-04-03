class Enemy {
	constructor(c, { position, velocity, distance = {
		limit: 50,
		traveled: 0
	} }) {
		// location on the canvas
		this.position = {
			x: position.x,
			y: position.y
		}

		// distance limit and traveled
		this.distance = distance;

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
			top: this.position.y,
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

		// update enemy position
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;

		// update the location of the sides of this image
		this.sides.top = this.position.y;
		this.sides.bottom = this.position.y + this.height;
		this.sides.right = this.position.x + this.width;
		this.sides.left = this.position.x;

		// apply gravity
		if (this.position.y + this.height + this.velocity.y <= canvas.height) {
			this.velocity.y += this.gravity;
		}

		// if the enemy has traveled the distance limit, change direction
		this.distance.traveled += Math.abs(this.velocity.x);

		if (this.distance.traveled > this.distance.limit) {
			this.velocity.x *= -1;
			this.distance.traveled = 0;
		}
	}
}

export default Enemy;
