class Platform {
	constructor(c, { x, y, image }) {
		this.position = {
			x,
			y
		}

		// png image to apply to this object
		this.image = image;

		// dimensions of the image
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
		this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}

	update() {
		// update the location of the sides of this image
		this.sides.top = this.position.y;
		this.sides.right = this.position.x + this.width;
		this.sides.left = this.position.x;
	}
}

export default Platform;
