class Kali extends Phaser.Physics.Archade.Sprite {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        this.anims.play('kali-idle-down')
    }
}

function createKaliAnimation(anims) {
    anims.create({
        key: 'kali-walk-down-01.png',
        frames: [{ key: 'kali', frame: 'kali-walk-down-01.png'}]
    })

    anims.create({
        key: 'kali-walk-down',
        frames: anims.generateFrameNames('kali', {start: 1, end: 9, prefix: 'kali-walk-down-0', suffix: '.png'} ),
        repeat: -1,
        frameRate: 15
    })

    anims.create({
        key: 'kali-idle-down',
        frames: [{ key: 'kali', frame:'kali-walk-down-01.png' }]
    })

    anims.create({
        key: 'kali-walk-up',
        frames: anims.generateFrameNames('kali', {start: 1, end: 9, prefix: 'kali-walk-up-0', suffix: '.png'} ),
        repeat: -1,
        frameRate: 15
    })

    anims.create({
        key: 'kali-idle-up',
        frames: [{ key: 'kali', frame:'kali-walk-up-01.png' }]
    })

    anims.create({
        key: 'kali-walk-left',
        frames: anims.generateFrameNames('kali', {start: 1, end: 9, prefix: 'kali-walk-left-0', suffix: '.png'} ),
        repeat: -1,
        frameRate: 15
    })

    anims.create({
        key: 'kali-idle-left',
        frames: [{ key: 'kali', frame:'kali-walk-left-01.png' }]
    })

    anims.create({
        key: 'kali-walk-right',
        frames: anims.generateFrameNames('kali', {start: 1, end: 9, prefix: 'kali-walk-right-0', suffix: '.png'} ),
        repeat: -1,
        frameRate: 15
    })

    anims.create({
        key: 'kali-idle-right',
        frames: [{ key: 'kali', frame:'kali-walk-right-01.png' }]
    })
}