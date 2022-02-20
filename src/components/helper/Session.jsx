import { createContext, useState } from "react";

const puntajeDefault = [
    { name: 'Solo 1', valor: 0, played: '' },
    { name: 'Solo 2', valor: 0, played: '' },
    { name: 'Solo 3', valor: 0, played: '' },
    { name: 'Solo 4', valor: 0, played: '' },
    { name: 'Solo 5', valor: 0, played: '' },
    { name: 'Solo 6', valor: 0, played: '' },
    { name: 'Escalera', valor: 0, played: '' },
    { name: 'Poker', valor: 0, played: '' },
    { name: 'Full', valor: 0, played: '' },
    { name: 'Generala', valor: 0, played: '' }
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
        dados,
        oportunidades,
        puntaje,
        eliminarJugada,
        finTurno,
        finPartida           
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



