import React from 'react'
import { Chip, Grid } from '@material-ui/core'
import { Contenedor } from '../nav/Contenedor'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideMask } from '@fortawesome/free-solid-svg-icons'
import TableScore from '../table/TableScore';
import TableDices from '../dice/TableDices';

const Multiplayer = () => {
    return (
        <Contenedor>
            <Grid container xs={12} direction="row" >
                <Grid item sm={4} style={{ backgroundColor: '#D1D1D1'}}> 
                    <Chip variant="outlined" label="Roxana" color="primary" icon={<FontAwesomeIcon icon={faHeadSideMask} size="lg" />} />                   
                    <TableScore />
                </Grid>
                <Grid item sm={4}>
                    <TableDices/>
                </Grid>
                <Grid item sm={4}>
                    <Chip variant="outlined" label="Narela" color="secondary" icon={<FontAwesomeIcon icon={faHeadSideMask} size="lg" />} />
                    <TableScore/>
                </Grid>               
            </Grid>
        </Contenedor>
    )
}
export default Multiplayer;
