class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader')
    }

    preload() {
        this.load.image('tiles', '../../assets/tiles/wall_sheet.png')
        this.load.tilemapTiledJSON('dungeon', '../../assets/tiles/dungeon-01.json')

        this.load.atlas('gearhead', '../../assets/sprites/gearhead.png', '../../assets/sprites/gearhead.json')
        this.load.atlas('kali', '../../assets/sprites/kali.png', '../../assets/sprites/kali.json')
    }

    create() {
        this.scene.start('dungeon')
    }
}