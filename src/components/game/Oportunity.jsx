import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';


export const Oportunity = (props) => {
    const {oportunidades, eliminarJugada, tirarDadosSeleccionados} = props
    const classes = useStyles();
    
    return <div>
        {
            oportunidades <= 3 && !eliminarJugada &&
            <>
                <Button variant="contained" className={classes.root} onClick={e => tirarDadosSeleccionados()}>Otro intento</Button>
                <Typography variant="h5" component="h6">* Oportunidad {oportunidades} de 3</Typography>
            </>
        }
    </div>;
};
