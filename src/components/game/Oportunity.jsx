import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { Grid, Chip } from '@material-ui/core';
import '../game/style.css'

export const Oportunity = (props) => {
    const { oportunidades, eliminarJugada, tirarDadosSeleccionados } = props

    return <div>
        {
            oportunidades <= 3 && !eliminarJugada &&
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <Grid item>
                    <button  role="button" className="button-39"
                        onClick={() => tirarDadosSeleccionados()}>
                        Volver a tirar
                    </button>
                </Grid>
                <Grid item>
                    <Chip variant="outlined" icon={<FontAwesomeIcon icon={faLightbulb} size="lg" style={{ padding: '5px 0px  5px 5px' }} />} color="primary" 
                        label={`Oportunidad ${oportunidades} de 3 `} 
                    />
                </Grid>

            </Grid>
        }
    </div>;
};
