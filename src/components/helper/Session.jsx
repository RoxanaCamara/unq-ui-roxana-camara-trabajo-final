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


/*const useValores =  () => {

    const { state, actions } = useContext(SessionContext)
    const { tiradas, dadosValor } = state
    const { settiradas } = actions

    const useValor = (index, ) => {

        if( index == 6){

        }
        if( index == 7){
            
        }
        if( index == 8){
            
        }
        if( index == 9){
            
        }

    } 

}**/