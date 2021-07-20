import { createContext, useState } from "react";

const dadosSeleccionados = [0,0,0,0,0]
const nombreTiradas = [
    { name: 'solo1', value: 0, played: false },
    { name: 'solo2', value: 0, played: false },
    { name: 'solo3', value: 0, played: false },
    { name: 'solo4', value: 0, played: false },
    { name: 'solo5', value: 0, played: false },
    { name: 'solo6', value: 0, played: false },
    { name: 'escalera', value: 0, played: false },
    { name: 'poker', value: 0, played: false },
    { name: 'full', value: 0, played: false },
    { name: 'generala', value: 0, played: false }
]

export const SessionContext = createContext({
    state: {
        dadosGuardados: dadosSeleccionados,
        tiradas:nombreTiradas,
        dadosValor: [],
        eliminarTirada: false
    },
    actions: {
        setDadosGuardados: (num) => { },
        settiradas: (nn) => { },
        setDadosValor: (nn) => { },
        seteliminarTirada: (nn) => { }
    }
})

export const SessionProvider = ({ children }) => {
    const [dadosGuardados, setDadosGuardados] = useState(dadosSeleccionados)
    const [tiradas, settiradas] = useState(nombreTiradas)
    const [dadosValor, setDadosValor] = useState([])
    const [eliminarTirada, seteliminarTirada] = useState(false)

    const state = {
        dadosGuardados,
        tiradas,
        dadosValor,
        eliminarTirada
    }

    const actions = {
        setDadosGuardados,
        settiradas,
        setDadosValor,
        seteliminarTirada
    }

    return <SessionContext.Provider value={{ state, actions }}>
        {children}
    </SessionContext.Provider>
}

export const useTiradas = () => {
    
    const login = () => {
        return 
    }
    return { login }
}
