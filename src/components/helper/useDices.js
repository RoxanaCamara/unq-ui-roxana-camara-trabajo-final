import { useContext } from "react"
import { SessionContext } from "./Session"

export const useDices = () => {

    const { state, actions } = useContext(SessionContext)
    const { dados, oportunidades } = state
    const { setDados, setFinTurno, setOportunidades, setEliminarJugada } = actions

    //Agrega cero o el numero original en el index de la lista de dados
    const changeValueIndexDice = (index, num = 0) => {
        let dadosV = dados 
        dadosV[index] = num
        setDados(dadosV)
    }

    //Agrega 6 numeros random en una lista de dados
    const tirarDados = () => {
        let dices = []
        for (let i = 0; i < 5; i++) {
            let number = Math.floor(Math.random() * 6) + 1
            dices.push(number)
        }
        setDados(dices);
        setFinTurno(false) 
        setOportunidades(1)       
    }

    //Agrega un numero random reemplazando el cero una lista de dados
    const tirarDadosSeleccionados = () => {
            let dados2 = dados
            console.log("dados1")
            console.log(dados2)

            dados2.map(function (i, index) {
                if (i == 0) {
                    console.log()
                    let number = Math.floor(Math.random() * 6) + 1
                    dados2[index] = number
                }
            })
            console.log("dados2")
            console.log(dados2)
            setDados(dados2)
            setOportunidades( oportunidades + 1 )
            if(oportunidades == 3){
                setEliminarJugada(true)
                setOportunidades(1)
            }
        }
    
    return { tirarDados, tirarDadosSeleccionados, changeValueIndexDice }

}
