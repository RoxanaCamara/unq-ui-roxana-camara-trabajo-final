import { createContext, useContext, useState } from "react";

const puntajeDefault = [
    { name: 'Solo 1', valor: 0, played: false },
    { name: 'Solo 2', valor: 0, played: false },
    { name: 'Solo 3', valor: 0, played: false },
    { name: 'Solo 4', valor: 0, played: false },
    { name: 'Solo 5', valor: 0, played: false },
    { name: 'Solo 6', valor: 0, played: false },
    { name: 'Escalera', valor: 0, played: false },
    { name: 'Poker', valor: 0, played: false },
    { name: 'Full', valor: 0, played: false },
    { name: 'Generala', valor: 0, played: false }
]

export const SessionContext = createContext({
    state: {
        iniciaPartida: false,
        finTurno: false,
        finPartida: false,
        dados: [],
        puntaje: puntajeDefault,
        eliminarJugada: false,
        oportunidades: 1
    },
    actions: {
        setInicioPartida: (nn) => { },
        setFinTurno: (nn) => { },
        setFinPartida: (nn) => { },
        setDados: (nn) => { },
        setpuntaje: (nn) => { },
        setEliminarJugada: (nn) => { },
        setOportunidades: (nn) => { }
    }
})

export const SessionProvider = ({ children }) => {

    const [inicioPartida, setInicioPartida] = useState(false)
    const [finTurno, setFinTurno] = useState(true)
    const [finPartida, setFinPartida] = useState(false)
    const [dados, setDados] = useState([])
    const [puntaje, setpuntaje] = useState(puntajeDefault)
    const [eliminarJugada, setEliminarJugada] = useState(false)
    const [oportunidades, setOportunidades] = useState(1)

    const state = {
        inicioPartida,
        finTurno,
        finPartida,
        dados,
        puntaje,
        eliminarJugada,
        oportunidades
    }

    const actions = {
        setInicioPartida,
        setFinTurno,
        setFinPartida,
        setDados,
        setpuntaje,
        setEliminarJugada,
        setOportunidades
    }

    return <SessionContext.Provider value={{ state, actions }}> {children} </SessionContext.Provider>
}

export const useJugadas = () => {

    const { state, actions } = useContext(SessionContext)

    const {
        dados, puntaje, eliminarJugada
    } = state

    const {
        setFinTurno, setFinPartida, setpuntaje, setEliminarJugada, setDados
    } = actions

    const handleSolo = (num) => {
        return num * cantRepetidos(num)
    }

    const cantRepetidos = (num) => {
        return dados.filter(d => d == num).length
    }

    const esEscalera = () => {
        return false
    }

    const esGenerala = () => {
        return existeEsaCantRepetidos(5)
    }

    const esPoker = () => {
        return existeEsaCantRepetidos(4) && existeEsaCantRepetidos(1)
    }

    const esFull = () => {
        return existeEsaCantRepetidos(3) && existeEsaCantRepetidos(2)
    }

    const existeEsaCantRepetidos = (num) => {
        let valor = false
        dados.forEach(function (i) { valor = (valor || cantRepetidos(i) == num) });
        return valor
    }

    const usarTirada = (index, num) => {
        let puntajeNew = puntaje
        puntajeNew[index].valor = num
        puntajeNew[index].played= true
        setpuntaje(puntajeNew)
        setFinTurno(true)
        setFinPartida(terminoElJuego() )
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

export const useDices = () => {

    const { state, actions } = useContext(SessionContext)
    const { dados, oportunidades } = state
    const { setDados, setFinTurno, setOportunidades, setEliminarJugada } = actions

    //Agrega cero o el numero original en el index de la lista de dados
    const changeValueIndexDice = (index, num = 0) => {
        let dadosV = dados 
        dadosV[index] = num
        setDados(dadosV)
    }

    //Agrega 6 numeros random en una lista de dados
    const tirarDados = () => {
        let dices = []
        for (let i = 0; i < 5; i++) {
            let number = Math.floor(Math.random() * 6) + 1
            dices.push(number)
        }
        setDados(dices);
        setFinTurno(false) 
        setOportunidades(1)       
    }

    //Agrega un numero random reemplazando el cero una lista de dados
    const tirarDadosSeleccionados = () => {
            let dados2 = dados
            console.log("dados1")
            console.log(dados2)

            dados2.map(function (i, index) {
                if (i == 0) {
                    console.log()
                    let number = Math.floor(Math.random() * 6) + 1
                    dados2[index] = number
                }
            })
            console.log("dados2")
            console.log(dados2)
            setDados(dados2)
            setOportunidades( oportunidades + 1 )
            if(oportunidades == 3){
                setEliminarJugada(true)
                setOportunidades(1)
            }
        }
    
    return { tirarDados, tirarDadosSeleccionados, changeValueIndexDice }

}
