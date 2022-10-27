export class MenuButton {
    constructor(scene){
        this.sceneR=scene
    }
    crear(){
        this.button = this.sceneR.add.image(320, 500, 'menu').setInteractive()
        this.button.on('pointerdown',()=>{
            this.sceneR.scene.start('Menu')
        })
    } 
    
};
