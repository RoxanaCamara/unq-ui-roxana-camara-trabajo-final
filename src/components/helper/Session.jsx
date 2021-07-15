import { createContext, useContext, useState } from "react";

const dadosSeleccionados = [0,0,0,0,0]

export const SessionContext = createContext({
    state: {
        dadosGuardados: dadosSeleccionados,
    },
    actions: {
        setDadosGuardados: (num) => { },
    }
})

export const SessionProvider = ({ children }) => {
    const [dadosGuardados, setDadosGuardados] = useState(dadosSeleccionados)

    const state = {
        dadosGuardados,
    }

    const actions = {
        setDadosGuardados
    }

    return <SessionContext.Provider value={{ state, actions }}>
        {children}
    </SessionContext.Provider>
}

export const useDadoGuardado = () => {
    const { actions } = useContext(SessionContext)
    const { setDadosGuardados } = actions

    const guardarDado = (num) => {
        setDadosGuardados(num)
    }
    return { guardarDado }
}
