class Player {
	constructor(c) {
		// location on the canvas
		this.position = {
			x: 100,
			y: 100
		}
		
		// physics variables
		this.speed = 10;
		this.velocity = {
			x: 0,
			y: 0
		}
		this.gravity = 1;

		// a boolean to check if the player is on the ground
		this.isGrounded = false;

		// player dimensions and sides
		this.width = 30;
		this.height = 30;
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
		this.c.fillStyle = 'black';
		this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		this.draw();
		// update player position
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
		this.sides.top = this.position.y;
		this.sides.bottom = this.position.y + this.height;
		this.sides.right = this.position.x + this.width;
		this.sides.left = this.position.x;

		// above bottom of canvas, apply gravity
		if (this.sides.bottom + this.velocity.y < canvas.height) {
			this.velocity.y += this.gravity;
			this.isGrounded = false;
		} else {
			this.isGrounded = true;
		}
	}
}

export default Player;
