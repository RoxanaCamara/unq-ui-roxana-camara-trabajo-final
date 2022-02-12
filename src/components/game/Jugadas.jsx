import React from 'react';
import { Grid } from '@material-ui/core';
import { useJugadas } from '../helper/Session';
import './style.css'


export const Jugadas = (props) => {

    const { jugadasDisponibles } = props
    const { usarTirada, saberPuntaje } = useJugadas()

     
    return <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
        >
            {
                jugadasDisponibles.map((elem, index) => {
                    if (saberPuntaje(elem.name) > 0) {
                        if (!elem.played) {
                            return <Grid item>
                                <button className="button-18"  variant="contained" color="primary" onClick={() => usarTirada(index, saberPuntaje(elem.name))} >{elem.name}</button>
                            </Grid>

                        }
                    }
                })
            }
        </Grid>
    }