import React from 'react';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';
import '../game/style.css'
import { Grid } from '@material-ui/core';

export const Oportunity = (props) => {
    const { oportunidades, eliminarJugada, tirarDadosSeleccionados } = props
    const classes = useStyles();

    return <div>
        {
            oportunidades <= 3 && !eliminarJugada &&
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center" style={{ padding: 25 }}
            >
                <Grid item>
                    <Chip variant="outlined" color="primary" 
                        label={`Oportunidad ${oportunidades} de 3 `} 
                    />
                </Grid>
                <Grid item>
                    <Button variant="contained" className={classes.root} 
                        onClick={() => tirarDadosSeleccionados()}>
                        Volver a tirar
                    </Button>
                </Grid>
            </Grid>
        }
    </div>;
};
