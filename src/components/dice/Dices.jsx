import React from 'react'
import { Grid } from '@material-ui/core';
import { Dice } from './Dice'
import Typography from '@material-ui/core/Typography';

const Dices = ({ listNums }) => {
    let numsFor = listNums
    return (
        <div> 
             <Grid container item xs={12} spacing={3}>
            {
                numsFor.map(( i, index) => ( 
                    <Dice num={i}
                    index={index} 
                        key={index}
                    />
                ))
            }  
            </Grid>      
            <Typography variant="subtitle2" gutterBottom>* Elija los dados que no quiere que sean cambiados</Typography>  
        </div>
    )
}

export default Dices