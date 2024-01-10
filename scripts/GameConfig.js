
window.addEventListener('load', () => {

let config = {
	type: Phaser.AUTO,
	width: 800,
	height: 450,
	physics: {
		default: 'arcade',
		arcade: {
			// debug: true
			gravity: { y: 200 }
		}
	},
	scene: [DungeonScene]
} //end config

const game = new Phaser.Game(config)
}) //end load listener