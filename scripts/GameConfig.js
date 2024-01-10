
window.addEventListener('load', () => {

let config = {
	type: Phaser.AUTO,
	width: 400,
	height: 250,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: { y: 0 }
		}
	},
	scene: [Preloader,DungeonScene]
} //end config

const game = new Phaser.Game(config)
}) //end load listener