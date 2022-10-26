import { useState,useEffect} from "react";
import Preload from "./Preload";
import Game from "./Game";
import Phaser from "phaser";
export default function Escena1() {
    //uso state de una varibale 'listo', sino usamos esto los lienzos se acumularan en la visa 
    const [listo, setListo] = useState(false);
    //usamos el hook para que renderice acciones que reat no hace
    useEffect(() => {
        //configuracion por defecto
        const CONFIGURACION = {
            scale: {
                autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
                width: 800,
                height: 600
            },
        }
        const Escenas = [Preload, Game]
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
