import Phaser from "phaser";
export default class Preload extends Phaser.Scene {
    constructor() {
        super('Preload')
    }

    preload() {
        //Carga de imagenes
        //Fondos de escenas
        this.load.image('fondoM', 'assets/img/inicio.jpg')
        this.load.image('fondo', 'assets/img/fondos.png');
        this.load.image('gameOver', 'assets/img/gameover.jpg')
        this.load.image('win', 'assets/img/youwon.jpg');
        //objetos
        this.load.image('pelota', 'assets/img/ball.png');
        this.load.image('player', 'assets/img/vaus.png');
        this.load.image('blue', 'assets/img/blue.png');
        this.load.image('red', 'assets/img/red.png');
        this.load.image('barra', 'assets/img/bloque_cian.png');
        this.load.image('barra1', 'assets/img/bloque_green.png');
        this.load.image('barra2', 'assets/img/bloque_red.png');
        //botones
        this.load.spritesheet('restart', 'assets/img/buttonRestart.png',{frameWidth:164.5, frameHeight:56})
        this.load.spritesheet('play', 'assets/img/play.png',{frameWidth:184.5,frameHeight:114});
        this.load.spritesheet('menu', 'assets/img/buttonMenu.png',{frameWidth:128.5, frameHeight:53});
        this.load.spritesheet('level1', 'assets/img/buttonlvl1.png',{frameWidth:155.5, frameHeight:55});
        this.load.spritesheet('level2', 'assets/img/buttonlvl2.png',{frameWidth:155.5, frameHeight:55});
        this.load.spritesheet('level3', 'assets/img/buttonlvl3.png',{frameWidth:155.5, frameHeight:55});
        //Carga de Sonidos
        this.load.audio('lose', 'assets/sounds/arkanoid_lose.mp3');
        this.load.audio('opening', 'assets/sounds/arkanoid_opening.mp3');
        this.load.audio('reboteP', 'assets/sounds/arkanoid_rebote1.mp3');
        this.load.audio('reboteB', 'assets/sounds/arkanoid_rebote2.mp3');
        this.load.audio('winS', 'assets/sounds/arkanoid_start.mp3');
    }

    create() {
        this.scene.start('Menu')
    }
};