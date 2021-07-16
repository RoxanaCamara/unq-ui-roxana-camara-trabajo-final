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
    },
    espaciado: {
        margin: theme.spacing(3, 3, 2, 4),
      },
}));

const Game = () => {

    const [oportunidades, setOportunidades] = useState(1)
    const [inicioPartida, setinicioPartida] = useState(false)
    const { state, actions } = useContext(SessionContext)
    const { dadosGuardados, tiradas } = state
    const { settiradas } = actions
    const classes = useStyles();
    const [dadosValor, setDadosValor] = useState([])
    const [tiradasEspeciales, settiradasEspeciales] = useState( {escalera: false, poker: false, full: false ,generala: false}  )
    const  { escalera, poker , full, generala} = tiradasEspeciales

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

    //setea en tiradas el vlaor de la jugada solo y su numero
    const handleSolo = (num) => {
        let newTirada = tiradas
        let n = num - 1
        let cant = cantidadDeRepetidos(num)
        let valor = cant * num
        newTirada[n].value = valor
        settiradas(newTirada)
        reinicio()
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
        }else{
           
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
        dadosValor.forEach(function (i) {  valor = valor || cantidadDeRepetidos(i) == num });
        return valor
    }

    const cantidadDeRepetidos = (specificNumber) => {
       return dadosValor.filter(n => n == specificNumber).length
    }

    const noseComoLlamarlo = () => {
        let myArray = dadosValor;
        let sinRepetidosDadosvalor = [...new Set(myArray)];
        let otroArray = sinRepetidosDadosvalor.filter(n => tiradas[n-1].value == 0)
        return otroArray
    }

    useEffect(() => {
        cantidadDeRepetidos()
        settiradasEspeciales( { escalera: esEscalera(), poker: esPoker(), full: esFull(), generala:  esGenerala() } )
    }, [dadosValor]
    )
    
    useEffect(() => {
        tiradaValues() 
    }, [inicioPartida]
    )

    useEffect(() => {
        tiradaValues()   
    }, [inicioPartida]
    )
    
    let numerosDisponibles = noseComoLlamarlo()
    return (
        <>
            <Contenedor>
                <div className={classes.root}>
                    <Grid container spacing={12}>
                       
                        <Grid item xs={6}>
                            {
                                inicioPartida && <Dices className={classes.root} listNums={dadosValor} />
                            }
                            {
                                inicioPartida && oportunidades < 3 &&
                                <div>
                                <Button variant="contained" className={classes.root} onClick={handleDadosEstaticos}>Tirar Dado otra vez</Button>
                                <h4>Oportunidad {oportunidades} de 3 </h4>
                                <p>Elija los dados que no quiere que sean cambiados</p>
                                </div>
                            }
                            {
                                !inicioPartida &&
                                <Button variant="contained"  className={classes.espaciado}  onClick={handleDices}>Inicicar</Button>
                            }
                        </Grid>
                        <Grid item xs={6}>
                            { inicioPartida &&  
                            <div>
                                <h2>Jugadas disponibles</h2>
                                {
                                    numerosDisponibles.map((i, index) => (
                                     <Button variant="contained" className={classes.root} color="primary" key={index} onClick={e => { handleSolo(i) }} >Solo {i}</Button>) )
                                }
                                {
                                    (tiradas[6].value == 0 && escalera ) &&
                                    <Button variant="contained" color="primary" className={classes.root} onClick={e => { handleTiradasEspeciales(6, 20) }} >escalera</Button>
                                }
                                {
                                     (tiradas[7].value == 0 && poker ) &&
                                    <Button variant="contained" color="primary" className={classes.root}  onClick={e => { handleTiradasEspeciales(7, 40) }} >poker</Button>
                                }
                                {
                                     (tiradas[8].value == 0 && full ) &&
                                    <Button variant="contained" color="primary" className={classes.root} onClick={e => { handleTiradasEspeciales(8, 30) }} >full</Button>
                                }
                                {
                                     (tiradas[9].value == 0 && generala ) &&
                                    <Button variant="contained" color="primary" className={classes.root} onClick={e => { handleTiradasEspeciales(9, 50) }} >generala</Button>
                                }                            
                            </div>
                            }
                        </Grid>
                        <Grid item xs={6} >
                            <TableGame  />
                        </Grid>
                    </Grid>
                </div>
            </Contenedor>
        </>
    )
}

export default Game;