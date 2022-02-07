import React from 'react';
import Dice from './Dice';
import { Box, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import '../dice/style.css'


export const Dices = (props) => {
    const { dados } = props
    return <div> 
              
        <Grid container item xs={12} spacing={3} className="table_dices">
            {
                dados.map((i, index) => (
                    <Dice num={i}
                        index={index}
                        key={index}
                    />
                ))
            }
        </Grid>
        
    </div>;
};
