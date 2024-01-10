
window.addEventListener('load', () => {

let config = {
	type: Phaser.AUTO,
	width: 800,
	height: 400,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: { y: 0 }
		}
	},
	scene: [Preloader,DungeonScene],
	scale: {
		zoom: .75
	}
} //end config

const game = new Phaser.Game(config)
}) //end load listener