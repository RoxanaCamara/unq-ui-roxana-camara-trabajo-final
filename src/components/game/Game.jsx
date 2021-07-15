import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dices from '../dice/Dices';
import TableGame from '../table/Table';
import { Contenedor } from '../nav/Contenedor';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SessionContext } from '../helper/Session';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const Game = () => {
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

    const [inicioPartida, setinicioPartida] = useState(false)
    const { state } = useContext(SessionContext)
    const { dadosGuardados } = state
    const classes = useStyles();
    const [oportunidades, setOportunidades] = useState(1)
    const [tiradas, settiradas] = useState(nombreTiradas)
    const [cantRepetidos, setcantRepetidos] = useState({})
    const [dadosValor, setDadosValor] = useState([])



    //setea los dados randoms
    const tiradaValues = () => {
        let dices = []
        for (let i = 0; i < 5; i++) {
            let number = Math.floor(Math.random() * 6) + 1
            dices.push(number)
        }
        setDadosValor(dices);
    }

    const handleDices = (event) => {
        event.preventDefault()
        setinicioPartida(!inicioPartida)
        if(inicioPartida){
            tiradaValues()
        }
    }

    ///hace un  object array de dados y su cantidad de repetidos
    const cantidadDeRepetidos = () => {
        let count = {};
        dadosValor.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
        setcantRepetidos(count)
    }

    //setea en tiradas el vlaor de la jugada solo y su numero
    const handleSolo = (num) => {
        let newTirada = tiradas
        let n = num - 1
        let cant = parseInt(cantRepetidos[num])
        let valor = cant * num
        newTirada[n].value = valor
        settiradas(newTirada)
    }

    const handleDadosEstaticos = () => {
        if(oportunidades <= 3 ){
            setOportunidades(oportunidades + 1)        
            let dn = dadosValor
            for (let i = 0; i < 5; i++) {
                if(dadosGuardados[i] == 0){
                    let number = Math.floor(Math.random() * 6) + 1
                    dn[i] =number
                }
            }
            setDadosValor(dn)
        }else{
            setOportunidades(0)
            setinicioPartida(!inicioPartida)
        }
    }

    const handleTiradasEspeciales = (index, armada) => {
        let newTirada = tiradas
        newTirada[index].value = armada
        settiradas(newTirada)
    }

    const esGenerala = () => {
        // ejemplo [4,4,4,4,4]
        let bool = false
        let n = 1
        for (let i = 0; i < 5; i++) {
            bool = bool || (dadosValor[i] == 5)
            n++
        }
        return bool
    }

    const esEscalera = () => {
        // ejemplo [1,2,3,4,5]      
        let bool = true
        let n = 1
        for (let i = 0; i < 5; i++) {
            bool = bool && (dadosValor[i] == n)
            n++
        }
        return bool
    }

    const esFull = () => {
        // ejemplo [3,3,3,1,1]
        return (cantRepetidos[0] == 3 || cantRepetidos[1] == 3) && (cantRepetidos[0] == 2 || cantRepetidos[1] == 2)
    }

    const esPoker = () => {
        // ejemplo [1,1,1,1,5]
        return cantRepetidos[2] == 4 || cantRepetidos[1] == 4
    }

    let myArray = dadosValor;
    let sinRepetidosDadosvalor = [...new Set(myArray)];

    useEffect(() => {
        cantidadDeRepetidos()
    }, [dadosValor]
    )
    
    useEffect(() => {
        tiradaValues()   
    }, []
    )

    return (
        <>
            <Contenedor>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                       
                        <Grid item xs={6}>
                            {
                                inicioPartida && <Dices listNums={dadosValor} />
                            }
                            {
                                inicioPartida && oportunidades <= 3 &&
                                <div>
                                <Button variant="contained" onClick={handleDadosEstaticos}>Tirar Dado otra vez</Button>
                                <p>Elija los dados que no quiere que sean cambiados</p>
                                </div>
                            }
                            {
                                !inicioPartida &&
                                <Button variant="contained" onClick={handleDices}>Tirar Dado</Button>
                            }
                        </Grid>
                        <Grid item xs={6}>
                            { inicioPartida &&
                            <div>
                                <h2>Jugadas disponibles</h2>
                                {
                                    sinRepetidosDadosvalor.map((i, index) => (
                                        <Button variant="contained" color="primary" key={index} onClick={e => { handleSolo(i) }} >Solo {i} </Button>))
                                }
                                {
                                    esEscalera() &&
                                    <Button variant="contained" color="primary" onClick={e => { handleTiradasEspeciales(6, 40) }} >escalera</Button>
                                }
                                {
                                    esPoker() &&
                                    <Button variant="contained" color="primary" onClick={e => { handleTiradasEspeciales(7, 40) }} >poker</Button>
                                }
                                {
                                    esFull() &&
                                    <Button variant="contained" color="primary" onClick={e => { handleTiradasEspeciales(8, 40) }} >full</Button>
                                }
                                {
                                    esGenerala() &&
                                    <Button variant="contained" color="primary" onClick={e => { handleTiradasEspeciales((9, 40)) }} >generala</Button>
                                }                            
                            </div>
                            }
                        </Grid>
                        <Grid item xs={6} >
                            <TableGame lsTiradas={tiradas} />
                        </Grid>
                    </Grid>
                </div>
            </Contenedor>
        </>
    )
}

export default Game;