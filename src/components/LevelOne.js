import Phaser from "phaser";
export default class Game extends Phaser.Scene {
    constructor(config) {
        super('Game')
        this.config = config
        this.player = null;
        this.cursors = null;
        this.pelota = null;
        this.barras = null;
        this.score = 0;
        this.scoreText = null;
        this.gameOverText = null;
        this.winText = null;
        //this.sonido = null;
        this.velocidadInicial = -300;
        this.barrasEliminadas = 0;
    }
    create() {
        //colision entre paredes del canva 
        this.physics.world.setBoundsCollision(true, true, true, false);
        //Creacion del Background
        this.createBackground();
        //Creacion del player
        this.createPlayer();
        //Creacion de Ball
        this.createBall();
        //Creacion de Bloque
        this.createBlocks();
        //se crea el objeto cursors para determinar si una tecla es pulsada o no
        this.cursors = this.input.keyboard.createCursorKeys();
        //this.physics.add.collider(this.pelota, this.player, this.bar, null, this);
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });
        
    }
    update() {
        //movimiento del player segun se presione la tecla izquierda o derecha
        if (this.cursors.left.isDown && this.player.x >= 120) {
            this.player.setVelocityX(-500);
            if (this.pelota.getData('startingPoint')) {
                this.pelota.setVelocityX(-500);
            }
        }
        else if (this.cursors.right.isDown && this.player.x <= 680) {
            this.player.setVelocityX(500);
            if (this.pelota.getData('startingPoint')) {
                this.pelota.setVelocityX(500)
            }
        }
        else {
            this.player.setVelocityX(0);
            if (this.pelota.getData('startingPoint')) {
                this.pelota.setVelocityX(0);
            }
        }
        //Lanzamiento de pelota con la tecla 'Space'
        if (this.cursors.space.isDown && this.pelota.getData('startingPoint')) {
            //this.pelota.setVelocity(-75,-300)
            this.pelota.setVelocity(-72, this.velocidadInicial)
            this.pelota.setData('startingPoint', false)
        }

        //alerta de salida del canvas
        if (this.pelota.y > 615) {
            this.pelota.disableBody(true, true); // la pelota al pasar el limite superior del canvas se elimina
            this.gameOverText = this.add.text(300, 300, 'Game Over', { fontSize: '50px', fill: '#732C00' });
            this.physics.pause();
            this.player.setTint(0xff0000);
        }

    }
    createBackground() {
        this.add.image(400, 300, 'space');
    }
    createPlayer() {
        //se añade fisica al player
        this.player = this.physics.add.image(400, 550, 'player').setImmovable().setScale(0.5);
        //se quita la gravedad al player
        this.player.body.allowGravity = false;
        //evita que el player atraviese el borde izquierdo y derecho
        this.player.setCollideWorldBounds(true);
    }
    createBall() {
        this.pelota = this.physics.add.image(400, 520, 'pelota');
        //se agrega el rebote de la pelota con los bordes
        this.pelota.setCollideWorldBounds(true);
        this.pelota.setBounce(1);
        this.pelota.setData('startingPoint', true);
        //se agrega la colision entre la pelota y el player
        this.physics.add.collider(this.pelota, this.player);
    }
    createBlocks() {
        this.barras = this.physics.add.staticGroup();
        let barraDistanciaHorizontal = 40;
        for (let i = 0; i < 10; i++) {
            this.barras.create(barraDistanciaHorizontal, 100, 'barra');
            this.barras.create(barraDistanciaHorizontal, 135, 'barra');
            this.barras.create(barraDistanciaHorizontal, 170, 'barra');
            barraDistanciaHorizontal += 80;
        }
        //se agrega la colision entre la pelota y las barras
        this.physics.add.collider(this.pelota, this.barras, this.collectBarra, null, this);
    }

    //velocidadInicial = 50;
    collectBarra(pelota, barras) {
        barras.disableBody(true, true);
        this.score += 10;
        this.scoreText.setText('Score: ' + this.score);
        if (this.score === 300) {
            this.physics.pause();
            this.winText = this.add.text(300, 300, 'YOU WON', { fontSize: '50px', fill: '#00B806' });
        }
    }
};
