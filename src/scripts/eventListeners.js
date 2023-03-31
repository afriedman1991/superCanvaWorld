function addKeyDownListener(player, keys) {
	window.addEventListener('keydown', (e) => {
	  switch(e.key) {
		case 'w':
		  // jump
		  if (player.velocity.y === 0 && player.isGrounded)
			player.velocity.y = -20;
			player.isGrounded = false;
		  break;
		case 'a':
		  // move player to the left
		  keys.left.pressed = true;
		  break;
		case 'd':
		  // move player to the right
		  keys.right.pressed = true;
		  break;
	  }
	});
  }
  
function addKeyUpListener(keys) {
	window.addEventListener('keyup', (e) => {
	  switch(e.key) {
		case 'a':
		  keys.left.pressed = false;
		  break;
		case 'd':
		  keys.right.pressed = false;
		  break;
	  }
	});
  }
  
  export { addKeyDownListener, addKeyUpListener };
