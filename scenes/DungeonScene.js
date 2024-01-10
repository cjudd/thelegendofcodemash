class DungeonScene extends Phaser.Scene {
    
	constructor() {
		super('dungeon')
	} // end constructor

	preload() {
        this.load.image('sky', 'assets/sprites/space3.png')
        this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    } // end preload

    create() {
        this.add.image(400, 300, 'sky')

        const logo = this.physics.add.image(400, 100, 'logo')

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)
    } //end create

    update(time, delta) {
        
    } //end update
        
}
