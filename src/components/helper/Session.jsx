import { createContext, useState } from "react";
import { dadosDefault, puntajeDefault } from "../shared/utils/Utils";


export const SessionContext = createContext({
    state: {
        iniciaPartida: false,
        finTurno: false,
        finPartida: false,
        dados: dadosDefault,        
        puntaje: puntajeDefault,
        oportunidades: 1
    },
    actions: {
        setInicioPartida: (nn) => { },
        setFinTurno: (nn) => { },
        setFinPartida: (nn) => { },
        setDados: (nn) => { },
        setpuntaje: (nn) => { },
        setOportunidades: (nn) => { }
    }
})

export const SessionProvider = ({ children }) => {

    const [inicioPartida, setInicioPartida] = useState(false)
    const [finTurno, setFinTurno] = useState(true)
    const [finPartida, setFinPartida] = useState(false)
    const [dados, setDados] = useState(dadosDefault)
    const [puntaje, setpuntaje] = useState(puntajeDefault)
    const [oportunidades, setOportunidades] = useState(0)

    const state = {
        inicioPartida,        
        dados,
        oportunidades,
        puntaje,
        finTurno,
        finPartida           
    }

    const actions = {
        setInicioPartida,
        setFinTurno,
        setFinPartida,
        setDados,
        setpuntaje,
        setOportunidades
    }

    return <SessionContext.Provider value={{ state, actions }}> {children} </SessionContext.Provider>
}



