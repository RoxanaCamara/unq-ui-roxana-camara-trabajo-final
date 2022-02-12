import React from 'react';
import { Grid } from '@material-ui/core';
import EndGameModal from './EndGame';
import TableScore from '../table/Table';
import { Contenedor } from '../nav/Contenedor';
import { TableDices } from './TableDices';
import './style.css'


const Game = () => {

    return (
        <Contenedor>
                <Grid container xs={12} direction="row">
                    <Grid item  sm={5}>
                        <TableScore />
                    </Grid>

                    <Grid item sm={7}>
                        <TableDices/>
                    </Grid> 
                                          
                    <EndGameModal />
                </Grid>
        </Contenedor>
    )
}

export default Game;