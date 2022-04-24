import { useState } from "react"
import { dadosDefault, puntajeDefault } from "../shared/utils/Utils"

export const useDices = () => {
    const [dadosN, setdadosN] = useState(dadosDefault)
    const [oportunidades, setOportunidades] = useState(1)
    const [turno, setturno] = useState(false)
    const [puntaje, setpuntaje] = useState(puntajeDefault)

    //Cambia el valor de static en el dado y puede ser cambiado en la siguiente oportunidad
    const changeValueIndexDice = (name) => {
        let newDices = dadosN
        newDices.forEach(function(dado) {
            if (dado.name == name) {
                dado.static = !dado.static
            }
          });          
        setdadosN(newDices)
    }

    //Agrega un numero random en la propiedad num en una lista de dadosN
    const tirarDados = () => {
        let newDices = dadosN
        for (let i = 0; i < 5; i++) {
            let number = Math.floor(Math.random() * 6) + 1
            newDices[i].num = number
            newDices[i].static = false
        }
        setdadosN(newDices)
        setturno(false)
        setOportunidades(0)
    }

    // Cambia el valor de static en el dado y agrega un numero random reemplazando el anterior valor
    const tirarDadosSeleccionados = () => {
        let newDices = dadosN
        for (let i = 0; i < 5; i++) {
            if (!newDices[i].static) {
                let number = Math.floor(Math.random() * 6) + 1
                newDices[i].num = number
                newDices[i].static = false
            }
        }
        setdadosN(newDices)
        setOportunidades(oportunidades + 1)
        if (oportunidades == 3) {
            setOportunidades(0)
        }
    }

    const setOportunidades2 = (n) => {
        setOportunidades(n)
    }

    const setpuntaje2 = (n) => {
        setpuntaje(n)
    }

    const setDados  = (n) => {
        setdadosN(n)
    }


    const setFinTurno = (n) => {
        setturno(n)
    }
    
    return { tirarDados, tirarDadosSeleccionados, changeValueIndexDice, dadosN, oportunidades, setOportunidades2, setpuntaje2, turno, puntaje, setDados, setFinTurno }

}