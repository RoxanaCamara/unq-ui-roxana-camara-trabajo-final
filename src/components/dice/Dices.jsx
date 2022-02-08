import React from 'react';
import Dice from './Dice';
import { Box, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import '../dice/style.css'


export const Dices = (props) => {
    const { dados, finTurno } = props
              
    return <div className="table_dices">
            {
                !finTurno &&
                dados.map((i, index) => (
                    <Dice num={i}
                        index={index}
                        key={index}
                    />
                ))
            }      
    </div>;
};
