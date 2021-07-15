import { createContext, useContext, useState } from "react";

const dadosSeleccionados = [0,0,0,0,0]
const nombreTiradas = [
    { name: 'solo1', value: 0, jugado: false },
    { name: 'solo2', value: 0, jugado: false },
    { name: 'solo3', value: 0, jugado: false },
    { name: 'solo4', value: 0, jugado: false },
    { name: 'solo5', value: 0, jugado: false },
    { name: 'solo6', value: 0, jugado: false },
    { name: 'escalera', value: 0, jugado: false },
    { name: 'poker', value: 0, jugado: false },
    { name: 'full', value: 0, jugado: false },
    { name: 'generala', value: 0, jugado: false }
]

export const SessionContext = createContext({
    state: {
        dadosGuardados: dadosSeleccionados,
        tiradas:nombreTiradas,
        dadosValor: []
    },
    actions: {
        setDadosGuardados: (num) => { },
        settiradas: (nn) => { },
        setDadosValor: (nn) => { }
    }
})

export const SessionProvider = ({ children }) => {
    const [dadosGuardados, setDadosGuardados] = useState(dadosSeleccionados)
    const [tiradas, settiradas] = useState(nombreTiradas)
    const [dadosValor, setDadosValor] = useState([])

    const state = {
        dadosGuardados,
        tiradas,
        dadosValor
    }

    const actions = {
        setDadosGuardados,
        settiradas,
        setDadosValor
    }

    return <SessionContext.Provider value={{ state, actions }}>
        {children}
    </SessionContext.Provider>
}
