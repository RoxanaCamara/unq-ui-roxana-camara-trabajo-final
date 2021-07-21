import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dices from '../dice/Dices';
import TableGame from '../table/Table';
import { Contenedor } from '../nav/Contenedor';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SessionContext, useTiradas } from '../helper/Session';
import Typography from '@material-ui/core/Typography';
import EndGameModal from './EndGame';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    espaciado: {
        margin: theme.spacing(3, 3, 2, 4),
    },
}));

const Game = () => {

    const { state } = useContext(SessionContext)
    const { tiradas, oportunidades, inicioPartida, dadosValor, tiradasEspeciales } = state
    const { changeValueDados, endGame, tiradaValues, handleDadosEstaticos, handleSolo, handleTiradasEspeciales, handleDices, noseComoLlamarlo } = useTiradas()

    const classes = useStyles();
    const { escalera, poker, full, generala } = tiradasEspeciales

    useEffect(() => {
        changeValueDados()
    }, [dadosValor]
    )

    useEffect(() => {
        tiradaValues()
    }, [inicioPartida]
    )


    let numerosDisponibles = noseComoLlamarlo()
    
    return (
        <Contenedor>
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
                                    (!tiradas[6].played && escalera) &&
                                    <Button variant="contained" color="primary" className={classes.root} onClick={e => { handleTiradasEspeciales(6, 20) }} >escalera</Button>
                                }
                                {
                                    (!tiradas[7].played && poker) &&
                                    <Button variant="contained" color="primary" className={classes.root} onClick={e => { handleTiradasEspeciales(7, 40) }} >poker</Button>
                                }
                                {
                                    (!tiradas[8].played && full) &&
                                    <Button variant="contained" color="primary" className={classes.root} onClick={e => { handleTiradasEspeciales(8, 30) }} >full</Button>
                                }
                                {
                                    (!tiradas[9].played && generala) &&
                                    <Button variant="contained" color="primary" className={classes.root} onClick={e => { handleTiradasEspeciales(9, 50) }} >generala</Button>
                                }
                            </div>
                        }
                        <>
                            <EndGameModal />
                        </>
                    </Grid>
                </Grid>
            </Box>
        </Contenedor >
    )
}

export default Game;