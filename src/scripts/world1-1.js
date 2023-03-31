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

const createImage = (imageSrc) => {
	const image = new Image();
	image.src = imageSrc;
	return image;
}


let player = new Player(c);
let goombas = [];

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

const isOnTopOfPlatform = ({ object, platform }) => {
	return (object.velocity.y > 0 &&
		object.sides.bottom <= platform.sides.top &&
		object.sides.bottom + object.velocity.y >=
		platform.sides.top && 
		object.sides.right >= platform.sides.left &&
		object.sides.left <= platform.sides.right);
}

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
	initialPlatformLocation = -1;

	// platform
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
	platformImage.onload = () => {
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
	
	let hillsBackground = createImage(hills);
	hillsBackground.onload = () => genericObjects.push(new GenericObject(c, { x: -1, y: 0, image: hillsBackground }));

	
	scrollOffset = 0;
	addKeyDownListener(player, keys);
	addKeyUpListener(keys);
}

const animate = () => {
	window.requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	genericObjects.forEach(genericObject => {
		genericObject.draw();
	});

	platforms.forEach(platform => {
		platform.draw();
		platform.update();
	});

	goombas.forEach(goomba => {
		goomba.update();
	});

	player.draw();
	player.update();

	player.velocity.x = 0;
	// check if left or right keys are pressed
	if (keys.right.pressed && player.position.x < 400) {
		player.velocity.x = player.speed;
	} else if (keys.left.pressed && player.position.x > 100) {
		player.velocity.x = -player.speed;
	} else {
		player.velocity.x = 0;

		if (keys.right.pressed) {
			scrollOffset += player.speed;
			platforms.forEach(platform => {
				platform.position.x -= player.speed;
			});
			genericObjects.forEach(genericObject => {
				genericObject.position.x -= player.speed * .66;
			});
		} else if (keys.left.pressed) {
			scrollOffset -= player.speed;
			platforms.forEach(platform => {
				platform.position.x += player.speed;
			});
			genericObjects.forEach(genericObject => {
				genericObject.position.x += player.speed * .66;
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

init();
animate();

addKeyDownListener(player, keys);
addKeyUpListener(keys);
