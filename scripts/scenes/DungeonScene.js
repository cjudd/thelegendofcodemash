class DungeonScene extends Phaser.Scene {
    
    cursors;
    gearhead;

	constructor() {
		super('dungeon')
	} // end constructor

	preload() {
        // Cursor Key Inputs
        this.cursors = this.input.keyboard.createCursorKeys();
    } // end preload

    create() {
        // Load Existing Map
        const map = this.make.tilemap({ key:'dungeon' })
        const tileset = map.addTilesetImage('wall_sheet', 'tiles')
        map.createLayer('ground', tileset)
        const wallsLayer = map.createLayer('walls', tileset)

        wallsLayer.setCollisionByProperty({ collides: true})

        // Display Gearhead
        this.gearhead = this.physics.add.sprite(120,120,'gearhead','gearhead-walk-down-01.png')

        // Animate Gearhead
        this.anims.create({
            key: 'gearhead-walk-down-01.png',
            frames: [{ key: 'gearhead', frame: 'gearhead-walk-down-01.png'}]
        })

        this.anims.create({
            key: 'gearhead-walk-down',
            frames: this.anims.generateFrameNames('gearhead', {start: 1, end: 3, prefix: 'gearhead-walk-down-0', suffix: '.png'} ),
            repeat: -1,
            frameRate: 15
        })

        this.anims.create({
            key: 'gearhead-idle-down',
            frames: [{ key: 'gearhead', frame:'gearhead-walk-down-01.png' }]
        })

        this.anims.create({
            key: 'gearhead-walk-up',
            frames: this.anims.generateFrameNames('gearhead', {start: 1, end: 3, prefix: 'gearhead-walk-up-0', suffix: '.png'} ),
            repeat: -1,
            frameRate: 15
        })

        this.anims.create({
            key: 'gearhead-idle-up',
            frames: [{ key: 'gearhead', frame:'gearhead-walk-up-01.png' }]
        })

        this.anims.create({
            key: 'gearhead-walk-left',
            frames: this.anims.generateFrameNames('gearhead', {start: 1, end: 4, prefix: 'gearhead-walk-left-0', suffix: '.png'} ),
            repeat: -1,
            frameRate: 15
        })

        this.anims.create({
            key: 'gearhead-idle-left',
            frames: [{ key: 'gearhead', frame:'gearhead-walk-left-01.png' }]
        })

        this.anims.create({
            key: 'gearhead-walk-right',
            frames: this.anims.generateFrameNames('gearhead', {start: 1, end: 4, prefix: 'gearhead-walk-right-0', suffix: '.png'} ),
            repeat: -1,
            frameRate: 15
        })

        this.anims.create({
            key: 'gearhead-idle-right',
            frames: [{ key: 'gearhead', frame:'gearhead-walk-right-01.png' }]
        })

        this.gearhead.anims.play('gearhead-idle-down')

        this.physics.add.collider(this.gearhead, wallsLayer)
        debugDraw(wallsLayer, this)
        this.gearhead.body.setSize(this.gearhead.width * 0.4, this.gearhead.height * 0.8)
        this.gearhead.body.offset.y = 10
		this.cameras.main.startFollow(this.gearhead, true)
        this.cameras.main.setBounds(0, 0, wallsLayer.displayWidth, wallsLayer.displayHeight);
    } //end create

    update(time, delta) {
        if (!this.cursors || !this.gearhead) { return }

		const speed = 100;
		if (this.cursors.left?.isDown) {
			this.gearhead.anims.play('gearhead-walk-left', true)
			this.gearhead.setVelocity(-speed, 0)
		} else if (this.cursors.right?.isDown) {
			this.gearhead.anims.play('gearhead-walk-right', true)
			this.gearhead.setVelocity(speed, 0)
		} else if (this.cursors.up?.isDown) {
			this.gearhead.anims.play('gearhead-walk-up', true)
			this.gearhead.setVelocity(0, -speed)
		} else if (this.cursors.down?.isDown) {
			this.gearhead.anims.play('gearhead-walk-down', true)
			this.gearhead.setVelocity(0, speed)
		} else {
			const parts = this.gearhead.anims.currentAnim.key.split('-')
			parts[1] = 'idle'
			this.gearhead.play(parts.join('-'))
			this.gearhead.setVelocity (0,0)
		}
    } //end update
        
}
