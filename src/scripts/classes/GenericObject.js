class GenericObject {
	constructor(c, { x, y, image }) {
		this.position = {
			x,
			y
		}

		// canvas context
		this.c = c;

		this.image = image;
		this.width = image.width;
		this.height = image.height;
	}

	draw() {
		this.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
	}
}

export default GenericObject;
