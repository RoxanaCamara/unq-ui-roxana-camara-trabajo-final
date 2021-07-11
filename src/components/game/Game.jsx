import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { useEffect } from 'react';

//player1 = { name: "", puesto, jugadasGanadas: [], gano: false, posicion: 2 }
 const Game = () => {
    let tiradasHabilitadas = []
    const [dadosValor, setDadosValor] = useState([0,0,0,0,0,0,0])
    const [jugadas, setJugadas] = useState(tiradas)

    useEffect(() => {    
        inicializarTiradas()
    }, [])

    const inicializarTiradas = () => {
        const nombreTiradas = [ "solo1", "solo2","solo3","solo4","solo5","solo6", "escalera", "poker", "full", "generala" ]
        for(let i=0; i<nombreTiradas.length; i++){
            let tirada = { nombreTirada: nombreTiradas[i] , puntaje: 0 , yaJugado: false}
            tiradasHabilitadas.push(tirada)
        }
    }

    const handleDices = (event) => {
        event.preventDefault()
        let dices = []
        for(let i=0; i<7; i++){
            let number = Math.floor(Math.random() * 6) + 1
            dices.push(number)
        }
        setDadosValor(dices)
        dices = []
        tiradasDisponibles()
    }

    const tiradasDisponibles = () => {}
    
    const cantidadDe = (numero, tirada) => {
       if(!tirada.yaJugado){
           let filtro = dadosValor.filter(d => d == numero)
       }
    }

    const handleEscalera = () => {
       const escalera =  dadosValor.sort(function(a, b){return b - a});
        let esEscaleraDices = esEscalera(escalera, 1) || esEscalera(escalera, 2) 
        console.log("esEscaleraDices")
        console.log(esEscaleraDices)
    }

    const esEscalera = (escalera, numero) =>{
        let valor = true
        n = numero;
        for(let i=0; i<7; i++){
            valor= valor && escalera[i] == n
            n++
        }
        return valor;
    }

    const esPoker = () => {

    }

    const esFull = () => {

    }


    return(
        <>
            <h1>Generala Solitario</h1>
            <div>Dado1: <Button variant="contained">{dadosValor[1]}</Button> </div>
            <div>Dado2: <Button variant="contained">{dadosValor[2]}</Button> </div>
            <div>Dado3: <Button variant="contained">{dadosValor[3]}</Button> </div>
            <div>Dado4: <Button variant="contained">{dadosValor[4]}</Button> </div>
            <div>Dado5: <Button variant="contained">{dadosValor[5]}</Button> </div>
            <div>Dado6: <Button variant="contained">{dadosValor[6]}</Button> </div>
            <Button variant="contained" onClick={handleDices}>Tirar Dado</Button>
            <table >
            <tbody>
                <tr>
                    <th>Nombre jugador</th>
                    <th>Solo 1</th>
                    <th>Solo 2</th>
                    <th>Solo 3</th>
                    <th>Solo 4</th>
                    <th>Solo 5</th>
                    <th>Solo 6</th>
                    <th>Escalera (1 al 5 o 2 al 6) </th>
                    <th>Poker (4 de un mismo numero) 40pts</th>
                    <th>Full (3 de un numeroy 2 par)</th>
                    <th>Generala (5 dados iguales)</th>
                </tr>
                <tr>
                    <td>Jose Luis</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>  
                </tbody>
            </table>
            <h2>Jugadas disponibles</h2>
        </>
    )
}

export default Game;