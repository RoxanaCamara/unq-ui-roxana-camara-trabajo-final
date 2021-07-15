import React from 'react'
import { Grid } from '@material-ui/core';
import { Dice } from './Dice'

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
        </div>
    )
}

export default Dices