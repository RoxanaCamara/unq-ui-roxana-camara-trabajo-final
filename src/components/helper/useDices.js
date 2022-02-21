import { useContext } from "react"
import { SessionContext } from "./Session"

export const useDices = () => {
    const { state, actions } = useContext(SessionContext)
    const { dados, oportunidades } = state
    const { setDados, setFinTurno, setOportunidades } = actions

    //Cambia el valor de static en el dado y puede ser cambiado en la siguiente oportunidad
    const changeValueIndexDice = (index) => {
        let newDices = dados
        newDices[index].static = !newDices[index].static
        setDados(newDices)
    }

    //Agrega un numero random en la propiedad num en una lista de dados
    const tirarDados = () => {
        let newDices = dados
        for (let i = 0; i < 5; i++) {
            let number = Math.floor(Math.random() * 6) + 1
            newDices[i].num = number
        }
        setDados(newDices)
        setFinTurno(false)
        setOportunidades(0)
    }

    // Cambia el valor de static en el dado y agrega un numero random reemplazando el anterior valor
    const tirarDadosSeleccionados = () => {
        let newDices = dados
        for (let i = 0; i < 5; i++) {
            if (!newDices[i].static) {
                let number = Math.floor(Math.random() * 6) + 1
                newDices[i].num = number
                newDices[i].static = false
            }
        }
        setDados(newDices)
        setOportunidades(oportunidades + 1)
        if (oportunidades == 3) {
            setOportunidades(0)
        }
    }

    return { tirarDados, tirarDadosSeleccionados, changeValueIndexDice }

}