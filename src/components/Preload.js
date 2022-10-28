import Phaser from "phaser";
export default class Preload extends Phaser.Scene {
    constructor() {
        super('Preload')
    }

    preload() {
        //Carga de imagenes
        this.load.image('blue', 'assets/img/blue.png');
        this.load.image('red', 'assets/img/red.png');
        this.load.image('gameOver', 'assets/img/gameover.jpg')
        this.load.image('fondoM', 'assets/img/inicio.jpg')
        this.load.image('restart', 'assets/img/restart.png')
        this.load.spritesheet('play', 'assets/img/play.png',{frameWidth:184.5,frameHeight:114});
        this.load.image('fondo', 'assets/img/fondos.png');
        this.load.image('player', 'assets/img/vaus.png');
        this.load.image('pelota', 'assets/img/ball.png');
        this.load.image('barra', 'assets/img/bloque_cian.png');
        this.load.image('barra1', 'assets/img/bloque_green.png');
        this.load.image('barra2', 'assets/img/bloque_red.png');
        this.load.image('menu', 'assets/img/menu.png');
        this.load.image('win', 'assets/img/youwon.jpg');
        this.load.image('level1', 'assets/img/level1.png');
        this.load.image('level2', 'assets/img/level2.png');
        this.load.image('level3', 'assets/img/level3.png');
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