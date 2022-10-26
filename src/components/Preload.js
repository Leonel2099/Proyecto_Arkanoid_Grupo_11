import Phaser from "phaser";
export default class Preload extends Phaser.Scene {
    constructor() {
        super('Preload')
    }

    preload() {
      //  this.load.image('menu','assets/img/sky.png')
        this.load.image('fondo', 'assets/img/fondos.png');
        this.load.image('player', 'assets/img/vaus.png');
        this.load.image('pelota', 'assets/img/ball.png');
        this.load.image('barra', 'assets/img/bloque_cian.png');
    }

    create() {
        this.scene.start('LevelOne')
    }
};