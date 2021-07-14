import React from 'react'
import { Grid } from '@material-ui/core';
import { Dice } from './Dice'

export const Dices = () => {
    let numsFor = [1,2,3,4,5,6]

    return (
        <div>
             <Grid container item xs={12} spacing={3}>
            {
                numsFor.map(( i, index) => (

                    
                    <Dice num={i} 
                        key={index}
                    />
                ))
            }  
            </Grid>          
        </div>
    )
}
