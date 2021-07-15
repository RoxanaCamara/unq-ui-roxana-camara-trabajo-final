import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dices from '../dice/Dices';
import TableGame from '../table/Table';
import { Contenedor } from '../nav/Contenedor';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SessionContext } from '../helper/Session';
import { BotonTipoDeTirada } from './BotonTipoDeTirada';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const Game = () => {
    
    const [oportunidades, setOportunidades] = useState(1)
    const [inicioPartida, setinicioPartida] = useState(false)
    const { state, actions } = useContext(SessionContext)
    const { dadosGuardados, tiradas } = state
    const { settiradas } = actions
    const classes = useStyles();
    

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


    
    const reinicio = () =>{
        setinicioPartida(false)
        setDadosValor([])
        setOportunidades(0)
    }

    const handleDadosEstaticos = () => {
        if(oportunidades < 3 ){
            setOportunidades(oportunidades + 1)        
            let dn = dadosValor
            for (let i = 0; i < 5; i++) {
                if(dadosGuardados[i] == 0){
                    let number = Math.floor(Math.random() * 6) + 1
                    dn[i] =number
                }
            }
            setDadosValor(dn)
        }
    }

    const handleTiradasEspeciales = (index, puntaje) => {
        let newTirada = tiradas
        newTirada[index].value = puntaje
        settiradas(newTirada)
        reinicio()
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
        dadosValor.forEach(function (i) {  valor = valor || cantidadDeRepetidos(i) == num });
        return valor
    }

    const cantidadDeRepetidos = () => {
       return dadosValor.filter(n => n == specificNumber).length
    }

    let myArray = dadosValor;
    let sinRepetidosDadosvalor = [...new Set(myArray)];

    useEffect(() => {
        cantidadDeRepetidos()
    }, [dadosValor]
    )
    
    useEffect(() => {
        tiradaValues()   
    }, [inicioPartida]
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
                                inicioPartida && oportunidades < 3 &&
                                <div>
                                <Button variant="contained" onClick={handleDadosEstaticos}>Tirar Dado otra vez</Button>
                                <h4>Oportunidad {oportunidades} de 3 </h4>
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
                                    dadosValor.map((d, index) => (
                                        <BotonTipoDeTirada dadosValor={d} index={index} />
                                    ))
                                }
                                                        
                            </div>
                            }
                        </Grid>
                        <Grid item xs={6} >
                            <TableGame />
                        </Grid>
                    </Grid>
                </div>
            </Contenedor>
        </>
    )
}

export default Game;