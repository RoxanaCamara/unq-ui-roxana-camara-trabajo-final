import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useEffect } from 'react';
import { SortByAlphaRounded } from '@material-ui/icons';

 const Game = () => {

    const nombreTiradas = {
         solo1 : 0,
         solo2 : 0,
         solo3 : 0,
         solo4 : 0,
         solo5 : 0,
         solo6 : 0,
         escalera: 0,
         poker : 0,
         full : 0,
         generala : 0 }

    const [tiradas, settiradas] = useState(nombreTiradas)
    const [cantRepetidos, setcantRepetidos] = useState({})
    const [dadosValor, setDadosValor] = useState([0,0,0,0,0,0])

    const tiradaValues = () => {
        let dices = []
        for(let i=0; i<6; i++){
            let number = Math.floor(Math.random() * 6) + 1
            dices.push(number)
        }
        setDadosValor(dices);
        console.log("dadosValor")
        console.log(dadosValor)
    }

    const cantidadDeRepetidos = () => {
        let count = {};
        dadosValor.forEach(function(i) { count[i] = (count[i]|| 0) + 1;});
        console.log(count)
        setcantRepetidos(count)
        console.log("cantRepetidos")
        console.log(cantRepetidos)  
    }

    const handleDices = (event) => {
        event.preventDefault()
        tiradaValues()
        cantidadDeRepetidos()
        tiradasDisponibles()
    }
 
    const tiradasDisponibles = () => {
        console.log("cantRepetidos")
        console.log(cantRepetidos)
        for (const property in cantRepetidos) {
            soloDe(property, cantRepetidos[property])
            console.log(`${property}: ${cantRepetidos[property]}`);
        }
    }

    const soloDe = (d, c) => {
        let num = parseInt(d)
        let cant = parseInt(c)
        console.log(num, cant )
        let n = num * cant
        switch (num) {
            case 1 :
                settiradas( {...tiradas, solo1: n })
              console.log(' solo1');
              break;
            case 2 :
                settiradas( {...tiradas, solo2: n })
              console.log(' solo2');
              break;
            case 3 :
                settiradas( {...tiradas, solo3: n })
              console.log(' solo3');
              break;
            case 4 :
                settiradas( {...tiradas, solo4: n })
            console.log(' solo4');
              break;
            case 5 :
                settiradas( {...tiradas, solo5: n })
                console.log(' solo5');
                break;
            case 6 :
                settiradas( {...tiradas, solo6: n })
                console.log(' solo6');
                break;
            default:
              console.log('No hago nada ' + num + '.');
          }        
        console.log(tiradas)
    }
    
    const esGenerala = () => {
       
    }

    const {solo1, solo2, solo3, solo4, solo5, solo6 } = tiradas
    
    return(
        <>
            <h1>Generala Solitario</h1>
            <div>Dado1: <Button variant="contained">{dadosValor[0]}</Button> </div>
            <div>Dado2: <Button variant="contained">{dadosValor[1]}</Button> </div>
            <div>Dado3: <Button variant="contained">{dadosValor[2]}</Button> </div>
            <div>Dado4: <Button variant="contained">{dadosValor[3]}</Button> </div>
            <div>Dado5: <Button variant="contained">{dadosValor[4]}</Button> </div>
            <div>Dado6: <Button variant="contained">{dadosValor[5]}</Button> </div>
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
                    <td> {solo1} </td>
                    <td> {solo2} </td>
                    <td> {solo3} </td>
                    <td> {solo4} </td>
                    <td> {solo5} </td>
                    <td> {solo6} </td>
                </tr>  
                </tbody>
            </table>
            <h2>Jugadas disponibles</h2>
        </>
    )
}

export default Game;