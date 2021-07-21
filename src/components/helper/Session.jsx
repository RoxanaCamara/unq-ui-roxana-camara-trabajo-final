import { createContext, useContext, useState } from "react";

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
        eliminarTirada: false,
        oportunidades: 1,
        inicioPartida: false,
        tiradasEspeciales: { escalera: false, poker: false, full: false, generala: false }
    },
    actions: {
        setDadosGuardados: (num) => { },
        settiradas: (nn) => { },
        setDadosValor: (nn) => { },
        seteliminarTirada: (nn) => { },
        setOportunidades: (nn) => { },
        setinicioPartida : (nn) => { },
    }
})

export const SessionProvider = ({ children }) => {
    const [inicioPartida, setinicioPartida] = useState(false)
    const [oportunidades, setOportunidades] = useState(1)
    const [tiradas, settiradas] = useState(nombreTiradas)
    const [dadosValor, setDadosValor] = useState([])
    const [tiradasEspeciales, settiradasEspeciales] = useState({ escalera: false, poker: false, full: false, generala: false })
    const [dadosGuardados, setDadosGuardados] = useState(dadosSeleccionados)
    const [eliminarTirada, seteliminarTirada] = useState(false)

    const state = {
        dadosGuardados,
        tiradas,
        dadosValor,
        eliminarTirada,
        oportunidades,
        inicioPartida,
        tiradasEspeciales
    }

    const actions = {
        setDadosGuardados,
        settiradas,
        setDadosValor,
        seteliminarTirada,
        setOportunidades,
        setinicioPartida,
        settiradasEspeciales
    }
    return <SessionContext.Provider value={{ state, actions }}> {children} </SessionContext.Provider>
}

export const useTiradas = () => {
    const { state, actions } = useContext(SessionContext)
    const { dadosGuardados, tiradas, eliminarTirada, oportunidades, inicioPartida, dadosValor, tiradasEspeciales } = state
    const { settiradas, seteliminarTirada, setOportunidades, setinicioPartida, setDadosValor, settiradasEspeciales } = actions


    const reinicio = () => {
        setinicioPartida(false)
        setDadosValor([])
        setOportunidades(1)
    }

    const tiradaValues = () => {
        let dices = []
        for (let i = 0; i < 5; i++) {
            let number = Math.floor(Math.random() * 6) + 1
            dices.push(number)
        }
        setDadosValor(dices);
    }


    const handleSolo = (num) => {
        let newTirada = tiradas
        let n = num - 1
        let cant = cantidadDeRepetidos(num)
        let valor = cant * num
        newTirada[n].value = valor
        newTirada[n].played = true
        settiradas(newTirada)
        reinicio()
    }

    const esEscalera = () => {
        return false
    }

    const esGenerala = () => {
        return existeEsaCAntRepetidos(5)
    }

    const esPoker = () => {
        return existeEsaCAntRepetidos(4) && existeEsaCAntRepetidos(1)
    }

    const esFull = () => {
        return existeEsaCAntRepetidos(3) && existeEsaCAntRepetidos(2)
    }

    const existeEsaCAntRepetidos = (num) => {
        let valor = false
        dadosValor.forEach(function (i) { valor = valor || cantidadDeRepetidos(i) == num });
        return valor
    }

    const hayTiradasParaSacrificar = () => {
        let bool = true
        tiradas.forEach(function(elemento) {
            bool = bool && elemento.played
        })
        return !bool
    }

    const cantidadDeRepetidos = (specificNumber) => {
        return dadosValor.filter(n => n == specificNumber).length
    }

    const noseComoLlamarlo = () => {
        let myArray = dadosValor;
        let sinRepetidosDadosvalor = [...new Set(myArray)];
        let otroArray = sinRepetidosDadosvalor.filter(n => tiradas[n - 1].value == 0)
        return otroArray
    }

    const handleTiradasEspeciales = (index, puntaje) => {
        let newTirada = tiradas
        newTirada[index].value = puntaje
        newTirada[index].played = true
        settiradas(newTirada)
        reinicio()
    }

    const handleDices = (event) => {
        event.preventDefault()
        setinicioPartida(!inicioPartida)
        if (inicioPartida) {
            tiradaValues()
        }
    }

    const handleDadosEstaticos = () => {
        if (oportunidades < 3) {
            setOportunidades(oportunidades + 1)
            let dn = dadosValor
            for (let i = 0; i < 5; i++) {
                if (dadosGuardados[i] == 0) {
                    let number = Math.floor(Math.random() * 6) + 1
                    dn[i] = number
                }
            }
            setDadosValor(dn)
        }else{
            console.log(oportunidades)
            let nn = hayTiradasParaSacrificar()
            seteliminarTirada(nn)
        }
    }

    const changeValueDados = () => {
        cantidadDeRepetidos()
        settiradasEspeciales({ escalera: esEscalera(), poker: esPoker(), full: esFull(), generala: esGenerala() })
    }

    
    return {changeValueDados ,tiradaValues,reinicio,  handleDadosEstaticos, handleSolo, handleTiradasEspeciales, handleDices, noseComoLlamarlo }
}
