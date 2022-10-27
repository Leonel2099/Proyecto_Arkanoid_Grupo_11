export class ButtonLvl2 {
    constructor(scene) {
        this.sceneR = scene
    }
    crear() {
        this.button = this.sceneR.add.image(450, 450, 'level2').setInteractive()
        this.button.on('pointerdown', () => {
            this.sceneR.scene.start('LevelTwo')

        })

    }

};
