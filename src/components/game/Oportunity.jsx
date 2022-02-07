import React from 'react';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';

export const Oportunity = (props) => {
    const {oportunidades, eliminarJugada, tirarDadosSeleccionados} = props
    const classes = useStyles();
    
    return <div>
        {
            oportunidades <= 3 && !eliminarJugada &&
            <>
                <Chip variant="outlined" color="primary" label={`Oportunidad ${oportunidades} de 3 `}  />
                <Button variant="contained" className={classes.root} onClick={() => tirarDadosSeleccionados()}>Volver a tirar</Button>
            </>           
        }
    </div>;
};
