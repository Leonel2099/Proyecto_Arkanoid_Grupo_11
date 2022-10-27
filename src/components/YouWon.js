import Phaser from "phaser";
import { MenuButton } from "./MenuButton";
export default class YouWon extends Phaser.Scene {
    constructor(config) {
        super('YouWon')
        this.config = config
        this.cursors=null
        this.button= new MenuButton(this)
    }
    create() {
        //Creacion del Background
        this.createBackground();
        this.button.crear()
    }
    createBackground() {
        this.add.image(320,341, 'win');
    }
};