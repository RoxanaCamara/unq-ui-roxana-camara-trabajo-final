import { createContext, useState } from "react";
import { dadosDefault, puntajeDefault } from "../../shared/utils/Utils";


export const SessionContext = createContext({
    state: {
        iniciaPartida: false,
        finTurno: false,
        finPartida: false,
        dados: dadosDefault,        
        puntaje: puntajeDefault,
        oportunidades: 1,
        tipoDeJugada: ''
    },
    actions: {
        setInicioPartida: (nn) => { },
        setFinTurno: (nn) => { },
        setFinPartida: (nn) => { },
        setDados: (nn) => { },
        setpuntaje: (nn) => { },
        setOportunidades: (nn) => { },
        setTipoDeJugada: (nn) => { }
    }
})

export const SessionProvider = ({ children }) => {

    const [inicioPartida, setInicioPartida] = useState(false)
    const [finTurno, setFinTurno] = useState(true)
    const [finPartida, setFinPartida] = useState(false)
    const [dados, setDados] = useState(dadosDefault)
    const [puntaje, setpuntaje] = useState(puntajeDefault)
    const [oportunidades, setOportunidades] = useState(0)
    const [tipoDeJugada, setTipoDeJugada] = useState('')

    const state = {
        inicioPartida,        
        dados,
        oportunidades,
        puntaje,
        finTurno,
        finPartida,
        tipoDeJugada          
    }

    const actions = {
        setInicioPartida,
        setFinTurno,
        setFinPartida,
        setDados,
        setpuntaje,
        setOportunidades,
        setTipoDeJugada
    }

    return <SessionContext.Provider value={{ state, actions }}> {children} </SessionContext.Provider>
}



