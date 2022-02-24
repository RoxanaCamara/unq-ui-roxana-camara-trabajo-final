import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { Grid, Chip } from '@material-ui/core';
import '../game/style.css'

export const Oportunity = (props) => {
    const { oportunidades, tirarDadosSeleccionados } = props
    return    <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
    >
        {
            oportunidades < 3 &&
            <Grid item>
                <button role="button" className="button-39"
                    onClick={() => tirarDadosSeleccionados()}>
                    Volver a tirar
                </button>
            </Grid>
        }
        <Grid item>
            <Chip variant="outlined" icon={<FontAwesomeIcon icon={faLightbulb} size="lg" style={{ padding: '5px 0px  5px 5px' }} />} color="primary"
                label={`Oportunidad ${oportunidades} de 3 `}
            />
        </Grid>

    </Grid>;
};
