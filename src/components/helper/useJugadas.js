import { useContext } from "react"
import { dadosDefault } from "../shared/utils/Utils"
import { SessionContext } from "./Session"

export const useJugadas = () => {

    /*played puede tener 3 valores 
        JUGADO
        ANULADO
        '' QUE SERIA IGUAL A VACIO
    */

    const { state, actions } = useContext(SessionContext)
    const { dados, puntaje } = state

    const { setFinTurno, setFinPartida, setpuntaje, setDados, setOportunidades } = actions

    const siEstaXNoDebeEstarY = (x, y) => {
        return dados[x].num == x && !dados[y].num == y
    }
    
    //cuenta los repetidos de los dados
    const cantRepetidos = (num) => {
        return dados.filter(function (d) {
            return  d.num === num
        }).length
    }

    const existeEsaCantRepetidos = (num) => {
        let valor = false
        dados.forEach(function (i) { valor = (valor || cantRepetidos(i) == num) });
        return valor
    }

    ///tipos de tiradas:

    const handleSolo = (num) => {
        return num * cantRepetidos(num)
    }

    const esEscalera = () => {
        //[X,2,3,4,5,6]  [1,2,3,4,5,X]
        dados.sort(function(a, b) { return a.num - b.num;});
        let escalera = false
        let index = 1
            for (let i = 0; i > 5; i ++){
                if(index != 1 || index != 6){
                    escalera = escalera && dados[i].num == index
                } 
                index++
            }
        return escalera && (siEstaXNoDebeEstarY(6,1) || siEstaXNoDebeEstarY(1,6))
    }

    const esGenerala = () => {
        //todos los numeros de los dados son iguales
        return dados.every( function (d) {
            return d.num === dados[0].num
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
        setpuntaje(puntajeNew)
        setFinTurno(true)
        setOportunidades(0)
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
        setpuntaje(puntajeNew)
        setFinTurno(true)
        setOportunidades(0)
        setFinPartida(terminoElJuego() )
    } 

    const initGame = () => {
        setDados(dadosDefault)
        setpuntaje(initPuntaje(puntaje))
        setFinPartida(false)
    }
    
    const initPuntaje = () => {
        let p = puntaje
        p.forEach(function (i) {  i.played=''; i.valor= 0 })
        return p;
    }

    return { usarTirada, saberPuntaje, totalPuntaje, jugadaEliminada, initGame }
}