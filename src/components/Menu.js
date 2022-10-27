import Phaser from "phaser";
import {ResetButton} from './ResetButton'
export default class Menu extends Phaser.Scene {
    constructor(config) {
        super('Menu')
        this.config = config
        this.button= new ResetButton(this)
        this.sonido;
    }
    create() {
        //Creacion del Background
        this.createBackground();
        this.button.crear()
        this.createSound()

    }
    createBackground() {
        this.add.image(300,300, 'fondoM');
    }
    createSound(){
        this.sonido=this.sound.add('opening')
        this.sonido.play({
            loop:true,
            volume:0.3
        });
    }
    stopMusic(){
        this.sonido.stop()
    }
};