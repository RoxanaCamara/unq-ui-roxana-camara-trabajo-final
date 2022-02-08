import React from 'react';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import { useStyles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
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
                    <Chip variant="outlined" icon={<FontAwesomeIcon icon={faLightbulb} size="lg" style={{ padding: '5px 0px  5px 5px'}} />} color="primary" 
                        label={`Oportunidad ${oportunidades} de 3 `} 
                    />
                </Grid>
                <Grid item>
                    <button  role="button" className="button-39"
                        onClick={() => tirarDadosSeleccionados()}>
                        Volver a tirar
                    </button>
                </Grid>
            </Grid>
        }
    </div>;
};
