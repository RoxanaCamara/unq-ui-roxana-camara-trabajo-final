import React from 'react';
import Dice from './Dice';
import { Box, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


export const Dices = (props) => {
    const { dados } = props
    return <div>
        <Typography variant="h3" component="h3">Dados</Typography>
        <Grid container item xs={12} spacing={3}>
            {
                dados.map((i, index) => (
                    <Dice num={i}
                        index={index}
                        key={index}
                    />
                ))
            }
        </Grid>
        <Typography variant="subtitle2" gutterBottom>
            * Elija los dados que no quiere volver a tirar
        </Typography>
    </div>;
};
