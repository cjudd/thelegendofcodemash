
window.addEventListener('load', () => {
let config = {
    type: Phaser.AUTO,
    width: 400,
    height: 320,
    backgroundColor: 0x000000,
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true,
            gravity: {
                y: 0
            }
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "game"
    },
    pixelArt: true,
    scene: [GameScene]
}
const game = new Phaser.Game(config)
}) //end load listener