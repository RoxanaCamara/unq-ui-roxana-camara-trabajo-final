import { useContext } from "react"
import { SessionContext } from "./Session"

export const useJugadas = () => {

    //revisar la logica y hacer los cambios respecto a la implementacion
    const { state, actions } = useContext(SessionContext)
    const { dados, puntaje, eliminarJugada } = state

    const { setFinTurno, setFinPartida, setpuntaje, setEliminarJugada, setDados } = actions


    //cuenta los repetidos de los dados
    const cantRepetidos = (num) => {
        return dados.filter(d => d == num).length
    }

    const siEstaXNoDebeEstarY = (x, y) => {
        return dados[x] == x && !dados[y] == y
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
        dados.sort(function(a, b) { return a - b;});
        let escalera = false
        let index = 1
            for (let i = 0; i > 5; i ++){
                if(index != 1 || index != 6){
                    escalera = escalera && dados[i] == index
                } 
                index++
            }
        return escalera && (siEstaXNoDebeEstarY(6,1) || siEstaXNoDebeEstarY(1,6))
    }

    const esGenerala = () => {
        //todos los numeros de los dados son iguales
        // return existeEsaCantRepetidos(5) 
        return dados.every( (val, arr) => val === arr[0] ) 
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
        puntajeNew[index].played= true
        setpuntaje(puntajeNew)
        setFinTurno(true)
        setFinPartida(terminoElJuego() )
    }

    const yaFueJugado = (element) => element.played;

    const terminoElJuego = () => {
        return puntaje.every(yaFueJugado);
    }

    const totalPuntaje = () => {
        return 10
    }

    const jugadaEliminada = (index) => {
        let puntajeNew = puntaje
        puntajeNew[index].played= true
        setpuntaje(puntajeNew)
        setFinTurno(true)
        setEliminarJugada(false)
        setFinPartida(terminoElJuego() )
    }

    const existeAlgunaJugada = (hayJugada) => {
       setEliminarJugada( (eliminarJugada || hayJugada))   
    }

    const initGame = () => {
        setDados([])
        setpuntaje(initPuntaje(puntaje))
        setFinPartida(false)
    }
    
    const initPuntaje = () => {
        let p = puntaje
        p.forEach(function (i) {  i.played=false; i.valor= 0 })
        return p;
    }
    

    return { usarTirada, saberPuntaje, totalPuntaje, jugadaEliminada, existeAlgunaJugada, initGame }
}