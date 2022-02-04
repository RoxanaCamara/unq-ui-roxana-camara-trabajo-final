import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import TableGame from '../table/Table';
import { Contenedor } from '../nav/Contenedor';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SessionContext, useDices, useJugadas, usePartida } from '../helper/Session';
import Typography from '@material-ui/core/Typography';
import EndGameModal from './EndGame';
import { ButonTirada } from './ButonTirada';
import Dice from '../dice/Dice';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    espaciado: {
        margin: theme.spacing(3, 3, 2, 4),
    },
}));

const Game = () => {

    const classes = useStyles();
    const { state, actions } = useContext(SessionContext)
    const { dados, finTurno, puntaje, oportunidades, eliminarJugada } = state
    const { tirarDados, tirarDadosSeleccionados } = useDices()

    return (
        <Contenedor>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <>
                        <Grid item xs={6} md={4} >
                            <Typography variant="h3" component="h3">Tabla</Typography>
                            <TableGame />
                        </Grid>
                        {
                            finTurno ?
                                <Grid item xs={4} md={4}>
                                    <Button variant="contained" className={classes.espaciado} onClick={e => tirarDados()}>Tirar Dados</Button>
                                </Grid>
                                :
                                <>
                                    <Grid item xs={4} md={4}>
                                        <Typography variant="h3" component="h3">Dados</Typography>
                                        <Grid container item xs={12} spacing={3}>
                                            {
                                                dados.map((i, index) => (
                                                    <Dice num={i}
                                                        index={index}
                                                        key={index}
                                                    />
                                                ))
                                            }
                                        </Grid>
                                        <Typography variant="subtitle2" gutterBottom>* Elija los dados que no quiere volver a tirar</Typography>
                                    </Grid>

                                    <Grid item xs={4} md={4}>
                                        <Typography variant="h3" component="h3">Jugadas disponibles</Typography>
                                        {
                                            puntaje.map((elem, index) =>
                                                <ButonTirada yaSeJugo={elem.played} nombreTirada={elem.name} index={index}
                                                />
                                            )
                                        }
                                        {
                                            oportunidades <= 3 && !eliminarJugada &&
                                            <>
                                                <Button variant="contained" className={classes.root} onClick={ e => tirarDadosSeleccionados()}>Otro intento</Button>
                                                <Typography variant="h5" component="h6">* Oportunidad {oportunidades} de 3</Typography>
                                            </>
                                        }
                                    </Grid>
                                </>
                        }
                    </>
                    <EndGameModal />
                </Grid>
            </Box>
        </Contenedor>
    )
}

////const rows = [{ name: '', descriotion: '', example: { dices: [1,2,4,5,6], value: 12} } ,{ name: '', descriotion: '', example: { dices: [1,2,4,5,6], value: 12} }];

export default Game;