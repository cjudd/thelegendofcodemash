
window.addEventListener('load', () => {

let config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [DungeonScene]
} //end config

const game = new Phaser.Game(config)
}) //end load listener