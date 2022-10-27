export class ButtonLvl3 {
    constructor(scene) {
        this.sceneR = scene
    }
    crear() {
        this.button = this.sceneR.add.image(300, 550, 'level3').setInteractive()
        this.button.on('pointerdown', () => {
            this.sceneR.scene.start('LevelThree')
        })

    }

};