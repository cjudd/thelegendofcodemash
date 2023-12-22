class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene')
    }

    preload() {
        // this.cursors
        this.cameras.main.setBackgroundColor(0x000000)
        this.cameras.main.height = 288
        this.cameras.main.width = 368
        this.cameras.main.setPosition(16, 16)
        this.load.image('tiles', '../assets/tilemaps/tileset-grassland-grass.png')
        this.load.tilemapTiledJSON('map', '../assets/tilemaps/forest.json')

        // this.load.spritesheet('characters', '../assets/characters.png', {
        //     frameWidth: 16,
        //     frameHieght: 16
        // })

    } //end preload

    create() {
        const map = this.make.tilemap({
            key: 'map'
        })

        const tileset = map.addTilesetImage('tileset-grassland-grass', 'tiles')
        map.createLayer('ground', tileset)
        // const belowLayer = map.createStaticLayer('below player', tileset, 0, 0)
//        const worldLayer = map.createStaticLayer('world', tileset, 0, 0)


        // worldLayer.setCollisionByProperty({
        //     collides: true
        // })

        // this.physics.world.bounds.width = map.widthInPixels
        // this.physics.world.bounds.height = map.heightInPixels
        // this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)



        // ///////////////////////////////
        // //player
        // this.player = new Player(this, 200, 120, 'characters', 100)
        // this.physics.add.collider(this.player, worldLayer)
        // this.cameras.main.startFollow(this.player, true, 0.8, 0.8)
        // this.player.body.setCollideWorldBounds(true)

    } //end create

    update(time, delta) {
//        this.player.update()
    } //end update

} //end gameScene