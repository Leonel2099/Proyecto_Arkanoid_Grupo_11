import { useState,useEffect} from "react";
import Preload from "./Preload";
import LevelOne from "./LevelOne";
import Phaser from "phaser";
import LevelTwo from "./LevelTwo";
import Menu from "./Menu"
import GameOver from "./GameOver";
import YouWon from "./YouWon";
export default function Config() {
    //uso state de una varibale 'listo', sino usamos esto los lienzos se acumularan en la visa 
    const [listo, setListo] = useState(false);
    //usamos el hook para que renderice acciones que reat no hace
    useEffect(() => {
        //configuracion por defecto
        const CONFIGURACION = {
            scale: {
                autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
                width: 640,
                height: 682
            },
        }
        const Escenas = [Preload,Menu,LevelOne,LevelTwo,GameOver,YouWon]
        const crearEscena = Scene => new Scene(CONFIGURACION)
        const iniciarEscena = () => Escenas.map(crearEscena)

        var config = {
            type: Phaser.AUTO,
            ...CONFIGURACION,
            physics:{
                default:'arcade',
                arcade:{
                    gravity:{y:0},
                    // debug:true
                }
            },
            scene: iniciarEscena()
        }
        //Aqui empieza el juego
        var game = new Phaser.Game(config);
        //Trigger cuando el juego esta completamente listo
        game.events.on("LISTO", setListo);
        //Esto ayuda a que no se duplique el lienzo
        return () => {
            setListo(false);
            game.destroy(true);
        }
    }, [listo])
};
