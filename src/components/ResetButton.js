export class ResetButton {
    constructor(scene){
        this.sceneR=scene
    }
    crear(){
        this.button = this.sceneR.add.image(320, 400, 'restart').setInteractive()
        this.button.on('pointerdown',()=>{
            this.sceneR.scene.start('LevelOne')
        })

    }
};
