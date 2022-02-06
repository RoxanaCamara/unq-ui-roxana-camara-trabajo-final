import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import TableGame from '../table/Table';
import { Contenedor } from '../nav/Contenedor';
import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SessionContext, useDices, useJugadas, usePartida } from '../helper/Session';
import Typography from '@material-ui/core/Typography';
import EndGameModal from './EndGame';
import { Dices } from '../dice/Dices';
import { Oportunity } from './Oportunity';
import { Jugadas } from './Jugadas';
import { useStyles } from './style';


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
                                    <Button variant="contained" 
                                    className={classes.espaciado} onClick={e => tirarDados()}>
                                        Tirar Dados
                                    </Button>
                                </Grid>
                                :
                                <>
                                    <Grid item xs={4} md={4}>
                                        <Dices dados={dados} />
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Typography variant="h3" component="h3">
                                            Jugadas disponibles
                                        </Typography>
                                        <Jugadas jugadasDisponibles={puntaje} />
                                        <Oportunity 
                                            oportunidades={oportunidades} 
                                            eliminarJugada={eliminarJugada} tirarDadosSeleccionados={tirarDadosSeleccionados}
                                        />
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

export default Game;