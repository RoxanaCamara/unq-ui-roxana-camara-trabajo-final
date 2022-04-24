import { useContext, useState } from "react"
import { dadosDefault } from "../shared/utils/Utils"
import { useDices } from "./useDices"

export const useJugadas = () => {

    /*played puede tener 3 valores 
        JUGADO
        ANULADO
        '' QUE SERIA IGUAL A VACIO

    */
   const [tipoDeJugada, setTipoDeJugada] = useState('')
   const [finPartida, setFinPartida] = useState(false)
    const { dadosN, puntaje, setOportunidades2, setFinTurno, setDados, setpuntaje2} = useDices()

    const siEstaXNoDebeEstarY = (x, y) => {
        return dadosN[x].num == x && !dadosN[y].num == y
    }
    
    //cuenta los repetidos de los dadosN
    const cantRepetidos = (num) => {
        return dadosN.filter(function (d) {
            return  d.num === num
        }).length
    }

    const existeEsaCantRepetidos = (num) => {
        let valor = false
        dadosN.forEach(function (i) { valor = (valor || cantRepetidos(i) == num) });
        return valor
    }

    ///tipos de tiradas:

    const handleSolo = (num) => {
        return num * cantRepetidos(num)
    }

    const esEscalera = () => {
        //[X,2,3,4,5,6]  [1,2,3,4,5,X]
        dadosN.sort(function(a, b) { return a.num - b.num;});
        let escalera = false
        let index = 1
            for (let i = 0; i > 5; i ++){
                if(index != 1 || index != 6){
                    escalera = escalera && dadosN[i].num == index
                } 
                index++
            }
        return escalera && (siEstaXNoDebeEstarY(6,1) || siEstaXNoDebeEstarY(1,6))
    }

    const esGenerala = () => {
        //todos los numeros de los dadosN son iguales
        return dadosN.every( function (d) {
            return d.num === dadosN[0].num
        } ) 
    }

    const esPoker = () => {
        return existeEsaCantRepetidos(4) && existeEsaCantRepetidos(1)
    }

    const esFull = () => {
        return existeEsaCantRepetidos(3) && existeEsaCantRepetidos(2)
    }

    const saberPuntaje = (nombre) => {
        switch (nombre) {
            case "Solo 1":
                return handleSolo(1)
            case "Solo 2":
                return handleSolo(2)
            case "Solo 3":
                return handleSolo(3)
            case "Solo 4":
                return handleSolo(4)
            case "Solo 5":
                return handleSolo(5)
            case "Solo 6":
                return handleSolo(6)
            case "Escalera" :
                return esEscalera() ? 40 : 0
            case "Poker" :
                return esPoker() ? 40 : 0
            case "Full" :
                return esFull()  ? 40 : 0
            case "Generala" :
                return esGenerala()  ? 40 : 0
            default:
                return 0;
        }
    }

    const usarTirada = (index, num) => {
        let puntajeNew = puntaje
        puntajeNew[index].valor = num
        puntajeNew[index].played= 'JUGADO'
        setpuntaje2(puntajeNew)
        setFinTurno(true)
        setOportunidades2(0)
        setFinPartida(terminoElJuego() )
    }

    const yaFueJugado = (element) => element.played == 'ANULADO' || element.played == 'JUGADO';

    const terminoElJuego = () => {
        return puntaje.every(yaFueJugado);
    }

    const totalPuntaje = () => {
        return 10
    }

    const jugadaEliminada = (index) => {
        let puntajeNew = puntaje
        puntajeNew[index].played= 'ANULADO'
        setpuntaje2(puntajeNew)
        setFinTurno(true)
        setOportunidades2(0)
        setFinPartida(terminoElJuego() )
    } 

    const initGame = () => {
        setDados(dadosDefault)
        setpuntaje2(initPuntaje(puntaje))
        setFinPartida(false)
    }
    
    const initPuntaje = () => {
        let p = puntaje
        p.forEach(function (i) {  i.played=''; i.valor= 0 })
        return p;
    }

    const setTipoDeJugada2 =(n) => {
        setTipoDeJugada(n)
    }

    return { usarTirada, saberPuntaje, totalPuntaje, jugadaEliminada, initGame, finPartida, tipoDeJugada, setTipoDeJugada2 }
}