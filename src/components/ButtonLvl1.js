export class ButtonLvl1 {
    constructor(scene) {
        this.sceneR = scene
    }
    crear() {
        this.button = this.sceneR.add.image(190, 500, 'level1').setInteractive()
        this.button.on('pointerdown', () => {
            this.sceneR.scene.start('LevelOne')
        })

    }

};