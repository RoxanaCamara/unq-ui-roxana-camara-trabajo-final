import { createContext, useContext, useState } from "react";

const dadosSeleccionados = [0,0,0,0,0]
const nombreTiradas = [
    { name: 'solo1', value: 0 },
    { name: 'solo2', value: 0 },
    { name: 'solo3', value: 0 },
    { name: 'solo4', value: 0 },
    { name: 'solo5', value: 0 },
    { name: 'solo6', value: 0 },
    { name: 'escalera', value: 0 },
    { name: 'poker', value: 0 },
    { name: 'full', value: 0 },
    { name: 'generala', value: 0 }
]

export const SessionContext = createContext({
    state: {
        dadosGuardados: dadosSeleccionados,
        tiradas:nombreTiradas
    },
    actions: {
        setDadosGuardados: (num) => { },
        settiradas: (nn) => { }
    }
})

export const SessionProvider = ({ children }) => {
    const [dadosGuardados, setDadosGuardados] = useState(dadosSeleccionados)
    const [tiradas, settiradas] = useState(nombreTiradas)

    const state = {
        dadosGuardados,
        tiradas
    }

    const actions = {
        setDadosGuardados,
        settiradas
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
