class Platform {
	constructor(c, { x, y, image }) {
		this.position = {
			x,
			y
		}

		this.image = image;

		this.width = image.width;
		this.height = image.height;
		this.sides = {
			top: this.position.y,
			right: this.position.x + this.width,
			left: this.position.x
		}

		// canvas context
		this.c = c;
	}

	draw() {
		this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
		// this.c.fillStyle = 'blue';
		// this.c.fillRect(this.position.x, this.position.y, this.width, this.height)
	}

	update() {
		this.sides.top = this.position.y;
		this.sides.right = this.position.x + this.width;
		this.sides.left = this.position.x;
	}
}

export default Platform;
