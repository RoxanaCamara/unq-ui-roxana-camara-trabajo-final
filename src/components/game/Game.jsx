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
                <Grid container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center">
                    
                        <Grid item >
                            <TableGame />
                        </Grid>
                        <Grid item  
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start">
                        {
                            finTurno ?                            
                                <Button variant="contained"
                                    className={classes.espaciado} onClick={e => tirarDados()}>
                                    Tirar Dados
                                </Button>                           
                                :
                                <>
                                <Oportunity
                                    oportunidades={oportunidades}
                                    eliminarJugada={eliminarJugada} tirarDadosSeleccionados={tirarDadosSeleccionados}
                                />                           
                                <Dices dados={dados} />                                                                
                                <Jugadas jugadasDisponibles={puntaje} />                           
                        </>
                        }  
                         </Grid>                  
                    <EndGameModal />
                </Grid>
            </Box>
        </Contenedor>
    )
}

export default Game;