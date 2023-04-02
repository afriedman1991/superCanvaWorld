const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
import Player from './classes/Player.js';
import Enemy from './classes/Enemy.js';
import Platform from './classes/Platform.js';
import GenericObject from './classes/GenericObject.js';
import { addKeyDownListener, addKeyUpListener } from './eventListeners.js';
import platform from '../assets/sprites/platform.png';
import hills from '../assets/sprites/hills.png';
import tallPlatform from '../assets/sprites/platformSmallTall.png';
import background from '../assets/sprites/background.png';

// set canvas size
canvas.width = 1024;
canvas.height = 576;

// create image for sprites
const createImage = (imageSrc) => {
	const image = new Image();
	image.src = imageSrc;
	return image;
}

// instantiate player object and goomba storage
let player = new Player(c);
let goombas = [];

// platform and generic object storage
let platforms = [];
let genericObjects = [];
let initialPlatformLocation = -1;



// key object, used to check if keys are pressed
const keys = {
	up: {
		pressed: false,
	},
	left: {
		pressed: false,
	},
	right: {
		pressed: false,
	}
}

let scrollOffset = 0;

// platform collision detection
const isOnTopOfPlatform = ({ object, platform }) => {
	return (object.velocity.y > 0 &&
		object.sides.bottom <= platform.sides.top && // if the bottom of the object is above the top of the platform
		object.sides.bottom + object.velocity.y >= platform.sides.top && // and the bottom of the object is still above the top of the platform after the next update
		object.sides.right >= platform.sides.left && // and the right side of the object is to the right of the left side of the platform
		object.sides.left <= platform.sides.right); // and the left side of the object is to the left of the right side of the platform
}

/**
 * 
	return (object1.velocity.y > 0 &&
		object1.sides.bottom <= object2.sides.top && // if the bottom of the object1 is above the top of the object2
		object1.sides.bottom + object1.velocity.y >= object2.sides.top && // and the bottom of the object1 is still above the top of the object2 after the next update
		object1.sides.right >= object2.sides.left && // and the right side of the object1 is to the right of the left side of the object2
		object1.sides.left <= object2.sides.right); // and the left side of the object1 is to the left of the right side of the object2
 */

const collisionTop = ({ object1, object2 }) => {
	return (
		object1.position.y + object1.height <= object2.position.y &&
		object1.position.y + object1.height + object1.velocity.y >= object2.position.y &&
		object1.position.x + object1.width >= object2.position.x &&
		object1.position.x <= object2.position.x + object2.width
	);
}

// an initialisation function to set up the game and reset it upon death
const init = async() => {
	player = new Player(c);
	player.isGrounded = false;
	goombas = [new Enemy(c, { position: {
			x: 800,
			y: 100
		},
		velocity: {
			x: -0.3,
			y: 0
		} }
	)];

	// location of the first platform on the x-axis
	initialPlatformLocation = -1;

	// platform object instantiation
	let tallPlatformImage = await createImage(tallPlatform);
	tallPlatformImage.onload = () => {
		platforms.push(
			new Platform(c, { x: tallPlatformImage.width * 10 - 3,
				y: canvas.height - tallPlatformImage.height - 100,
				image: tallPlatformImage})
		);
	}

	// floor
	let platformImage = createImage(platform);
	// when the image is loaded, push the platform to the platforms array
	platformImage.onload = () => {
		// Platform class takes in a canvas context, an object with x and y coordinates, and an image
		platforms.push(new Platform(c, {
		x: initialPlatformLocation,
		y: canvas.height - platformImage.height,
		image: platformImage }),
		new Platform(c, { x: platformImage.width - 3,
			y: canvas.height - platformImage.height,
			image: platformImage }),
		new Platform(c, { x: platformImage.width * 2 + 100,
			y: canvas.height - platformImage.height,
			image: platformImage}),
		new Platform(c, { x: platformImage.width * 3 + 300,
			y: canvas.height - platformImage.height,
			image: platformImage}),
		new Platform(c, { x: platformImage.width * 4 + 298,
			y: canvas.height - platformImage.height,
			image: platformImage}),
			new Platform(c, { x: platformImage.width * 6 + 100,
				y: canvas.height - platformImage.height,
				image: platformImage})
		);
	}
	
	// background
	let backgroundImg = createImage(background);
	backgroundImg.onload = () => genericObjects.push(new GenericObject(c, { x: -1, y: -1, image: backgroundImg }));
	
	// hills in the background
	let hillsBackground = createImage(hills);
	hillsBackground.onload = () => genericObjects.push(new GenericObject(c, { x: -1, y: 0, image: hillsBackground }));

	// reset scroll offset so the camera is back at the start
	scrollOffset = 0;

	// re-add event listeners when game resets, so the player can move and jump again
	addKeyDownListener(player, keys);
	addKeyUpListener(keys);
}

const animate = () => {
	window.requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	// draw all generic objects on the canvas
	genericObjects.forEach(genericObject => {
		genericObject.draw();
	});

	// draw all platforms on the canvas
	platforms.forEach(platform => {
		platform.draw();
		platform.update();
	});

	// draw all goombas on the canvas, and update their position
	goombas.forEach((goomba, index) => {
		goomba.update();

		// check if the player is colliding with the goomba
		if (collisionTop({ object1: player, object2: goomba })) {
			player.velocity.y -= 25; // make the player bounce

			// prevent unstyled content from flashing when removing goomba
			setTimeout(() => {
				goombas.splice(index, 1); // remove the goomba from the `goombas` array
			}, 0);
		} else if (
			player.position.x + player.width >= goomba.position.x && // if the right side of the player collides with the left side of the goomba
			player.position.x <= goomba.position.x + goomba.width && // if the left side of the player collides right the right side of the goomba
			player.position.y + player.height >= goomba.position.y // if the top of the player collides with the bottom of the goomba
		) {
			init(); // reset the game if the player collides with the goomba
		}
	});

	// draw the player on the canvas and update their position
	player.draw();
	player.update();

	player.velocity.x = 0;
	// check if left or right keys are pressed, and where on the screen the player is
	if (keys.right.pressed && player.position.x < 400) {
		player.velocity.x = player.speed;
	} else if (keys.left.pressed && player.position.x > 100) {
		player.velocity.x = -player.speed;
	} else {
		// if the player is not pressing any keys, set player velocity to 0
		player.velocity.x = 0;

		// if the player is pressing the right or left keys, scroll the screen in the respective direction
		if (keys.right.pressed) {
			scrollOffset += player.speed;
			platforms.forEach(platform => {
				platform.position.x -= player.speed;
			});
			genericObjects.forEach(genericObject => {
				genericObject.position.x -= player.speed * .66;
			});
			goombas.forEach(goomba => {
				goomba.position.x -= player.speed;
			});
		} else if (keys.left.pressed) {
			scrollOffset -= player.speed;
			platforms.forEach(platform => {
				platform.position.x += player.speed;
			});
			genericObjects.forEach(genericObject => {
				genericObject.position.x += player.speed * .66;
			});
			goombas.forEach(goomba => {
				goomba.position.x += player.speed;
			});
		}
	}

	// platform collision detection
	platforms.forEach(platform => {
		if (
			isOnTopOfPlatform({ object: player, platform })
		) {
				player.velocity.y = 0;
				player.isGrounded = true;
		}

		goombas.forEach(goomba => {
			if (
				isOnTopOfPlatform({ object: goomba, platform })
			) {
				goomba.velocity.y = 0;
			}
		});
	});

	// check if player has won
	if (scrollOffset > 2000) {
		console.log('you win!');
	}
	// check if player has lost
	if (player.position.y > canvas.height) {
		init();
	}
}

// initialise the game
init();
animate();

addKeyDownListener(player, keys);
addKeyUpListener(keys);
