import { Button, Grid } from '@material-ui/core';
import React from 'react';
import '../game/style.css'
import { useJugadas } from '../helper/Session';


export const Jugadas = (props) => {

    const { jugadasDisponibles } = props
    const { usarTirada, saberPuntaje } = useJugadas()
   
    return <>
    <Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="flex-start"
>
{
            jugadasDisponibles.map((elem, index) => {
                if (saberPuntaje(elem.name) > 0) {
                    if (!elem.played) {                        
                        return <Grid style={{ padding: 20 }} item>
                            <Button variant="contained" color="primary" onClick={() => usarTirada(index, saberPuntaje(elem.name))} >{elem.name}</Button>
                        </Grid>
                        
                    }
                }
            })
        }
</Grid>
        
    </>
}