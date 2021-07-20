import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dices from '../dice/Dices';
import TableGame from '../table/Table';
import { Contenedor } from '../nav/Contenedor';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SessionContext } from '../helper/Session';
import Typography from '@material-ui/core/Typography';


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
    const { dadosGuardados, tiradas, eliminarTirada } = state
    const { settiradas, seteliminarTirada } = actions
    const classes = useStyles();
    const [dadosValor, setDadosValor] = useState([])
    const [tiradasEspeciales, settiradasEspeciales] = useState({ escalera: false, poker: false, full: false, generala: false })
    const { escalera, poker, full, generala } = tiradasEspeciales

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
        if (inicioPartida) {
            tiradaValues()
        }
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

    const reinicio = () => {
        setinicioPartida(false)
        setDadosValor([])
        setOportunidades(1)
    }

    const handleDadosEstaticos = () => {
        console.log("handleDadosEstaticos")
        if (oportunidades < 3) {
            console.log(oportunidades)
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
            console.log(nn)
            seteliminarTirada(nn)
        }
    }

    const handleTiradasEspeciales = (index, puntaje) => {
        let newTirada = tiradas
        newTirada[index].value = puntaje
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
        tiradas.forEach(function(elemento, indice) {
            bool = bool && elemento.played
        })
        return bool
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

    useEffect(() => {
        cantidadDeRepetidos()
        settiradasEspeciales({ escalera: esEscalera(), poker: esPoker(), full: esFull(), generala: esGenerala() })
        
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
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid item xs={6} md={4} >
                                <TableGame />
                            </Grid>
                            <Grid item xs={4} md={4}>
                                {
                                    inicioPartida && <Dices className={classes.root} listNums={dadosValor} />
                                }
                            </Grid>
                            <Grid item xs={4} md={4}>
                            
                                {
                                    inicioPartida && oportunidades <= 3 &&
                                    <div>
                                     <Typography variant="h3" component="h3">Jugadas disponibles</Typography>
                                        <Button variant="contained" className={classes.root} onClick={handleDadosEstaticos}>Otro intento</Button>
                                         <Typography variant="h5" component="h6">Oportunidad {oportunidades} de 3 </Typography>
                                      
                                    </div>
                                }
                                {
                                    !inicioPartida &&
                                    <Button variant="contained" className={classes.espaciado} onClick={handleDices}>Tirar Dados</Button>
                                }
                                {inicioPartida &&
                                    <div>
                                        {
                                            numerosDisponibles.map((i, index) => (
                                                <Button variant="contained" className={classes.root} color="primary" key={index} onClick={e => { handleSolo(i) }} >Solo {i}</Button>))
                                        }
                                        {
                                            (tiradas[6].value == 0 && escalera) &&
                                            <Button variant="contained" color="primary" className={classes.root} onClick={e => { handleTiradasEspeciales(6, 20) }} >escalera</Button>
                                        }
                                        {
                                            (tiradas[7].value == 0 && poker) &&
                                            <Button variant="contained" color="primary" className={classes.root} onClick={e => { handleTiradasEspeciales(7, 40) }} >poker</Button>
                                        }
                                        {
                                            (tiradas[8].value == 0 && full) &&
                                            <Button variant="contained" color="primary" className={classes.root} onClick={e => { handleTiradasEspeciales(8, 30) }} >full</Button>
                                        }
                                        {
                                            (tiradas[9].value == 0 && generala) &&
                                            <Button variant="contained" color="primary" className={classes.root} onClick={e => { handleTiradasEspeciales(9, 50) }} >generala</Button>
                                        }
                                    </div>
                                }
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Contenedor>
        </>
    )
}

export default Game;